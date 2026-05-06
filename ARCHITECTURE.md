# BubblesTheDev Web Browser

## Architecture Overview

This document explains the high-level architecture of BubblesTheDev Web Browser and how the main runtime pieces interact.

Current release documentation target: version `1.0.30`.

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
* app menu and shortcut/help dialogs
* Chromium-style page and tab context menu construction in the main process
* split-view shell state, toolbar visibility state, bookmark bar state, theme state, and site permission policy state
* background tab suspension under memory pressure
* trusted-source-aware download handling and local protection-provider checks
* site-compatible passkey and WebAuthn browser behavior
* installer-managed automatic-update registration, install-path tracking, update-server check-in, and managed release checks

## Window Model

The browser uses a main BrowserWindow shell plus BrowserView instances for tabs.

Additional helper windows are opened as separate BrowserWindow instances for focused tools:

* Downloads
* Task Manager
* Music Player
* popup login windows when required by site auth flows

This keeps the browser UI separated from tab content while still allowing site-compatible popup behavior.

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
* per-site permission settings
* toolbar visibility
* bookmark bar visibility
* selected shell theme
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

If the build enables the owner-run update server flow, the runtime can query the latest published release metadata and present update status through the app menu's manual `Check for Updates` entry. Installed builds register with the owner-run update server at startup, poll for newer releases, download the installer, and launch it through the automatic-update flow. The current managed-update path includes installed-versus-available version feedback, a pre-install confirmation dialog, a dedicated download-progress window with percentage and ETA feedback, and a manual fallback path that points the user to the downloaded installer folder if automatic launch fails. The update flow fails closed unless both the release metadata URL and installer URL use `https:` and the published release includes a valid SHA-256 hash for installer verification before launch. The registration payload is limited to update-management fields and is separate from the encrypted browser-state store.

### Installer and uninstall model

Installer builds are configured through `electron-builder` with NSIS and a custom include script in `build/installer.nsh`.

That installer layer currently handles:

* custom install directory selection
* writable-path validation before install continues
* explicit support messaging for external HDDs, external SSDs, and USB flash drives
* registry-backed tracking of install location metadata used by update and uninstall flows
* install-linked data relocation behavior for supported external-drive installs
* installer-time automatic-update registration for installed builds

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

### Download protection

Download protection runs through a modular provider chain. The current Windows path combines:

* Windows Defender CLI scanning when available
* Authenticode signature verification for executable or script-like file types
* browser-side heuristics and protected open-file gating

The providers run independently so one unavailable provider does not disable the entire protection flow.

On top of that protection chain, the runtime also supports user-facing download flows that aim to reduce unnecessary friction for trusted sources such as GitHub while keeping the browser's local protection checks in place.

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
* managed updates restricted to verified HTTPS releases with SHA-256 installer validation
* password save and reveal flows restricted to secure contexts
* imported extensions loaded without local file access and reviewed for high-risk permissions
* stricter renderer CSP with `object-src 'none'`, `base-uri 'none'`, `frame-ancestors 'none'`, and limited resource directives

## Summary

The application is a BrowserWindow plus BrowserView desktop browser with a local internal home page, local persistence, request filtering, helper windows, modern Chromium-style shell menus, managed automatic updates, and optional local media features. The runtime keeps browser data on-device while still supporting normal web traffic, trusted-download handling, external-drive install flows, and modern site login behavior such as passkeys.
