# BubblesTheDev Web Browser

## Architecture Overview

This document explains the high-level architecture of BubblesTheDev Web Browser and how the main runtime pieces interact.

Current release documentation target: version `1.0.63`.

## Design Goals

The project is built around a few core goals:

* local-first data storage
* predictable browser behavior
* Electron security best practices
* minimal built-in background services
* simple, maintainable feature wiring

## Core Stack

| Layer | Technology |
| --- | --- |
| Application framework | Electron |
| Rendering engine | Chromium |
| Runtime | Node.js |
| UI | HTML, CSS, JavaScript |
| Packaging | electron-builder with NSIS |

## Main Runtime Shape

The main process lives in `browser-runtime.js` and is responsible for:

* application lifecycle
* BrowserWindow creation
* BrowserView tab creation and navigation
* session setup and request interception
* secure local persistence in a compressed browser data store
* downloads and diagnostics windows
* task manager window
* local Music Player window
* local Music Downloader queueing, cooldown, validation, and media-processing pipeline
* app menu and shortcut/help dialogs
* Chromium-style page and tab context menu construction in the main process
* split-view shell state, toolbar visibility state, bookmark bar state, theme state, and site permission policy state
* background tab suspension under memory pressure
* adaptive gaming and streaming performance management for Windows
* isolated Streaming Hub session management for supported streaming services
* trusted-source-aware download handling and local protection-provider checks
* site-compatible passkey and WebAuthn browser behavior
* installer-managed automatic-update registration, install-path tracking, update-server check-in, first-launch follow-up verification, and managed release checks

## Window Model

The browser uses a main BrowserWindow shell plus BrowserView instances for tabs.

Additional helper windows are opened as separate BrowserWindow instances for focused tools:

* Downloads
* Task Manager
* Music Player
* Music Downloader
* popup login windows when required by site auth flows
* hardened streaming sign-in popup windows for supported streaming services

This keeps the browser UI separated from tab content while still allowing site-compatible popup behavior.

## Streaming Hub Architecture

Version `1.0.63` includes a Streaming Hub that opens supported streaming services inside isolated BrowserView tabs rather than the shared default browser session.

Supported services currently include:

* Disney+ using `persist:stream_disney`
* Hulu using `persist:stream_hulu`
* Max using `persist:stream_max`
* Netflix using `persist:stream_netflix`
* Paramount+ using `persist:stream_paramount`
* Prime Video using `persist:stream_prime`
* Apple TV+ using `persist:stream_appletv`
* AMC+ using `persist:stream_amcplus`
* Peacock using `persist:stream_peacock`
* Crunchyroll using `persist:stream_crunchyroll`
* YouTube TV using `persist:stream_youtubetv`
* Sling TV using `persist:stream_slingtv`
* Pluto TV using `persist:stream_plutotv`
* The Roku Channel using `persist:stream_rokuchannel`
* Plex using `persist:stream_plex`
* Discovery+ using `persist:stream_discovery`
* ESPN+ using `persist:stream_espn`
* MGM+ using `persist:stream_mgm`
* STARZ using `persist:stream_starz`
* Tubi using `persist:stream_tubi`

The streaming architecture currently uses:

* dedicated persistent Electron partitions per service
* hardened BrowserView `webPreferences` with `contextIsolation`, `sandbox`, disabled `nodeIntegration`, disabled `enableRemoteModule`, `webSecurity`, blocked insecure content, and disabled spellcheck
* no general-purpose browser preload bridge inside streaming tabs
* per-service navigation allowlists enforced in the main process
* hardened popup login windows with one-popup-per-service enforcement and cooldown protection
* blocked downloads and blocked file-scheme access inside isolated streaming sessions
* strict permission handling that allows only safe playback-oriented cases
* validated IPC handlers for opening a streaming service and clearing its isolated session data

The Streaming Hub is intentionally designed as an isolated browser feature, not as a credential interception layer, proxy login system, or session extractor.

## Browser Navigation Model

The address bar resolves user input in two paths:

* direct URLs and bare domains open as navigations
* plain-text input is routed to Bubbles Search Engine

The default home page is `bubbles://home`, which maps to a local HTML page bundled with the app.

## Bubbles Search Engine

The Bubbles home/search page is an internal page implemented with:

* `bubbles-home.html`
* `bubbles-home.js`
* `browserview_preload.js`

