# BubblesTheDev Web Browser 1.2.211

Planned release: Week of July 26, 2026

`1.2.211` is the next planned browser update. It builds on the previous documented `1.2.210` release and focuses on making the Strict JavaScript fingerprint protection default apply reliably on upgraded PCs that already have saved browser settings.

## Highlights

* The packaged browser version is now `1.2.211`
* Security settings now include a versioned privacy-default marker
* Upgraded installs with missing JavaScript fingerprint protection settings now migrate to Strict on first launch
* Migrated privacy defaults are saved back to disk so other PCs keep the new Strict setting after restart
* The Privacy & Security panel still lets users change JavaScript fingerprint protection afterward
* Release-facing documentation now reflects the planned `1.2.211` update

## What This Release Means

This is a fingerprint-protection upgrade-migration update.

If you are already on `1.2.210`, this update keeps the separate JavaScript fingerprint protection control and Twitch compatibility improvements while making sure older saved settings on other PCs receive the new Strict default.

## Upgrade Notes

* Standard profiles remain isolated with their own sessions, cookies, history, permissions, settings, and restored tabs
* Guest Mode remains non-persistent
* Optional profile PIN protection remains available
* Encrypted profile secrets, restore points, and profile session snapshots remain part of the profile recovery model
* Local AI processing, privacy-safe diagnostics controls, and accessibility preferences continue to work as part of the current local-first browser model
* Managed updates continue to use the installer-based update model
* Users may see the normal installer window and Windows UAC prompt during updates depending on their system
* Local Send to Device still requires both devices to be on the same Wi-Fi or local network with BubblesTheDev WebBrowser installed

## New And Fixed In 1.2.211

* Updated the package version to `1.2.211`
* Added a versioned privacy-default marker to saved security settings
* Migrated missing JavaScript fingerprint protection values to Strict for upgraded installs
* Persisted migrated privacy defaults after loading saved browser settings
* Updated release-facing documentation so the docs reflect the planned `1.2.211` release

## Previous Release

The broader separate JavaScript fingerprint protection setting, Twitch compatibility, and live Canvas/JavaScript protection update handling were documented in `1.2.210`.

## Package

Installer:

`BubblesTheDev Web Browser_Installer_1.2.211.exe`

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
