# SECURITY.md

## Security Policy

The **BubblesTheDev Web Browser** project takes security seriously. This document explains how to report security issues and how confirmed vulnerabilities are handled.

---

## Supported Versions

Security fixes are generally provided for the most recent stable release of the browser.

| Version | Supported |
| ------- | --------- |
| **1.0.61** | Yes |
| Older versions | No |

Users should run the latest available version of the browser to receive the newest security fixes and improvements.

---

## Reporting a Vulnerability

If you discover a security vulnerability, please report it privately.

**Do not open a public GitHub issue for security reports.**

Report vulnerabilities by email:

**Email:** [browser-support@bubbles-browser.fnbubbles420.org](mailto:browser-support@bubbles-browser.fnbubbles420.org)

Please include:

* a clear description of the issue
* steps to reproduce the problem
* the affected browser version
* operating system details
* screenshots, logs, or proof of concept if available

The more detail included in the report, the faster the issue can usually be validated and addressed.

---

## Response Process

When a report is received, the general process is:

1. Acknowledge the report
2. Investigate and validate the issue
3. Prepare a fix if needed
4. Release a security update when appropriate
5. Share public disclosure details after a fix is available

Response times can vary depending on severity, complexity, and reproducibility, but confirmed issues are handled as responsibly and as quickly as possible.

---

## Responsible Disclosure

Security researchers are asked to:

* allow reasonable time for investigation and remediation
* avoid public disclosure before a fix is available
* provide enough technical detail to help reproduce the issue

Responsible disclosure helps protect users while fixes are being prepared.

---

## Scope

This policy applies to:

* the browser application
* installer packages
* official project repositories

Third-party components such as **Electron**, **Chromium**, and **Node.js** follow their own security policies and release cycles.

---

## Dependency Security

The project depends on upstream open-source software, including:

* Electron
* Chromium
* Node.js

Security fixes in these dependencies may require updating the browser to newer upstream versions. Keeping dependencies current is an important part of maintaining the browser's security posture.

---

## Security Philosophy

The browser is developed with a reduced-surface approach that emphasizes:

* minimal background services
* no built-in telemetry frameworks
* local-first data storage
* reliance on Chromium sandboxing and process isolation where applicable
* strict renderer isolation with `contextIsolation` enabled and `nodeIntegration` disabled
* main-process ownership of higher-risk operations such as downloader execution, performance-policy control, and update verification
* verified HTTPS-based managed update checks with SHA-256 installer validation before launch

Current security-sensitive design points in version `1.0.61` include:

* sandboxed renderer processes and strict preload IPC boundaries
* isolated persistent streaming-service partitions for supported providers such as Disney+, Hulu, Max, Netflix, Paramount+, Prime Video, Apple TV+, AMC+, Peacock, Crunchyroll, YouTube TV, Sling TV, Pluto TV, The Roku Channel, Plex, Discovery+, ESPN+, MGM+, STARZ, and Tubi
* hardened streaming BrowserView and popup windows using `contextIsolation`, `sandbox`, disabled `nodeIntegration`, disabled `enableRemoteModule`, blocked insecure content, and no general-purpose preload bridge
* per-service navigation allowlists that block untrusted redirects and unsafe schemes such as `data:`, `file:`, `chrome:`, and `javascript:`
* streaming permission lockdown that denies camera, microphone, geolocation, notifications, MIDI, and clipboard-read access while allowing only safe playback-oriented cases
* download blocking and file-access blocking inside isolated streaming sessions
* popup abuse controls that restrict streaming login popups to one live popup per service with cooldown protection
* Windows-native download protection using Windows Security Center detection, Windows Attachment Services handoff, Mark of the Web tagging, Authenticode checks, and Windows Defender fallback scanning
* hardened Music Downloader execution limited to approved YouTube single-video audio flows with bundled-binary integrity verification
* controlled YouTube URL normalization that accepts certain auto-added single-video watch-page radio parameters without enabling playlist or bulk download behavior
* Windows-safe gaming and streaming optimization that avoids game hooking, code injection, kernel drivers, or anti-cheat interference
* local-only diagnostics generation and encrypted diagnostics export
* imported extension safeguards, secure-context password handling, and trusted-source-aware download checks

This approach helps limit unnecessary network activity and reduces avoidable attack surface.

---

## Contact

For security matters, email is the preferred contact method:

**Email:** [browser-support@bubbles-browser.fnbubbles420.org](mailto:browser-support@bubbles-browser.fnbubbles420.org)

If needed, you may also reach out through the community Discord:

[https://discord.gg/zQbJJgwbUv](https://discord.gg/zQbJJgwbUv)

---

Developed by **BubblesTheDev**
