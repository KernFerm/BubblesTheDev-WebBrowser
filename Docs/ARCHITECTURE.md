# BubblesTheDev Web Browser

## Architecture Overview

This document explains the high-level runtime shape of BubblesTheDev Web Browser version `1.3.105`.

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
* ad, tracker, fingerprinting, tracking-parameter, and privacy-report request classification
* Streaming Hub isolation
* Secure DNS preference normalization and restart prompting
* local-network Send to Device discovery and delivery
* installer and update coordination
* local AI and diagnostics service orchestration

The browser builds its default Chromium-style user agent from Electron's runtime Chromium version when available. The packaged fallback is kept aligned with the current Electron 44 / Chromium 152 release line so browser-owned user-agent strings do not report an older Chromium baseline if runtime version metadata is unavailable.

The browser-owned QR code sharing flow uses a local Chromium-style QR generator with medium error correction, version and format bits, data block interleaving, and mask scoring. QR generation happens inside the browser runtime and does not call a remote QR service.

## Privacy Protection Engine

The main process owns a centralized Privacy Protection Engine used by normal browser sessions. The engine loads a bundled bootstrap tracker/entity database first so basic protection works offline before any maintained lists are cached locally.

The engine supports local filter-source metadata for maintained privacy lists such as EasyList, EasyPrivacy, AdGuard filters, Peter Lowe's list, DuckDuckGo Tracker Radar, URLHaus, optional Fanboy lists, and NoCoin-compatible cryptomining protection sources. Filter data is treated as untrusted text, parsed with bounded Adblock Plus-style rule support, deduplicated, and designed to load the current compiled cache, then the previous known-good compiled cache, then bundled bootstrap protection instead of disabling protection when a list update fails.

Security-focused sources can also use host-file style entries such as URLHaus domain lines. URLHaus-derived rules are classified as malicious-request protection, and NoCoin-compatible rules are classified as cryptomining protection. Ordinary per-site ad or tracker relaxations do not bypass those security categories.

Privacy source choices are profile-local. Default protection lists remain enabled automatically, while optional annoyance and social lists can be turned on or off from Privacy & Security and then applied during the next privacy-list update.

Privacy counters are also profile-local for standard profiles. The runtime keeps separate profile counter buckets for ads blocked, trackers blocked, fingerprinting attempts blocked, tracking URL parameters removed, known tracking cookies blocked, CNAME tracker detections, compatibility protections, cosmetic rules, malicious requests, and cryptomining requests. Privacy & Security shows Today, 7 Days, 30 Days, and All Time ranges for the active profile without storing full request history.

Before a downloaded list can replace the current compiled cache, the engine checks approved HTTPS source hosts, file size, supported filter structure, per-source rule count, and total compiled-rule count. Suspicious or malformed list updates are rejected and the previous working database remains active.

Supported cosmetic rules are compiled separately from network rules. The main process derives a bounded selector list for the current page, rejects unsafe selector text, and applies the result with browser-owned CSS injection after page load. Cosmetic CSS keys are cleared on navigation so rules from one site are not carried into another page.

Request classification happens in the main-process `webRequest` path. It identifies the target domain, first-party or third-party context, resource type, known tracker entity, matched rule, source attribution, high-confidence heuristic signals, and tracking URL parameters. Full browsing history, cookies, OAuth tokens, query contents, and page content are not uploaded as part of this system.

Diagnostics use redaction before storing structured details. Sensitive-looking bearer tokens, authorization or cookie lines, sensitive key-value pairs, sensitive URL parameters, local paths, and error stack text are reduced or replaced before being written into runtime diagnostic records.

The engine also includes a narrow browser-maintained compatibility allowlist for common fragile flows such as sign-in, CAPTCHA, payment checkout, streaming media delivery, and release downloads. These rules run locally before broad tracker blocking so normal website workflows can keep working without disabling global protection.

Tracking URL cleanup only removes known tracking parameters and explicitly preserves OAuth/OpenID and sign-in parameters such as `state`, `code`, `client_id`, `redirect_uri`, `nonce`, and PKCE fields. Authentication hosts and callback-style URLs stay compatible with Discord, Google, GitHub, and other normal sign-in providers.

