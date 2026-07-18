# BubblesTheDev Web Browser 1.2.145

Release date: July 2026

`1.2.145` is the current public browser release reflected by this release document.

## Highlights

* The packaged browser version is now `1.2.145`
* Bundled `yt-dlp.exe` is now version `2026.07.04`
* Release-facing documentation is aligned with the current public build
* Locked dependencies were refreshed for the current public build
* `More tools` now carries the full top-menu structure plus a top-menu visibility toggle
* Zoom controls are now easier to reach from both `More tools` and the page right-click menu
* Streaming Hub provider sign-in surfaces and normal browsing pages now keep sane `100%` zoom behavior by default

## What This Release Means

This version is mainly a maintenance and release-alignment update.

If you are already on a recent `1.2.x` build, `1.2.145` is mainly about keeping the packaged build current, updating the bundled `yt-dlp.exe`, and making sure the release-facing docs match the current browser version.

## Upgrade Notes

* Standard profiles remain isolated with their own sessions, cookies, history, permissions, settings, and restored tabs
* Guest Mode remains non-persistent
* Optional profile PIN protection remains available
* Encrypted profile secrets, restore points, and profile session snapshots remain part of the profile recovery model
* Local AI processing, privacy-safe diagnostics controls, and accessibility preferences continue to work as part of the current local-first browser model
* Managed updates continue to use the installer-based update model
* Update downloads can still be handled automatically by the browser, and the end user completes installation through the regular installer flow
* Users may see the normal installer window and Windows UAC prompt during updates depending on their system
* Normal installed browser clients can still reach the update server for update checks and client check-ins without depending on a bundled shared client update secret in the shipped browser files
* The browser now surfaces the full top-menu structure inside `More tools`
* The native top menu can now be enabled or disabled from `More tools`
* Zoom controls are now easier to reach from both `More tools` and the page right-click menu
* The page right-click menu now surfaces `Cut`, `Copy`, and `Paste` actions more clearly

## New And Fixed In 1.2.145

* Updated the package version to `1.2.145`
* Updated the bundled `yt-dlp.exe` to `2026.07.04`
* Updated release-facing documentation so the public docs reflect `1.2.145`
* Fixed Streaming Hub provider connect pages so isolated streaming tabs and hardened sign-in popups no longer appear zoomed out
* Fixed ordinary websites so they no longer inherit an unwanted zoomed-out state by default
* Fixed manual page zoom carry-over so a zoom change in one tab stays scoped to the current site instead of affecting unrelated websites

## Package

Installer:

`BubblesTheDev Web Browser_Installer_1.2.145.exe`

SHA-256:

`TBD after final installer build`

## Privacy And Security Notes

* No built-in telemetry or analytics services are part of the normal browser runtime
* Diagnostics can remain local unless the user explicitly exports them or enables privacy-safe reporting
* Update handling remains browser-controlled and installer-based rather than a fully silent hidden background patch service
* Public documentation does not include private server-owner controls, tokens, personal IPs, or other sensitive operational details
* Public release notes intentionally avoid sensitive operational details
