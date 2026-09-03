# BubblesTheDev Web Browser 1.3.105

Release documentation for version `1.3.105`.

`1.3.105` adds File Converter, Universal Media Controls, Local Clipboard History, Per-Tab Volume Mixer, and Download Scheduler while keeping Privacy Protection, Subscription Tracker, Virtual Machine Center, Send Feedback, AI Chat, and Developer Workspace.

## Highlights

* The packaged browser version is now `1.3.105`
* File Converter is available from Tools > File Converter for local file conversion with detected file types, shared valid output choices for mixed batches, output-folder selection, visible progress, cancellation, width, height, quality, bitrate, sample-rate, channel, frame-rate, and rotation controls, batch-safe limits, active-job limits, output-folder containment checks, metadata-removal guidance, transparency warnings, text/markup/XML/YAML/RTF/CSV/TSV handling, DOCX, ODT, XLSX, and ODS text/table extraction, ZIP/TAR/TGZ/GZIP manifest output, ffmpeg-backed media/image output where available, and local adapters
* Universal Media Controls are available from Tools > Media Controls for active media tabs, site-provided media title or artist where available, play or pause, previous/next where supported, mute, per-tab volume, and Go to Tab
* Per-tab volume control supports 0-100% tab volume with slider, numeric percentage, reset-to-100, and no Windows master-volume changes
* Clipboard History is available from Tools > Clipboard History, defaults off, includes clear Turn On guidance, supports 10/25/50 item limits, Session only, 1 hour, 24 hours, 7 days, and Keep until removed retention choices, Copy Again, Pin, Delete, Clear All, and Hide Clipboard Previews
* Download Scheduler is available from Tools > Download Scheduler for immediate or scheduled public HTTP/HTTPS downloads, local schedule records, optional destination folders, Start Now, Reschedule, Cancel Schedule, Remove, completion/cancel/failure status updates from the browser download flow, and blocking for localhost/private-network background targets
* File Converter, Universal Media Controls, Clipboard History, Per-Tab Volume Mixer, and Download Scheduler use trusted browser UI checks plus per-tool IPC rate limits
* Scheduled downloads start through the existing browser download path so download protection remains in place
* Privacy Protection Engine now centralizes ad blocking, tracker blocking, tracker classification, and tracking URL parameter cleanup
* Bootstrap tracker/entity protection works locally before maintained list caches exist
* Filter-source metadata is included for EasyList, EasyPrivacy, AdGuard filters, Peter Lowe's list, DuckDuckGo Tracker Radar, URLHaus, optional Fanboy lists, and NoCoin-compatible cryptomining protection
* URLHaus-style host-file rules and NoCoin-compatible cryptomining rules now use dedicated local counters and local report categories
* Maintained privacy-list updates now use chunked async parsing so large list compilation can yield back to the app instead of doing one long blocking parse
* Duplicate network and cosmetic rules are merged locally while preserving source attribution when several lists include the same rule
* Privacy & Security shows non-sensitive engine diagnostics such as duplicate rules merged, last compilation time, and compiled database size
* Tracking URL cleanup removes known tracking parameters while preserving OAuth and sign-in parameters
* A narrow browser compatibility allowlist helps preserve sign-in, CAPTCHA, payment, streaming, and release-download flows while privacy protection remains enabled
* YouTube playback compatibility preserves YouTube-owned media, API, thumbnail, and asset requests while keeping obvious ad-network blocking separate
* Site Privacy Report now shows local-only matched domains, known companies/entities, categories, decisions, reasons, rules, and source attribution where available
* Site Privacy Report groups known tracking companies with local request counts, domains, categories, reasons, and matched rules
* Privacy Request Inspector shows recent current-tab privacy decisions, matched rules, source lists, and protection categories without displaying full query strings
* Privacy Request Inspector now shows first-party or third-party context, rule priority, and local risk labels for privacy decisions
* Privacy & Security includes a local Protection Self-Test for ad blocking, tracker blocking, tracking-parameter cleanup, and OAuth compatibility without browsing to or uploading test URLs
* The toolbar protection indicator now opens a Privacy Protection quick panel with current-page counters, cookie mode, site controls, full report access, privacy settings, and privacy-list updates
* Privacy reports now show compatibility-rule coverage and when compatibility protection was applied to the current page
* Privacy & Security now shows an Ad & Tracker Protection status card with loaded rule counts and local aggregate counters
* Privacy & Security now lets users enable or disable optional privacy lists before the next privacy-list update
* Privacy list status now shows last successful update, next automatic update, and update interval details where available
* Supported cosmetic filter rules can now hide obvious ad containers locally after page load
* WebRTC local IP protection can reduce unnecessary local network address exposure while keeping voice, video, and streaming features usable
* WebGL fingerprinting protection now masks exact renderer/vendor details and hides the debug renderer extension
* JavaScript fingerprinting protection now covers DNT and Global Privacy Control headers, media-device labels, screen color depth, OfflineAudioContext, strict-mode timezone normalization, and sensor-style APIs
* Privacy counters can be viewed for Today, 7 Days, 30 Days, or All Time without storing full browsing history
* Privacy counters are stored per standard browser profile, and Privacy & Security shows whether the visible counters are profile-local or temporary for the current Guest or Incognito window
* Cookie protection can be set to allow cookies, block known tracking cookies, block third-party cookies, or block all non-auth cookies
* Advanced users can save profile-local custom privacy allow/block rules
* Site Privacy Report includes Add Site Exception and Reload Without Protection actions
* Site Privacy Report includes per-site privacy controls for ads, trackers, tracking-parameter cleanup, cookie protection, and cosmetic ad-placeholder hiding
* Guest and Incognito windows can use temporary per-site privacy controls for broken-page recovery without saving those controls permanently
* Privacy & Security can export a Local Privacy Summary JSON file with protection settings, aggregate counters, list health, and host-only saved site exceptions
* Privacy & Security now shows Saved Site Exceptions And Controls so users can review profile-local site relaxations from one place
* Users can clear only saved site exceptions and per-site privacy controls without deleting custom rules, counters, bookmarks, passwords, profiles, downloads, accounts, or other browser data
* Privacy & Security includes Reset Privacy Protection Settings for clearing local site exceptions and custom privacy rules without deleting unrelated browser data
* Known tracking cookies can be stripped locally when a tracker response is identified
* CNAME tracker aliases can be learned in the background and used for later local classification
* Privacy list loading falls back from the current compiled cache to the previous known-good compiled cache, then to bundled bootstrap protection
* `Tools > Subscription Tracker` opens the local recurring-service tracker
* Manual subscription records work without Gmail or a connected account
* The tracker dashboard shows active subscriptions, trials, upcoming renewals, price changes, possible duplicates, and estimated costs
* Users can search, filter, sort, edit, delete, privacy-mask, and export subscription records to CSV
* Gmail discovery remains separate from normal Google profile sign-in and uses its own explicit Gmail read-only consent flow before mailbox scanning can be used
* Possible Gmail detections go into a local review queue before becoming confirmed subscriptions
* Multiple email-address management and selected-subscription savings calculations are available inside the tracker
* A bundled Local Subscription Service Catalog improves service-name recognition with public provider-reference data
* `Tools > Virtual Machine Center` opens the VM guide directly
* Virtual Machine Center is also reachable from `Tools > Browser Features > Developer Workspace`
* VMware Workstation Pro remains an external Windows application
* Ubuntu and Linux Lite run inside VMware, not inside the browser
* ISO verification runs locally from a user-selected `.iso` file
* Linux command lists and installation guides open in pop-out windows with an `OK` close button
* `Ctrl+Shift+F` opens Send Feedback from the browser
* Virtual Machine Center shows the feedback shortcut for VM setup issues or suggestions
* The EULA now includes clearer third-party software license guidance

