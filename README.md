# BubblesTheDev Web Browser

> A browser built for privacy, control, and a smoother everyday experience.

[![Version](https://img.shields.io/badge/version-1.2.3-blue)](https://github.com/KernFerm/BubblesTheDev-WebBrowser/releases)
[![Platform](https://img.shields.io/badge/platform-Windows%2011-0078D6)](https://github.com/KernFerm/BubblesTheDev-WebBrowser/releases)
[![Electron](https://img.shields.io/badge/Electron-42-47848F?logo=electron&logoColor=white)](https://www.electronjs.org/)

## What Is It? 👋

BubblesTheDev Web Browser is a Windows browser designed for everyday browsing while keeping browser data local-first and user controls easier to understand.

It is meant to feel like a practical daily browser, not just a privacy experiment or a stripped-down shell. The project combines familiar browser features such as tabs, bookmarks, downloads, saved passwords, a built-in home page, split view, and media tools with stronger local-first defaults, clearer diagnostics, and more visible runtime controls.

Version `1.2.3` continues that direction as a maintenance release focused on dependency updates while also refining the update flow, trusted-root certificate handling, and AI panel persistence behavior.

The overall goal is simple:

* keep everyday browsing familiar
* avoid unnecessary background collection
* keep more browser behavior local and inspectable
* give users better visibility into performance, stability, and diagnostics

## What's New In 1.2.3 ✨

* Refreshed project dependencies for the current packaged build
* Improved managed updates so installed builds can show download and install progress, hand off to automatic installer execution, and notify the user after installation
* Improved trusted-root certificate handling so the browser can skip repeated prompts when the same bundled certificate is already trusted
* Added an extra pre-install local save and session-flush pass during managed updates to better preserve ordinary browser data
* Preserved local `AI & Diagnostics` panel draft, preview, summary, and scroll state when the panel is closed and reopened

In practical terms, this release is focused on maintenance, update-flow polish, and day-to-day reliability improvements rather than a new headline browser feature.

## Main Features 🚀

### Everyday Browsing 🧭

* multi-tab browsing
* built-in `bubbles://home` start page
* bookmarks and bookmark bar
* browsing history
* pinned tabs
* tab mute controls
* split-view browsing
* full-screen support

The everyday browsing layer is meant to stay familiar. You still get a normal browser shell with address bar navigation, bookmarks, history, and utility panels, but the surrounding browser behavior is designed to stay more understandable and more local-first than many mainstream browser experiences.

### Privacy And Security 🔒

* local-first browser data handling
* no built-in telemetry or analytics
* isolated browser profiles
* incognito browsing
* Guest Mode
* optional profile PIN protection
* built-in ad and tracker blocking
* Windows-friendly download protection
* encrypted saved-password storage
* encrypted profile secrets and backups
* per-site permission controls
* sandboxed and isolated browser runtime
* local accessibility and reading controls

The browser tries to keep privacy and security features understandable instead of burying them behind background behavior. Browser data stays local by default, and higher-risk browser actions stay under tighter browser-controlled protection.

It is not an offline-only browser, and it does not pretend normal web traffic is the same thing as telemetry. The privacy model is local-first, user-controlled, and intentionally more explicit about what stays on-device.

### Profiles And Recovery 🧩

* profile manager UI
* isolated profile sessions
* profile switching
* per-profile session snapshots
* restore points and repair tools
* profile backup and restore
* profile security panel
* connected-account profile identities with clearer linked-avatar and linked-name behavior
* up to `10` local browser profiles per installation

The profile layer is designed to keep ordinary browsing, saved state, and recovery flows more separated and easier to manage. Standard profiles keep their own session and browser data, while Guest Mode stays temporary and non-persistent. The current model supports up to `10` local browser profiles per installation, and each profile can present one linked connected-account identity for clearer profile-card name and avatar display.

Connected-account identity linking is optional. Where supported, profiles may link identities from providers such as GitHub, Discord, or Google. End users can generally revoke that provider access later from the provider's own account settings or authorized-applications page.

### Local AI And Diagnostics 🤖

* `AI & Diagnostics` panel in the browser UI
* offline local summarization
* isolated local AI runtime worker
* current-session health monitoring
* encrypted profile-isolated AI memory for standard profiles
* non-persistent AI memory behavior for incognito sessions
* privacy-safe diagnostics preview
* privacy-safe manual diagnostic reporting
* privacy-safe test reporting
* optional automatic severe-event reporting when enabled by the user

This part of the browser is intended to stay local-first. The AI layer is used for offline summaries, runtime analysis, and current-session health feedback rather than cloud-based assistant behavior. Standard profiles can keep encrypted AI memory locally, while incognito sessions do not persist that memory across sessions.

### Multilingual Platform 🌍

* automatic locale detection
* manual language override
* runtime locale switching
* locale inheritance and fallback chains
* RTL-aware metadata and layout support
* locale-aware formatting helpers
* local-only language-pack validation
* bounded localization caches

The multilingual layer is designed to scale without turning into a cloud translation system. Language data stays local, translation packs are checked before use, and the browser applies translated interface text in a safer way.

### Streaming Hub 🎬

The browser includes an isolated Streaming Hub for supported providers. Supported services currently include:

* Disney+
* Hulu
* Max
* Netflix
* Paramount+
* Prime Video
* Apple TV+
* AMC+
* Peacock
* Crunchyroll
* YouTube TV
* Sling TV
* Pluto TV
* The Roku Channel
* Plex
* Discovery+
* ESPN+
* MGM+
* STARZ
* Tubi

Each supported streaming service is intended to run in its own isolated session instead of the shared normal browsing session. That helps keep streaming sign-in state more separated, reduces cross-service mixing, and allows service sessions to be managed more independently from normal browsing activity.

### Performance And Power Features ⚡

* gaming and streaming performance mode
* background tab throttling
* sleeping tabs under memory pressure
* stream-stability controls
* built-in Task Manager
* runtime checks panel
* Profile Security panel
* multiple built-in themes
These features are aimed at keeping the browser usable during heavier sessions such as gaming, streaming, multitasking, or long browsing runs. The browser can back off more aggressively in the background, reduce unnecessary work, and surface a current-session health view so users can see when the browser is under more pressure.

### Extra Tools 🛠️

* extension import support
* VPN tools and public IP checks
* passkey compatibility for supported sites
* local-only Music Player
* hardened Music Downloader
* profile backup, restore, and recovery tools

These tools are meant to make the browser feel more complete without turning it into a cloud-heavy utility platform. Where possible, these features stay local, use explicit user action, and expose their behavior through the browser UI instead of hidden background collection.

## Architecture At A Glance 🏗️

The browser is built on Electron and keeps higher-risk parts of the app under browser-controlled protection.

At a high level:

* browser windows and tabs are managed by the trusted browser side
* web content stays separated from privileged browser operations
* downloads, diagnostics, localization orchestration, profile isolation, and performance-policy behavior stay in browser-controlled services
* local AI runs through an isolated worker process instead of directly inside the normal browser UI flow
* profile session state, encrypted profile secrets, and restore-point handling stay in browser-controlled services
* profile-local AI memory stays isolated per profile and is non-persistent for incognito sessions

The architecture is intentionally local-first and tries to keep the browser's more sensitive features inside the trusted runtime side of the app.

## Installer 📦

Installer file name:

`BubblesTheDev Web Browser_Installer_1.2.3.exe`

Platform:

`Windows 11 x64`

The current installer still uses a Windows installer package instead of a silent always-on patch service. Recent builds now let installed versions show update download and install progress more clearly, hand off to a silent installer run where supported, and notify the user after the new version is installed.

## Updating 🔄

The browser does not rely on a silent always-on updater.

Instead:

* updates continue to use a normal installer flow
* the browser can check for newer releases from the app menu
* installed builds can perform background update checks and background installer downloads when the managed update flow is available
* installed builds can keep browser-controlled update registration support where available
* installed builds can now move from a downloaded update into a silent installer handoff instead of relying on a repeated full installer prompt for every update
* installed builds can perform an extra local save and session-flush pass before update installation closes the browser
* installed update behavior can create or refresh a Desktop folder named `BubblesTheDev - WebBrowser Update Notes` so the current bundled release notes stay visible locally

That means updates are still browser-controlled and installer-based instead of behaving like a hidden background patch service. The browser can help with background update checks, downloads, visible progress, and a quieter installer handoff where supported, while still relying on the packaged installer model underneath.

## Privacy Summary 🛡️

This browser is built to keep things simple and local-first.

It does:

* keep browser data local on the device by default
* avoid built-in telemetry and analytics systems
* keep profile data isolated per profile by default
* keep localization processing and language preferences local on-device
* keep local AI memory isolated per profile
* keep incognito AI memory non-persistent
* keep Guest Mode non-persistent
* keep diagnostics local unless the user exports them or enables privacy-safe reporting
* give users clear controls over diagnostics behavior

It does not promise zero network activity, because websites, search, downloads, passkeys, streaming services, and updates can still use the network when the user chooses those features. The privacy goal is not "offline-only"; it is "local-first, transparent, and limited by default."

## Related Docs 📚

If you want more detail, the repo also includes:

* `ARCHITECTURE.md` for the high-level runtime design
* `SECURITY.md` for the security policy and reporting path
* `Data-Collection-and-Privacy-Notice.md` for the plain-language privacy notice
* `Browser-Privacy-Comparison.md` for the broader privacy comparison view
* `CHANGELOG.md` for release-to-release changes

