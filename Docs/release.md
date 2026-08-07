# BubblesTheDev Web Browser 1.2.410

Release documentation for version `1.2.410`.

`1.2.410` focuses on the local AI Chat experience, installer dashboard polish, anonymous feedback guidance, local PDF/browser-tool documentation, and public documentation cleanup.

## Highlights

* The packaged browser version is now `1.2.410`
* Optional local Ollama AI Chat has a dedicated panel and pop-out window
* AI Chat shows the responding local model above the prompt while the answer is being generated
* Open Ollama uses a hidden browser-managed local server process and cleans up the managed process on browser quit
* The Windows installer uses a clearer multi-row setup dashboard for browser, optional Ollama, skipped model download, and final verification steps
* The Chromium user-agent fallback has been refreshed for the current Electron 43 / Chromium 150 runtime line
* Feedback now provides category-specific message format examples inside the message placeholder
* Public Markdown documentation has been refreshed for the current release

## What This Release Means

This is a local-first usability and documentation update. It keeps the existing privacy and profile model while making AI Chat and feedback easier for end users to understand.

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

## New And Fixed In 1.2.410

* Updated the package version to `1.2.410`
* Added AI Chat model-response status text above the prompt
* Added AI Chat pop-out and model-management controls
* Added installed-local-model disclosure for local Ollama models
* Changed browser-started Ollama handling so the managed process is hidden and stopped on browser quit
* Improved the Windows installer dashboard spacing so setup rows are easier to read
* Updated the browser runtime trust manifest after refreshing the Chromium fallback
* Added category-specific feedback message placeholders
* Updated public Markdown docs for version `1.2.410`

## Previous Release

The broader browser-feature and feedback updates were documented in earlier `1.2.x` entries.

## Package

Installer:

`BubblesTheDev Web Browser_Installer_1.2.410.exe`

SHA-256:

Published separately with the final release artifact.

## Privacy And Security Notes

* No built-in telemetry or analytics services are part of the normal browser runtime
* Diagnostics can remain local unless the user explicitly exports them or enables privacy-safe reporting
* Local Send to Device discovery is designed for the local network and does not require Google account services
* Canvas fingerprint protection changes canvas readout data locally and does not upload page contents or browsing history
* JavaScript privacy patches run locally in page preload and do not send fingerprint values to a remote service
* Public documentation avoids private setup details and focuses on what users need to know
* Public release notes stay focused on visible product behavior
