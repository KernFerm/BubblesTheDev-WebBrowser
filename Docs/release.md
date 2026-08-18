# BubblesTheDev Web Browser 1.3.001

Release documentation for version `1.3.001`.

`1.3.001` adds Virtual Machine Center for beginner VMware Workstation Pro and Linux ISO setup guidance, adds a visible Send Feedback shortcut, and updates the EULA with clearer third-party software license wording.

## Highlights

* The packaged browser version is now `1.3.001`
* `Tools > Virtual Machine Center` opens the VM guide directly
* Virtual Machine Center is also reachable from `Tools > Browser Features > Developer Workspace`
* VMware Workstation Pro remains an external Windows application
* Ubuntu and Linux Lite run inside VMware, not inside the browser
* ISO verification runs locally from a user-selected `.iso` file
* Linux command lists and installation guides open in pop-out windows with an `OK` close button
* `Ctrl+Shift+F` opens Send Feedback from the browser
* Virtual Machine Center shows the feedback shortcut for VM setup issues or suggestions
* The EULA now includes clearer third-party software license guidance

## What This Release Means

This release keeps BubblesTheDev Web Browser local-first while adding a beginner-friendly VM setup guide. The browser can explain approved download sources, local host architecture, storage warnings, ISO verification, and basic Linux setup steps, but it does not become a VMware controller.

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

## New And Fixed In 1.3.001

* Added Virtual Machine Center for VMware Workstation Pro and Linux virtual machine setup guidance
* Added approved Ubuntu 26.04 LTS and Linux Lite 8.0 ISO cards
* Added per-card ISO verification buttons with local SHA-256 calculation
* Added storage warning guidance for ISO files, VM disks, and snapshots
* Added pop-out installation guides and Linux command lists
* Added `Ctrl+Shift+F` for Send Feedback
* Added a feedback shortcut card inside Virtual Machine Center
* Updated the shortcut key guide with the Send Feedback shortcut
* Updated the EULA third-party software license section
* Updated the runtime trust manifest after browser runtime changes
* Updated public release documentation for version `1.3.001`

## Virtual Machine Center Security Notes

Virtual Machine Center is a guide, not a virtualization bridge.

* VMware launches only after explicit user action
* VMware remains outside the browser trust boundary
* Linux guests do not receive browser cookies, passwords, history, open tabs, profile folders, AI Chat data, or browser IPC access
* Websites cannot detect VMware through Virtual Machine Center
* Websites cannot select ISO files, calculate ISO hashes, read local VM files, launch VMware, or execute host or guest commands
* The browser does not install VMware, run VMware installers, create virtual machines, automate VMware, or disable Windows security
* ISO hash calculation uses only the user-selected `.iso` file and does not upload ISO contents or hashes

## Package

Installer:

`BubblesTheDev Web Browser_Installer_1.3.001.exe`

SHA-256:

Published separately with the final release artifact.

## Privacy And Security Notes

* No built-in telemetry or analytics services are part of the normal browser runtime
* Diagnostics can remain local unless the user explicitly exports them or enables privacy-safe reporting
* Optional AI Chat uses local Ollama on the user's computer when enabled
* Optional anonymous feedback uses only the user's selected category, typed message, and optional basic technical details
* Public documentation avoids private setup details and focuses on what users need to know