## What This Release Means

This release keeps BubblesTheDev Web Browser local-first while expanding privacy protection. The browser can classify and block known trackers locally, clean known tracking parameters locally, and show current-tab privacy details locally without turning the browser into a remote URL-scanning or analytics product.

Public support contact: support.bubblesthedev.webbrowser@gmail.com.

## Upgrade Notes

* Standard profiles remain isolated with their own sessions, history, permissions, settings, and restored tabs
* Guest Mode remains non-persistent
* Optional profile PIN protection remains available
* Local AI processing, AI Chat, privacy-safe diagnostics controls, and accessibility preferences continue to work as part of the local-first browser model
* AI Chat remains optional and local-Ollama based
* Managed updates continue to use the installer-based update model
* Disable Hardware Acceleration still requires a browser restart before Chromium GPU acceleration changes
* Developer Workspace remains a launcher, not a command runner or browser-control bridge
* Virtual Machine Center does not install VMware, create VMs, run Linux commands, or read VM files
* Subscription Tracker records are profile-local and unavailable in Guest or Incognito windows
* Existing OAuth account connections remain protected because sign-in parameters are not stripped by tracking URL cleanup
* Stronger cookie modes keep targeted authentication compatibility so normal sign-in and OAuth account connections can continue working
* Compatibility allowlist decisions are local and limited to browser-maintained categories for sign-in, CAPTCHA, payments, streaming, and downloads
* Guest and Incognito windows do not save permanent custom privacy rules or permanent site exceptions
* Guest and Incognito privacy counters, temporary per-site controls, and current-tab privacy reports are not written into standard profile storage
* Privacy cache corruption does not disable all protection because the previous compiled cache and bundled bootstrap list remain available
* Runtime diagnostics redaction covers sensitive-looking bearer tokens, authorization and cookie lines, sensitive key-value pairs, sensitive URL parameters, and error stack text

