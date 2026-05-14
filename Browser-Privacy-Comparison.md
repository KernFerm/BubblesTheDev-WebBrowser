# BubblesTheDev Web Browser

## Browser Privacy Comparison

This document reflects the current privacy posture of BubblesTheDev Web Browser version `1.0.63`.

The goal is accuracy, not marketing language. The browser does not implement built-in telemetry, analytics SDKs, cloud sync, a built-in silent auto-updater client, or automatic diagnostics upload. It does, however, make normal network requests when the user browses the web, uses built-in search features, uses supported site authentication flows such as passkeys, downloads files, or uses the managed update flow when the build is configured with an update server.

## Scope And Related Documents

This document is focused on privacy behavior and high-level browser feature comparison.

Related project documents cover adjacent topics:

* [5-TAB-PERFORMANCE-TEST.md](./5-TAB-PERFORMANCE-TEST.md) covers measured RAM and CPU behavior for a real-world 5 tab test on Windows 11.
* [Data-Collection-and-Privacy-Notice.md](./Data-Collection-and-Privacy-Notice.md) is the plain-language privacy notice for end users.
* [ARCHITECTURE.md](./ARCHITECTURE.md) explains how local persistence, diagnostics, downloads, passkeys, background tab suspension, streaming-session isolation, and gaming or streaming performance controls are implemented in the current runtime.

Those documents should be read together:

* this file explains privacy posture and broad browser-to-browser differences
* the performance test explains resource usage under one specific Windows test setup
* the privacy notice explains what data stays local and what can still use the network
* the architecture document explains the technical behavior behind those claims

## High-Level Comparison

This table is intentionally high-level. Mainstream browsers change over time, but the Bubbles column below matches the current codebase.

| Feature | BubblesTheDev Web Browser | Google Chrome | Microsoft Edge | Brave | Firefox | Safari | Opera | Vivaldi |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| First-party telemetry | Not implemented | Yes | Yes | Limited | Limited | Limited | Limited | Limited |
| Analytics SDKs in app code | None | Yes | Yes | Limited | Limited | Limited | Limited | Limited |
| Automatic diagnostics upload | No | Yes | Yes | Limited | Limited | Limited | Limited | Limited |
| Cloud sync requirement | None | Optional | Optional | Optional | Optional | Optional | Optional | Optional |
| Auto-updater service | No built-in silent updater; optional owner-run managed updater for installed builds | Present | Present | Present | Present | Present through OS updates | Present | Present |
| Local browser data storage | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Local persistence protection | Brotli-compressed, with OS-backed or credential-backed encryption when available | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Manual encrypted diagnostics export | Yes | Varies | Varies | Varies | Varies | Varies | Varies | Varies |
| Browser-data import from other browsers | Yes, explicit user action and consent | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Per-site permission controls | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Ad and tracker filtering built in | Yes | Limited | Limited | Yes | Limited | Yes | Yes | Yes |
| Windows-native download protection stack | Yes, with Windows Security Center detection, Attachment Services, Mark of the Web, Authenticode checks, and Windows Defender fallback scanning | Varies | Varies | Varies | Varies | Varies | Varies | Varies |
| Private or incognito session mode | Yes, separate incognito session handling | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Isolated in-browser streaming service sessions | Yes, for supported services with dedicated persistent partitions | No | No | No | No | No | No | No |
| Supported built-in streaming hub or launcher | Yes, with a dedicated Streaming Hub for supported services | Varies | Varies | Varies | Varies | Varies | Varies | Varies |
| Streaming sign-in popup hardening | Yes, with hardened popup windows, one-popup-per-service limits, and cooldown protection | Varies | Varies | Varies | Varies | Varies | Varies | Varies |
| Streaming navigation allowlists | Yes, with per-service allowlists and unsafe-scheme blocking | No | No | No | No | No | No | No |
| Streaming download blocking inside isolated sessions | Yes | No | No | No | No | No | No | No |
| Per-service streaming session clearing | Yes | No | No | No | No | No | No | No |
| Runtime checks or local diagnostics view | Yes, with Runtime Checks plus manual encrypted diagnostics export | Varies | Varies | Varies | Varies | Varies | Varies | Varies |
| Search-provider requests from built-in home/search page | Yes, after user search on `bubbles://home` | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Passkey and WebAuthn compatibility | Yes, through Chromium/Electron site support | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Gaming or streaming-aware performance controls | Yes, with local OBS or Streamlabs detection, tab sleeping, background throttling, and stream-stability tuning | Varies | Varies | Varies | Varies | Varies | Varies | Varies |
| Browser VPN or VPN integration feature | Local VPN manager, installed-client detection, and ProtonVPN WireGuard profile import | Not documented as a built-in browser VPN feature | Built-in Edge Secure Network VPN | Built-in paid Brave Firewall + VPN | Separate Mozilla VPN service and Firefox extension support | Not documented as a built-in browser VPN feature | Built-in Opera VPN | Built-in Proton VPN integration |
| Split-view browsing built in | Yes | Varies | Varies | Varies | Varies | Varies | Varies | Yes |
| Built-in task or process manager | Yes | Yes | Yes | Yes | Varies | Varies | Yes | Yes |
| External-drive install-linked data tracking | Yes | Varies | Varies | Varies | Varies | Varies | Varies | Varies |
| Local-only music library scan | Yes, explicit opt-in | N/A | N/A | N/A | N/A | N/A | N/A | N/A |
| Restricted local music downloader | Yes, consent-gated and limited to approved YouTube single-video audio flows | N/A | N/A | N/A | N/A | N/A | N/A | N/A |

