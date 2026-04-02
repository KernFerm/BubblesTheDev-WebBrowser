# BubblesTheDev Web Browser

## Architecture Overview

This document explains the high-level architecture of BubblesTheDev Web Browser and how the main runtime pieces interact.

## Design Goals

The project is built around a few core goals:

* local-first data storage
* predictable browser behavior
* Electron security best practices
* minimal first-party background services
* simple, maintainable feature wiring

## Core Stack

| Layer | Technology |
| --- | --- |
| Application framework | Electron |
| Rendering engine | Chromium |
| Runtime | Node.js |
| UI | HTML, CSS, JavaScript |
| Packaging | electron-builder |

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
* split-view shell state, bookmark bar state, and site permission policy state
* background tab suspension under memory pressure

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

The main process provides the Bubbles state and search payloads through IPC.

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
* Music Player opt-in and chosen folder
* per-site permission settings

Persisted browser state is compressed before it is written to disk. When Electron safe storage is available, the compressed payload is also encrypted with OS-backed protection.

### Diagnostics

Diagnostics are generated locally and can be exported manually by the user as encrypted report files. No automatic upload path is implemented.

The browser shell also exposes a runtime checks panel backed by the same diagnostics snapshot so users can validate active security storage, enabled download scan providers, ad-block counters, executable path, and current performance state without leaving the app.

### Download protection

Download protection runs through a modular provider chain. The current Windows path combines:

* Windows Defender CLI scanning when available
* Authenticode signature verification for executable or script-like file types
* browser-side heuristics and protected open-file gating

The providers run independently so one unavailable provider does not disable the entire protection flow.

### Memory safeguards

Inactive BrowserView tabs already use background throttling. The runtime now adds a second layer that can suspend hidden tabs under sustained tab-count or working-set pressure, then restore them automatically when the user returns to them.

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
* isolated roles for browser, downloads, task manager, Bubbles page, and Music Player IPC


## Summary

The application is a BrowserWindow plus BrowserView desktop browser with a local internal home page, local persistence, request filtering, helper windows, and optional local media features. The runtime keeps first-party data on-device while still supporting normal web traffic and modern site login behavior.
