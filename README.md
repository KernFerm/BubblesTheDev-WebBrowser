# BubblesTheDev Web Browser

> **A privacy-focused Windows 11 browser with local-first data handling, isolated profiles, accessibility tools, local AI, built-in privacy protection, and practical everyday features.**

[![Version](https://img.shields.io/badge/version-1.3.105-blue)](https://github.com/KernFerm/BubblesTheDev-WebBrowser/releases)
[![Platform](https://img.shields.io/badge/platform-Windows%2011-0078D6)](https://github.com/KernFerm/BubblesTheDev-WebBrowser/releases)
[![Electron](https://img.shields.io/badge/Electron-44-47848F?logo=electron&logoColor=white)](https://www.electronjs.org/)
[![Downloads](https://img.shields.io/github/downloads/KernFerm/BubblesTheDev-WebBrowser/total?label=downloads)](https://github.com/KernFerm/BubblesTheDev-WebBrowser/releases)
[![Stars](https://img.shields.io/github/stars/KernFerm/BubblesTheDev-WebBrowser?style=flat&label=stars)](https://github.com/KernFerm/BubblesTheDev-WebBrowser/stargazers)

## Download

**Current Version:** `1.3.105`  
**Platform:** `Windows 11 x64`

Download the latest release:

https://github.com/KernFerm/BubblesTheDev-WebBrowser/releases

If you find BubblesTheDev Web Browser useful, consider starring the repository to help more people discover the project.

## About

BubblesTheDev Web Browser is designed for people who want a modern daily browser with clearer control over privacy, profiles, accessibility, diagnostics, and local browser data.

The browser is not offline-only. Websites, search, downloads, passkeys, streaming services, updates, and other user-requested features still use the network when necessary.

The goal is to keep browser data and sensitive features local by default wherever practical while making important browser behavior easier to understand and control.

## Everyday Browsing

- multi-tab browsing
- built-in `bubbles://home` start page
- Bubbles Search Engine with blended provider-backed results
- bookmarks and bookmark bar
- browsing history
- pinned tabs and persistent pinned sites
- tab mute controls
- vertical tabs with profile-scoped layout settings
- tab groups and saved workspaces
- tab search with direct mute and close controls
- Split View
- full-screen support
- Chromium-style local QR code page sharing
- Create Shortcut page sharing
- Picture-in-Picture controls
- configurable local sidebar
- local website app install records and shortcuts
- same-network Send to Device setup notes for Windows 11 PCs
- mobile Send to Device support planned for the future

## Privacy And Security

BubblesTheDev Web Browser includes a local Privacy Protection Engine with:

- ad blocking
- tracker blocking
- tracker classification
- tracking-cookie protection
- CNAME alias protection
- tracking URL cleanup
- cosmetic filtering
- compatibility rules
- URLHaus-style security host rules
- cryptomining protection categories
- WebRTC local IP protection
- WebGL fingerprint masking
- advanced JavaScript fingerprinting reductions
- cookie protection modes
- privacy presets
- DNT/GPC headers
- media-device label reduction
- strict-mode timezone normalization
- OfflineAudioContext reduction
- selected sensor API protections
- optional privacy-list controls
- installed-list status
- custom allow/block rules
- per-site controls and exceptions
- Privacy Request Inspector
- Known Tracking Companies grouping
- local Protection Self-Test
- local Privacy Summary export
- profile-local privacy counters for Today, 7 Days, 30 Days, and All Time

OAuth-safe tracking URL cleanup is designed to preserve sign-in parameters while removing known tracking parameters.

Additional privacy and security features include:

- no built-in telemetry
- no built-in analytics
- no behavioral profiling
- no selling user data
- optional profile PIN protection
- Windows-friendly download protection
- encrypted saved sign-in storage
- encrypted profile secrets and backups
- Secure DNS controls with visible provider addresses
- password breach warning controls
- visible permission-use indicators
- per-site permission controls
- sandboxed and isolated browser runtime

Guest Mode remains temporary, Incognito remains non-persistent, and diagnostics remain under user control.

## Profiles And Recovery

- Profile Manager
- isolated profile sessions
- profile switching
- per-profile session snapshots
- restore points
- repair tools
- profile backup and restore
- profile security controls
- up to `10` local browser profiles per installation
- optional connected-account profile identities

Where supported, profiles may link identities from providers such as:

- GitHub
- Discord
- Google

## Local AI And Diagnostics

- `AI & Diagnostics` panel
- standalone AI Chat panel
- AI Chat pop-out window
- optional local Ollama chat through the local loopback service
- offline local summarization
- isolated local AI runtime worker
- current-session health monitoring
- encrypted profile-isolated AI memory for standard profiles
- non-persistent AI memory for Incognito sessions
- privacy-safe diagnostics preview
- privacy-safe manual diagnostic reporting
- privacy-safe test reporting
- optional automatic severe-event reporting when enabled by the user

When the browser starts Ollama for the user, it manages that local process and stops the managed process when the browser quits.

## Accessibility And Language Support

BubblesTheDev Web Browser includes local accessibility and reading controls along with multilingual support.

Language features include:

- automatic locale detection
- manual language override
- runtime locale switching
- locale inheritance and fallback chains
- RTL-aware metadata and layout support
- locale-aware formatting helpers
- local-only language-pack validation
- bounded localization caches

Language data stays local and translation packs are checked before use.

## File Converter

`Tools > File Converter`

Features include:

- detected file families
- valid output choices for mixed batches
- visible progress
- cancellation
- width controls
- height controls
- quality controls
- bitrate controls
- sample-rate controls
- channel controls
- frame-rate controls
- rotation controls
- text handling
- markup handling
- XML
- YAML
- RTF
- CSV
- TSV
- DOCX text extraction
- ODT text extraction
- XLSX table extraction
- ODS table extraction
- ZIP manifest output
- TAR manifest output
- TGZ manifest output
- GZIP manifest output
- ffmpeg-backed media and image output where available
- metadata-removal guidance

## Universal Media Controls

`Tools > Media Controls`

Features include:

- active media tab detection
- playback controls
- mute controls
- per-tab volume
- volume slider
- numeric volume control
- volume reset
- Go to Tab

Per-tab volume is also available through the tab context menu.

## Clipboard History

Optional local Clipboard History supports:

- Off
- 10 items
- 25 items
- 50 items
- Session only
- 1 hour
- 24 hours
- 7 days
- Keep until removed
- Copy Again
- Pin
- Delete
- Clear All
- Hide Clipboard Previews

## Download Scheduler

`Tools > Download Scheduler`

Supports immediate or scheduled HTTP and HTTPS downloads with optional destination folders while using the browser's existing download security path.

## Subscription Tracker

The local Subscription Tracker includes:

- encrypted profile-local manual subscription records
- active subscriptions
- trials
- upcoming renewals
- price changes
- duplicate detection
- estimated costs
- search
- filtering
- sorting
- editing
- deletion
- privacy blur
- CSV export
- separate Gmail discovery consent
- local public-service catalog for recognized service names

Subscription Tracker is blocked in Guest and Incognito windows.

## PDF Tools

Local PDF tools include:

- byte-level editing
- notes
- highlights
- simple drawing
- form-field updates
- Save Copy support

Visual Cover is treated as a visible cover on the page and is not labeled as permanent redaction.

Permanent Redaction is only reported as verified when local text extraction confirms that the target text is absent from the saved PDF.

## Streaming Hub

The browser includes an isolated Streaming Hub for supported services.

Current services include:

- Disney+
- Hulu
- Max
- Netflix
- Paramount+
- Prime Video
- Apple TV+
- AMC+
- Peacock
- Crunchyroll
- YouTube TV
- Sling TV
- Pluto TV
- The Roku Channel
- Plex
- Discovery+
- ESPN+
- MGM+
- STARZ
- Tubi

Each supported streaming service is intended to run in its own isolated session instead of the shared normal browsing session.

## Performance And Power Features

- Gaming & Streaming Performance Mode
- expanded local game process detection
- Steam and EA App launchers are not treated as games
- browser-managed gaming optimization
- no hooking, patching, or controlling game processes
- background tab throttling
- sleeping tabs under memory pressure
- stream-stability controls
- built-in Task Manager
- runtime checks panel
- Profile Security panel
- Disable Hardware Acceleration restart button when a restart is pending
- multiple built-in themes
- animated `Aurora Drift` theme
- custom local-image banner themes

## Developer And Extra Tools

- extension import support
- browser history import support
- VPN tools
- public IP checks
- passkey compatibility
- Developer Workspace
- Virtual Machine Center
- local-only Music Player
- hardened Music Downloader
- optional anonymous feedback
- `Ctrl+Shift+F` Send Feedback shortcut

### Developer Workspace

The Developer Workspace can:

- detect supported local developer applications
- provide official install-page links
- store custom app favorites
- provide developer website shortcuts

### Virtual Machine Center

The Virtual Machine Center includes:

- VMware Workstation Pro setup guidance
- Linux ISO setup guidance
- Ubuntu guidance
- Linux Lite guidance
- local SHA-256 verification where expected hashes are configured
- pop-out Linux installation guides
- command lists

### Browser History Import

History import can read supported local browser history from:

- Microsoft Edge
- Google Chrome
- Brave
- Opera
- Firefox
- user-selected history files

The importer works from a temporary safe copy of supported local history databases instead of modifying the live browser database in place.

### Extension Import

Extension import supports:

- scanning installed Edge profiles
- scanning installed Chrome profiles
- scanning installed Brave profiles
- scanning installed Opera profiles
- manually selecting an extension `manifest.json` file

## What's New In 1.3.105

Version `1.3.105` adds:

- `Tools > File Converter`
- `Tools > Media Controls`
- per-tab volume controls
- `Tools > Clipboard History`
- `Tools > Download Scheduler`
- local What's New page
- focused verification coverage for local-only behavior
- profile-isolation verification
- temporary-context verification
- safe File Converter output handling verification
- Download Scheduler restart-behavior verification

The local What's New page replaces the previous Desktop update-note folder behavior and can be reopened from:

`Menu Bar > What's New`

For older release history, see:

`CHANGELOG.md`

## Architecture At A Glance

BubblesTheDev Web Browser is built on Electron.

At a high level:

- browser windows and tabs are managed by the trusted browser side
- web content stays separated from privileged browser operations
- downloads stay in browser-controlled services
- diagnostics stay in browser-controlled services
- localization orchestration stays in browser-controlled services
- profile isolation stays in browser-controlled services
- performance-policy behavior stays in browser-controlled services
- local AI runs through an isolated worker process
- profile session state stays in browser-controlled services
- encrypted profile secrets stay in browser-controlled services
- restore-point handling stays in browser-controlled services
- profile-local AI memory stays isolated per profile
- Incognito AI memory remains non-persistent

## Updating

The browser does not rely on a silent always-on updater.

Installed builds can:

- check for newer releases from the app menu
- perform background update checks when supported
- download installers in the background where supported
- show update download progress
- save and flush session state before update installation closes the browser
- open the regular installer so the user can complete the installer prompts
- open `bubbles://whats-new` after a newly installed version launches
- reopen What's New from `Menu Bar > What's New`

Updates remain browser-controlled and installer-based rather than operating as a hidden background patch service.

## Feedback And Support

The optional feedback panel can include basic technical details only when the user opts in.

Those details may include:

- browser version
- Windows version
- CPU
- RAM
- GPU type

It does not attach:

- browser activity
- profile data
- local files
- diagnostics
- crash reports
- linked identity state
- AI memory

The browser does not keep a local feedback history.

For support requests that need a reply:

**support.bubblesthedev.webbrowser@gmail.com**

Do not send sensitive personal, account, payment, or identity information in support messages.

## Related Documentation

- `ARCHITECTURE.md` — high-level runtime design
- `SECURITY.md` — security policy and reporting path
- `Data-Collection-and-Privacy-Notice.md` — plain-language privacy notice
- `Developer-Workspace.md` — Developer Workspace behavior and boundaries
- `Browser-Privacy-Comparison.md` — broader privacy comparison
- `CHANGELOG.md` — release-to-release changes

---

**Repository:**  
https://github.com/KernFerm/BubblesTheDev-WebBrowser

**Releases:**  
https://github.com/KernFerm/BubblesTheDev-WebBrowser/releases
