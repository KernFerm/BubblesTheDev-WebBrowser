# BubblesTheDev Web Browser

> A browser built for privacy, control, and a smoother everyday experience.

[![Version](https://img.shields.io/badge/version-1.2.7-blue)](https://github.com/KernFerm/BubblesTheDev-WebBrowser/releases)
[![Platform](https://img.shields.io/badge/platform-Windows%2011-0078D6)](https://github.com/KernFerm/BubblesTheDev-WebBrowser/releases)
[![Electron](https://img.shields.io/badge/Electron-42-47848F?logo=electron&logoColor=white)](https://www.electronjs.org/)

## Why Choose BubblesTheDev Web Browser?

BubblesTheDev Web Browser is built around a local-first browser design that aims to work for the user rather than collect information about the user.

The project focuses on privacy, transparency, accessibility, performance, user control, and long-term user trust. Instead of centering the browser experience around background collection, behavioral analysis, or ecosystem lock-in, the browser is designed to keep more browsing behavior understandable, visible, and local to the device wherever practical.

That means the browser is intended to feel usable as an everyday browser while still giving people clearer control over how profiles behave, how diagnostics work, how browser data is stored, and how runtime behavior can be inspected.

## Privacy First

Privacy in BubblesTheDev Web Browser starts with local-first browser data handling and a simpler promise: browser data remains on the device by default unless the user explicitly chooses a feature that needs the network.

The browser emphasizes:

* no built-in telemetry
* no built-in analytics
* no behavioral profiling
* no selling user data
* local-first browser data handling
* isolated browser profiles
* user-controlled diagnostics
* Local AI and Diagnostics
* Guest Mode support
* incognito browsing
* encrypted profile secrets and backups

Privacy controls are designed to be understandable and visible rather than hidden behind unclear settings or background behavior. Standard profiles keep their own local state, Guest Mode stays temporary, incognito browsing is available for non-persistent sessions, and diagnostics behavior stays under the user's control.

The browser's local AI and diagnostics tooling is also meant to stay privacy-aware. Local summaries, health feedback, and diagnostic previews are designed to happen on-device by default, with privacy-safe reporting only where the user chooses to enable or export it.

## Transparency Matters

Trust is earned through transparency and documentation, not just slogans.

BubblesTheDev Web Browser supports that trust model through public documentation, architecture visibility, security visibility, privacy visibility, data handling visibility, and release history visibility. The goal is to make it easier for users to understand what the browser is built to do, how sensitive features are handled, how updates work, and where browser data lives by default.

That is why the project documents its architecture, update model, privacy approach, and release history in plain repository documentation instead of treating those areas like hidden implementation details.

## What Makes It Different?

What makes the browser different is not a claim to be invisible or magical. It is the combination of a local-first philosophy, stronger user control, accessibility-minded features, diagnostics visibility, profile management, security controls, and clearer performance visibility.

The goal is not to build user profiles, drive behavioral tracking, or lock users into an ecosystem. The goal is to provide a practical Windows browser that still gives people more control over their own browser environment, clearer ways to inspect behavior, and better separation between everyday browsing, profile management, and higher-risk actions.

## Built For Real Everyday Use

BubblesTheDev Web Browser is designed to be privacy-focused without feeling stripped down.

It includes:

* multi-tab browsing
* bookmarks and history
* Split View
* built-in ad and tracker blocking
* up to 10 isolated profiles
* Local AI & Diagnostics
* Streaming Hub
* Gaming & Streaming Performance Mode
* accessibility tools
* language support
* backup and recovery tools
* profile security controls

The result is a browser meant for real daily use: browsing, organizing tabs, separating profiles, watching streaming services, managing performance during heavier sessions, using accessibility features, and recovering local browser state when something goes wrong, all without making background data collection the center of the product.

## What Is It? 👋

BubblesTheDev Web Browser is a Windows browser designed for everyday browsing while keeping browser data local-first and user controls easier to understand.

It is meant to feel like a practical daily browser, not just a privacy experiment or a stripped-down shell. The project combines familiar browser features such as tabs, bookmarks, downloads, saved passwords, a built-in home page, split view, and media tools with stronger local-first defaults, clearer diagnostics, and more visible runtime controls.

Version `1.2.7` continues that direction as a maintenance release focused on dependency security updates and keeping the packaged browser build current.

The overall goal is simple:

* keep everyday browsing familiar
* avoid unnecessary background collection
* keep more browser behavior local and inspectable
* give users better visibility into performance, stability, and diagnostics

## What's New In 1.2.7 ✨

* Refreshed project dependencies for the current packaged build
* Applied a dependency security update for the current release line
* Kept the browser's current local-first privacy, profile, accessibility, and diagnostics feature set intact
* Continued current installer-based update behavior without adding new headline browser features

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

`BubblesTheDev Web Browser_Installer_1.2.7.exe`

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
* installed builds can now save the user's preferred install behavior for future updates: `Install updates automatically when possible` or `Ask before installing updates`
* installed builds can perform an extra local save and session-flush pass before update installation closes the browser
* installed update behavior can create or refresh a Desktop folder named `BubblesTheDev - WebBrowser Update Notes` so the current bundled release notes stay visible locally

That means updates are still browser-controlled and installer-based instead of behaving like a hidden background patch service. The browser can help with background update checks, downloads, visible progress, saved install preferences, and automatic or ask-before-installing behavior while still relying on the packaged installer model underneath.

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