Additional notes for the comparison columns:

* `Safari` is shown with OS-managed updating because Safari updates are tied to Apple operating-system updates.
* `Opera` is shown with optional sync and limited first-party data processing because Opera documents account-based sync and optional data sharing choices.
* `Vivaldi` is shown with optional sync and limited first-party data processing because Vivaldi documents both optional encrypted sync and a browser privacy policy with limited browser-generated server messages.
* `Browser-data import from other browsers` refers to browser features for importing bookmarks or related local browser data from another browser or exported file.
* `Private or incognito session mode` refers to built-in private browsing modes intended to limit what is stored locally after the private session ends.
* `Supported built-in streaming hub or launcher` refers to whether the browser exposes a dedicated in-browser streaming surface for supported providers rather than treating streaming services only like normal tabs or bookmarks.
* `Streaming sign-in popup hardening` refers to whether sign-in popups for supported streaming flows are restricted with dedicated popup handling, abuse controls, or tighter window settings.
* `Streaming navigation allowlists` refers to whether supported streaming sessions are actively restricted to trusted service domains instead of behaving like unrestricted general web tabs.
* `Streaming download blocking inside isolated sessions` refers to whether the browser intentionally denies normal download flows from those supported streaming sessions.
* `Per-service streaming session clearing` refers to whether the browser can clear the isolated stored session data for one supported streaming provider without wiping the full default browser session.
* `Windows-native download protection stack` refers to whether the browser exposes a local download-validation path that can cooperate with normal Windows security layers instead of only using browser-level prompts.
* `Runtime checks or local diagnostics view` refers to whether the browser exposes a user-facing diagnostics or inspection surface rather than only hidden internal pages or crash dialogs.
* `Gaming or streaming-aware performance controls` is intentionally broad. It refers to browser behavior that reacts to heavier local sessions such as streaming, recording, or gaming pressure rather than acting only like a static tab-throttling model.
* `Browser VPN or VPN integration feature` is intentionally broad. It includes built-in browser VPNs, first-party browser-integrated VPN partnerships, or local VPN-management features exposed by the browser itself.
* `Split-view browsing built in` refers to a browser-exposed side-by-side browsing feature or comparable built-in tab tiling behavior.
* `Built-in task or process manager` refers to a browser-exposed page, window, or tool that lets the user inspect browser tab or process activity directly.
* Built-in content blocking can also affect page weight and resource usage on some sites, but direct RAM and CPU measurements belong in the dedicated performance test document rather than this privacy comparison.

## Local-First Behavior

BubblesTheDev Web Browser stores browser state in the Electron `userData` directory.

Current persisted data includes:

* homepage setting
* browsing history
* bookmarks
* bookmark-import consent choices at runtime
* saved password metadata and encrypted password vault entries
* imported Chromium extension metadata
* imported ProtonVPN WireGuard profile metadata
* toolbar visibility
* bookmark bar visibility
* selected shell theme
* Music Player opt-in state and chosen folder
* Music Downloader consent state, queue state, cooldown timing, abuse-lock timing, recent job history, and approved output folder
* gaming and streaming performance settings, including stream-stability preferences
* per-site permission settings
* service-specific persistent streaming-session partitions for supported streaming services
* cached search results and suggestions
* install-linked path metadata used for custom or external-drive installs and local update preferences
* first-launch managed update follow-up state used after install

The persisted browser-state payload is compressed before it is written to disk. When Electron safe storage is available, that payload is also protected with OS-backed encryption. If OS-backed protection is unavailable, the runtime can fall back to credential-backed AES-GCM protection when available.

The application does not automatically upload this browser-state data.

Installer builds can optionally be configured with an owner-run update server. In that case, installed builds can send a minimal update-registration record containing install-management fields such as install ID, app version, install path, install root, install drive type, host name, platform, architecture, last-seen time, and the IP address seen by that server. They can also request the latest published release metadata and download the published installer package. The current flow can also do a one-time first-launch managed update follow-up after installation to create a more Chrome-like install experience. The managed updater rejects non-HTTPS release metadata or installer URLs and requires a valid published SHA-256 hash before the installer is launched. This does not include browsing history, bookmarks, saved passwords, or page contents.

If the browser is installed on an external drive instead of `C:`, install-linked data and path tracking can follow that selected external location instead of being treated only as a default system-drive install.

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
* uses websites that request passkey or WebAuthn authentication through the platform browser flow
* uses the managed update flow when the build is configured with an update server

The internal Bubbles search page can contact DuckDuckGo and Google endpoints to assemble results, related searches, and suggestions after the user performs a search.

