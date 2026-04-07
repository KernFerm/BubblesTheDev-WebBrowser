# Data Collection and Privacy Notice

This notice reflects the current privacy posture of BubblesTheDev Web Browser version `1.0.6`.

BubblesTheDev Web Browser is designed to keep browser data local to the user's device unless the user chooses to browse external websites, use external search providers, download files, or export diagnostics manually.

The application does not include built-in telemetry, analytics SDKs, automatic crash upload services, cloud synchronization, a built-in silent auto-updater client, or AI monitoring systems.

Specifically:

* No telemetry services are embedded in the application.
* No background analytics services are executed.
* No behavioral tracking mechanisms are included by the application itself.
* No advertising identifiers are generated or transmitted by the application itself.
* No cloud-based synchronization features are implemented.
* No automatic diagnostics upload path is implemented.
* No first-party BubblesTheDev tracking server is contacted for analytics or data collection purposes.

Installer builds can optionally be configured with an owner-run update server for installs that explicitly select `Automatic updates` during setup. That managed-update flow is separate from telemetry and is limited to update-management fields, release metadata requests, and installer downloads, not browsing data.

## Local Browser Data

Browser data is stored on the user's device in the Electron `userData` directory.

Current persisted data includes:

* homepage settings
* browsing history
* bookmarks
* saved passwords if the user submits a password form in the standard browsing profile
* imported extension metadata for extensions the user chooses to load from other browsers
* imported ProtonVPN profile metadata for valid `.conf` files the user chooses to add
* bookmark bar visibility
* per-site permission settings
* optional Music Player opt-in state and chosen folder
* cached search results and suggestions used by the internal home/search page

The persisted browser-state payload is compressed before being written to disk. When Electron safe storage is available, that payload is also protected with OS-backed encryption. If OS-backed protection is unavailable, the runtime can fall back to credential-backed AES-GCM protection when available. If neither protection path is available, the payload is still stored locally in compressed form.

The application does not automatically upload this browser-state data.

## Optional Managed Update Flow

If all of the following are true:

* the installer build was configured with an update server
* the end user selected `Automatic updates` during install
* the installer or browser can reach that configured server

the installer or browser may send a minimal update-registration record to the owner-run update server, request the latest published release metadata from that server, and download the installer URL published for that release.

That record is limited to:

* install ID
* selected update mode
* app version
* install directory
* device host name
* platform
* architecture
* last-seen timestamp
* source IP address as observed by the update server

This optional managed-update flow does not include browsing history, bookmarks, saved passwords, search queries, page content, imported files, or diagnostics contents.

Owner-only update-server actions such as dashboard access, viewing the full client list, and publishing releases are restricted to the server owner machine by default and are not exposed as normal end-user browser actions.

If the published installer URL points to a third-party host such as GitHub releases, that download host will see a normal installer download request in the same way it would for any direct browser download.

## Diagnostics And Runtime Checks

Diagnostics are generated locally.

Current behavior:

* runtime diagnostic entries are written to a local diagnostics directory
* users can manually export an encrypted `.bdiag` diagnostics report
* no automatic diagnostics upload path is implemented
* the runtime checks panel shows local status for storage protection and other on-device runtime state

Diagnostic data remains on-device unless the user explicitly chooses to export it.

## Network Activity

This browser is not offline-only. Outbound network traffic still occurs when the user does one of the following:

* opens websites or web apps
* signs into websites
* loads page assets such as images, scripts, fonts, and media
* downloads files
* uses external search engines directly
* uses search from `bubbles://home`

When the user performs a search from `bubbles://home`, the application may contact DuckDuckGo and Google endpoints to assemble results, related searches, and suggestions on that internal page.

## Music Player Privacy

The Music Player is local-only and off by default.

* No music folder is scanned until the user explicitly agrees inside the Music Player window.
* The user can choose the default Music folder or another local folder.
* Playback uses local files only.
* The application does not upload or share the user's music files.

## Summary

BubblesTheDev Web Browser is intentionally designed without built-in surveillance, telemetry, analytics, automatic remote reporting, cloud sync, or a built-in silent first-party auto-update client.

The privacy model is local-first:

* browser settings, history, bookmarks, passwords, imported extension metadata, VPN profile metadata, permissions, and search cache stay on-device
* persisted browser state is compressed locally and protected when an available encryption path exists
* diagnostics stay local unless the user exports them
* music library access requires explicit consent before any scan begins
* optional managed updates apply only to installs that explicitly choose `Automatic updates`, and that flow is limited to update-management fields, release metadata checks, and installer downloads
* browsing, downloads, and built-in search still create normal traffic to the websites and providers the user chooses to use

Any future feature that materially changes this privacy posture should be disclosed in updated privacy and release documentation.
