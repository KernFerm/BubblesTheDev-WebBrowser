# BubblesTheDev Web Browser

## Installer Package - Version 1.0.15

Desktop web browser for Windows built with Electron and a BrowserView-based tab runtime.

Installer file:

`BubblesTheDev Web Browser_Installer_1.0.15.exe`

SHA256:

`A88CC563D3C2A2A5D176FD28488463B86A4460127296583637CD83C6FF0C18B7`

Author: `BubblesTheDev`  
Platform: `Windows 11 (x64)`  
Engine: `Electron 41` / Chromium

## Overview

Version `1.0.15` includes:

- encrypted saved-password storage with reveal, add, remove, and strong-password generation flows
- bookmark import from supported Chromium browsers plus manual bookmark-file import
- Chromium extension import support
- VPN tooling for NordVPN, ExpressVPN, ProtonVPN, and WireGuard
- managed update support with `Automatic updates` enabled by default during install
- manual `Check for Updates` from the app menu
- improved custom install-path tracking and external-drive install support
- uninstall cleanup improvements with per-category data removal options

## Features

- Multi-tab browsing with a BrowserView-based tab runtime
- Default home page at `bubbles://home`
- Unified address bar for direct URLs and search
- Background-enriched search using DuckDuckGo and Google sources
- Ad and tracker blocking
- Popup login compatibility improvements
- Bookmark bar and bookmark import
- Encrypted saved-password vault
- Strong password generation
- Chromium extension import
- VPN manager and public IPv4/IPv6 session checks
- History tracking
- Split-view browsing
- Per-site permissions
- Incognito windows
- Print support
- Save Page As support
- Download tracking and protected file handling
- Built-in Task Manager
- Sleeping background tabs
- Custom homepage support
- Local-only Music Player
- Diagnostics export and runtime checks

## Installation

1. Run:

   ```text
   BubblesTheDev Web Browser_Installer_1.0.15.exe
   ```

2. Choose an install directory.
3. Select whether you want `Automatic updates` or `Manual updates only`.
4. Complete installation and launch the browser.

The installer supports:

- default install locations
- custom install locations
- external HDD installs
- external SSD installs
- USB flash-drive installs

`Automatic updates` is selected by default during install.

## Upgrading From An Older Version

If an older version is already installed and you are upgrading manually:

1. Close `BubblesTheDev Web Browser`.
2. Open `Start > Settings > Apps > Installed apps`.
3. Find `BubblesTheDev Web Browser`.
4. Click the `...` menu and choose `Uninstall`.
5. Choose which local data categories should be removed or kept.
6. Run the new installer after uninstall finishes.

During managed-update installs, the installer may remove the previous app version first and then continue with the new install.

## Update Modes

Current installer builds support two update modes:

1. `Manual updates only`
   Close the browser, uninstall the older version if needed, and install the newer release manually from GitHub.
2. `Automatic updates`
   The installer records that choice locally, can register the install with the configured owner-run update server, and the browser can check, download, and launch the published installer for newer releases.

Important notes:

- The browser does not use a built-in silent patcher.
- Managed updates still launch a normal installer.
- The app menu includes `Check for Updates` for user-triggered update checks.

## Uninstall Behavior

The uninstaller removes the installed app files and can also remove local data by category.

Current uninstall choices include:

- browser profile data
  This includes history, bookmarks, homepage, permissions, and main browser-state data.
- saved passwords
- diagnostics reports
- local update preferences

If a category is left unchecked, that data is preserved for a future reinstall or update.

Uninstall cleanup also:

- targets tracked custom install paths
- removes stale uninstall metadata and registry ghosts
- re-checks reported leftovers at the end to reduce false warning dialogs

## Default Installation Path

If no custom path is selected, the default install location is typically:

```text
C:\Users\<YourUsername>\AppData\Local\Programs\BubblesTheDev Web Browser
```

## System Requirements

- Windows 11
- x64 architecture
- 4 GB RAM minimum
- Around 300 MB free disk space

## Security Configuration

Current security-sensitive defaults include:

- `contextIsolation: true`
- `nodeIntegration: false`
- renderer sandbox enabled
- BrowserView-based runtime instead of renderer-managed `webviewTag`
- separate session handling for incognito windows
- restricted permission handling
- modular download protection
- ad and tracker filtering
- no telemetry endpoints configured

## Music Player

The Music Player is local-only and off by default.

- No music folder is scanned until the user explicitly agrees.
- The user can scan the default Music folder or another local folder.
- Playback uses local files only.

## Diagnostics And Crash Reports

Users can export a diagnostics report from:

`Tools > Export Diagnostics Report`

Diagnostics are stored locally and are not transmitted automatically. Exported diagnostics reports are encrypted before being written to disk.

Support email:

`bubblesthedevwebbrowsersupport@fnbubbles420.org`

## Privacy Notice

This application:

- does not collect personal data automatically
- does not transmit telemetry automatically
- does not include analytics services
- stores browser data locally on the device

If the installer build is configured with an update server and the install uses `Automatic updates`, the installer and browser can send limited update-management fields such as install ID, install path, version, platform, and last-seen time. This does not include browsing history, bookmarks, saved passwords, page content, or diagnostics.

## SmartScreen Notice

This build is currently unsigned, so Windows SmartScreen may warn before launch.

If prompted:

1. Click `More Info`
2. Click `Run Anyway`

## Documentation

- [Browser-Privacy-Comparison](https://github.com/KernFerm/BubblesTheDev-WebBrowser/blob/main/Browser-Privacy-Comparison.md)
- [Data-Collection-and-Privacy-Notice](https://github.com/KernFerm/BubblesTheDev-WebBrowser/blob/main/Data-Collection-and-Privacy-Notice.md)
- [Architecture](https://github.com/KernFerm/BubblesTheDev-WebBrowser/blob/main/ARCHITECTURE.md)

## License

Proprietary - BubblesTheDev  
All Rights Reserved.

## Releases

[Get the web browser here](https://github.com/KernFerm/BubblesTheDev-WebBrowser/releases)
