# Data Collection and Privacy Notice

Update note for readers: parts of this notice originated around version `1.0.65`. The current notice now reflects version `1.1.30`, and the later sections extend the earlier baseline with the newer local AI, privacy-safe diagnostics, accessibility, installer-behavior, multilingual localization, and panel-polish updates.

This notice reflects the current privacy posture of BubblesTheDev Web Browser version `1.1.30`.

BubblesTheDev Web Browser is designed to keep browser data local to the user's device unless the user chooses to browse external websites, use external search providers, download files, export diagnostics manually, or enable privacy-safe diagnostics.

The application does not include built-in telemetry, analytics SDKs, automatic crash upload services, cloud synchronization, a built-in silent auto-updater client, or AI monitoring systems.

Specifically:

* No telemetry services are embedded in the application.
* No background analytics services are executed.
* No behavioral tracking mechanisms are included by the application itself.
* No advertising identifiers are generated or transmitted by the application itself.
* No cloud-based synchronization features are implemented.
* Automatic diagnostics upload is not enabled by default.
* No analytics or telemetry service is contacted for ordinary browser data collection purposes.

Version `1.1.30` includes the current browser behavior around the Streaming Hub, isolated streaming sessions, stronger sign-in popup protections, tighter streaming safety rules, local-first media handling, the hardened Music Downloader, gaming and streaming performance controls, lighter background performance handling, deferred startup work, passkey compatibility, external-drive install handling, the newer local AI plus privacy-safe diagnostics controls, smoother `AI & Diagnostics` panel behavior, persistent local accessibility settings, and the expanded local-only multilingual language system. Those behaviors do not add built-in telemetry or analytics collection to the browser.

## Local Browser Data

Browser data is stored on the user's device in the browser's local app-data folder.

Current persisted data includes:

* homepage settings
* browsing history
* bookmarks
* bookmark-import consent choices at runtime
* saved password metadata and encrypted password vault entries
* imported Chromium extension metadata for extensions the user chooses to load
* imported ProtonVPN profile metadata for valid `.conf` files the user chooses to add
* toolbar visibility
* bookmark bar visibility
* selected shell theme
* per-site permission settings
* service-specific persistent streaming-session partitions for supported Streaming Hub providers
* optional Music Player opt-in state and chosen folder
* Music Downloader consent state, queue state, cooldown timing, abuse-lock timing, recent job history, and approved output folder
* cached search results and suggestions used by the internal home/search page
* install-linked path metadata used to track custom or external-drive installs
* accessibility settings such as reading, focus, motion, contrast, spacing, and related user-preference options
* language preferences, locale override choices, and local localization integrity metadata
* a user-visible Desktop folder named `BubblesTheDev - WebBrowser Update Notes` and versioned release-notes text file when the installed update flow refreshes bundled release notes

Current runtime-only state also includes transient Streaming Hub popup cooldown and window-tracking data held in memory while the browser is open.

Language detection, language fallback, formatting, and language diagnostics remain on-device. The browser does not upload language usage, keyboard behavior, translation choices, or regional formatting data.

The current multilingual registry now includes hundreds of supported locale packs and hundreds of base language families. That broader language footprint remains local-only. Expanding the supported language list does not add cloud translation, remote locale fetching, telemetry, analytics, or user-language upload behavior.

Stored browser data is compressed before it is written to disk. When stronger system-backed protection is available, the browser uses it. If that protection is unavailable, the data still remains stored locally in compressed form.

The application does not automatically upload this browser-state data.

Installed update behavior may also write bundled release notes into a Desktop folder so the current release notes remain user-visible locally. That behavior is part of the local installer and update experience rather than a telemetry or analytics mechanism.

## Diagnostics And Runtime Checks

Diagnostics are generated locally.

Current behavior:

* runtime diagnostic entries are written to a local diagnostics directory
* users can manually export an encrypted `.bdiag` diagnostics report
* privacy-safe diagnostics remain disabled by default unless the user enables them
* users can optionally allow privacy-safe severe-event reporting where supported
* the runtime checks panel shows local status for storage protection, performance mode state, and other on-device runtime state

Diagnostic data remains on-device unless the user explicitly chooses to export it or explicitly enables privacy-safe reporting.

## Uninstall And Data Retention

The uninstaller always removes the installed application files. It can also remove local data by category when the user chooses to do so.

Current removable categories include:

* browser profile data
* saved passwords
* diagnostics reports
If a category is left unchecked during uninstall, that data remains on the device for a future reinstall or update.

Uninstall cleanup also:

* targets tracked custom install paths
* removes stale uninstall metadata and registry ghosts
* re-checks reported leftover paths before showing a warning, which reduces false leftover alerts

If the browser is installed on an external drive instead of `C:`, install-linked browser data and related install-path tracking can follow that selected external location instead of staying only on the main system drive.

## Network Activity

This browser is not offline-only. Outbound network traffic still occurs when the user does one of the following:

* opens websites or web apps
* signs into websites
* signs into supported streaming services through the Streaming Hub
* loads page assets such as images, scripts, fonts, and media
* downloads files
* uses external search engines directly
* uses search from `bubbles://home`
* uses websites that request passkey or WebAuthn authentication through the platform browser flow

When the user performs a search from `bubbles://home`, the application may contact DuckDuckGo and Google services to assemble results, related searches, and suggestions on that internal page.

When the user downloads files, the browser may perform normal download-related handling such as trusted-source checks, Windows-aware safety checks, destination selection, and local save operations. That behavior is separate from telemetry and is part of the browser's on-device download protection and file-handling flow.