Advanced custom allow/block rules are stored as profile-local browser feature state, parsed through the same bounded network-rule parser, and rejected before saving if they cannot be parsed. Guest and incognito sessions do not save permanent custom rules.

Per-site privacy exceptions are also profile-local and origin-scoped. The Site Privacy Report can add an exception or reload the current site without protection when the user needs to recover a broken site. It also exposes origin-scoped controls for ad blocking, tracker blocking, tracking-parameter cleanup, cookie protection, and cosmetic ad-placeholder hiding. Exceptions and per-site controls do not turn off global privacy protection for other sites and are not exposed to normal websites.

Guest and incognito windows can apply those same site controls temporarily for the current window when a page needs broken-site recovery. Those temporary controls are not written into profile storage and disappear with the private session.

CNAME tracker detection runs as a non-blocking background DNS check after eligible third-party requests. Learned aliases are cached locally and can classify later requests without delaying the original page load. Tracking-cookie protection strips known tracker `Set-Cookie` response headers through the browser-owned session response hook.

Cookie protection is profile-local and supports allow cookies, block known tracking cookies, block third-party cookies, and block all non-auth cookies. Authentication pages keep targeted compatibility so normal sign-in, OAuth, and account connection flows are not broken by stronger cookie settings.

WebRTC local IP protection is part of the security settings model. The recommended mode asks Chromium to use the default public interface only, while Strict mode disables non-proxied UDP. This reduces unnecessary local IP exposure without fully removing WebRTC APIs that voice, video, conferencing, and streaming sites may need. WebRTC policy changes require a browser restart because they are applied through Chromium startup switches.

JavaScript fingerprint protection also normalizes or removes selected high-entropy browser surfaces. The browser can send DNT and Global Privacy Control request headers while JavaScript fingerprint protection is enabled, mask exact WebGL renderer details, reduce media-device enumeration labels in Strict mode, normalize screen color depth, remove OfflineAudioContext in Strict mode, normalize strict-mode timezone reporting, and hide selected sensor-style APIs. Balanced mode keeps more compatibility-sensitive APIs available for media-heavy sites.

Site Privacy Report uses in-memory current-tab details for local UI only. It can group observed protection events by known tracking company, domain, category, reason, and matched rule so users can understand what was blocked without creating a permanent browsing-history database. Privacy Request Inspector reuses that same current-tab report data for a more detailed local view of recent request decisions, compatibility allow rules, tracking-parameter cleanup, cookie protections, cosmetic filtering, fingerprinting protections, matched rules, and source lists without displaying full query strings. Privacy & Security shows profile-local or temporary-session counter ranges for Today, 7 Days, 30 Days, and All Time without storing full request history, page contents, cookies, or query contents.

The toolbar protection indicator shows current-page ad and tracker blocking counts. Clicking it toggles a small browser-owned Privacy Protection pop-out anchored below the protection pill. The pop-out shows local profile or temporary-session counters for ads, trackers, fingerprinting attempts, tracking-parameter cleanup, tracking cookies, CNAME detections, malicious requests, cryptomining requests, and compatibility protections. It can hand off to the full Site Privacy Report or Privacy & Security panel through trusted browser UI, and ordinary websites cannot read or control that pop-out.

Privacy reporting exposes the loaded compatibility-rule count and current-page compatibility relaxations so users can see when protection preserved an expected site workflow instead of silently weakening all protection.

Privacy & Security also includes Reset Privacy Protection Settings. That action clears profile-local privacy exceptions and custom privacy rules, resets the related privacy preset state, and leaves unrelated browser data such as bookmarks, passwords, profiles, downloads, accounts, and normal browser settings in place.

## Profile Architecture

Version `1.3.005` keeps the broader browser profile system while keeping the browser local-first.

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

## Local Browser Feature State

The tab-organization and browser-tool features use the existing profile session snapshot path instead of a parallel cloud or dashboard service.

Profile-scoped browser feature state includes vertical-tab layout, tab groups, saved workspaces, duplicate-tab preferences, toolbar clock preferences, privacy preset metadata, Privacy Protection Engine settings, saved site exceptions, per-site privacy controls, local website app records, local sidebar settings, local PDF annotation metadata, local Subscription Tracker records, Clipboard History settings and saved items where enabled, scheduled download records where supported, Picture-in-Picture state, link-safety preferences, and permission-use indicators.