The main process provides Bubbles state and search payloads through IPC.

The search path can use:

* DuckDuckGo result and instant-answer data
* Google result parsing and suggestion data

The internal Bubbles page renders those provider results directly on the page instead of redirecting users away from the bundled home/search surface.

That provider traffic occurs only after the user performs a search from the Bubbles page.

## Privacy-Sensitive Features

### Local persistence

The browser stores local state in the Electron `userData` directory.

Current persisted fields include:

* homepage
* history
* bookmarks
* saved passwords in a separate encrypted password vault with on-demand reveal
* imported extension records for Chromium-based browser extensions loaded into the main session
* imported ProtonVPN WireGuard profile metadata
* Music Player opt-in state and chosen folder
* Music Downloader consent state, approved download folder, queue metadata, abuse lock state, and persisted cooldown state
* performance optimization settings for gaming and streaming mode behavior, including stream-stability preferences
* first-launch managed update follow-up state used after a fresh install
* per-site permission settings
* toolbar visibility
* bookmark bar visibility
* selected shell theme
* service-specific persistent streaming-session partitions for supported Streaming Hub providers
* cached internal search results and suggestions for the Bubbles home/search page

Separate from the main browser-state store, installer builds can also use `%APPDATA%\BubblesTheDev Web Browser\update-preferences.ini` to record installer-managed update metadata such as:

* the installer-managed automatic-update mode
* the tracked install directory
* the install drive root
* the detected install drive type
* the local install ID used by the managed update flow

When the browser is installed to an external drive instead of `C:`, that install-path metadata can be used by the installer and uninstall flow to keep install-linked data associated with the selected external location.

Persisted browser state is compressed before it is written to disk. When Electron safe storage is available, the compressed payload is also encrypted with OS-backed protection. If OS-backed protection is unavailable, the runtime can fall back to credential-backed AES-GCM protection when available.

Saved passwords are stored separately from the main browser data file. Each password value is encrypted before it is written to disk, and the password vault file is also wrapped in the same encrypted persistence envelope. Password-save prompts and reveal flows are restricted to secure contexts such as `https:` pages or local loopback development hosts.

Extension imports and imported ProtonVPN config metadata are stored in the same local browser data store so they can be restored when the browser starts again.

If the build enables the update flow, the runtime can check for newer release metadata and present update status through the app menu's manual `Check for Updates` entry. Installed builds can periodically check for a newer version, download the installer, and launch it through the automatic-update flow when available. The current managed-update path includes installed-versus-available version feedback, a pre-install confirmation dialog, a dedicated download-progress window with percentage and ETA feedback, and a manual fallback path that points the user to the downloaded installer folder if automatic launch fails. The update flow fails closed unless both the metadata URL and installer URL use `https:` and the published release includes a valid SHA-256 hash for installer verification before launch. Any registration or status payload used for update management is limited to update-related fields and remains separate from the encrypted browser-state store.

### Installer and uninstall model

Installer builds are configured through `electron-builder` with NSIS and a custom include script in `build/installer.nsh`.

That installer layer currently handles:

* custom install directory selection
* writable-path validation before install continues
* license acceptance plus a required legal acknowledgement step before install continues
* explicit support messaging for external HDDs, external SSDs, and USB flash drives
* registry-backed tracking of install location metadata used by update and uninstall flows
* install-linked data relocation behavior for supported external-drive installs
* installer-time automatic-update registration for installed builds
* marking fresh installs for a Chrome-like first-launch managed update follow-up check

The uninstall layer uses a generated PowerShell cleanup script plus final NSIS cleanup passes to:

* remove the tracked install directory, including custom install paths
* clean stale uninstall metadata and tracked registry keys
* kill running browser processes before cleanup
* verify whether leftovers remain after cleanup
* re-check reported leftovers at the end so warning dialogs only reflect paths that still exist

During uninstall, the user is prompted to choose which local data categories should also be removed. The current choices are:

* browser profile data, which includes history, bookmarks, homepage, permissions, and the main browser-state store
* saved passwords
* diagnostics reports
* local update preferences

If a category is left unchecked, uninstall removes the installed app files and install metadata while leaving that local data in place for a future reinstall or update.

### Extensions and VPN integration

The browser can scan common Chromium browser profile folders on Windows and import existing unpacked extension folders from Edge, Chrome, Brave, and Opera into the persistent main Electron session.

