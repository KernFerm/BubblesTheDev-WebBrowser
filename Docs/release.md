# BubblesTheDev Web Browser 1.2.420

Release documentation for version `1.2.420`.

`1.2.420` is a Windows installer and optional local AI setup reliability release.

## Highlights

* The packaged browser version is now `1.2.420`
* Optional Ollama setup can download, verify, and run the official Ollama setup flow more reliably
* The installer dashboard has a more compact layout so all component rows fit better
* Ollama Runtime and AI Models now appear near the top of the dashboard
* Optional Ollama setup failures show clearer Retry or Cancel guidance
* The installer can repair stale uninstall registration left by a broken previous install
* AI Chat remains off after installation and models are still downloaded later from Tools > AI Chat

## What This Release Means

This release keeps the existing browser behavior, privacy model, AI Chat design, and installer-based update model while making optional local AI setup more dependable and easier to understand during installation.

Public support contact: support.bubblesthedev.webbrowser@gmail.com.

## Upgrade Notes

* Standard profiles remain isolated with their own sessions, history, permissions, settings, and restored tabs
* Guest Mode remains non-persistent
* Optional profile PIN protection remains available
* Encrypted profile secrets, restore points, and profile session snapshots remain part of the profile recovery model
* Local AI processing, privacy-safe diagnostics controls, and accessibility preferences continue to work as part of the current local-first browser model
* AI Chat remains optional and local-Ollama based
* Managed updates continue to use the installer-based update model
* Users may see the normal installer window and Windows UAC prompt during updates depending on their system
* Local Send to Device still requires both devices to be on the same Wi-Fi or local network with BubblesTheDev WebBrowser installed

## New And Fixed In 1.2.420

* Updated the package version to `1.2.420`
* Fixed the optional Ollama installer verification path so the downloaded installer is checked correctly
* Added safe failure reasons to the optional Ollama Retry prompt
* Made the Ollama progress state update more smoothly during installer setup
* Moved Ollama Runtime and AI Models near the top of the installer dashboard
* Compacted the installer dashboard layout so rows such as Accessibility, Localization Files, and Final Verification are less likely to be clipped
* Added stale missing-uninstaller registry repair for broken previous installs
* Kept Ollama installer helper files out of protected obfuscation so installer-time setup remains reliable
* Updated public release documentation for version `1.2.420`

## Previous Release

The broader AI Chat, installer dashboard, feedback, PDF, and browser-tool updates were documented in earlier `1.2.x` entries.

## Package

Installer:

`BubblesTheDev Web Browser_Installer_1.2.420.exe`

SHA-256:

Published separately with the final release artifact.

## Privacy And Security Notes

* No built-in telemetry or analytics services are part of the normal browser runtime
* Diagnostics can remain local unless the user explicitly exports them or enables privacy-safe reporting
* Local Send to Device discovery is designed for the local network and does not require Google account services
* Canvas fingerprint protection changes canvas readout data locally and does not upload page contents or browsing history
* JavaScript privacy patches run locally in page preload and do not send fingerprint values to a remote service
* Optional AI Chat uses local Ollama on the user's computer when enabled
* Public documentation avoids private setup details and focuses on what users need to know
* Public release notes stay focused on visible product behavior