## End-User Utility Tools

Version `1.3.105` adds five browser-owned utility tools: File Converter, Universal Media Controls, Clipboard History, Per-Tab Volume Mixer, and Download Scheduler.

File Converter uses trusted OS file and folder pickers. The renderer receives selected file summaries and invokes bounded conversions through narrow IPC. For mixed batches, the UI exposes only output formats shared by every supported selected file. Supported local adapters handle common image, text, markup, XML, YAML, RTF, CSV, TSV, DOCX text-extraction, ODT text-extraction, XLSX text/table extraction, ODS text/table extraction, and ZIP/TAR/TGZ/GZIP archive manifest conversions directly. Audio/video and additional image output conversion uses the bundled local ffmpeg binary when it is available, including user-controlled bitrate, sample rate, audio channels, frame rate, scale, and rotation options where applicable. Conversion jobs expose queued, converting, completed, failed, and cancelled progress through trusted browser IPC, and completed results can be revealed with a narrow file-manager `Show File` IPC action. Original files are not overwritten by default, active conversion jobs are capped, generated outputs are verified to remain inside the selected output folder, metadata removal is described as best effort where supported, unsafe archive entry paths are rejected, archive contents are not extracted or executed, and unsupported file types show a clear unsupported message.

Universal Media Controls and Per-Tab Volume Mixer share the same tab media state. The main process builds the media list from browser-owned tab records, webContents audio state, and site-provided media-session metadata from the current page where available, then applies user-requested play, pause, mute, tab focus, reset-to-100, and 0-100% tab volume changes to the selected tab only. Ordinary web pages cannot enumerate other tabs or call these controls, and trusted renderer requests are rate-limited per media action.

Clipboard History defaults off and the UI explains that copied text appears only after the local tool is enabled. When enabled, it stores bounded plain-text clipboard entries in the active profile's encrypted local storage, with session-only behavior for temporary contexts and for the Session only retention choice. Sensitive-looking values such as passwords, passcodes, card-like numbers, private keys, and tokens are excluded where detectable, and copy events from password-style fields suppress capture.

Download Scheduler stores scheduled public HTTP and HTTPS download records in encrypted profile-local storage for standard profiles. Guest and Incognito windows cannot persist scheduled downloads. Optional destination folders are validated locally and used only as the suggested save location when the download starts. Local file URLs, localhost, private IP addresses, and DNS results that resolve to private/local addresses are blocked for scheduled/background download actions. Scheduler state changes are limited to known local status values, persisted records that became due while the browser was closed are picked up when the scheduler starts again, and scheduled records are updated from Chromium download completion, cancellation, or failure events. Immediate and scheduled starts both use Chromium's normal download path so the existing filename handling, Mark-of-the-Web behavior, and download protection pipeline still apply.

The local PDF editing service lives in trusted main-process code. It lazy-loads `pdf-lib` for byte-level PDF edits, `pdf.js-extract` for independent local text extraction/verification, and a helper child process using `pdf-to-png-converter` for rasterized permanent redaction. Renderer code can request narrow PDF actions through preload IPC, but it does not receive unrestricted filesystem access or decrypted document bytes.

Subscription Tracker uses a dedicated encrypted profile-data bucket instead of the connected-account secret bundle. This keeps recurring-service records separate from OAuth identity data and prevents tracker deletion from clearing the existing Google, Discord, or GitHub profile connection.

The Subscription Tracker renderer panel talks to the main process through narrow preload IPC methods only. Normal websites do not receive tracker IPC access. The main process rejects Guest, Incognito, locked-profile, and untrusted-renderer access before reading or writing tracker data.

Manual subscription records work without Gmail. Gmail discovery uses a separate explicit Gmail read-only consent flow and is not part of the normal Google profile identity flow. Gmail scanning is bounded, manual, and uses deterministic local classification before adding possible matches to the review queue.

Subscription Tracker also uses a bundled Local Subscription Service Catalog for service-name recognition. The catalog is data-only public provider reference information, is schema-validated before use, and is included in runtime trust-manifest checks. If catalog validation fails, the tracker falls back to the existing local detector instead of disabling manual records or Gmail scanning.

