# BubblesTheDev Web Browser

> A browser built for privacy, control, and a smoother everyday experience. ✨

[![Version](https://img.shields.io/badge/version-1.1.10-blue)](https://github.com/KernFerm/BubblesTheDev-WebBrowser/releases)
[![Platform](https://img.shields.io/badge/platform-Windows%2011-0078D6)](https://github.com/KernFerm/BubblesTheDev-WebBrowser/releases)
[![Electron](https://img.shields.io/badge/Electron-42-47848F?logo=electron&logoColor=white)](https://www.electronjs.org/)

## 🌐 What Is It?

BubblesTheDev Web Browser is a Windows browser designed for everyday browsing while keeping browser data local-first and user controls easier to understand.

It is meant to feel like a practical daily browser, not just a privacy experiment or a stripped-down shell. The project combines familiar browser features such as tabs, bookmarks, downloads, saved passwords, a built-in home page, split view, and media tools with stronger local-first defaults, clearer diagnostics, and more visible runtime controls.

Version `1.1.10` continues that direction with a hardened local AI and diagnostics architecture, lighter runtime monitoring behavior, and a clearer installer finish experience.


## [Download Browser](https://github.com/KernFerm/BubblesTheDev-WebBrowser/blob/main/DOWNLOAD-BROWSER.md)

The overall goal is simple:

* keep everyday browsing familiar
* avoid unnecessary background collection
* keep more browser behavior local and inspectable
* give users better visibility into performance, stability, and diagnostics

## 🆕 What's New In 1.1.10

* Added an `AI & Diagnostics` panel
* Added a `Refresh Status` button under the `AI & Diagnostics` panel title for a fresh live status check
* Added profile-isolated local AI memory with encrypted persistence for standard profiles
* Added non-persistent AI memory handling for incognito sessions
* Added offline local summarization and isolated AI runtime analysis
* Added current-session health monitoring for browser load and stability
* Added automatic session-only AI health recovery reset behavior
* Added opt-in privacy-safe diagnostics preview, manual send, test send, and optional severe-event reporting
* Reduced background monitoring overhead so status checks and Task Manager updates stay lighter during normal browsing
* Improved the installer finish flow so the completion experience is clearer and easier for end users to follow

In practical terms, this release is focused on making the browser more transparent and more resilient. Local AI features stay on-device by default, diagnostics remain user-controlled, and the current-session health model is meant to help users understand what the browser is doing during heavier workloads.

## 🧰 Main Features

### 🧭 Everyday Browsing

* multi-tab browsing
* built-in `bubbles://home` start page
* bookmarks and bookmark bar
* browsing history
* pinned tabs
* tab mute controls
* split-view browsing
* full-screen support

The everyday browsing layer is meant to stay familiar. You still get a normal browser shell with address bar navigation, bookmarks, history, and utility panels, but the surrounding browser behavior is designed to stay more understandable and more local-first than many mainstream browser experiences.

### 🔐 Privacy And Security

* local-first browser data handling
* no built-in telemetry or analytics
* incognito browsing
* built-in ad and tracker blocking
* Windows-friendly download protection
* encrypted saved-password storage
* per-site permission controls
* sandboxed and isolated browser runtime

The browser tries to keep privacy and security features understandable instead of burying them behind background behavior. Browser data stays local by default, sensitive operations stay in browser-controlled processes, and the renderer side is kept more restricted through sandboxing, disabled Node integration, and stricter runtime boundaries.

It is not an offline-only browser, and it does not pretend normal web traffic is the same thing as telemetry. The privacy model is local-first, user-controlled, and intentionally more explicit about what stays on-device.

### 🤖 Local AI And Diagnostics

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

The diagnostics side is designed to be more transparent than a hidden crash-upload model. Users can inspect what would be sent before sending it, keep reporting disabled, or manually send a report only when needed. Privacy-safe diagnostics are intended to focus on browser stability and system health rather than personal browsing content.

### 📺 Streaming Hub

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

The Streaming Hub is not just a bookmarks folder. It is meant to provide a more controlled and isolated in-browser streaming surface with service-aware session handling and tighter popup behavior.

### ⚡ Performance And Power Features

* gaming and streaming performance mode
* background tab throttling
* sleeping tabs under memory pressure
* stream-stability controls
* built-in Task Manager
* runtime checks panel
* multiple built-in themes

These features are aimed at keeping the browser usable during heavier sessions such as gaming, streaming, multitasking, or long browsing runs. The browser can back off more aggressively in the background, reduce unnecessary work, and surface a current-session health view so users can see when the browser is under more pressure.

Recent updates also reduced the cost of some internal monitoring and status-refresh paths, so the browser should feel lighter during resizing, diagnostics checks, and routine performance polling than some earlier builds.

### 🧩 Extra Tools

* extension import support
* VPN tools and public IP checks
* passkey compatibility for supported sites
* local-only Music Player
* hardened Music Downloader

These tools are meant to make the browser feel more complete without turning it into a cloud-heavy utility platform. Where possible, these features stay local, use explicit user action, and expose their behavior through the browser UI instead of hidden background collection.

## 🏗️ Architecture At A Glance

The browser is built on Electron and uses a privileged main-process runtime for the higher-risk parts of the app.

At a high level:

* Browser windows and BrowserViews are managed from the main process
* web content stays separated from privileged browser operations
* downloads, diagnostics, AI orchestration, and performance-policy behavior stay in browser-controlled services
* local AI runs through an isolated worker process instead of directly inside the normal browser UI flow
* profile-local AI memory stays isolated per profile and is non-persistent for incognito sessions

The architecture is intentionally local-first and tries to keep the browser’s more sensitive features inside the trusted runtime side of the app.

## 📦 Installer

Installer file name:

`BubblesTheDev Web Browser_Installer_1.1.10.exe`

Platform:

`Windows 11 x64`

The current installer uses a normal visible Windows installer flow instead of a silent always-on update model. Recent builds also include a clearer visible post-install completion flow so end users can better understand what the installer is doing before it closes.

## 🔄 Updating

The browser does not rely on a silent always-on updater.

Instead:

* updates continue to use a normal installer flow
* the browser can check for newer releases from the app menu

That means updates are still visible and installer-based instead of behaving like a hidden background patch service. The browser can help with update checks, but the overall update experience is still built around a normal Windows installer flow.

## 🛡️ Privacy Summary

This browser is built to keep things simple and local-first.

It does:

* keep browser data local on the device by default
* avoid built-in telemetry and analytics systems
* keep local AI memory isolated per profile
* keep incognito AI memory non-persistent
* keep diagnostics local unless the user exports them or enables privacy-safe reporting
* give users clear controls over diagnostics behavior

It does not promise zero network activity, because websites, search, downloads, passkeys, streaming services, and updates can still use the network when the user chooses those features. The privacy goal is not "offline-only"; it is "local-first, transparent, and limited by default."

## 📘 Related Docs

If you want more detail, the repo also includes:

* `ARCHITECTURE.md` for the high-level runtime design
* `SECURITY.md` for the security policy and reporting path
* `Data-Collection-and-Privacy-Notice.md` for the plain-language privacy notice
* `Browser-Privacy-Comparison.md` for the broader privacy comparison view
* `CHANGELOG.md` for release-to-release changes
