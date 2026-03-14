# BubblesTheDev Web Browser

## Browser Privacy Comparison

This document explains how BubblesTheDev Web Browser approaches privacy and how its design differs from many mainstream browsers.

The goal is accuracy, not marketing language. This browser avoids first-party telemetry and automatic diagnostics upload, but it still performs normal web traffic and optional search-provider traffic when the user uses built-in browsing and search features.

## Comparison Table

| Feature | BubblesTheDev Web Browser | Google Chrome | Microsoft Edge | Brave | Firefox |
| --- | --- | --- | --- | --- | --- |
| First-party telemetry | Not implemented | Yes | Yes | Limited | Limited |
| Analytics SDKs in app code | None | Yes | Yes | None | Limited |
| Automatic diagnostics upload | No | Yes | Yes | Limited | Limited |
| Local browser data storage | Yes | Yes | Yes | Yes | Yes |
| Cloud sync requirement | None | Optional | Optional | Optional | Optional |
| Built-in AI account features | None | Present in ecosystem | Present in ecosystem | Limited | Limited |
| Search-provider requests from built-in home page | Yes, when user searches in Bubbles | Yes | Yes | Yes | Yes |
| Local-only music library scan | Yes, explicit opt-in | N/A | N/A | N/A | N/A |

## Local-First Behavior

BubblesTheDev Web Browser stores browser data locally in the Electron `userData` directory.

Examples:

* history
* bookmarks
* homepage setting
* optional Music Player setting
* optional exported diagnostics reports

The application does not automatically upload this information.

## What Still Uses The Network

This browser is not an offline-only product. Network traffic still occurs when the user does one of the following:

* opens websites
* signs into websites
* loads page assets
* uses external search engines directly
* uses Bubbles Search Engine on `bubbles://home`

The Bubbles page can contact DuckDuckGo and Google endpoints in the background to render results and suggestions after the user submits a search.

## Music Player Privacy Model

The Music Player is local-only.

* It is disabled by default.
* No folder scan starts until the user explicitly agrees in the Music Player UI.
* It scans only the local folder the user selected.
* Playback uses local files only.

## Security And Privacy Model

The browser uses Electron with Chromium sandboxing and process isolation, while avoiding first-party telemetry frameworks and automatic background reporting.

Key characteristics:

* sandboxed renderers and helper windows
* `contextIsolation` enabled
* `nodeIntegration` disabled in renderers
* no automatic diagnostics upload
* no first-party analytics pipeline

## Summary

BubblesTheDev Web Browser aims for a local-first privacy posture:

* browser settings and history stay on-device
* diagnostics stay local unless the user exports them
* music library access requires explicit consent
* search and browsing still create normal traffic to the services the user chooses to use

Developed by BubblesTheDev