Guest and incognito windows normalize the same structures for runtime behavior, but their feature data is temporary and is not permanently written as profile state. Their privacy counters, temporary per-site controls, and current-tab privacy reports remain private-window state instead of being added to a standard profile snapshot.

Privacy & Security can export a Local Privacy Summary through trusted browser IPC. The export is user-requested, saved to a user-selected JSON file, and contains protection settings, aggregate counters, source-list health, and host-only saved site exceptions. It is not a browsing-history export and does not include full URLs, query strings, cookies, page content, tab events, feedback messages, or account secrets.

Privacy-list updates use chunked async parsing for maintained lists, then compile supported rules into domain maps, indexed network rules, and bounded cosmetic rules. Duplicate network and cosmetic rules are merged into one internal representation while retaining source attribution, so the browser can show which lists contributed to a match without storing redundant copies of identical rules.

## Developer Workspace Architecture

Version `1.2.500` added Developer Workspace as a browser-owned launcher for supported external developer applications and developer websites.

Developer Workspace is intentionally a launcher, not a privileged integration bridge. It can detect a bounded allowlist of supported developer applications through known installation paths, safe PATH checks, and user-added custom executable paths. It does not scan the user's entire drive and does not expose application detection results to websites.

Installed applications are launched as normal external Windows applications through direct process launch with shell execution disabled. The browser does not embed external application windows, inject into external processes, create a reverse control channel, or give launched applications browser IPC, cookies, passwords, browsing history, open-tab data, profile folders, AI Chat data, or internal browser APIs.

The only file or folder paths passed to an external app are paths the user explicitly selects from browser-owned dialogs, plus the normal user Downloads folder when the user explicitly chooses that action for Visual Studio Code. Browser profile roots, application roots, diagnostics roots, and other protected browser-controlled locations are blocked from Developer Workspace file and folder actions.

Developer website shortcuts open through the browser's existing tab, Split View, and pop-out browser-window mechanisms. These websites remain ordinary web content and do not receive Node.js, Electron, Developer Workspace IPC, or local filesystem privileges.

Version `1.3.001` extends Developer Workspace with Virtual Machine Center, a browser-owned beginner guide for VMware Workstation Pro and Linux ISO setup. VMware remains an external Windows application launched only after explicit user action. Ubuntu and Linux Lite run only inside VMware, not inside the browser.

The VM Center data is static bundled guide configuration for the approved VMware/Broadcom, Ubuntu, and Linux Lite links. Host architecture and basic local resources are read locally only to help the user choose an ISO. ISO hash calculation is limited to a user-selected `.iso` file from a trusted file picker, blocks protected browser paths, and returns only metadata and a SHA-256 hash.

There is no browser-to-VMware control server, guest command bridge, VM memory access, guest file reader, SSH automation, clipboard injection, firewall modification, Windows-security modification, or automatic VMware installation path.

Virtual Machine Center also surfaces the browser-owned Send Feedback shortcut. `Ctrl+Shift+F` opens the same trusted feedback panel as `Help > Send Feedback`; it does not grant VMware, Linux guests, or websites any feedback IPC access.

## Anonymous Feedback Architecture

The optional feedback panel is browser-owned UI opened from the Help menu. The renderer collects only a selected category, a plain-text message, an unchecked-by-default basic technical-details option, a required privacy confirmation, and an empty honeypot field. The message box uses category-specific placeholder formats as guidance only. The opt-in technical details are limited to browser version, Windows major version, CPU architecture, CPU type, RAM, and GPU type.

The preload bridge exposes a narrow `feedback:submit` IPC call. The main process accepts that call only from the trusted browser renderer, validates the payload shape, scans only the typed message for sensitive-data patterns, applies local cooldown, and sends the minimized submission securely. Redirects are disabled and the response is reduced to generic success or failure state before returning to the renderer.

Feedback is deliberately separate from diagnostics, crash reporting, telemetry, analytics, profile backup, AI memory, linked-account state, browsing history, and open-tab state. Guest and incognito windows use the same transient form behavior and do not persist submitted feedback locally.

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

Version `1.3.001` keeps the local AI layer on-device by default while carrying forward the broader accessibility, startup, installer, media-tool, multilingual, and newer profile-system refinements from the earlier releases.

