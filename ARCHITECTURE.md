# BubblesTheDev Web Browser

## Architecture Overview

This document explains the high-level runtime shape of BubblesTheDev Web Browser version `1.1.5`.

## Design Goals

The current architecture is built around:

* local-first storage
* predictable browser behavior
* Electron security best practices
* minimal unnecessary background services
* clear separation between browser UI, privileged runtime work, and web content

## Core Runtime Shape

The main process owns:

* application lifecycle
* BrowserWindow and BrowserView creation
* navigation and session setup
* local persistence
* downloads and diagnostics windows
* performance-management policy
* Streaming Hub isolation
* installer and update coordination
* local AI and diagnostics service orchestration

## Local AI Architecture

Version `1.1.5` adds a local AI layer that stays on-device by default.

The current AI runtime includes:

* a main-process AI service that owns settings, worker lifecycle, and runtime insights
* a dedicated child worker process for offline summarization and runtime analysis
* worker startup integrity validation
* authorized bootstrap handshakes between the browser and the AI worker
* operation allowlisting and timeout watchdog protections
* profile-isolated AI memory containers
* encrypted persistent AI memory for standard profiles
* non-persistent in-memory AI storage for incognito and other ephemeral contexts
* profile lock-state validation, quota enforcement, and corruption recovery

## Current-Session Health Model

The AI layer exposes a current-session health model rather than a permanent health score.

The current session health system:

* reflects current browser load and stability
* updates from local runtime analysis
* can drop during heavier CPU, memory, GPU, or renderer stress
* can automatically restart the current AI health session after recovery from severe low-health conditions
* does not require a full browser restart to recover back to a clean current-session state

## Diagnostics Model

Diagnostics are generated locally.

Version `1.1.5` includes:

* manual encrypted diagnostics export
* an `AI & Diagnostics` panel
* privacy-safe diagnostics preview controls
* privacy-safe manual send controls
* privacy-safe test send controls
* optional severe-event reporting when enabled by the user

The public documentation intentionally avoids private infrastructure details. At a high level, the diagnostics path is:

* disabled by default
* limited to approved system and browser-stability fields
* validated and submitted through privileged browser-side services only
* isolated from renderer-controlled network submission

## Security Model

Current security-sensitive runtime characteristics include:

* `contextIsolation` enabled
* `nodeIntegration` disabled in browser renderers
* Chromium sandboxing where applicable
* strict preload and IPC boundaries
* isolated streaming-service sessions
* Windows-native download protection
* local AI worker separation from the browser UI process
* profile-isolated encrypted AI memory
* privacy-safe diagnostics allowlisting and validation

## Privacy Model

Current local-first characteristics include:

* browser settings and browsing data stay local by default
* AI memory stays local and isolated per profile
* incognito AI memory does not persist across sessions
* diagnostics remain local unless the user exports them or enables privacy-safe reporting
* no built-in telemetry or analytics systems are part of the normal browser runtime
