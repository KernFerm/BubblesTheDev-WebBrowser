# posted updates happen in the discord server. 


## [BubblesTheDev - Web Browser discord channel](https://discord.gg/eYBzdZVbz6)


---

- > Version `1.0.1-0.5` out now
- > older versions not supported




## Version `1.0.12` (Coming Soon)

This update focuses on improving uninstall reliability, update behavior, and user control, while reinforcing privacy and local data protection.

---

### Issue: Incomplete Uninstall / Ghost Installation + Custom Install Location + Update Check Integration

When a user uninstalls a previous version, it is not always fully removed. Some files and registry entries can remain, resulting in a “ghost install.”

This issue is more noticeable when a custom install location is used, as the uninstaller may only target the default directory and miss other paths.

There is also currently no clear “Check for Updates” option in the dropdown menu, limiting user control when troubleshooting updates.

---

### What this causes

* The system may still detect the application as installed
* New installs or updates may conflict with leftover files
* Old settings or cached data may persist unexpectedly
* Updates may fail or behave inconsistently
* Custom install paths may leave behind orphaned files
* Users cannot manually trigger update checks

---

### Expected behavior

Uninstall should fully remove:

* All application files (including custom install locations)
* Any registry entries created during installation
* Cached/configuration data (unless intentionally preserved)

The application should also include:

* A “Check for Updates” option in the dropdown menu

---

### Update behavior

* Automatic updates are **enabled by default during install** (with option to switch to manual)
* If an automatic update check fails during install, the system will **retry automatically**
* On application launch, the browser will **retry checking for updates**
* If an update is available:

  * It will download in the background
  * The user will be prompted to install it manually (no forced installs)

---

### Privacy expectation

* Browser data (history, cookies, local storage, etc.) remains on the end user’s PC
* No browser data is transmitted during **auto or manual updates**
* During uninstall, users can choose to **keep or remove local browser data**

---

### Update system improvements

* Add a “Check for Updates” option in the dropdown menu:

  * Manually triggers update checks
  * Displays current vs latest version
  * Provides clear status feedback
* Implement retry logic:

  * Retry failed update checks during install
  * Retry again on application launch
  * Handle network failures gracefully
* Ensure browser data remains local and untouched during all update operations