AI Chat is a dedicated local chat surface rather than a cloud assistant. It can run in its own browser panel or a pop-out AI Chat window and talks to approved local Ollama models through the local loopback service only.

The current AI runtime includes:

* a main-process AI service that owns settings, worker lifecycle, and runtime insights
* a dedicated AI Chat panel and AI Chat pop-out window for optional local Ollama chat
* a dedicated child worker process for offline summarization and runtime analysis
* worker startup integrity validation
* authorized bootstrap handshakes between the browser and the AI worker
* operation allowlisting and timeout watchdog protections
* profile-isolated AI memory containers
* encrypted persistent AI memory for standard profiles
* non-persistent in-memory AI storage for incognito and other ephemeral contexts
* profile lock-state validation, quota enforcement, and corruption recovery
* optional local Ollama chat through the local loopback service only
* a managed hidden Ollama server process when the browser starts Ollama for the user, with cleanup on browser quit
* visible model-response status text while the selected model is generating an answer
* model-selection disclosure when an installed local model tag is used instead of a recommended starter tag

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

Version `1.3.001` includes:

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

Version `1.3.001` also keeps the expanded browser accessibility layer.

The current accessibility runtime includes:

* a dedicated `Accessibility` panel for reading, focus, contrast, motion, and recovery settings
* persistent local accessibility preferences that reapply on startup
* `Reader mode`, `Read aloud`, `Selection Tools`, and `Reading ruler` support for supported browsing flows
* `Focus mode` and `Simplified browser UI` support for lower visual noise and easier control use
* accessibility page helpers that avoid running reading and selection tools on unsupported or internal pages

## Localization Architecture

Version `1.3.001` keeps the centralized localization manager in the main process and routes newer browser UI strings through that same protected pipeline.

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
* runtime trust-manifest checks for the main browser runtime, preload surfaces, local AI services, feedback service, and optional Ollama setup helpers
* direct provider sign-in by default unless a separate brokered flow is explicitly enabled by the browser operator

## Ad And Tracker Blocking Model

Version `1.3.001` keeps the expanded built-in blocker while keeping it local and lightweight.

The blocker currently uses:

* main-process network request classification before web content loads
* static local host and path rules for common ad networks, tracker hosts, error-monitoring collectors, and selected YouTube ad or tracking endpoints, with YouTube-owned playback/media/API/thumbnail/asset requests preserved for compatibility
* third-party request checks so broad tracker and ad rules are less likely to break normal first-party site resources
* resource-type guarded ad asset rules for obvious banner, advertising, and ad-size image or embedded-object paths
* renderer-side cosmetic rules for obvious ad containers and blocked banner shells
* local per-tab and global blocked-request counters

The browser does not download remote filter lists or send visited URLs to a blocking service. Rule matching happens locally inside the browser runtime.

## Canvas Fingerprint Protection

Version `1.3.001` includes local Canvas fingerprint protection with Strict, Balanced, and Off modes in Privacy & Security. Strict is the default for new users, and users can relax the mode if a canvas-heavy or media-heavy site needs compatibility.

The protection is applied in the browser page preload and wraps Canvas readout methods such as `toDataURL`, `toBlob`, and `getImageData`. Balanced mode keeps normal drawing behavior intact while changing small readout samples per browser session. Strict mode changes more readout samples for stronger testing coverage and may affect canvas-heavy sites such as image editors, games, or design tools. When Canvas protection is not Off, the browser also enables Chromium's canvas-readback blocking at startup, so a restart is required for the strongest engine-level protection to apply.

Canvas protection runs locally and does not upload page contents, canvas images, browsing history, or visited URLs to a remote service.

The same protection mode also reduces JavaScript fingerprinting surfaces exposed through `window`, `navigator`, and same-origin `iframe.contentWindow` checks. When enabled, the browser reports generic CPU and memory values, enables local GPC/DNT signals, normalizes Client Hints in Balanced mode, and hides high-entropy APIs such as Battery Status, Network Information, Web Bluetooth, WebGPU, WebHID, WebUSB, Web Serial, WebXR, plugins, MIME types, speech voices, app badges, protocol handlers, scheduling APIs, storage bucket APIs, and Protected Audience ad-auction APIs where possible. Strict mode also hides or blanks additional optional surfaces such as Web Audio constructors and several heavier browser integration APIs.

