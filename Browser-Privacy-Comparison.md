# BubblesTheDev Web Browser

## Browser Privacy Comparison

This document gives a high-level privacy comparison between BubblesTheDev Web Browser and other mainstream browsers. It is intentionally broad and user-facing.

This document reflects the current privacy posture of BubblesTheDev Web Browser version `1.2.110`.

The goal is accuracy, not marketing language. The browser does not include built-in telemetry, analytics SDKs, cloud sync, or a fully silent hidden always-on auto-updater client. It still makes normal network requests when the user browses the web, searches, signs into websites, uses supported authentication flows, or downloads files.

## Scope And Related Documents

This file focuses on privacy posture and broad browser-to-browser differences.

Related project documents:

* [Data-Collection-and-Privacy-Notice.md](./Data-Collection-and-Privacy-Notice.md) explains what data stays local and what can still use the network
* [ARCHITECTURE.md](./ARCHITECTURE.md) explains the high-level runtime design
* [SECURITY.md](./SECURITY.md) explains the public security policy and reporting expectations
* [5-TAB-PERFORMANCE-TEST.md](./5-TAB-PERFORMANCE-TEST.md) covers one repeatable Windows performance test

## High-Level Comparison

This table is intentionally high-level. Mainstream browsers change over time, and the non-Bubbles columns should be read as broad summaries rather than legal or vendor-authoritative claims.

| Capability | BubblesTheDev Web Browser | Google Chrome | Microsoft Edge | Brave | Firefox | Safari | Opera | Vivaldi |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Sync model | No built-in cloud sync requirement | Google Account sync | Microsoft account sync | Brave Sync | Mozilla account sync | iCloud sync | Opera Sync | Vivaldi Sync |
| Browser profiles | Isolated local browser profiles | Chrome profiles | Edge profiles | Brave profiles | Firefox profiles | Safari profiles | Multiple browser profiles | User profiles |
| Profile count model | The browser currently supports up to `10` local profiles in one installed browser setup | Varies by browser and platform | Varies by browser and platform | Varies by browser and platform | Varies by browser and platform | Varies by browser and platform | Varies by browser and platform | Varies by browser and platform |
| Guest / temporary browsing | Guest Mode plus incognito-style browsing | Guest and Incognito | InPrivate | Private Window | Private Browsing | Private Browsing | Private mode | Private Window |
| Connected-account identity per profile | One linked connected-account identity can be attached to a profile for profile-card name and avatar display | Browser sign-in and sync models vary | Browser sign-in and sync models vary | Browser sign-in and sync models vary | Browser sign-in and sync models vary | Browser sign-in and sync models vary | Browser sign-in and sync models vary | Browser sign-in and sync models vary |
| Split view / tab tiling | Built-in split-view browsing | No built-in split view documented | Split screen features available | No built-in split view documented | No built-in split view documented | No built-in split view documented | Split Screen | Tab Tiling |
| Built-in home / browser surface | Built-in `bubbles://home` page | New Tab / Google surfaces | Edge new tab and Microsoft surfaces | Brave new tab surfaces | Firefox new tab surfaces | Safari start page | Opera start page | Vivaldi start page |
| Task / process visibility | Built-in Task Manager and runtime surfaces | Chrome Task Manager | Edge Browser Task Manager | No equivalent documented here | Firefox Task Manager / `about:processes` | No comparable built-in task manager documented here | No comparable built-in task manager documented here | No comparable built-in task manager documented here |
| Local-first browser data | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Built-in telemetry by default | No | Yes | Yes | Limited | Limited | Limited | Limited | Limited |
| Built-in ad / tracker controls | Built-in ad and tracker blocking | Ad Privacy controls, not a built-in blocker | Tracking Prevention | Brave Shields | Enhanced Tracking Protection | Privacy Report and cross-site tracking protections | Built-in Ad Blocker and Tracker blocker | Built-in Tracker and Ad Blocker |
| Per-site permissions | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Passkey / WebAuthn support | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Download protection model | Windows-native browser-managed download protection | Safe Browsing and download protections | Microsoft Defender SmartScreen and browser protections | Safe Browsing plus Brave protections | Safe Browsing and browser protections | Platform and Safari protections | Browser protections | Browser protections |
| Streaming hub | Built-in Streaming Hub for supported services | No built-in equivalent documented | No built-in equivalent documented | No built-in equivalent documented | No built-in equivalent documented | No built-in equivalent documented | No built-in equivalent documented | No built-in equivalent documented |
| Streaming session isolation | Supported services run in isolated browser-managed sessions | No built-in equivalent documented | No built-in equivalent documented | No built-in equivalent documented | No built-in equivalent documented | No built-in equivalent documented | No built-in equivalent documented | No built-in equivalent documented |
| Streaming sign-in hardening | Browser-managed popup limits and sign-in controls for supported services | No built-in equivalent documented | No built-in equivalent documented | No built-in equivalent documented | No built-in equivalent documented | No built-in equivalent documented | No built-in equivalent documented | No built-in equivalent documented |
| Per-service session clearing | Supported for built-in streaming sessions | No built-in equivalent documented | No built-in equivalent documented | No built-in equivalent documented | No built-in equivalent documented | No built-in equivalent documented | No built-in equivalent documented | No built-in equivalent documented |
| AI panel / in-browser AI controls | `AI & Diagnostics` panel | AI features exist, but not as a direct equivalent | AI features exist, but not as a direct equivalent | AI features vary by Brave services | AI features vary by Mozilla services | AI features vary by Apple platform features | No comparable built-in AI panel documented here | No comparable built-in AI panel documented here |
| Local AI memory model | Encrypted profile-isolated local AI memory where supported | No direct equivalent documented here | No direct equivalent documented here | No direct equivalent documented here | No direct equivalent documented here | No direct equivalent documented here | No direct equivalent documented here | No direct equivalent documented here |
| Diagnostics surface | In-browser diagnostics and runtime status surfaces | Performance and crash-reporting controls | Performance and browser-management tools | No comparable diagnostics surface documented here | Firefox Task Manager / `about:processes` and troubleshooting tools | Privacy Report, but not the same type of diagnostics surface | No comparable diagnostics surface documented here | No comparable diagnostics surface documented here |
| Manual diagnostics export | Encrypted manual diagnostics export where supported | Reporting tools vary | Reporting tools vary | Reporting tools vary | Troubleshooting / reporting tools vary | No comparable export flow documented here | Reporting tools vary | Reporting tools vary |
| Performance controls | Gaming / streaming mode, sleeping tabs, stream-stability tuning, runtime checks | Chrome Performance settings | Sleeping Tabs and Efficiency / Energy Saver controls | Performance tools vary | Performance tools vary | Performance behavior varies | Performance tools vary | Performance tools vary |
| Accessibility reading tools | Reader mode, Read aloud, Selection Tools, Reading ruler, Focus mode, Simplified browser UI | Reader-related features vary | Reader-related features vary | Reader-related features vary | Reader-related features vary | Reader-related features vary | Reader-related features vary | Reader-related features vary |
| Language and locale system | Local-only multilingual system with runtime switching and locale-aware formatting | Standard browser localization | Standard browser localization | Standard browser localization | Standard browser localization | Standard browser localization | Standard browser localization | Standard browser localization |
| VPN integration | Local VPN tools, public IP checks, and profile import support | No built-in browser VPN documented | Edge Secure Network | Brave VPN is a separate paid feature | Mozilla VPN is a separate service | No built-in browser VPN documented | Opera VPN | No built-in browser VPN documented |
| Local music features | Local-only Music Player and restricted Music Downloader flows | No built-in equivalent documented | No built-in equivalent documented | No built-in equivalent documented | No built-in equivalent documented | No built-in equivalent documented | No built-in equivalent documented | No built-in equivalent documented |
| Update model | Browser-controlled update download followed by the regular installer, with the end user going through the installer prompts after the browser downloads the new version | Background updater present | Background updater present | Background updater present | Background updater present | OS-managed | Background updater present | Background updater present |

