- > **If you enjoy the project, starring the repo helps a lot.**
- > **Built around privacy, user control, and a better everyday browsing experience.**


# 🖥️ BubblesTheDev Web Browser

[![Version](https://img.shields.io/badge/version-1.0.30-blue)](https://github.com/KernFerm/BubblesTheDev-WebBrowser/releases)
[![Platform](https://img.shields.io/badge/platform-Windows%2011-0078D6)](https://github.com/KernFerm/BubblesTheDev-WebBrowser/releases)
[![Electron](https://img.shields.io/badge/Electron-42-47848F?logo=electron&logoColor=white)](https://www.electronjs.org/)
[![License](https://img.shields.io/badge/license-Proprietary-lightgrey)](https://github.com/KernFerm/BubblesTheDev-WebBrowser/blob/main/readme.md#-license)

## 📦 Installer Package - Version 1.0.30

A Windows web browser built for people who want everyday browsing features, strong privacy defaults, and more control over their browser data.

Installer file name:

`BubblesTheDev Web Browser_Installer_1.0.30.exe`

SHA256:

`832634180CF209DA071E07ADA86D70F04A2B5C1AF264E51E2D49F4B839A4BB81`

Author: `BubblesTheDev`  
Platform: `Windows 11 (x64)`  
Engine: `Electron 42` / Chromium

## 📚 Documentation

- [Browser-Privacy-Comparison](https://github.com/KernFerm/BubblesTheDev-WebBrowser/blob/main/Browser-Privacy-Comparison.md)
- [Data-Collection-and-Privacy-Notice](https://github.com/KernFerm/BubblesTheDev-WebBrowser/blob/main/Data-Collection-and-Privacy-Notice.md)
- [Architecture](https://github.com/KernFerm/BubblesTheDev-WebBrowser/blob/main/ARCHITECTURE.md)
- [Changelog](https://github.com/KernFerm/BubblesTheDev-WebBrowser/blob/main/CHANGELOG.md)
- [Security](https://github.com/KernFerm/BubblesTheDev-WebBrowser/blob/main/SECURITY.md)

## 🚀 Overview

Version `1.0.30` includes improvements such as:

- 🧭 automatic-update installer behavior for installed builds
- 🔐 verified `https:` update endpoints and SHA-256 checked installer launches
- 📘 refreshed architecture, privacy, and release documentation
- 📥 trusted-source-aware download handling
- 🔑 passkey sign-in support for compatible websites
- 💾 improved custom install-path tracking and external-drive install support
- 🧾 runtime diagnostics export and checks
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
- 📂 downloads window and progress tracking
- 📌 tab pinning and mute controls
- 🪄 move tabs to a new window more easily

## 📥 How To Get The Browser

- [**DOWNLOAD** Click here to get the latest version of the browser](https://github.com/KernFerm/BubblesTheDev-WebBrowser/releases)

## 📦 Installation

1. Run:

   ```text
   BubblesTheDev Web Browser_Installer_1.0.30.exe
   ```

2. Choose where you want to install the browser.
3. Finish setup and launch the browser.

The installer supports:

- default install locations
- custom install locations
- external HDD installs
- external SSD installs
- USB flash-drive installs

If you install the browser on an external drive instead of `C:`, install-linked browser data can automatically move to that external drive as part of setup.

Installed builds now use the automatic-update path when updates are enabled for the build.

## 🔄 Upgrading From An Older Version

If an older version is already installed and you are upgrading manually:

1. Close `BubblesTheDev Web Browser`.
2. Open `Start > Settings > Apps > Installed apps`.
3. Find `BubblesTheDev Web Browser`.
4. Click the `...` menu and choose `Uninstall`.
5. Choose which local data categories should be removed or kept.
6. Run the new installer after uninstall finishes.

If you use the built-in update flow, the browser can still download and launch the newer installer for you.

## 🔁 Updates

Current installer builds no longer offer a `Manual updates only` setup mode.

Installed builds now use the automatic-update path when updates are enabled for the build.

Important notes:

- The browser does not update itself silently in the background.
- Managed updates still use a normal installer.
- Update downloads are checked before they are launched.
- Verified `https:` endpoints and a valid SHA-256 value are required before an update installer is launched.
- The app menu includes `Check for Updates` if you want to check manually.

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

If automatic updates are enabled in the build, the installer and browser can send a small amount of update-related information such as install ID, install path, version, platform, and last-seen time. This does not include your browsing history, bookmarks, saved passwords, page content, or diagnostics.

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
