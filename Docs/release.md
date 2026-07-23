# BubblesTheDev Web Browser 1.2.160

Release date: July 2026

`1.2.160` is the current public browser release reflected by this release document.

## Highlights

* The packaged browser version is now `1.2.160`
* Bundled `yt-dlp.exe` is now version `2026.07.05`
* Release-facing documentation is aligned with the current public build
* Locked dependencies were refreshed for the current public build
* The Profile Manager page now has a cleaner desktop layout, simpler wording for everyday users, a larger default window, and stronger blue/orange visual accents
* Pinned sites now keep their place across browser restarts and can show the real site icon instead of a letter tile
* The bookmarks menu now includes a scrollable saved-bookmarks list
* The Privacy & Security panel now includes clearer Secure DNS provider details, password breach warning controls, and restart guidance for DNS changes
* Page sharing now includes QR code generation and a `Create Shortcut` option for saving the current page as a Windows shortcut
* Local Send to Device is available for devices on the same Wi-Fi/network without Google account dependency or telemetry, with clearer panel notes that both devices need BubblesTheDev WebBrowser installed
* The main toolbar now presents the clock, Tools button, navigation controls, address bar, user-agent selector, Go button, and status pills in a cleaner primary row
* The keyboard shortcuts guide now includes Profile Manager (`Ctrl+Shift+P`), Focus Mode (`F10`), and Windows exit (`Alt+F4`)

## What This Release Means

This version is a browser-polish, privacy-control, and reliability update.

If you are already on a recent `1.2.x` build, `1.2.160` keeps the packaged build current while improving the Profile Manager experience, pinned sites, bookmark access, Privacy & Security controls, QR sharing, page shortcuts, and local device sharing.

## Upgrade Notes

* Standard profiles remain isolated with their own sessions, cookies, history, permissions, settings, and restored tabs
* Guest Mode remains non-persistent
* Optional profile PIN protection remains available
* Encrypted profile secrets, restore points, and profile session snapshots remain part of the profile recovery model
* Local AI processing, privacy-safe diagnostics controls, and accessibility preferences continue to work as part of the current local-first browser model
* The Profile Manager keeps the same profile, OAuth, PIN, backup, restore, Guest Mode, and Safe Mode behavior with clearer user-facing wording and more room for desktop use
* Managed updates continue to use the installer-based update model
* Update downloads can still be handled automatically by the browser, and the end user completes installation through the regular installer flow
* Users may see the normal installer window and Windows UAC prompt during updates depending on their system
* Normal installed browser clients can still reach the update server for update checks and client check-ins without depending on a bundled shared client update secret in the shipped browser files
* The browser now surfaces the full top-menu structure inside `More tools`
* The native top menu can now be enabled or disabled from `More tools`
* Zoom controls are now easier to reach from both `More tools` and the page right-click menu
* The page right-click menu now surfaces `Cut`, `Copy`, and `Paste` actions more clearly
* Secure DNS changes require a browser restart and now show a restart prompt after saving
* QR code sharing and Create Shortcut are available from the browser's page-sharing actions
* Local Send to Device requires both devices to be on the same Wi-Fi or local network with BubblesTheDev WebBrowser installed

## New And Fixed In 1.2.160

* Updated the package version to `1.2.160`
* Updated bundled `yt-dlp.exe` to version `2026.07.05`
* Updated release-facing documentation so the public docs reflect `1.2.160`
* Refined the Profile Manager page layout, simplified the profile overview wording for average end users, and increased the default Profile Manager window size
* Fixed pinned sites so saved pinned entries persist after relaunch and can show site icons
* Added a scrollable saved-bookmark list to the bookmarks menu
* Added Secure DNS provider address details and a restart-browser prompt for DNS setting changes
* Enabled password breach warnings by default for normalized security settings
* Added QR code page sharing and Create Shortcut page-sharing support
* Hardened the QR code popup so copy actions no longer depend on inline script
* Added local, private same-network Send to Device support with clearer setup notes for Windows 11 PCs and mobile support coming soon
* Refined the toolbar Tools button into a round icon-only control while keeping existing toolbar actions available
* Updated the keyboard shortcuts guide so current Windows shortcuts are easier to discover

## Package

Installer:

`BubblesTheDev Web Browser_Installer_1.2.160.exe`

SHA-256:

`TBD after final installer build`

## Privacy And Security Notes

* No built-in telemetry or analytics services are part of the normal browser runtime
* Diagnostics can remain local unless the user explicitly exports them or enables privacy-safe reporting
* Local Send to Device discovery is designed for the local network, does not require Google account services, and requires BubblesTheDev WebBrowser on the devices being paired
* Update handling remains browser-controlled and installer-based rather than a fully silent hidden background patch service
* Public documentation does not include private server-owner controls, tokens, personal IPs, or other sensitive operational details
* Public release notes intentionally avoid sensitive operational details