Imported extensions are intentionally gated behind explicit user consent, runtime enablement, path normalization, and manifest validation. The runtime rejects symlinked extension folders, restricts imports to Manifest V2 or V3 layouts, disables local file access when loading imported extensions, and shows an extra warning dialog for extensions that request broad or higher-risk capabilities such as `<all_urls>`, `nativeMessaging`, `proxy`, `debugger`, or `webRequestBlocking`.

The browser also detects installed VPN clients for NordVPN, ExpressVPN, ProtonVPN, and WireGuard. A VPN manager panel can validate and import ProtonVPN WireGuard `.conf` files for local reuse, while installed VPN applications can be launched from the browser shell.

### Diagnostics

Diagnostics are generated locally and can be exported manually by the user as encrypted report files. No automatic upload path is implemented.

The browser shell also exposes a runtime checks panel backed by the same diagnostics snapshot so users can validate active storage protection, enabled download scan providers, ad-block counters, executable path, and current performance state without leaving the app.

### Gaming and streaming performance manager

Version `1.0.63` includes the current Windows-focused performance manager implemented in the main process and exposed to the browser UI through strict preload IPC.

The performance layer currently uses:

* local PowerShell-based process sampling for OBS Studio and Streamlabs Desktop detection
* foreground-window checks for fullscreen-like and borderless-window application detection
* Windows performance counters for CPU and GPU pressure signals
* adaptive browser policy changes for hidden-tab frame rate, tab sleeping thresholds, background browser FPS caps, and background activity reduction
* safer process-priority adjustments for browser and renderer workloads during active gaming or streaming sessions
* stream-stability prioritization that backs the browser off more aggressively when OBS or Streamlabs is active during a gaming session
* adaptive detector sampling that reduces heavy polling while gaming is already detected
* broader OBS process matching, more reliable process discovery, and more forgiving borderless-window heuristics so real gameplay sessions are less likely to be missed
* fresh on-demand detector sampling when the user opens or refreshes the Performance panel, plus a stronger OBS fallback path when the heavier probe is unreliable
* lighter default browser-state payloads so the renderer does not rebuild full performance summaries during normal tab updates unless the user explicitly requests the detailed panel state
* short-lived app-metrics and performance-summary caching to reduce repeated CPU and memory overhead from normal browser shell updates
* a visible media memory saver path that can lower the frame-rate cap for heavy visible media tabs
* a lighter cached diagnostics snapshot path so Runtime Checks can open without always collecting full app metrics

That logic is intentionally local-only and anti-cheat-friendly. It does not inject into games, hook anti-cheat systems, modify protected processes, or rely on kernel drivers.

### Music Downloader

The Music Downloader feature introduced in version `1.0.37` is implemented as a local-only, main-process-controlled media pipeline with a dedicated preload bridge and isolated renderer UI.

The downloader architecture currently includes:

* `services/queueManager.js` for concurrency limits, queue tracking, duplicate blocking, cooldown timers, and persisted state restoration
* `services/ytDlpService.js` for controlled `yt-dlp`, `ffmpeg`, and `ffprobe` execution through `spawn`
* `services/binaryManager.js` for bundled binary existence checks and SHA-256 integrity verification
* `utils/validateUrl.js`, `utils/sanitizeFilename.js`, `utils/rateLimiter.js`, and `utils/securityGuard.js` for input validation and abuse controls
* isolated temp-directory processing with final output validation before files are moved into the approved download folder
* normalization support for certain YouTube watch-page radio parameters such as `list=RD<videoId>&start_radio=1` when they still point to a single approved video URL

The downloader remains intentionally restricted to approved YouTube single-video audio downloads and does not expose arbitrary command execution or renderer-side filesystem access.

### Download protection

Download protection runs through a modular provider chain. The current Windows path combines:

* Windows Security Center antivirus detection so the browser can see which registered antivirus products are present on the device
* Windows Attachment Services (`IAttachmentExecute`) save and execute handoff for downloaded files
* Mark of the Web tagging for downloaded files so Windows and other security tools can treat them as internet-origin files
* Windows Defender CLI scanning when available
* Authenticode signature verification for executable or script-like file types
* browser-side heuristics and protected open-file gating

The providers run independently so one unavailable provider does not disable the entire protection flow.

On top of that protection chain, the runtime also supports user-facing download flows that aim to reduce unnecessary friction for trusted sources such as GitHub while keeping the browser's local protection checks in place.

