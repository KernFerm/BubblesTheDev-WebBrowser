# BubblesTheDev Web Browser 1.2.210

Planned release: Week of July 26, 2026

`1.2.210` is the next planned browser update. It builds on the previous documented `1.2.200` release and focuses on making Strict JavaScript fingerprint protection the default for upgraded installs while keeping major media sites compatible.

## Highlights

* The packaged browser version is now `1.2.210`
* JavaScript fingerprint protection now has its own Privacy & Security setting
* JavaScript fingerprint protection defaults to Strict for new and upgraded profiles when the setting is missing
* New tabs now receive separate Canvas and JavaScript fingerprint protection modes
* BrowserLeaks-style JavaScript surfaces remain reduced by default, including Client Hints, plugins, Web Audio, and other high-entropy APIs
* Twitch player compatibility was improved so stream playback controls, pause, and volume controls keep working
* Release-facing documentation now reflects the planned `1.2.210` update

## What This Release Means

This is a fingerprint-protection compatibility update.

If you are already on `1.2.200`, this update keeps the existing stream-stability, blocker, Canvas protection, memory-pressure, menu cleanup, and dependency-audit improvements while making JavaScript fingerprint protection explicit, defaulted to Strict, and easier to control.

## Upgrade Notes

* Standard profiles remain isolated with their own sessions, cookies, history, permissions, settings, and restored tabs
* Guest Mode remains non-persistent
* Optional profile PIN protection remains available
* Encrypted profile secrets, restore points, and profile session snapshots remain part of the profile recovery model
* Local AI processing, privacy-safe diagnostics controls, and accessibility preferences continue to work as part of the current local-first browser model
* Managed updates continue to use the installer-based update model
* Users may see the normal installer window and Windows UAC prompt during updates depending on their system
* Local Send to Device still requires both devices to be on the same Wi-Fi or local network with BubblesTheDev WebBrowser installed

## New And Fixed In 1.2.210

* Updated the package version to `1.2.210`
* Added a separate JavaScript fingerprint protection setting with Strict, Balanced, and Off modes
* Defaulted missing JavaScript fingerprint protection settings to Strict for upgraded installs
* Passed separate Canvas and JavaScript fingerprint protection modes into new browser tabs
* Added live update handling for both Canvas and JavaScript protection modes
* Added Twitch compatibility handling so Twitch-owned player resources and controls keep working
* Updated release-facing documentation so the docs reflect the planned `1.2.210` release

## Previous Release

The broader stream-stability, blocker, memory-pressure, Canvas protection, JavaScript surface reduction, and dependency-audit feature set was documented in `1.2.200`.

## Package

Installer:

`BubblesTheDev Web Browser_Installer_1.2.210.exe`

SHA-256:

`TBD after final installer build`

## Privacy And Security Notes

* No built-in telemetry or analytics services are part of the normal browser runtime
* Diagnostics can remain local unless the user explicitly exports them or enables privacy-safe reporting
* Local Send to Device discovery is designed for the local network and does not require Google account services
* Canvas fingerprint protection changes canvas readout data locally and does not upload page contents or browsing history
* JavaScript privacy patches run locally in page preload and do not send fingerprint values to a remote service
* Public documentation does not include private server-owner controls, tokens, personal IPs, or other sensitive operational details
* Public release notes intentionally avoid sensitive operational details
