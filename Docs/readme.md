# BubblesTheDev Web Browser

> A Windows 11 browser for people who want clearer privacy controls, visible project docs, and a more understandable daily browser.

[![Version](https://img.shields.io/badge/version-1.2.145-blue)](https://github.com/KernFerm/BubblesTheDev-WebBrowser/releases)
[![Platform](https://img.shields.io/badge/platform-Windows%2011-0078D6)](https://github.com/KernFerm/BubblesTheDev-WebBrowser/releases)
[![Electron](https://img.shields.io/badge/Electron-43-47848F?logo=electron&logoColor=white)](https://www.electronjs.org/)

## Why Choose BubblesTheDev Web Browser? 🌟

Most people do not need a magical browser. They need one they can understand.

BubblesTheDev Web Browser is built for users who want a browser that still feels practical for normal daily use, but is easier to inspect, easier to control, and less dependent on hidden behavior. The project is centered on local-first browser data handling, isolated profiles, clearer diagnostics, accessibility support, and visible documentation.

The point is not to promise invisibility. The point is to give people a browser they can review before they install, understand while they use it, and manage without guessing what it is doing in the background.

## Privacy First 🔐

Privacy here is framed as a design choice, not a marketing slogan.

BubblesTheDev Web Browser is designed so ordinary browser data stays on the device by default unless the user deliberately uses a feature that needs the network.

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

The browser is meant to surface privacy behavior in a more direct way. Standard profiles keep their own local state, Guest Mode stays temporary, incognito stays non-persistent, and diagnostics remain under the user's control instead of being treated like an invisible always-on system.

The same idea applies to local AI and diagnostics. Summaries, health feedback, and diagnostic previews are intended to happen on-device by default, with privacy-safe reporting only when the user explicitly enables or exports it.

## Transparency Matters 🪟

Trust has to be earned before a browser asks to be downloaded.

That is why this project keeps public documentation for privacy behavior, architecture, release notes, update behavior, and user-rights pages. The goal is to let people review the browser the same way they would review any other serious piece of software: by looking at the project, the docs, and the release history for themselves.

Instead of hiding the important parts behind vague promises, the project tries to keep those details visible in plain repository documentation.

## What Makes It Different? 🧠

What makes the browser different is not one single feature. It is the combination of:

* local-first browser behavior
* visible user controls
* isolated profiles
* accessibility-minded design
* clearer diagnostics
* stronger recovery and profile-management tooling
* practical Windows-focused browsing features

The browser is not trying to become a tracking platform, an ecosystem lock-in tool, or a vague "privacy brand." It is trying to be a browser that stays usable while giving people more ownership over their own browsing environment.

## Built For Real Everyday Use 💻

This is meant to be a browser people can actually use, not just admire as a privacy concept.

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

The result is a browser aimed at real daily use: browsing, managing tabs, separating profiles, using streaming services, handling heavier sessions, using accessibility features, and recovering local browser state when something goes wrong without turning hidden background collection into the center of the product.

## What Is It? 👋

BubblesTheDev Web Browser is a Windows browser built around a simple idea: people should be able to use a modern browser without giving up clear control over privacy, profiles, diagnostics, accessibility, and local browser data.

It keeps familiar browser features like tabs, bookmarks, downloads, saved passwords, a built-in home page, split view, and media tools, but pairs them with stronger local-first defaults, clearer runtime visibility, and a more inspectable project surface.

Version `1.2.145` continues that direction as a maintenance release that keeps the browser current while preserving its local-first privacy, profile, accessibility, multilingual, and everyday browsing feature set.

The overall goal is simple:

* stay usable for everyday browsing
* keep more browser data local by default
* make sensitive features easier to inspect and control
* reduce the amount of hidden behavior users have to trust blindly

## What's New In 1.2.145 ✨

* Advanced the packaged browser version to `1.2.145`
* Updated the bundled `yt-dlp.exe` to `2026.07.04`
* Refreshed release-facing documentation so the current public docs match the packaged build
* Fixed Streaming Hub provider connect pages so they no longer open zoomed out
* Fixed normal website zoom behavior so unrelated pages no longer inherit a stale zoomed-out tab state

In practical terms, version `1.2.145` is a maintenance release that keeps the browser current while also keeping the public docs aligned with the packaged build.

## Main Features 🚀

### Everyday Browsing 🧭

* multi-tab browsing
* built-in `bubbles://home` start page
* Bubbles Search Engine with blended provider-backed results
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

The local `locales` folder has also been refreshed across the shipped modules so the current locale packs are fully translated for the browser's supported interface surfaces instead of being left as partial English-first placeholders.

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
* multiple built-in themes, including an animated `Aurora Drift` option
* custom local-image banner themes
These features are aimed at keeping the browser usable during heavier sessions such as gaming, streaming, multitasking, or long browsing runs. The browser can back off more aggressively in the background, reduce unnecessary work, and surface a current-session health view so users can see when the browser is under more pressure.

### Extra Tools 🛠️

* extension import support
* browser history import support
* VPN tools and public IP checks
* passkey compatibility for supported sites
* local-only Music Player
* hardened Music Downloader
* profile backup, restore, and recovery tools

These tools are meant to make the browser feel more complete without turning it into a cloud-heavy utility platform. Where possible, these features stay local, use explicit user action, and expose their behavior through the browser UI instead of hidden background collection.

History import can read supported local browser history from Edge, Chrome, Brave, Opera, and Firefox, or from a user-chosen history file. The browser-side importer works from a temporary safe copy of supported local history databases instead of trying to modify or depend on the live browser database in place.

Extension import supports two paths:

* scan installed Edge, Chrome, Brave, and Opera browser profiles for importable Chromium extensions
* manually select an extension `manifest.json` file when the user wants to import a specific extension from disk

For manual extension import, the browser UI explains the plain-English path: open the old browser's extensions page, enable Developer Mode, find the extension, open its folder on disk, and choose that extension's `manifest.json` file.

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

`BubblesTheDev Web Browser_Installer_1.2.145.exe`

Platform:

`Windows 11 x64`

The current installer still uses a Windows installer package instead of a silent always-on patch service. Recent builds let installed versions show update download progress more clearly, download the new version automatically where supported, and then open the regular installer so the user can complete the installer prompts.

## Updating 🔄

The browser does not rely on a silent always-on updater.

Instead:

* updates continue to use a normal installer flow
* the browser can check for newer releases from the app menu
* installed builds can perform background update checks and background installer downloads when the managed update flow is available
* installed builds can keep browser-controlled update registration support where available
* installed builds download updates first and then open the regular installer so the user can complete the installer prompts
* installed builds can perform an extra local save and session-flush pass before update installation closes the browser
* installed update behavior can create or refresh a Desktop folder named `BubblesTheDev - WebBrowser Update Notes` so the current bundled release notes stay visible locally
* the public browser package does not need to ship a shared client update secret just to let normal users receive updates

That means updates are still browser-controlled and installer-based instead of behaving like a hidden background patch service. The browser can help with background update checks, automatic downloads where supported, visible progress, and regular installer handoff while still relying on the packaged installer model underneath.

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

