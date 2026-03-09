# BubblesTheDev Web Browser

## Privacy & Performance Comparison

### Browser Privacy Comparison

| Feature                      | BubblesTheDev Web Browser | Google Chrome          | Microsoft Edge             | Brave           | Firefox             |
| ---------------------------- | ------------------------- | ---------------------- | -------------------------- | --------------- | ------------------- |
| Telemetry Collection         | None                      | Yes                    | Yes                        | Limited         | Limited             |
| Analytics SDKs               | None                      | Yes                    | Yes                        | None            | Limited             |
| Automatic Diagnostic Uploads | No                        | Yes                    | Yes                        | Limited         | Limited             |
| User Data Storage            | Local Device Only         | Local + Cloud Services | Local + Microsoft Services | Mostly Local    | Mostly Local        |
| AI Integration               | None                      | Google AI services     | Copilot integration        | Limited         | Limited             |
| Remote Data Transmission     | None by default           | Yes                    | Yes                        | Limited         | Limited             |
| Privacy Philosophy           | Privacy-First             | Data-Driven            | Ecosystem Integration      | Privacy-Focused | Open-Source Privacy |
| Background Services          | Minimal                   | Many                   | Many                       | Moderate        | Moderate            |
| Tracking Protection          | User Controlled           | Limited                | Limited                    | Strong          | Strong              |

---

### Memory Usage Comparison

| Browser                       | Idle Memory | 5 Tabs Open      |
| ----------------------------- | ----------- | ---------------- |
| **BubblesTheDev Web Browser** | ~150 MB     | ~905 MB          |
| Google Chrome                 | ~350–500 MB | ~1.2–1.8 GB      |
| Microsoft Edge                | ~300–450 MB | ~1.0–1.6 GB      |
| Brave                         | ~250–400 MB | ~1.0–1.4 GB      |
| Firefox                       | ~250–350 MB | ~900 MB – 1.3 GB |

---

### Data Handling Philosophy

BubblesTheDev Web Browser follows a **local-first privacy architecture**.

Browser information such as history, bookmarks, homepage settings, and diagnostic data are stored **only on the user's device** inside the Electron `userData` directory. No automatic telemetry, analytics reporting, or remote diagnostics transmission is implemented.

Diagnostic reports are **exported manually by the user** when requested and saved as JSON files. Nothing is transmitted automatically.

---

### Privacy Architecture Summary

| Category                  | Behavior           |
| ------------------------- | ------------------ |
| Telemetry                 | Not implemented    |
| Analytics SDKs            | Not implemented    |
| Automatic crash reporting | Not implemented    |
| Diagnostic reports        | Manual export only |
| User data location        | Local device       |
| Cloud synchronization     | Not implemented    |

---

### Project Philosophy

BubblesTheDev Web Browser is designed around a simple principle:

**Users should control their own data.**

The browser intentionally avoids background telemetry systems, analytics frameworks, and remote diagnostics uploads. All browsing data remains under the user's control on their local device unless they explicitly choose to export it.

---

Developed by **BubblesTheDev**
