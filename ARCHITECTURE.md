# BubblesTheDev Web Browser

## Architecture Overview

This document explains the high-level runtime shape of BubblesTheDev Web Browser version `1.1.30`.

## Design Goals

The current architecture is built around:

* local-first storage
* predictable browser behavior
* Electron security best practices
* minimal unnecessary background services
* clear separation between browser UI, privileged runtime work, and web content
* scalable internationalization and localization
* Unicode-safe multilingual rendering
* privacy-safe on-device diagnostics only

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

Version `1.1.30` keeps the local AI layer on-device by default while carrying forward the broader accessibility, startup, installer, media-tool, and multilingual refinements from the earlier `1.1.x` releases.

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

Version `1.1.30` includes:

* manual encrypted diagnostics export
* an `AI & Diagnostics` panel
* privacy-safe diagnostics preview controls
* privacy-safe manual send controls
* privacy-safe test send controls
* optional severe-event reporting when enabled by the user

## Accessibility Model

Version `1.1.30` also keeps the expanded browser accessibility layer.

The current accessibility runtime includes:

* a dedicated `Accessibility` panel for reading, focus, contrast, motion, and recovery settings
* persistent local accessibility preferences that reapply on startup
* `Reader mode`, `Read aloud`, `Selection Tools`, and `Reading ruler` support for supported browsing flows
* `Focus mode` and `Simplified browser UI` support for lower visual noise and easier control use
* accessibility page helpers that avoid running reading and selection tools on unsupported or internal pages

## Localization Architecture

Version `1.1.30` adds a centralized localization manager in the main process.

The localization runtime now includes:

* a dedicated localization service that owns locale detection, safe locale switching, and runtime string resolution
* a centralized locale registry loaded from the local `locales` directory only
* locale inheritance and fallback chains that can resolve regional variants back to parent locales without duplicating full translation trees
* module-scoped locale packs for `core`, `browser`, `settings`, `errors`, `security`, `streaming`, `updater`, and `installer`
* SHA-256 integrity verification for locale files using the local manifest
* UTF-8 and Unicode normalization handling for translation strings before they reach the renderer
* right-to-left metadata and direction-aware locale payloads for browser UI rendering
* formatter utilities for locale-aware dates, times, numbers, currencies, plural rules, relative time, and list formatting
* bounded caches for loaded locale files, merged bundles, and formatter instances to keep startup and runtime overhead low
* local-only diagnostics and coverage reporting for missing modules or translation drift during development
* launcher recovery when a shell incorrectly forces Electron into node mode
* deferred localization diagnostics so the first normal window does not pay the full locale-audit cost
* development-only startup and locale-switch benchmarking hooks for measuring the real app path safely

The browser detects preferred system locales from Electron and Chromium APIs, resolves aliases and parent locales locally, and then broadcasts the effective locale state to browser windows through the hardened preload bridge. Locale processing stays isolated in the privileged runtime and does not allow renderer-controlled filesystem access.

The current multilingual foundation is now significantly larger than the earlier minimal bundle set. At this stage the browser carries:

* `679` supported locale packs
* `453` base language families
* inheritance-first locale growth so new language or regional entries can reuse trusted local bundles instead of duplicating full translation trees

This is intentionally a strong starting point for future expansion rather than a claim of fully human-translated parity across every supported language family. The architecture is built so translation depth can continue growing without redesigning the renderer or weakening the browser's security model.

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
* sandboxed localization loading through the main process only
* locale manifest integrity validation and path confinement under the local `locales` root
* isolated streaming-service sessions
* Windows-native download protection
* local AI worker separation from the browser UI process
* profile-isolated encrypted AI memory
* privacy-safe diagnostics allowlisting and validation
* pinned bundled-binary verification for local media tools before use
* browser-controlled installer registration and verified installer update flow

## Privacy Model

Current local-first characteristics include:

* browser settings and browsing data stay local by default
* AI memory stays local and isolated per profile
* incognito AI memory does not persist across sessions
* diagnostics remain local unless the user exports them or enables privacy-safe reporting
* no built-in telemetry or analytics systems are part of the normal browser runtime
* accessibility preferences stay local by default
* locale preferences, locale diagnostics, and translation validation stay local by default

## Startup And Update Coordination

Version `1.1.30` also keeps the runtime shape where the main window can open sooner while slower background work continues after launch.

Current startup and update characteristics include:

* deferred post-launch initialization for slower background tasks
* a lighter localization startup path that avoids full locale-registry diagnostics before the first usable browser window
* installer-based updates rather than a hidden silent updater service
* installer registration support for installed builds where available
* user-visible update-note handling that can create or refresh a Desktop folder named `BubblesTheDev - WebBrowser Update Notes` with the bundled release notes for the installed version
* verified release metadata and installer validation inside the browser-controlled update flow