Additional note:

The Bubbles column is intended to describe the current browser directly. The non-Bubbles columns are high-level summaries of vendor-documented features and should be read as broad product comparisons, not exhaustive legal or platform matrices.

## What Bubbles Tries To Do Differently

BubblesTheDev Web Browser is designed around a local-first model:

* normal browser data stays on the device by default
* browser profiles remain isolated from one another
* up to `10` local browser profiles can exist per installation
* each profile can carry one connected-account identity for clearer name and avatar presentation without turning the browser into a required cloud-sync platform
* diagnostics stay local unless the user explicitly exports them or enables privacy-safe reporting
* local AI features are designed to stay on-device where supported
* guest browsing remains non-persistent
* update behavior stays browser-controlled and installer-based rather than a hidden always-on patch service
* normal installed browser clients can reach update-check and client check-in routes without depending on a bundled shared client secret in the shipped app files
* certificate trust prompts can be skipped when the same bundled trusted-root certificate is already present, while new bundled replacement certificates may still require Windows confirmation
* installed update handoff now performs an extra local save pass before closing so normal browser data is less likely to be lost during update installation
* the local `AI & Diagnostics` panel now keeps its local draft and preview state when reopened instead of resetting that renderer-side state immediately

Connected-account identity linking is optional. Where a profile is linked to a provider such as GitHub, Discord, or Google, the user can generally revoke that provider access later from the provider's own account settings or authorized-applications page.

This does not mean the browser is offline-only. Websites, search providers, streaming services, authentication systems, and download destinations still receive normal network traffic when the user chooses to use them.

## Local-First Behavior

Current local browser behavior includes:

* local storage of browser settings, history, bookmarks, and permissions
* isolated profile data for standard browser profiles
* non-persistent guest browsing behavior
* local accessibility preferences
* local diagnostics generation and manual diagnostics export
* local handling for supported AI features and profile-aware AI memory
* local performance settings and runtime controls

The browser is designed not to automatically upload ordinary browser-state data as part of a built-in telemetry or analytics system.

## What Still Uses The Network

Network activity still occurs when the user:

* opens websites or web apps
* signs into websites
* searches with built-in or external search features
* downloads files
* uses passkey or WebAuthn flows on supported websites
* uses supported streaming services
* checks for updates or downloads an update when that feature is available

This is normal browser behavior and should not be confused with built-in telemetry.

## Diagnostics And Privacy

Diagnostics are designed to remain local by default.

Current behavior includes:

* local runtime diagnostics
* manual encrypted diagnostics export
* privacy-safe diagnostics controls that are opt-in where supported
* no ordinary automatic diagnostics upload path by default

## Music, Streaming, And Extra Features

Some browser features involve additional local handling:

* the Music Player is local-only and requires user action before scanning a folder
* the Music Downloader is intentionally restricted and local-first
* supported streaming services run in isolated browser-managed sessions
* profile recovery, accessibility, diagnostics, and language settings are designed to stay local by default

## Summary

BubblesTheDev Web Browser aims for a privacy posture that is local-first, user-controlled, and more explicit than many mainstream browser defaults.

In practical terms, that means:

* no built-in telemetry or analytics in ordinary browser use
* no cloud sync requirement
* no fully silent hidden updater model
* local diagnostics by default
* local-first profile handling
* normal website and search traffic still occurs when the user chooses to use the web
