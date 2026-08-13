# BubblesTheDev Web Browser 1.2.430

Release documentation for version `1.2.430`.

`1.2.430` is a maintenance and performance-smoothing release for users who keep the browser open while streaming, recording, or playing games on multiple monitors.

## Highlights

* The packaged browser version is now `1.2.430`
* Multi-monitor game and streaming detection now stays active when the game is running but OBS, Streamlabs, or the browser is focused
* Repeated frame-rate, background-throttling, and process-priority calls are skipped when the current performance policy has not changed
* Game detection now covers a wider set of current, EA-published, Steam-distributed, and upcoming PC game process names
* Steam and EA App launcher processes alone do not activate gaming optimization
* Gaming support does not bypass anti-cheat, modify games, inject into game processes, or interfere with gaming security systems
* The vulnerable transitive `nanoid` dependency reported by npm audit has been patched
* The current project audit reports zero known npm vulnerabilities
* Disable Hardware Acceleration and Lower GPU Usage Mode remain available in the Performance panel
* AI Chat remains optional and models are still downloaded later from Tools > AI Chat

## What This Release Means

This release keeps the existing browser behavior, privacy model, AI Chat design, and installer-based update model while reducing unnecessary browser-side performance churn during OBS, Streamlabs, game capture, or fullscreen gameplay sessions.

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
* Disable Hardware Acceleration requires a browser restart before Chromium GPU acceleration changes
* Gaming optimization remains browser-managed and does not hook, patch, or control game processes

## New And Fixed In 1.2.430

* Updated the package version to `1.2.430`
* Smoothed browser performance behavior for multi-monitor gaming and streaming setups
* Kept game and streaming optimization active when Fortnite or another detected game is running but OBS, Streamlabs, or the browser is focused
* Expanded supported game process aliases, including additional EA games and future-facing game names
* Kept launcher-only processes out of gaming optimization triggers so open stores and launchers do not count as active gameplay
* Skipped duplicate native frame-rate, background-throttling, and process-priority calls when the browser performance policy has not changed
* Patched the vulnerable transitive `nanoid` dependency reported by npm audit
* Updated the runtime trust manifest after browser runtime changes
* Updated public release documentation for version `1.2.430`

## Previous Release

The hardware acceleration control, broader AI Chat, installer dashboard, feedback, PDF, optional Ollama setup, and browser-tool updates were documented in earlier `1.2.x` entries.

## Package

Installer:

`BubblesTheDev Web Browser_Installer_1.2.430.exe`

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
