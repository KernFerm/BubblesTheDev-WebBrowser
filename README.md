# BubblesTheDev Web Browser

> A browser built for privacy, control, and a smoother everyday experience 🫧

[![Version](https://img.shields.io/badge/version-1.0.61-blue)](https://github.com/KernFerm/BubblesTheDev-WebBrowser/releases)
[![Platform](https://img.shields.io/badge/platform-Windows%2011-0078D6)](https://github.com/KernFerm/BubblesTheDev-WebBrowser/releases)
[![Electron](https://img.shields.io/badge/Electron-42-47848F?logo=electron&logoColor=white)](https://www.electronjs.org/)
[![License](https://img.shields.io/badge/license-Proprietary-lightgrey)](https://github.com/KernFerm/BubblesTheDev-WebBrowser/blob/main/readme.md#license)

## 🌐 What Is It?

BubblesTheDev Web Browser is a Windows browser for people who want something familiar, useful, and more privacy-friendly without giving up everyday features.

It is designed to feel like a real daily browser, not just a stripped-down experiment. You still get tabs, bookmarks, saved passwords, downloads, a home page, streaming tools, privacy protections, and Windows-focused extras all in one place.

Version `1.0.61` focuses on safer streaming sessions, stronger download protection, lighter background performance overhead, and a more polished Windows experience.

## ✨ What's New In 1.0.61

- 🎬 New `Streaming Hub` with isolated sessions for supported streaming services
- 🔒 Hardened streaming sign-in popups, stricter service allowlists, and blocked downloads inside streaming sessions
- 🛡️ `Bubbles Safe Browsing` now uses a Windows-native download protection stack
- 🧪 Added Windows Security Center antivirus detection and Windows Attachment Services handoff for downloads
- 📥 Chrome-like risky download review flow with keep, discard, and protected open behavior
- 🚀 Lower idle CPU and memory overhead by avoiding full performance-summary rebuilds during normal browser-state updates
- 🧠 Short-lived app-metrics caching so the browser does less repeated background work while tabs are updating

## ❤️ Why People May Like It

- 🧭 Easy everyday browsing with tabs, bookmarks, history, and a built-in home page
- 🔐 Privacy-first design with local data handling
- 🚫 Built-in ad and tracker blocking
- 📥 Extra download protection before opening risky files
- 🕶️ Incognito support
- 🧩 Extension import support
- 🔑 Saved password vault and passkey support
- 🖥️ Split view and built-in Task Manager
- 🎨 Multiple themes
- 🌍 VPN tools and public IP checking

## 🧰 Main Browser Features

Here's a fuller look at what the browser includes:

### 🧭 Everyday Browsing

- multi-tab browsing
- back, forward, refresh, and home controls
- built-in `bubbles://home` start page
- address bar with direct website navigation
- browsing history
- bookmarks and bookmark bar
- pinned tabs
- tab mute controls
- open links in new tabs or new windows
- full-screen browsing

### 🔎 Search And Home Page

- built-in Bubbles home page
- Bubbles search experience inside the browser
- DuckDuckGo-backed and Google-backed search results
- search suggestions and result helpers
- local home-page counters and browser stats

### 🔐 Privacy And Security

- local-first browser data storage
- no built-in telemetry or analytics
- incognito browsing support
- built-in ad and tracker blocking
- download protection with `Bubbles Safe Browsing`
- Windows-friendly security checks for downloads
- password vault with encrypted saved passwords
- strong password generation
- passkey support for compatible websites
- per-site permission controls

### 📥 Download Protection

- download history window
- risky download warnings
- trusted-source-aware download handling
- Windows Attachment Services integration
- Mark of the Web tagging
- Windows Defender support when available
- digital signature checks for relevant file types
- keep, review, open, and discard flows for downloads

### 🎬 Streaming Hub

The `Streaming Hub` gives supported streaming services their own isolated space inside the browser.

That means:

- each service stays in its own separate session
- sign-in popups are more locked down
- unsafe redirects are blocked more aggressively
- downloads are blocked inside streaming sessions
- service sessions can be cleared individually

Supported services in `1.0.61`:

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

This feature is designed to make streaming cleaner and safer. It is not a credential grabber, proxy login tool, or session extractor.

### 🖥️ Power Features

- split-view browsing
- built-in Task Manager
- runtime checks panel
- diagnostics export
- multiple built-in themes
- hideable toolbar
- bookmark bar toggle
- context menus for pages and tabs

### 🎮 Performance Features

- gaming and streaming performance mode
- Windows-focused system detection
- background tab throttling
- sleeping tabs under memory pressure
- stream-stability controls
- reduced background browser activity during heavy sessions
- lighter everyday performance-state updates
- less repeated metrics work when the Performance panel is not open

### 🎵 Media Features

#### 🎧 Music Player

- local-only music playback
- off by default
- folder scan only after user consent
- works with a local Music folder or another folder you choose

#### 🎶 Music Downloader

- approved YouTube single-video audio downloads only
- local processing with bundled tools
- queue limits and cooldowns
- abuse protections
- local-only state storage

### 🌍 VPN And Network Tools

- installed VPN client detection
- support for NordVPN, ExpressVPN, ProtonVPN, and WireGuard detection
- ProtonVPN WireGuard `.conf` import support
- public IPv4 and IPv6 checking
- quick launch support for supported installed VPN apps

### 🧩 Extra Browser Tools

- extension import support
- downloads window
- diagnostics report export
- site permission management
- browser update checking from the app menu

## 🛡️ Bubbles Safe Browsing

`Bubbles Safe Browsing` is the browser's download protection system.

It helps make downloads safer by using Windows-friendly protection layers like:

- Windows Attachment Services
- Mark of the Web
- Windows Defender when available
- digital signature checks
- browser safety warnings before opening risky files

If your PC already has antivirus installed, the browser can work more naturally with the Windows security path already on that system.

## 📦 Installer Info

Installer file name:

`BubblesTheDev Web Browser_Installer_1.0.61.exe`

SHA256:

`0190C9C2856D3B2582012146CC17852DF00F2446F8BDE95E8469A7DDDDDFCEB5`

Platform:

`Windows 11 x64`

## ⬇️ Download

- [Download the latest release](https://github.com/KernFerm/BubblesTheDev-WebBrowser/releases)

## 🚀 How To Install

1. Download the latest installer.
2. Run `BubblesTheDev Web Browser_Installer_1.0.61.exe`.
3. Choose where you want to install it.
4. Finish setup and launch the browser.

The installer supports:

- normal installs
- custom install locations
- external HDD installs
- external SSD installs
- USB flash-drive installs

## 🔄 Updating

The browser does not silently patch itself in the background.

Instead:

- updates still use a normal installer
- you can use `Check for Updates` from the app menu
- fresh installs can do a one-time follow-up update check for a smoother setup experience

If you are updating manually, uninstall the older version first, then run the new installer.

## 🧹 Uninstall

When uninstalling, you can choose what local data to keep or remove.

Current choices include:

- browser profile data
- saved passwords
- diagnostics reports
- local update preferences

So if you want to reinstall later, you do not have to wipe everything unless you want to.

## 🔐 Privacy

This browser is built to keep things simple, respectful, and easy to understand.

It does:

- keep browser data local on your device
- avoid built-in telemetry and analytics systems
- avoid automatic diagnostics upload
- give you more control over your local browser data

It does not:

- run built-in tracking analytics
- automatically upload your diagnostics
- act like a credential interceptor
- expose supported streaming cookies or tokens to page code

Important note:

Normal web browsing still creates regular internet traffic when you visit websites, search, stream, or download files. That part is just how browsers work.

## 🖥️ System Requirements

- Windows 11
- x64 architecture
- 4 GB RAM minimum
- around 300 MB free disk space

## 📄 Helpful Docs

- [Architecture](https://github.com/KernFerm/BubblesTheDev-WebBrowser/blob/main/ARCHITECTURE.md)
- [Browser Privacy Comparison](https://github.com/KernFerm/BubblesTheDev-WebBrowser/blob/main/Browser-Privacy-Comparison.md)
- [Data Collection and Privacy Notice](https://github.com/KernFerm/BubblesTheDev-WebBrowser/blob/main/Data-Collection-and-Privacy-Notice.md)
- [Changelog](https://github.com/KernFerm/BubblesTheDev-WebBrowser/blob/main/CHANGELOG.md)
- [Security](https://github.com/KernFerm/BubblesTheDev-WebBrowser/blob/main/SECURITY.md)

## 🆘 Support

Diagnostics can be exported from:

`Tools > Export Diagnostics Report`

Support email:

`browser-support@bubbles-browser.fnbubbles420.org`

## ⚠️ SmartScreen Note

This build is currently unsigned, so Windows SmartScreen may show a warning before launch.

If that happens:

1. Click `More Info`
2. Click `Run Anyway`

## 📜 License

Proprietary - BubblesTheDev
All Rights Reserved.

## 🔗 Releases

[Get the browser here](https://github.com/KernFerm/BubblesTheDev-WebBrowser/releases)



