# BubblesTheDev Web Browser 1.3.120

Release documentation for version `1.3.120`.

`1.3.120` is a dependency maintenance update. It refreshes the packaged dependency metadata while keeping the existing browser feature set in place.

## Highlights

* The packaged browser version is now `1.3.120`
* Dependency metadata was refreshed for the current packaged build
* Electron was refreshed to the current Electron 44 dependency line used by this build
* The local npm dependency audit reports zero known vulnerabilities
* No new headline browser feature is included in this maintenance update

## Still In Place

* File Converter remains available from Tools > File Converter
* Universal Media Controls remain available from Tools > Media Controls
* Per-tab volume controls remain available from the Media Controls panel and tab context menu
* Clipboard History remains optional, local, and off by default
* Download Scheduler remains available for supported public HTTP and HTTPS downloads
* Privacy Protection remains local-first
* Subscription Tracker remains local and profile-based
* Virtual Machine Center remains a guide, not a VMware control bridge
* Developer Workspace remains a launcher, not a command runner
* AI Chat remains optional and local-Ollama based when the user enables it
* Local PDF tools, website apps, link safety, permission indicators, toolbar clock controls, and gaming or streaming performance controls remain available

## What This Release Means

This release keeps the browser current with dependency maintenance without changing the main user-facing feature set. It is intended as a lower-risk maintenance release rather than a new feature release.

Public support contact: support.bubblesthedev.webbrowser@gmail.com.

## Upgrade Notes

* Standard profiles remain isolated with their own sessions, history, permissions, settings, and restored tabs
* Guest Mode remains non-persistent
* Optional profile PIN protection remains available
* Local AI processing, AI Chat, privacy-safe diagnostics controls, and accessibility preferences continue to work as part of the local-first browser model
* AI Chat remains optional and local-Ollama based
* Managed updates continue to use the installer-based update model
* Disable Hardware Acceleration still requires a browser restart before Chromium GPU acceleration changes
* Developer Workspace remains a launcher, not a command runner or browser-control bridge
* Virtual Machine Center does not install VMware, create VMs, run Linux commands, or read VM files
* Subscription Tracker records are profile-local and unavailable in Guest or Incognito windows
* Existing OAuth account connections remain protected because sign-in parameters are not stripped by tracking URL cleanup
* Stronger cookie modes keep targeted authentication compatibility so normal sign-in and OAuth account connections can continue working

## Carried Forward From Earlier 1.3.x Releases

These features remain available in `1.3.120`, but they were introduced in earlier releases:

* File Converter, Universal Media Controls, Clipboard History, Per-Tab Volume Mixer, and Download Scheduler
* Privacy Protection Engine, Privacy Request Inspector, local privacy counters, tracking-parameter cleanup, cookie protections, CNAME tracker detection, malicious-request protection, and cryptomining protection
* Subscription Tracker and the Local Subscription Service Catalog
* Virtual Machine Center for VMware Workstation Pro and Linux virtual machine setup guidance
* Send Feedback shortcut with `Ctrl+Shift+F`
* AI Chat with optional local Ollama support
* Local PDF tools, website apps, link safety, permission indicators, toolbar clock controls, and gaming or streaming performance controls

## Virtual Machine Center Security Notes

Virtual Machine Center is a guide, not a virtualization bridge.

* VMware launches only after explicit user action
* VMware remains outside the browser trust boundary
* Linux guests do not receive browser cookies, passwords, history, open tabs, profile folders, AI Chat data, or browser IPC access
* Websites cannot detect VMware through Virtual Machine Center
* Websites cannot select ISO files, calculate ISO hashes, read local VM files, launch VMware, or execute host or guest commands
* The browser does not install VMware, run VMware installers, create virtual machines, automate VMware, or disable Windows security
* ISO hash calculation uses only the user-selected `.iso` file and does not upload ISO contents or hashes

## Subscription Tracker Security Notes

Subscription Tracker is a local profile tool.

* Manual records are stored in encrypted profile data
* Guest and Incognito windows cannot use the tracker
* Normal websites cannot access tracker IPC
* Normal Google profile sign-in does not request Gmail mailbox scopes
* Gmail discovery requires a separate explicit Gmail read-only consent flow before mailbox scanning can be used
* Gmail scan results remain unconfirmed until the user reviews them
* Gmail tokens remain encrypted in profile storage and are not exposed to the renderer
* The browser does not connect to banks, credit cards, payment services, cancellation services, cloud AI analysis, or a remote BubblesTheDev subscription database

## Package

Installer:

`BubblesTheDev Web Browser_Installer_1.3.120.exe`

SHA-256:

Published separately with the final release artifact.

## Privacy And Security Notes

* No built-in telemetry or analytics services are part of the normal browser runtime
* Privacy Protection Engine statistics are local aggregate counters, not a remote browsing-history feed
* Diagnostics can remain local unless the user explicitly exports them or enables privacy-safe reporting
* Optional AI Chat uses local Ollama on the user's computer when enabled
* Optional anonymous feedback uses only the user's selected category, typed message, and optional basic technical details
* Public documentation avoids private setup details and focuses on what users need to know