## New And Fixed In 1.3.105

* Added Tools > File Converter
* Added visible File Converter progress and cancellation status for queued, converting, completed, failed, and cancelled jobs
* Added shared output filtering for mixed File Converter batches
* Added safe local XML, YAML, and RTF-style output options for supported text files
* Added safe local DOCX, ODT, XLSX, and ODS text/table extraction output for supported document and spreadsheet files
* Added ZIP, TAR, TGZ, and GZIP archive manifest conversion to TXT or JSON without extracting or executing archive contents
* Added ffmpeg-backed image output choices for WebP, BMP, GIF, TIFF, AVIF, and ICO where the bundled local converter supports them
* Added sample-rate, audio-channel, frame-rate, and rotation controls for applicable local conversions
* Added Tools > Media Controls
* Added Tools > Clipboard History
* Added Clipboard History retention choices, including Session only, 1 hour, 24 hours, 7 days, and Keep until removed
* Added Clipboard History off-state guidance and a Turn On action so users know copied text is saved only after the local tool is enabled
* Added Tools > Download Scheduler
* Added optional destination folder selection for scheduled downloads
* Added Download Now to Download Scheduler
* Added stricter local status handling for scheduled-download records
* Added per-tab volume control to the shared media controls system and tab context menu
* Replaced Desktop update-note folder creation with a local What's New tab that opens once after a newly installed version launches
* Added Menu Bar > What's New so users can reopen bundled release notes later from inside the browser
* Added sensitive clipboard exclusion and password-field copy suppression for Clipboard History
* Added extra security hardening for the five end-user utility tools, including utility IPC rate limits, blocked localhost/private-network scheduled downloads, conversion active-job limits, and output-folder containment checks
* Added local scheduled-download persistence for standard profiles
* Added Guest and Incognito persistence restrictions for Clipboard History and Download Scheduler
* Added expanded verification for Clipboard History limits and profile isolation, Download Scheduler missed/persisted schedule behavior, File Converter safe output naming, oversized and malformed input handling, and original-file preservation
* Added `npm run test:end-user-utilities`

## New And Fixed In 1.3.045

* Added centralized Privacy Protection Engine service
* Added privacy filter source metadata
* Added URLHaus-style host-file parsing and security-aware rule priority
* Added chunked async parsing for maintained privacy-list updates
* Added network-rule and cosmetic-rule deduplication with preserved source attribution
* Added non-sensitive compile diagnostics for duplicate rules, compilation time, and compiled database size
* Added ABP-style parsing support for common network and cosmetic rule formats
* Added bootstrap tracker entity classification
* Added OAuth-safe tracking URL parameter cleanup
* Added browser-maintained compatibility rules for sign-in, CAPTCHA, payment, streaming, and release-download flows
* Added higher-detail local Site Privacy Report entries
* Added grouped known-tracking-company summaries in Site Privacy Report
* Added local current-tab Privacy Request Inspector
* Added Privacy Request Inspector first-party or third-party labels, rule-priority labels, and local risk labels
* Added local Protection Self-Test in Privacy & Security
* Added Privacy Protection quick panel from the toolbar indicator
* Added compatibility-rule counts and current-page compatibility counters to privacy reporting
* Added Privacy & Security protection-list status card
* Added profile-local privacy source controls for optional lists
* Added last-update and next-automatic-update status for privacy lists
* Added bounded cosmetic filtering for supported `domain##selector` rules
* Added WebRTC local IP protection settings with restart handling
* Added WebGL renderer/vendor masking in JavaScript fingerprinting protection
* Added advanced JavaScript fingerprinting surface protection
* Added local privacy counter range selector
* Added profile-local cookie protection mode selector
* Added profile-local custom privacy allow/block rules
* Added per-site privacy exceptions and reload-without-protection recovery
* Added per-site privacy control toggles for individual protection classes
* Added local privacy summary export with no browsing history, full URLs, query strings, cookies, page content, tab events, or account secrets
* Added Saved Site Exceptions And Controls visibility in Privacy & Security
* Added targeted clearing for saved site exceptions and per-site controls
* Added stronger diagnostic redaction for sensitive-looking text and error stacks
* Added reset action for profile-local privacy protection settings
* Added local tracking-cookie stripping for known tracker responses
* Added non-blocking CNAME tracker alias detection
* Added previous compiled-cache fallback when the current privacy cache cannot be loaded
* Added `npm run test:privacy-engine`
* Updated runtime trust-manifest and security verification coverage
* Added stricter downloaded-filter validation before activating updated privacy lists

