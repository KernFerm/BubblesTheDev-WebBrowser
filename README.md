- > **Please Star the Project, I would greatly appreciate it. I was thinking about how everyone hates how other browsers are.**
- > **Privacy & User Control**


# 🖥️ BubblesTheDev Web Browser

## 📦 Installer Package - Version 1.0.27

A Windows web browser built for people who want everyday browsing features, strong privacy defaults, and more control over their browser data.

Installer file name:

`BubblesTheDev Web Browser_Installer_1.0.27.exe`

SHA256:

`9f4ccd87403d6656ef347599914ca2a08ba3e9d0ef8cce14c1bb1b8154299e41`


# When installing version `1.0.27` make sure to select automatic updates as `manual updates will no longer` be in the installation prompted in Version `1.0.30`


Author: `BubblesTheDev`  
Platform: `Windows 11 (x64)`  
Engine: `Electron 41` / Chromium

## 📚 Documentation

- [Browser-Privacy-Comparison](https://github.com/KernFerm/BubblesTheDev-WebBrowser/blob/main/Browser-Privacy-Comparison.md)
- [Data-Collection-and-Privacy-Notice](https://github.com/KernFerm/BubblesTheDev-WebBrowser/blob/main/Data-Collection-and-Privacy-Notice.md)
- [Architecture](https://github.com/KernFerm/BubblesTheDev-WebBrowser/blob/main/ARCHITECTURE.md)
- [Changelog](https://github.com/KernFerm/BubblesTheDev-WebBrowser/blob/main/CHANGELOG.md)
- [Security](https://github.com/KernFerm/BubblesTheDev-WebBrowser/blob/main/SECURITY.md)
- [Updates](https://github.com/KernFerm/BubblesTheDev-WebBrowser/blob/main/UPDATES.md)

## 🚀 Overview

Version `1.0.27` includes improvements such as:

- 🧠 lower memory use on streaming-heavy sites such as Twitch and Kick
- 📥 more reliable downloads from trusted sources such as GitHub
- 🖱️ cleaner right-click and tab menus
- 🎨 muted built-in themes
- 🧭 toolbar hide/show controls with quick access still available
- 🔐 passkey sign-in support for websites that use it
- 🔑 saved-password tools with reveal, add, remove, and strong-password generation
- ⭐ bookmark import from supported Chromium browsers plus manual bookmark-file import
- 🧩 Chromium extension import support
- 🛜 VPN tools for NordVPN, ExpressVPN, ProtonVPN, and WireGuard
- 🔄 managed update support with `Automatic updates` enabled by default during install
- 🆙 manual `Check for Updates` from the app menu
- 💾 improved custom install-path tracking and external-drive install support
- 🧹 uninstall cleanup improvements with per-category data removal options

## ✨ Top Features

- 🗂️ multi-tab browsing
- 🌐 one address bar for websites and search
- 🚫 ad and tracker blocking
- 🔐 passkey sign-in support for compatible websites
- ⭐ bookmark bar and bookmark import
- 🎨 multiple muted shell themes
- 🔑 encrypted saved-password vault
- 🧩 Chromium extension import
- 🛜 VPN manager and public IPv4/IPv6 session checks
- 🪟 split-view browsing
- 🕶️ incognito windows
- 📥 safer downloads from trusted sources
- 🌙 sleeping background tabs to help save memory
- 🎵 local-only Music Player
- 🖱️ modern right-click page menu and tab context menu

## ⚙️ More Features

- 🧭 toolbar hide/show controls with quick-access menu
- 🏠 built-in home page at `bubbles://home`
- 🔎 search results powered with DuckDuckGo and Google sources
- 🔐 strong password generation
- 🕘 history tracking
- ⚙️ per-site permissions
- 🖨️ print support
- 💾 Save Page As support
- 🧠 built-in Task Manager
- 🏡 custom homepage support
- 🧾 diagnostics export and runtime checks
- 🔄 manual `Check for Updates`
- 🔁 automatic updates or manual updates mode selection
- 📂 downloads window and progress tracking
- 📌 tab pinning and mute controls
- 🪄 move tabs to a new window more easily

## 📥 How To Get The Browser

- [**DOWNLOAD** Click here to get the latest version of the browser](https://github.com/KernFerm/BubblesTheDev-WebBrowser/releases/download/V1027-BubblesTheDev-WebBrowser/BubblesTheDev.Web.Browser_Installer_1.0.27.exe)

## 📦 Installation

1. Run:

   ```text
   BubblesTheDev Web Browser_Installer_1.0.27.exe
   ```

2. Choose where you want to install the browser.
3. Select whether you want `Automatic updates` or `Manual updates only`.
4. Finish setup and launch the browser.

The installer supports:

- default install locations
- custom install locations
- external HDD installs
- external SSD installs
- USB flash-drive installs

If you install the browser on an external drive instead of `C:`, install-linked browser data can automatically move to that external drive as part of setup.

`Automatic updates` is selected by default during install.

## 🔄 Upgrading From An Older Version

If an older version is already installed and you are upgrading manually:

1. Close `BubblesTheDev Web Browser`.
2. Open `Start > Settings > Apps > Installed apps`.
3. Find `BubblesTheDev Web Browser`.
4. Click the `...` menu and choose `Uninstall`.
5. Choose which local data categories should be removed or kept.
6. Run the new installer after uninstall finishes.

If you use the managed update flow, the installer may remove the older app version first and then continue with the new install.

## 🔁 Update Modes

Current installer builds support two update modes:

1. `Manual updates only`  
   You update the browser yourself by downloading the newest release and installing it manually.
2. `Automatic updates`  
   The browser can check for newer releases, download the published installer, and help launch the update flow for you.

Important notes:

- The browser does not update itself silently in the background.
- Managed updates still use a normal installer.
- Update downloads are checked before they are launched.
- The app menu includes `Check for Updates` if you want to check manually.
- `Automatic updates` is selected by default during install, but `Manual updates only` remains available.

## 🧹 Uninstall Behavior

The uninstaller removes the installed app files and can also remove local data by category.

Current uninstall choices include:

- browser profile data  
  This includes history, bookmarks, homepage, permissions, and main browser-state data.
- saved passwords
- diagnostics reports
- local update preferences

If a category is left unchecked, that data stays on your device for a future reinstall or update.

Uninstall cleanup also:

- targets tracked custom install paths
- removes stale uninstall metadata and registry ghosts
- re-checks reported leftovers at the end to reduce false warning dialogs

If the browser was installed to an external drive, the main browser profile data can follow that external install location instead of staying on the system drive.

## 📁 Default Installation Path

If no custom path is selected, the default install location is typically:

```text
C:\Users\<YourUsername>\AppData\Local\Programs\BubblesTheDev Web Browser
```

## 🖥️ System Requirements

- Windows 11
- x64 architecture
- 4 GB RAM minimum
- around 300 MB free disk space

## 🔐 Privacy And Security

The browser is built with privacy and security in mind:

- 🔒 browsing protections are turned on by default
- 🚫 ads and trackers are filtered
- 📥 downloads get extra safety checks
- 🕶️ incognito uses a separate session
- 🔑 password save and reveal tools are limited to secure pages
- 🧩 imported extensions are treated carefully and risky ones show extra warnings
- 📡 no built-in telemetry endpoints are configured

## 🎵 Music Player

The Music Player is local-only and off by default.

- no music folder is scanned until the user explicitly agrees
- the user can scan the default Music folder or another local folder
- playback uses local files only

## 🧾 Diagnostics And Crash Reports

Users can export a diagnostics report from:

`Tools > Export Diagnostics Report`

Diagnostics are stored locally and are not transmitted automatically. Exported diagnostics reports are encrypted before being written to disk.

Support email:

`bubblesthedevwebbrowsersupport@fnbubbles420.org`

## 🔒 Privacy Notice

This application:

- does not collect personal data automatically
- does not send telemetry automatically
- does not include analytics services
- stores browser data locally on your device

If the installer build is configured with an update server and the install uses `Automatic updates`, the installer and browser can send a small amount of update-related information such as install ID, install path, version, platform, and last-seen time. This does not include your browsing history, bookmarks, saved passwords, page content, or diagnostics.

Saved-password capture and reveal behavior is limited to secure pages such as `https:` websites and local development hosts.

## ⚠️ SmartScreen Notice

This build is currently unsigned, so Windows SmartScreen may warn before launch.

If prompted:

1. Click `More Info`
2. Click `Run Anyway`

## 📜 License

Proprietary - BubblesTheDev  
All Rights Reserved.

## 💙 Releases

[Get the web browser here](https://github.com/KernFerm/BubblesTheDev-WebBrowser/releases)
