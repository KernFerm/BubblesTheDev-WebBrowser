# BubblesTheDev Web Browser 1.2.200

Planned release: Week of July 26, 2026

`1.2.200` is the next planned browser update. It builds on the previous documented `1.2.160` release and focuses on reducing browser-side background pressure while gaming, streaming, or using OBS/Streamlabs while also expanding local privacy protections.

## Highlights

* The packaged browser version is now `1.2.200`
* Gaming and streaming performance checks are less aggressive while OBS, Streamlabs, or a fullscreen game is active
* Memory pressure cleanup now starts earlier, around `650 MB`, instead of waiting until the browser is closer to `1 GB`
* OBS/Streamlabs detection polling now runs less often during live sessions
* GPU counter sampling is avoided during heavy game-plus-stream contexts
* Local AI runtime reviews now run less often during normal browser use
* Built-in ad and tracker blocking now covers broader local host, path, beacon, error-monitoring, YouTube, and ad-asset rules
* Canvas fingerprint protection now defaults to Strict, with Balanced and Off available for users who need more site compatibility
* JavaScript fingerprinting surfaces are reduced for common BrowserLeaks-style `navigator` and `iframe.contentWindow` checks
* Dependency audit cleanup was completed so `npm audit` reports zero known vulnerabilities
* Release-facing documentation now reflects the planned `1.2.200` update

## What This Release Means

This is a stream-stability, blocker, fingerprint-protection, and dependency-hygiene update.

If you are already on `1.2.160`, this update keeps the existing profile, privacy, pinned site, bookmark, QR sharing, Secure DNS, password warning, Send to Device, and toolbar improvements from `1.2.160`, while making the browser less likely to compete with OBS, Streamlabs, Fortnite, or other fullscreen games and reducing stable browser fingerprinting signals.

## Upgrade Notes

* Standard profiles remain isolated with their own sessions, cookies, history, permissions, settings, and restored tabs
* Guest Mode remains non-persistent
* Optional profile PIN protection remains available
* Encrypted profile secrets, restore points, and profile session snapshots remain part of the profile recovery model
* Local AI processing, privacy-safe diagnostics controls, and accessibility preferences continue to work as part of the current local-first browser model
* Managed updates continue to use the installer-based update model
* Users may see the normal installer window and Windows UAC prompt during updates depending on their system
* Local Send to Device still requires both devices to be on the same Wi-Fi or local network with BubblesTheDev WebBrowser installed

## New And Fixed In 1.2.200

* Updated the package version to `1.2.200`
* Reduced browser-side background polling during OBS, Streamlabs, and fullscreen gaming sessions
* Lowered the default memory pressure target and idle background-tab sleep timing
* Slowed Local AI runtime review cadence to reduce background wakeups
* Avoided GPU counter sampling during heavy stream-and-game contexts
* Expanded built-in ad/tracker blocking with broader local request and cosmetic rules
* Added Canvas fingerprint protection with Strict, Balanced, and Off modes in Privacy & Security
* Added Chromium canvas-readback blocking when Canvas protection is not Off
* Reduced exposed JavaScript fingerprinting APIs including Client Hints, Battery, Network Information, Web Bluetooth, WebGPU, WebUSB, Web Serial, WebHID, WebXR, plugins, speech voices, Web Audio, and ad-auction APIs
* Cleaned vulnerable npm transitive build-tool dependencies so the current audit is clean
* Updated release-facing documentation so the docs reflect the planned `1.2.200` release

## Previous Release

The broader browser-polish and privacy-control feature set was documented in `1.2.160`. That release included the Profile Manager polish, pinned site persistence, scrollable bookmarks menu, Secure DNS details, password breach warning defaults, QR sharing, Create Shortcut support, same-network Send to Device, toolbar refinements, and keyboard shortcut documentation updates.

## Package

Installer:

`BubblesTheDev Web Browser_Installer_1.2.200.exe`

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
