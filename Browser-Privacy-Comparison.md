# BubblesTheDev Web Browser

## Browser Privacy Comparison

This document explains how **BubblesTheDev Web Browser** approaches privacy and how its design differs from many common browsers.

The goal is to provide a **clear, accurate, and transparent explanation** of the browser’s privacy model without misrepresenting how Chromium or other browsers operate.

---

# Browser Privacy Comparison

| Feature                      | BubblesTheDev Web Browser                 | Google Chrome          | Microsoft Edge             | Brave           | Firefox             |
| ---------------------------- | ----------------------------------------- | ---------------------- | -------------------------- | --------------- | ------------------- |
| Telemetry Collection         | None implemented                          | Yes                    | Yes                        | Limited         | Limited             |
| Analytics SDKs               | None                                      | Yes                    | Yes                        | None            | Limited             |
| Automatic Diagnostic Uploads | No                                        | Yes                    | Yes                        | Limited         | Limited             |
| User Data Storage            | Local Device Only                         | Local + Cloud Services | Local + Microsoft Services | Mostly Local    | Mostly Local        |
| AI Integration               | None built into browser                   | Google AI services     | Copilot integration        | Limited         | Limited             |
| Remote Data Transmission     | None by default beyond normal web traffic | Yes                    | Yes                        | Limited         | Limited             |
| Privacy Philosophy           | Privacy-First                             | Data-Driven            | Ecosystem Integration      | Privacy-Focused | Open-Source Privacy |
| Background Services          | Minimal                                   | Many                   | Many                       | Moderate        | Moderate            |
| Tracking Protection          | User Controlled                           | Limited                | Limited                    | Strong          | Strong              |

---

# Memory Usage Comparison

Example testing scenario using typical browsing activity.

| Browser                       | Idle Memory | 5 Tabs Open      |
| ----------------------------- | ----------- | ---------------- |
| **BubblesTheDev Web Browser** | ~150 MB     | ~905 MB          |
| Google Chrome                 | ~350–500 MB | ~1.2–1.8 GB      |
| Microsoft Edge                | ~300–450 MB | ~1.0–1.6 GB      |
| Brave                         | ~250–400 MB | ~1.0–1.4 GB      |
| Firefox                       | ~250–350 MB | ~900 MB – 1.3 GB |

These numbers may vary depending on:

* hardware
* extensions
* websites being loaded
* operating system behavior

They are included as **general performance examples**, not guaranteed measurements.

---

# Data Handling Philosophy

BubblesTheDev Web Browser follows a **local-first privacy architecture**.

Browser data such as:

* history
* bookmarks
* homepage settings
* diagnostic reports

are stored **only on the user's local device** using the Electron `userData` directory.

No automatic telemetry systems or analytics reporting pipelines are included in the application.

Diagnostic reports can be **exported manually by the user** and saved locally as JSON files if needed.

No automatic upload occurs.

---

# Privacy Architecture Summary

| Category                  | Behavior           |
| ------------------------- | ------------------ |
| Telemetry                 | Not implemented    |
| Analytics SDKs            | Not implemented    |
| Automatic crash reporting | Not implemented    |
| Diagnostic reports        | Manual export only |
| User data location        | Local device       |
| Cloud synchronization     | Not implemented    |

---

# Security Model

The browser follows a **minimal-surface design philosophy**.

Key characteristics:

* No telemetry frameworks
* No analytics SDK integrations
* No background diagnostic uploads
* No cloud account requirement

Chromium sandboxing and process isolation are still used to protect tab processes and help limit the impact of malicious web content.

---

# Local Data Flow

Typical runtime behavior:

1. User launches the browser
2. Chromium engine loads
3. Session data is written locally to the Electron `userData` directory
4. Optional diagnostic snapshot can be generated locally
5. Diagnostic reports are exported only if the user chooses a save location

At no point is this information automatically transmitted to external servers.

---

# Comparison vs Default Chromium Telemetry

Chromium (the open-source engine used by many browsers) contains **optional telemetry and diagnostic capabilities** that downstream browser projects may choose to enable or disable.

Many commercial Chromium-based browsers enable additional services such as:

* usage metrics collection
* crash report uploads
* analytics integrations
* experiment frameworks
* cloud service integrations

BubblesTheDev Web Browser intentionally avoids enabling these systems.

| Component                    | Default Chromium Capability  | BubblesTheDev Web Browser                  |
| ---------------------------- | ---------------------------- | ------------------------------------------ |
| Usage Metrics Reporting      | Available in Chromium        | Not implemented                            |
| Crash Report Upload          | Available in Chromium        | Manual export only                         |
| Background Telemetry Systems | Available in Chromium builds | Not implemented or enabled in this project |
| Analytics SDK Integrations   | Possible via vendor services | Not implemented                            |
| Remote Experiment Frameworks | Often enabled by vendors     | Not implemented                            |
| AI / Cloud Service Hooks     | Optional integrations        | No cloud-based AI services integrated      |

This configuration keeps browser behavior predictable and avoids silent background reporting systems often present in commercial Chromium-based browsers.

---

# Project Philosophy

BubblesTheDev Web Browser is designed around a simple principle:

**Users should control their own data.**

The browser intentionally avoids background telemetry systems, analytics frameworks, and automatic diagnostic uploads. All browsing data remains under the user’s control on their local device unless they explicitly choose to export it.

---

Developed by **BubblesTheDev**
