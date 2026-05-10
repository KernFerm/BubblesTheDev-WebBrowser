> **If you enjoy the project, starring the repo helps a lot.**
> **Built around privacy, user control, and a better everyday browsing experience.**

# BubblesTheDev Web Browser

[![Version](https://img.shields.io/badge/version-1.0.48-blue)](https://github.com/KernFerm/BubblesTheDev-WebBrowser/releases)
[![Platform](https://img.shields.io/badge/platform-Windows%2011-0078D6)](https://github.com/KernFerm/BubblesTheDev-WebBrowser/releases)
[![Electron](https://img.shields.io/badge/Electron-42-47848F?logo=electron&logoColor=white)](https://www.electronjs.org/)
[![License](https://img.shields.io/badge/license-Proprietary-lightgrey)](https://github.com/KernFerm/BubblesTheDev-WebBrowser/blob/main/readme.md#license)

## Installer Package - Version 1.0.48

A Windows web browser built for people who want everyday browsing features, strong privacy defaults, and more control over their browser data.

Installer file name:

`BubblesTheDev Web Browser_Installer_1.0.48.exe`

SHA256:

`971275F89EEF68AAA6A7D35CEC65A054F541A8741B4779591AE548086B987FD6`

Author: `BubblesTheDev`  
Platform: `Windows 11 (x64)`  
Engine: `Electron 42` / Chromium

## Documentation

- [Browser-Privacy-Comparison](https://github.com/KernFerm/BubblesTheDev-WebBrowser/blob/main/Browser-Privacy-Comparison.md)
- [Data-Collection-and-Privacy-Notice](https://github.com/KernFerm/BubblesTheDev-WebBrowser/blob/main/Data-Collection-and-Privacy-Notice.md)
- [Architecture](https://github.com/KernFerm/BubblesTheDev-WebBrowser/blob/main/ARCHITECTURE.md)
- [Changelog](https://github.com/KernFerm/BubblesTheDev-WebBrowser/blob/main/CHANGELOG.md)
- [Security](https://github.com/KernFerm/BubblesTheDev-WebBrowser/blob/main/SECURITY.md)

## Overview

Version `1.0.48` continues the gaming and streaming performance optimization work so the browser can reduce unnecessary load when OBS Studio, Streamlabs Desktop, fullscreen games, borderless-windowed games, or heavy system load are detected, while also improving the managed install and update experience.

- Intelligent gaming and streaming optimization mode with Windows-safe local detection
- Adaptive background throttling, tab sleeping, and lower hidden-tab rendering pressure
- Lightweight performance panel with status visibility and user controls
- Chrome-like first-launch update follow-up after install for managed-update builds
- Hardened Music Downloader with queueing, cooldowns, abuse controls, and responsible-use consent
- Bundled binary integrity verification for `yt-dlp`, `ffmpeg`, and `ffprobe`
- Trusted-source-aware download handling remains in place
- Passkey sign-in support for compatible websites remains available
- Custom install-path tracking and external-drive install support remain included
- Privacy-focused local data handling and uninstall controls remain included

## Top Features

- Multi-tab browsing
- One address bar for websites and search
- Ad and tracker blocking
- Passkey sign-in support for compatible websites
- Bookmark bar and bookmark import
- Multiple muted shell themes
- Encrypted saved-password vault
- Chromium extension import
- VPN manager and public IPv4/IPv6 session checks
- Split-view browsing
- Incognito windows
- Safer downloads from trusted sources
- Hardened Music Downloader for supported YouTube single-video audio downloads
- Sleeping background tabs to help save memory
- Gaming and streaming performance mode for OBS, Streamlabs, and fullscreen sessions
- Local-only Music Player
- Modern right-click page menu and tab context menu

## More Features

- Toolbar hide/show controls with quick-access menu
- Built-in home page at `bubbles://home`
- Search results powered with DuckDuckGo and Google sources
- Strong password generation
- History tracking
- Per-site permissions
- Print support
- Save Page As support
- Built-in Task Manager
- Custom homepage support
- Diagnostics export and runtime checks
- Manual `Check for Updates`
- Downloads window and progress tracking
- Tab pinning and mute controls
- Move tabs to a new window more easily

## How To Get The Browser

- [**DOWNLOAD** Click here to get the latest version of the browser](https://github.com/KernFerm/BubblesTheDev-WebBrowser/releases)

## Installation

1. Run:

   ```text
   BubblesTheDev Web Browser_Installer_1.0.48.exe
   ```

2. Choose where you want to install the browser.
3. Finish setup and launch the browser.

The installer supports:

- Default install locations
- Custom install locations
- External HDD installs
- External SSD installs
- USB flash-drive installs

If you install the browser on an external drive instead of `C:`, install-linked browser data can automatically move to that external drive as part of setup.

Installed builds continue to support the managed update path when updates are enabled for the build.

## Upgrading From An Older Version

If an older version is already installed and you are upgrading manually:

1. Close `BubblesTheDev Web Browser`.
2. Open `Start > Settings > Apps > Installed apps`.
3. Find `BubblesTheDev Web Browser`.
4. Click the `...` menu and choose `Uninstall`.
5. Choose which local data categories should be removed or kept.
6. Run the new installer after uninstall finishes.

If you use the built-in update flow, the browser can still download and launch the newer installer for you.

## Updates

Managed updates still use a normal installer flow rather than a silent background patch.

Important notes:

- The browser does not update itself silently in the background.
- Managed updates still use a normal installer.
- Fresh installs can do a one-time first-launch update follow-up for a more Chrome-like feel.
- Update downloads are checked before they are launched.
- Verified `https:` endpoints and a valid SHA-256 value are required before an update installer is launched.
- The app menu includes `Check for Updates` if you want to check manually.

## Uninstall Behavior

The uninstaller removes the installed app files and can also remove local data by category.

Current uninstall choices include:

- Browser profile data
- Saved passwords
- Diagnostics reports
- Local update preferences

If a category is left unchecked, that data stays on your device for a future reinstall or update.

Uninstall cleanup also:

- Targets tracked custom install paths
- Removes stale uninstall metadata and registry ghosts
- Re-checks reported leftovers at the end to reduce false warning dialogs

If the browser was installed to an external drive, the main browser profile data can follow that external install location instead of staying on the system drive.

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

## Privacy And Security

The browser is built with privacy and security in mind:

- Browsing protections are turned on by default
- Ads and trackers are filtered
- Downloads get extra safety checks
- Incognito uses a separate session
- Password save and reveal tools are limited to secure pages
- Imported extensions are treated carefully and risky ones show extra warnings
- No built-in telemetry endpoints are configured

## Music Player

The Music Player is local-only and off by default.

- No music folder is scanned until the user explicitly agrees
- The user can scan the default Music folder or another local folder
- Playback uses local files only

## Music Downloader

The Music Downloader is local-first and intentionally restricted.

- Supports approved YouTube single-video URLs only
- Audio extraction only, with mp3 output
- Uses bundled `yt-dlp`, `ffmpeg`, and `ffprobe` binaries verified by SHA-256
- Runs only in the Electron main process through a strict preload bridge
- Enforces queue limits, cooldown timers, duplicate blocking, and abuse throttling
- Stores downloader state locally and restores cooldown state across restarts

## Diagnostics And Crash Reports

Users can export a diagnostics report from:

`Tools > Export Diagnostics Report`

Diagnostics are stored locally and are not transmitted automatically. Exported diagnostics reports are encrypted before being written to disk.

Support email:

`browser-support@bubbles-browser.fnbubbles420.org`

## Privacy Notice

This application:

- Does not collect personal data automatically
- Does not send telemetry automatically
- Does not include analytics services
- Stores browser data locally on your device

If automatic updates are enabled in the build, the installer and browser can send a small amount of update-related information such as install ID, install path, version, platform, and last-seen time. This does not include your browsing history, bookmarks, saved passwords, page content, or diagnostics.

Saved-password capture and reveal behavior is limited to secure pages such as `https:` websites and local development hosts.

## SmartScreen Notice

This build is currently unsigned, so Windows SmartScreen may warn before launch.

If prompted:

1. Click `More Info`
2. Click `Run Anyway`

## License

Proprietary - BubblesTheDev  
All Rights Reserved.

## Releases

[Get the web browser here](https://github.com/KernFerm/BubblesTheDev-WebBrowser/releases)
