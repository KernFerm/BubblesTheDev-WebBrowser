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
* local persistence in `browser_data.json`
* downloads and diagnostics windows
* task manager window
* local Music Player window
* app menu and shortcut/help dialogs

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
* Google suggestion data

That provider traffic occurs only after the user performs a search from the Bubbles page.

## Privacy-Sensitive Features

### Local persistence

The browser stores local state in the Electron `userData` directory.

Current persisted fields include:

* homepage
* history
* bookmarks
* Music Player opt-in and chosen folder

### Diagnostics

Diagnostics are generated locally and can be exported manually by the user. No automatic upload path is implemented.

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