## Carried Forward From 1.3.005

* Added Subscription Tracker under `Tools > Subscription Tracker`
* Added encrypted profile-local manual subscription records
* Added dashboard cards for active subscriptions, trials, upcoming renewals, possible duplicates, price changes, and estimated costs
* Added search, filtering, sorting, editing, deletion, privacy blur, and CSV export
* Added a separate Gmail read-only authorization flow so normal Google profile sign-in does not receive Gmail mailbox scopes
* Added bounded manual Gmail scanning, local deterministic classification, and a review queue for possible subscriptions
* Added multiple-email management and a selected-subscription savings calculator
* Added the Local Subscription Service Catalog as an accuracy layer without changing active-status logic
* Added Subscription Tracker documentation and verification coverage

## Carried Forward From 1.3.001

* Added Virtual Machine Center for VMware Workstation Pro and Linux virtual machine setup guidance
* Added approved Ubuntu 26.04 LTS and Linux Lite 8.0 ISO cards
* Added per-card ISO verification buttons with local SHA-256 calculation
* Added storage warning guidance for ISO files, VM disks, and snapshots
* Added pop-out installation guides and Linux command lists
* Added `Ctrl+Shift+F` for Send Feedback
* Added a feedback shortcut card inside Virtual Machine Center
* Updated the shortcut key guide with the Send Feedback shortcut
* Updated the EULA third-party software license section
* Updated the runtime trust manifest after browser runtime changes
* Updated public release documentation for version `1.3.001`

## Virtual Machine Center Security Notes

Virtual Machine Center is a guide, not a virtualization bridge.

* VMware launches only after explicit user action
* VMware remains outside the browser trust boundary
* Linux guests do not receive browser cookies, passwords, history, open tabs, profile folders, AI Chat data, or browser IPC access
* Websites cannot detect VMware through Virtual Machine Center
* Websites cannot select ISO files, calculate ISO hashes, read local VM files, launch VMware, or execute host or guest commands
* The browser does not install VMware, run VMware installers, create virtual machines, automate VMware, or disable Windows security
* ISO hash calculation uses only the user-selected `.iso` file and does not upload ISO contents or hashes

## Subscription Tracker Security Notes

Subscription Tracker is a local profile tool.

* Manual records are stored in encrypted profile data
* Guest and Incognito windows cannot use the tracker
* Normal websites cannot access tracker IPC
* Normal Google profile sign-in does not request Gmail mailbox scopes
* Gmail discovery requires a separate explicit Gmail read-only consent flow before mailbox scanning can be used
* Gmail scan results remain unconfirmed until the user reviews them
* Gmail tokens remain encrypted in profile storage and are not exposed to the renderer
* The browser does not connect to banks, credit cards, payment services, cancellation services, cloud AI analysis, or a remote BubblesTheDev subscription database

## Package

Installer:

`BubblesTheDev Web Browser_Installer_1.3.105.exe`

SHA-256:

Published separately with the final release artifact.

## Privacy And Security Notes

* No built-in telemetry or analytics services are part of the normal browser runtime
* Privacy Protection Engine statistics are local aggregate counters, not a remote browsing-history feed
* Diagnostics can remain local unless the user explicitly exports them or enables privacy-safe reporting
* Optional AI Chat uses local Ollama on the user's computer when enabled
* Optional anonymous feedback uses only the user's selected category, typed message, and optional basic technical details
* Public documentation avoids private setup details and focuses on what users need to know
