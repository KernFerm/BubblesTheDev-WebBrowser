# BubblesTheDev Web Browser

## Browser Privacy Comparison

This document reflects the current privacy posture of BubblesTheDev Web Browser version `0.6.3`.

The goal is accuracy, not marketing language. The browser does not implement first-party telemetry, analytics SDKs, cloud sync, auto-updater endpoints, or automatic diagnostics upload. It does, however, make normal network requests when the user browses the web or uses built-in search features.

## High-Level Comparison

This table is intentionally high-level. Mainstream browsers change over time, but the Bubbles column below matches the current codebase.

| Feature | BubblesTheDev Web Browser | Google Chrome | Microsoft Edge | Brave | Firefox |
| --- | --- | --- | --- | --- | --- |
| First-party telemetry | Not implemented | Yes | Yes | Limited | Limited |
| Analytics SDKs in app code | None | Yes | Yes | Limited | Limited |
| Automatic diagnostics upload | No | Yes | Yes | Limited | Limited |
| Cloud sync requirement | None | Optional | Optional | Optional | Optional |
| Auto-updater service | Not implemented | Present | Present | Present | Present |
| Local browser data storage | Yes | Yes | Yes | Yes | Yes |
| Local persistence protection | Brotli-compressed, with OS-backed or credential-backed encryption when available | Yes | Yes | Yes | Yes |
| Manual encrypted diagnostics export | Yes | Varies | Varies | Varies | Varies |
| Per-site permission controls | Yes | Yes | Yes | Yes | Yes |
| Ad and tracker filtering built in | Yes | Limited | Limited | Yes | Limited |
| Search-provider requests from built-in home/search page | Yes, after user search on `bubbles://home` | Yes | Yes | Yes | Yes |
| Local-only music library scan | Yes, explicit opt-in | N/A | N/A | N/A | N/A |

## Local-First Behavior

BubblesTheDev Web Browser stores browser state in the Electron `userData` directory.

Current persisted data includes:

* homepage setting
* browsing history
* bookmarks
* bookmark bar visibility
* Music Player opt-in state and chosen folder
* per-site permission settings
* cached search results and suggestions

The persisted browser-state payload is compressed before it is written to disk. When Electron safe storage is available, that payload is also protected with OS-backed encryption. If that is unavailable, the runtime falls back to credential-backed AES-GCM protection when possible.

The application does not automatically upload this browser-state data.

## Diagnostics And Runtime Checks

Diagnostics are generated locally.

Current behavior:

* runtime diagnostic entries are written to the local diagnostics directory
* users can export an encrypted `.bdiag` diagnostics report manually
* no automatic diagnostics upload path is implemented
* the runtime checks panel surfaces local status for storage protection, enabled download-scan providers, ad-block counters, executable path, and performance state

This means diagnostic data stays on-device unless the user explicitly chooses to export it.

## What Still Uses The Network

This browser is not offline-only. Network traffic still occurs when the user does one of the following:

* opens websites or web apps
* signs into websites
* loads page assets such as images, scripts, fonts, and media
* downloads files
* uses external search engines directly
* uses the bundled `bubbles://home` search experience

The internal Bubbles search page can contact DuckDuckGo and Google endpoints to assemble results, related searches, and suggestions after the user performs a search.

## Music Player Privacy Model

The Music Player is local-only.

* It is disabled by default.
* No folder scan starts until the user explicitly agrees in the Music Player UI.
* It scans the default Music folder or another local folder the user selects.
* Playback uses local files only.
* The application does not upload the user's music library.

## Security And Privacy Model

The browser uses Electron with Chromium sandboxing and process isolation while avoiding first-party telemetry frameworks and automatic background reporting.

Current characteristics:

* sandboxed renderers and helper windows
* `contextIsolation` enabled
* `nodeIntegration` disabled in renderers
* separate session handling for incognito windows
* per-site permission prompts with allow, block, and ask-later behavior
* ad and tracker request filtering with local counters
* modular download protection using Windows Defender, Authenticode verification, and browser heuristics when available
* no automatic diagnostics upload
* no first-party analytics pipeline
* no cloud sync service
* no auto-updater service

## Summary

BubblesTheDev Web Browser currently aims for a local-first privacy posture:

* browser settings, history, bookmarks, permissions, and search cache stay on-device
* persisted state is compressed and protected locally
* diagnostics stay local unless the user exports them
* music library access requires explicit consent before any scan begins
* browsing and built-in search still create normal traffic to the websites and search providers the user chooses to use

Developed by BubblesTheDev
