# BubblesTheDev Web Browser 1.2.212

Planned release: Week of July 26, 2026

`1.2.212` is the next planned browser update. It builds on the previous documented `1.2.211` release and focuses on making JavaScript fingerprint protection work reliably in protected installer builds, not only during `npm start`.

## Highlights

* The packaged browser version is now `1.2.212`
* Protected release builds now keep `browserview_preload.js` unobfuscated
* Page-injected JavaScript privacy functions remain serializable in packaged installers
* BrowserLeaks-style JavaScript reductions should now work the same in installed builds as they do during `npm start`
* The Strict JavaScript fingerprint protection migration from `1.2.211` remains in place
* Release-facing documentation now reflects the planned `1.2.212` update

## What This Release Means

This is a protected-build fingerprint-protection reliability update.

If you are already on `1.2.211`, this update keeps the saved-settings migration while fixing the protected-build path that can prevent the JavaScript privacy preload from running correctly after installation on another PC.

## Upgrade Notes

* Standard profiles remain isolated with their own sessions, cookies, history, permissions, settings, and restored tabs
* Guest Mode remains non-persistent
* Optional profile PIN protection remains available
* Encrypted profile secrets, restore points, and profile session snapshots remain part of the profile recovery model
* Local AI processing, privacy-safe diagnostics controls, and accessibility preferences continue to work as part of the current local-first browser model
* Managed updates continue to use the installer-based update model
* Users may see the normal installer window and Windows UAC prompt during updates depending on their system
* Local Send to Device still requires both devices to be on the same Wi-Fi or local network with BubblesTheDev WebBrowser installed

## New And Fixed In 1.2.212

* Updated the package version to `1.2.212`
* Updated the protected-release builder so `browserview_preload.js` is no longer obfuscated
* Preserved page-injected privacy function serialization for packaged builds
* Fixed the difference between `npm start` behavior and protected installer behavior for JavaScript fingerprint protection
* Updated release-facing documentation so the docs reflect the planned `1.2.212` release

## Previous Release

The broader JavaScript fingerprint protection upgrade migration was documented in `1.2.211`.

## Package

Installer:

`BubblesTheDev Web Browser_Installer_1.2.212.exe`

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