For executable downloads opened from the browser's Downloads UI, the current runtime first attempts a Windows Attachment Services execution handoff before falling back to the normal shell open path. That design is intended to let the user's registered Windows security stack participate in file-execution checks without requiring vendor-specific antivirus integrations in the browser itself.

### Context menus

The browser shell builds page and tab context menus in the main process by using Electron menu primitives instead of delegating those menus to untrusted page content.

The current context-menu layer supports:

* dynamic page menus based on whether the user clicked a link, image, media element, editable field, or general page surface
* tab-strip menus for tab creation, duplication, pinning, muting, moving tabs to a new window, split-view actions, and close variants
* a lightweight Chromium-style interaction model that stays within the local browser shell

### Shell theming and toolbar controls

The browser shell supports multiple muted built-in themes rather than a single dark-mode toggle. Theme selection is owned by the main process, persisted with browser state, and applied by the renderer through CSS custom properties.

Toolbar visibility is persisted separately from the bookmark bar so users can hide the main button row while still keeping address-bar access and the quick-access menu available.

### Passkey and WebAuthn compatibility

The runtime relies on Chromium and Electron secure-context behavior for passkey-compatible sites rather than implementing a custom authentication system.

That means the browser architecture is designed to allow supported websites to use normal WebAuthn APIs and operating-system authenticator flows such as Windows Hello, while keeping those authentication exchanges between the site, Chromium, and the platform authenticator.

### Memory safeguards

Inactive BrowserView tabs already use background throttling. The runtime also adds a second layer that can suspend hidden tabs under sustained tab-count or working-set pressure, then restore them automatically when the user returns to them.

This is especially relevant on streaming-heavy sites because the memory guard and tab suspension logic are intended to reduce overall working-set growth without changing the core BrowserView tab model.

In version `1.0.63`, those safeguards still integrate with the gaming and streaming performance manager so suspension thresholds, hidden-tab rendering cadence, background browser FPS behavior, stream-stability controls, adaptive detector sampling, lighter summary generation, and the visible media saver path can respond more cleanly during heavier sessions.

### Managed update follow-up behavior

Version `1.0.63` also documents the current managed-update flow more clearly.

Installed builds can now use:

* installer-time update registration and release check-in
* a one-time first-launch managed update follow-up after a fresh install
* normal later update checks from the browser runtime and app menu

This creates a more Chrome-like install experience without adding a silent background updater service. The installer does one managed setup pass, then the browser can do one immediate first-launch follow-up verification before returning to its normal update cadence.

### Music Player

The Music Player is implemented with:

* `musicplayer.html`
* `musicplayer_renderer.js`
* `musicplayer_preload.js`

The main process scans supported audio files only after the user explicitly agrees in the Music Player UI. The scan targets either the user's default Music folder or a folder the user selects.

## Security Model

Security-sensitive defaults include:

* `contextIsolation: true`
* `nodeIntegration: false`
* renderer sandbox enabled
* session-based request filtering for ads and trackers
* main-process-owned context menu creation
* secure local diagnostics export and storage protection checks
* isolated roles for browser, downloads, task manager, Bubbles page, and Music Player IPC
* main-process-only performance detection and policy control with renderer access limited to read and settings-update IPC
* main-process-only downloader execution with bundled-binary verification and strict YouTube-only validation
* Windows-native download protection wiring through Windows Security Center detection, Attachment Services handoff, Mark of the Web tagging, Authenticode checks, and Windows Defender fallback scanning
* managed updates restricted to verified HTTPS releases with SHA-256 installer validation
* password save and reveal flows restricted to secure contexts
* imported extensions loaded without local file access and reviewed for high-risk permissions
* stricter renderer CSP with `object-src 'none'`, `base-uri 'none'`, `frame-ancestors 'none'`, and limited resource directives

## Summary

The application is a BrowserWindow plus BrowserView desktop browser with a local internal home page, local persistence, request filtering, helper windows, modern Chromium-style shell menus, managed automatic updates with first-launch follow-up verification, adaptive gaming and streaming performance controls, isolated streaming-service sessions for supported providers, and optional local media features. The runtime keeps browser data on-device while still supporting normal web traffic, trusted-download handling, external-drive install flows, controlled local media processing, privacy-first embedded streaming sessions, and modern site login behavior such as passkeys.
