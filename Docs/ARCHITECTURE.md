# BubblesTheDev Web Browser

## Architecture Overview

This document explains the high-level runtime shape of BubblesTheDev Web Browser version `1.2.160`.

## Design Goals

The current architecture is built around:

* local-first storage
* predictable browser behavior
* Electron security best practices
* minimal unnecessary background services
* clear separation between browser UI, privileged runtime work, and web content
* profile isolation and local profile recovery
* scalable internationalization and localization
* Unicode-safe multilingual rendering
* privacy-safe on-device diagnostics only

## Core Runtime Shape

The main process owns:

* application lifecycle
* BrowserWindow and BrowserView creation
* navigation and session setup
* local persistence
* profile lifecycle and profile partition management
* downloads and diagnostics windows
* performance-management policy
* Streaming Hub isolation
* Secure DNS preference normalization and restart prompting
* local-network Send to Device discovery and delivery
* installer and update coordination
* local AI and diagnostics service orchestration

## Profile Architecture

Version `1.2.160` keeps the broader browser profile system while keeping the browser local-first.

The current profile runtime includes:

* a main-process profile service that owns profile creation, update, deletion, and profile-limit enforcement
* isolated persistent partitions for standard profiles instead of shared browser-session state
* profile-local storage roots for browser data, settings, history, permissions, and imported browser content
* a current limit of up to `10` local browser profiles per installation
* one optional connected-account identity bundle per profile for provider, email, display name, and avatar presentation
* optional profile PIN state with browser-side lock validation and rate-limited unlock handling
* Guest Mode with non-persistent cleanup behavior
* encrypted profile secret bundles for browser-controlled profile identity and session material
* encrypted session-snapshot handling for restoring profile tabs and selected browsing state
* profile restore points, integrity checks, repair paths, and safer rollback handling
* profile backup and restore behavior that stays local and browser-controlled

## Import Surfaces

The current browser import surfaces stay inside the trusted browser side and are designed to be explicit about local file and profile access.

The current import behavior includes:

* bookmark import from supported local browser paths or a user-chosen bookmark file
* history import from supported local browser profiles or a user-chosen history file
* temporary safe-copy handling for supported Chromium and Firefox history databases before reading them
* extension import scanning across supported Chromium profile roots instead of only a single default profile path
* manual extension import through a selected `manifest.json` file that resolves back to the owning extension folder
* explicit user consent gates before browser-path scanning or manual file selection

## Local AI Architecture

Version `1.2.160` keeps the local AI layer on-device by default while carrying forward the broader accessibility, startup, installer, media-tool, multilingual, and newer profile-system refinements from the earlier `1.1.x` releases.

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

Version `1.2.160` includes:

* manual encrypted diagnostics export
* an `AI & Diagnostics` panel
* privacy-safe diagnostics preview controls
* privacy-safe manual send controls
* privacy-safe test send controls
* optional severe-event reporting when enabled by the user
* profile-aware diagnostics summaries for profile security and recovery surfaces
* local shell-theme customization, including a custom local-image banner theme path
* a lightweight animated shell-theme path through the built-in `Aurora Drift` theme
* blended internal search results on `bubbles://home` using DuckDuckGo and Google together
* security-panel controls for Secure DNS providers, visible DNS addresses, and password breach warning settings

## Accessibility Model

Version `1.2.160` also keeps the expanded browser accessibility layer.

The current accessibility runtime includes:

* a dedicated `Accessibility` panel for reading, focus, contrast, motion, and recovery settings
* persistent local accessibility preferences that reapply on startup
* `Reader mode`, `Read aloud`, `Selection Tools`, and `Reading ruler` support for supported browsing flows
* `Focus mode` and `Simplified browser UI` support for lower visual noise and easier control use
* accessibility page helpers that avoid running reading and selection tools on unsupported or internal pages

## Localization Architecture

Version `1.2.160` keeps the centralized localization manager in the main process and now routes the newer profile and auth UI strings through that same protected pipeline.

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

The current multilingual foundation now carries:

* `679` supported locale packs
* `453` base language families
* inheritance-first locale growth so new language or regional entries can reuse trusted local bundles instead of duplicating full translation trees
* refreshed locale-module coverage across the shipped `locales` folders so the current interface packs are fully translated at the module level

This remains a strong starting point for future expansion, but the current shipped locale folders have been updated so the browser's module-level interface coverage is no longer relying on broad placeholder English fallbacks. The architecture is still built so translation depth can continue growing without redesigning the renderer or weakening the browser's security model.

## Security Model

Current security-sensitive runtime characteristics include:

* `contextIsolation` enabled
* `nodeIntegration` disabled in browser renderers
* Chromium sandboxing where applicable
* strict preload and IPC boundaries
* browser-only bridges are exposed only on trusted internal surfaces instead of ordinary web pages
* sandboxed localization loading through the main process only
* locale manifest integrity validation and path confinement under the local `locales` root
* isolated streaming-service sessions
* isolated standard-profile partitions and non-persistent guest sessions
* Windows-native download protection
* encrypted profile secret handling and encrypted session-snapshot storage
* local AI worker separation from the browser UI process
* profile-isolated encrypted AI memory
* profile restore points, integrity repair, and safer backup or restore validation
* privacy-safe diagnostics allowlisting and validation
* pinned bundled-binary verification for local media tools before use
* browser-controlled installer registration and verified installer update flow
* direct provider sign-in by default unless a separate brokered flow is explicitly enabled by the browser operator

## Privacy Model

Current local-first characteristics include:

* browser settings and browsing data stay local by default
* browser profiles stay isolated by default
* AI memory stays local and isolated per profile
* incognito AI memory does not persist across sessions
* guest profile state does not persist after close
* diagnostics remain local unless the user exports them or enables privacy-safe reporting
* no built-in telemetry or analytics systems are part of the normal browser runtime
* local Send to Device traffic is designed for same-Wi-Fi or same-LAN discovery instead of cloud account sync
* Secure DNS remains user-controlled and requires a browser restart when DNS settings change
* accessibility preferences stay local by default
* locale preferences, locale diagnostics, and translation validation stay local by default
* installed update checks no longer need a bundled shared client secret in the shipped browser files

## Startup And Update Coordination

Version `1.2.160` also keeps the runtime shape where the main window can open sooner while slower background work continues after launch.

Current startup and update characteristics include:

* deferred post-launch initialization for slower background tasks
* profile compatibility checks and profile-state validation during startup selection
* a lighter localization startup path that avoids full locale-registry diagnostics before the first usable browser window
* installer-based updates rather than a hidden always-on patch service
* installer registration support for installed builds where available
* user-visible update-note handling that can create or refresh a Desktop folder named `BubblesTheDev - WebBrowser Update Notes` with the bundled release notes for the installed version
* verified release metadata and installer validation inside the browser-controlled update flow
* managed-update progress windows for download state, followed by regular installer handoff after the new version is downloaded
* normal installed browser clients can reach public update-check and check-in routes without requiring an embedded shared client secret
* explicit browser-state, password, profile-restore-point, and session-storage saves before managed update installs close the browser
* current-user trusted-root certificate inspection that can skip repeated certificate prompts when the same bundled certificate is already trusted, while still surfacing the Windows confirmation step for a newly bundled replacement certificate
* renderer-side persistence for local `AI & Diagnostics` panel query, preview, summary, and scroll state when the panel is closed and reopened