When the user signs in with a passkey on a supported website, the authentication request is between the user, the operating system or authenticator, and that website's login flow. The browser's role is compatibility and secure-context support; it does not create a separate Bubbles-operated passkey cloud service.

Saved-password capture and reveal flows are limited to secure contexts such as `https:` pages and local loopback development hosts. The browser does not intentionally offer those flows to arbitrary insecure pages.

When the user signs into a supported streaming service through the Streaming Hub, that service still sees normal login traffic just as it would in another browser. The browser keeps each supported service in its own dedicated session, does not use the shared default session for those services, and does not intentionally expose streaming cookies or tokens to normal page code.

As of version `1.1.30`, the currently supported Streaming Hub services are Disney+, Hulu, Max, Netflix, Paramount+, Prime Video, Apple TV+, AMC+, Peacock, Crunchyroll, YouTube TV, Sling TV, Pluto TV, The Roku Channel, Plex, Discovery+, ESPN+, MGM+, STARZ, and Tubi.

## Music Player Privacy

The Music Player is local-only and off by default.

* No music folder is scanned until the user explicitly agrees inside the Music Player window.
* The user can choose the default Music folder or another local folder.
* Playback uses local files only.
* The application does not upload or share the user's music files.

## Music Downloader Privacy

The Music Downloader is also local-first and intentionally restricted.

* It requires explicit responsible-use consent before downloads can be queued.
* It accepts only supported YouTube single-video URLs and rejects playlists, channels, livestreams, Shorts, and bulk-style flows.
* It can normalize certain auto-added YouTube radio/watch-page parameters back to the canonical single-video URL without enabling playlist downloads.
* It uses bundled local binaries for download, probing, and conversion instead of cloud processing.
* It stores queue, cooldown, and abuse-control state locally so those controls persist across restarts.
* It processes media inside an isolated local temp directory before moving validated mp3 output into the approved download folder.
* It does not add built-in tracking, analytics, or private-file upload behavior.

## Summary

BubblesTheDev Web Browser is intentionally designed without built-in surveillance, telemetry, analytics, automatic remote reporting by default, cloud sync, or a built-in silent auto-update client.

The privacy model is local-first:

* browser settings, history, bookmarks, passwords, imported extension metadata, VPN profile metadata, permissions, and search cache stay on-device
* toolbar visibility, bookmark bar visibility, and the selected shell theme stay on-device
* persisted browser state is compressed locally and protected when an available encryption path exists
* diagnostics stay local unless the user exports them or explicitly enables privacy-safe reporting
* supported streaming sessions stay isolated per service and can be cleared independently
* music library access requires explicit consent before any scan begins
* music downloader state, cooldown controls, and validated output handling stay on-device
* gaming and streaming optimization logic, including OBS-aware throttling, improved borderless-game and streaming-session detection, fresh local status sampling, and adaptive detector sampling, stays on-device
* imported extensions require explicit user action, load without local file access, and may show extra warnings for higher-risk permission requests
* download protection can consult Windows-registered antivirus status and use Windows-native attachment handling without sending browsing data to a Bubbles-operated cloud service
* browsing, downloads, and built-in search still create normal traffic to the websites and providers the user chooses to use

Any future feature that materially changes this privacy posture should be disclosed in updated privacy and release documentation.

## Version 1.1.16 Addendum

Version `1.1.16` keeps the same local-first privacy direction described above while carrying forward the local AI and privacy-safe diagnostics layer, the broader local accessibility preferences, and the installer and startup improvements introduced in `1.1.15`.

Important user-facing privacy changes in `1.1.16`:

* the browser now includes an `AI & Diagnostics` panel
* local AI summarization can run on-device
* local AI runtime analysis can run on-device
* standard profiles can keep encrypted profile-isolated AI memory locally
* incognito AI memory is non-persistent
* privacy-safe diagnostics are disabled by default
* users can preview privacy-safe diagnostic data before sending
* users can manually send a privacy-safe report
* users can send a privacy-safe test report
* users can optionally allow privacy-safe severe-event reporting
* accessibility preferences such as reading, focus, contrast, and motion settings stay local on the device

## Local AI Privacy Addendum For 1.1.16

Version `1.1.16` keeps optional on-device AI features in place.

Current local AI privacy behavior:

* offline summarization runs locally on the device
* runtime analysis runs locally on the device
* AI memory is isolated per profile
* standard profiles can keep encrypted AI memory locally
* incognito AI memory does not persist across sessions
* guest or other ephemeral contexts are intended to avoid persistent AI memory
* AI memory is not described as a cloud-sync feature
* AI memory contents are not intended to be part of privacy-safe diagnostics payloads

## Diagnostics Addendum For 1.1.16

The earlier sections above describe the older local diagnostics and export behavior. Version `1.1.16` keeps that extended model user-controlled.

Current additional diagnostics behavior in `1.1.16`:

* privacy-safe diagnostics remain disabled by default
* users can preview approved diagnostic data before sending
* users can manually send a privacy-safe report
* users can send a privacy-safe test report
* users can optionally allow privacy-safe severe-event reporting
* public documentation intentionally avoids private operational details for that reporting path

Privacy-safe diagnostics are intended to remain narrower than general browser data collection. They are not meant to include browsing history, passwords, AI memory contents, personal documents, or website content.

## Updated Summary For 1.1.16

The main privacy conclusion from the earlier notice still holds in `1.1.16`:

* browser data stays local by default
* AI memory stays local and isolated per profile
* incognito AI memory does not persist across sessions
* diagnostics remain local unless the user exports them or explicitly enables privacy-safe reporting
* the browser still does not include a built-in telemetry or analytics system as part of normal everyday browsing