WebGL fingerprint protection is installed through the same browser-view preload path. It masks exact vendor and renderer values with generic Chromium-style values and hides `WEBGL_debug_renderer_info` so pages cannot read the precise GPU renderer string through that debug extension.

## Memory Pressure Behavior

Version `1.3.001` keeps the lower default memory pressure target so inactive background tabs are put to sleep before the browser approaches heavier working set usage. Browser-owned search, suggestion, localization, and session caches are kept smaller or trimmed under pressure.

This does not eliminate Chromium's normal per-tab memory cost. Active pages, video, WebGL/WebGPU pages, extensions, and multiple renderer processes can still use substantial memory while they are live.

## Hardware Acceleration Control

Version `1.3.001` keeps the user-facing Disable Hardware Acceleration setting in the Performance panel. The setting is stored with the browser's performance settings and is applied during the next app startup before browser windows are created.

The Performance panel reports whether hardware acceleration is enabled or disabled for the current launch and shows a restart-required message when the saved setting has changed but has not taken effect yet. The browser also includes a dedicated Restart Browser action for that pending state. This is separate from Lower GPU Usage Mode, which remains a live performance policy for frame-rate and background activity reduction.

For multi-monitor gaming and streaming setups, the performance manager also keeps game and streaming optimization active when a detected game is running on one monitor while OBS, Streamlabs, or the browser is focused on another monitor. The runtime skips duplicate frame-rate, background-throttling, and process-priority calls when the active performance policy has not changed.

Game detection uses a local allowlist of known game process-name patterns, including common current games, EA-published games, Steam-distributed games, and future-facing aliases for announced titles where likely process names are known. Launcher processes such as Steam and EA App are not treated as active games by themselves, because many users leave launchers open while no game is running.

The performance optimization layer does not bypass anti-cheat, modify games, inject into game processes, read game memory, or interfere with gaming security systems. It stays browser-managed and relies on local process-name, foreground-window, and browser resource-policy checks.

## Privacy Model

Current local-first characteristics include:

* browser settings and browsing data stay local by default
* browser profiles stay isolated by default
* AI memory stays local and isolated per profile
* incognito AI memory does not persist across sessions
* guest profile state does not persist after close
* diagnostics remain local unless the user exports them or enables privacy-safe reporting
* optional anonymous feedback sends only the user's chosen feedback fields and does not create a local feedback history
* no built-in telemetry or analytics systems are part of the normal browser runtime
* ad and tracker blocking decisions are made locally without uploading browsing activity to a remote filter service
* local Send to Device traffic is designed for same-Wi-Fi or same-LAN discovery instead of cloud account sync
* Secure DNS remains user-controlled and requires a browser restart when DNS settings change
* accessibility preferences stay local by default
* locale preferences, locale diagnostics, and translation validation stay local by default
* installed update checks use the public update flow without requiring users to configure update credentials

## Startup And Update Coordination

Version `1.3.001` also keeps the runtime shape where the main window can open sooner while slower background work continues after launch.

Current startup and update characteristics include:

* deferred post-launch initialization for slower background tasks
* profile compatibility checks and profile-state validation during startup selection
* a lighter localization startup path that avoids full locale-registry diagnostics before the first usable browser window
* sanitized main renderer startup query values with a trusted fallback load path before an `index.html` load error is shown
* installer-based updates rather than a hidden always-on patch service
* installer registration support for installed builds where available
* user-visible update-note handling that opens a local `bubbles://whats-new` tab once after a newly installed version launches, using the bundled release notes without creating Desktop folders
* a manual `Menu Bar > What's New` command for reopening the same local release-note page later
* verified release metadata and installer validation inside the browser-controlled update flow
* managed-update progress windows for download state, followed by regular installer handoff after the new version is downloaded
* normal installed browser clients can use the public update-check flow without extra user setup
* explicit browser-state, password, profile-restore-point, and session-storage saves before managed update installs close the browser
* current-user trusted-root certificate inspection that can skip repeated certificate prompts when the same bundled certificate is already trusted, while still surfacing the Windows confirmation step for a newly bundled replacement certificate
* renderer-side persistence for local `AI & Diagnostics` panel query, preview, summary, and scroll state when the panel is closed and reopened