When the user downloads files, the browser may run trusted-source-aware download handling, Windows Security Center antivirus detection, Windows Attachment Services validation, Mark of the Web tagging, local protection-provider checks, destination selection, and normal file save behavior. That is part of the local browser protection flow rather than any built-in analytics pipeline.

When the user signs in with a passkey on a supported site, the authentication flow is between the website, Chromium/Electron, and the operating system or authenticator. The browser does not add a separate Bubbles-operated passkey cloud service.

When the user signs into a supported streaming service through the Streaming Hub, the service still receives normal web login traffic, but each supported service stays inside its own dedicated persistent Electron partition rather than the shared default browsing session.

As of version `1.0.63`, the supported services are Disney+, Hulu, Max, Netflix, Paramount+, Prime Video, Apple TV+, AMC+, Peacock, Crunchyroll, YouTube TV, Sling TV, Pluto TV, The Roku Channel, Plex, Discovery+, ESPN+, MGM+, STARZ, and Tubi.

## Music Player Privacy Model

The Music Player is local-only.

* It is disabled by default.
* No folder scan starts until the user explicitly agrees in the Music Player UI.
* It scans the default Music folder or another local folder the user selects.
* Playback uses local files only.
* The application does not upload the user's music library.

## Music Downloader Privacy Model

The Music Downloader is local-first and intentionally constrained.

* It requires explicit responsible-use consent before downloads can begin.
* It is limited to supported YouTube single-video audio flows.
* Certain YouTube watch-page radio parameters can be normalized back to the single canonical video URL instead of being treated like playlist support.
* Queue state, cooldown timers, and abuse protection are enforced in the Electron main process and stored locally.
* Download, probe, and conversion steps use bundled local binaries after integrity verification.
* Media is processed in an isolated temp location before validated output is moved into the approved download folder.

## Security And Privacy Model

The browser uses Electron with Chromium sandboxing and process isolation while avoiding built-in telemetry frameworks and automatic background reporting.

Current characteristics:

* sandboxed renderers and helper windows
* `contextIsolation` enabled
* `nodeIntegration` disabled in renderers
* separate session handling for incognito windows
* separate persistent session handling for supported streaming services
* per-site permission prompts with allow, block, and ask-later behavior
* ad and tracker request filtering with local counters
* modular download protection using Windows Security Center antivirus detection, Windows Attachment Services handoff, Mark of the Web tagging, Windows Defender, Authenticode verification, and browser heuristics when available
* trusted-source-aware download handling intended to reduce unnecessary friction while keeping local protection checks active
* no automatic diagnostics upload
* no built-in analytics pipeline
* no cloud sync service
* no built-in silent auto-updater service
* local background tab throttling, memory-pressure tab suspension, and stream-stability optimization instead of cloud-managed performance services
* optional owner-run managed updater for installed builds
* managed update installs require verified HTTPS release endpoints and SHA-256 installer validation
* installed builds can do a one-time first-launch managed update follow-up without adding a silent always-on updater service
* password save and reveal flows are restricted to secure contexts such as `https:` pages or local loopback development hosts
* imported extensions are loaded without local file access and high-risk permissions trigger extra user warnings
* Chromium and Electron secure-context behavior for supported passkey and WebAuthn site flows

## Uninstall Privacy Model

Uninstall behavior is also local-first.

Current uninstall behavior:

* the installed app files are removed
* the user can choose which local data categories should be removed or kept
* current removable categories include browser profile data, saved passwords, diagnostics reports, and local update preferences
* if a category is left unchecked, that data remains on the device for a future reinstall or update
* uninstall cleanup also removes stale uninstall metadata and re-checks leftovers before showing a warning
* external-drive installs can keep install-linked data associated with the selected external location

## Summary

BubblesTheDev Web Browser currently aims for a local-first privacy posture:

* browser settings, history, bookmarks, permissions, search cache, and install-linked path metadata stay on-device
* toolbar visibility, bookmark bar visibility, and the selected shell theme stay on-device
* persisted state is compressed and protected locally
* diagnostics stay local unless the user exports them
* performance-related behaviors such as background tab sleeping, memory-pressure trimming, OBS-aware throttling, borderless-game detection, improved local session detection, fresh local detector refreshes, and adaptive local detector sampling are local runtime features rather than telemetry or remote optimization systems
* the isolated Streaming Hub in `1.0.63` adds service-specific session separation and popup hardening without changing the browser into a credential interceptor or telemetry client
* lighter performance-summary handling in `1.0.63` reduces repeated local metrics work during normal browsing without changing the browser's privacy posture
* the visible media memory saver and lighter cached Runtime Checks behavior in `1.0.63` lower local overhead further without changing the browser's privacy posture
* music library access requires explicit consent before any scan begins
* bookmark import and VPN profile scanning require explicit user consent before local file access begins
* password save and reveal behavior is limited to secure contexts instead of arbitrary insecure pages
* supported passkey sign-ins rely on site and platform authenticator flows rather than a Bubbles-operated credential cloud
* browsing and built-in search still create normal traffic to the websites and providers the user chooses to use

Developed by BubblesTheDev
