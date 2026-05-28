# BubblesTheDev Web Browser

## Browser Privacy Comparison

This document gives a high-level privacy comparison between BubblesTheDev Web Browser and other mainstream browsers. It is intentionally broad and user-facing.

This document reflects the current privacy posture of BubblesTheDev Web Browser version `1.2.1`.

The goal is accuracy, not marketing language. The browser does not include built-in telemetry, analytics SDKs, cloud sync, or a fully silent hidden auto-updater client. It still makes normal network requests when the user browses the web, searches, signs into websites, uses supported authentication flows, or downloads files.

## Scope And Related Documents

This file focuses on privacy posture and broad browser-to-browser differences.

Related project documents:

* [Data-Collection-and-Privacy-Notice.md](./Data-Collection-and-Privacy-Notice.md) explains what data stays local and what can still use the network
* [ARCHITECTURE.md](./ARCHITECTURE.md) explains the high-level runtime design
* [SECURITY.md](./SECURITY.md) explains the public security policy and reporting expectations
* [5-TAB-PERFORMANCE-TEST.md](./5-TAB-PERFORMANCE-TEST.md) covers one repeatable Windows performance test

## High-Level Comparison

This table is intentionally high-level. Mainstream browsers change over time, and the non-Bubbles columns should be read as broad summaries rather than legal or vendor-authoritative claims.

| Feature | BubblesTheDev Web Browser | Google Chrome | Microsoft Edge | Brave | Firefox | Safari | Opera | Vivaldi |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| First-party telemetry | Not implemented | Yes | Yes | Limited | Limited | Limited | Limited | Limited |
| Analytics SDKs in app code | None | Yes | Yes | Limited | Limited | Limited | Limited | Limited |
| Automatic diagnostics upload | No by default | Yes | Yes | Limited | Limited | Limited | Limited | Limited |
| Cloud sync requirement | None | Optional | Optional | Optional | Optional | Optional | Optional | Optional |
| Silent background updater | No | Present | Present | Present | Present | OS-managed | Present | Present |
| Local browser data storage | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Isolated browser profile support | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Local AI memory support | Yes, where supported by the browser feature set | Varies | Varies | Varies | Varies | Varies | Varies | Varies |
| Manual diagnostics export | Yes | Varies | Varies | Varies | Varies | Varies | Varies | Varies |
| Per-site permission controls | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Built-in ad or tracker filtering | Yes | Limited | Limited | Yes | Limited | Limited | Yes | Yes |
| Private or incognito mode | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Built-in streaming session isolation | Yes, for supported services | No | No | No | No | No | No | No |
| Runtime diagnostics view | Yes | Varies | Varies | Varies | Varies | Varies | Varies | Varies |
| Passkey and WebAuthn compatibility | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Gaming or streaming-aware performance controls | Yes | Varies | Varies | Varies | Varies | Varies | Varies | Varies |
| Built-in task or process manager | Yes | Yes | Yes | Yes | Yes | Varies | Yes | Yes |
| Split-view browsing | Yes | Varies | Yes | Yes | Yes | Varies | Yes | Yes |

## What Bubbles Tries To Do Differently

BubblesTheDev Web Browser is designed around a local-first model:

* normal browser data stays on the device by default
* browser profiles remain isolated from one another
* diagnostics stay local unless the user explicitly exports them or enables privacy-safe reporting
* local AI features are designed to stay on-device where supported
* guest browsing remains non-persistent
* update behavior stays visible and installer-based rather than fully silent

This does not mean the browser is offline-only. Websites, search providers, streaming services, authentication systems, and download destinations still receive normal network traffic when the user chooses to use them.

## Local-First Behavior

Current local browser behavior includes:

* local storage of browser settings, history, bookmarks, and permissions
* isolated profile data for standard browser profiles
* non-persistent guest browsing behavior
* local accessibility preferences
* local diagnostics generation and manual diagnostics export
* local handling for supported AI features and profile-aware AI memory
* local performance settings and runtime controls

The browser is designed not to automatically upload ordinary browser-state data as part of a built-in telemetry or analytics system.

## What Still Uses The Network

Network activity still occurs when the user:

* opens websites or web apps
* signs into websites
* searches with built-in or external search features
* downloads files
* uses passkey or WebAuthn flows on supported websites
* uses supported streaming services
* checks for updates or downloads an update when that feature is available

This is normal browser behavior and should not be confused with built-in telemetry.

## Diagnostics And Privacy

Diagnostics are designed to remain local by default.

Current behavior includes:

* local runtime diagnostics
* manual encrypted diagnostics export
* privacy-safe diagnostics controls that are opt-in where supported
* no ordinary automatic diagnostics upload path by default

## Music, Streaming, And Extra Features

Some browser features involve additional local handling:

* the Music Player is local-only and requires user action before scanning a folder
* the Music Downloader is intentionally restricted and local-first
* supported streaming services run in isolated browser-managed sessions
* profile recovery, accessibility, diagnostics, and language settings are designed to stay local by default

## Summary

BubblesTheDev Web Browser aims for a privacy posture that is local-first, user-controlled, and more explicit than many mainstream browser defaults.

In practical terms, that means:

* no built-in telemetry or analytics in ordinary browser use
* no cloud sync requirement
* no fully silent hidden updater model
* local diagnostics by default
* local-first profile handling
* normal website and search traffic still occurs when the user chooses to use the web
