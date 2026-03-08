# 🖥️ BubblesTheDev Web Browser

## Installer Package – Version 0.0.35

**Installer File:**
`BubblesTheDev Web Browser_Installer_0.0.35.exe`

**Author:** BubblesTheDev  
**Platform:** Windows 11 (x64)  
**Engine:** Chromium (Electron 40)

---

## 🚀 Overview

BubblesTheDev Web Browser is a desktop web browser built with Electron and a BrowserView-based tab runtime.
This installer package installs the browser on Windows with optional desktop and Start Menu shortcuts.

Release version: `0.0.35`

---

## ✨ Features

* 🗂 Multi-tab browsing
* 🔒 HTTPS security indicator
* ⭐ Bookmarks system
* 📜 History tracking
* 🕶 Incognito window support
* 🖨 Print support
* 💾 Save Page As functionality
* 📥 Download tracking
* 🧠 Built-in Task Manager for tab processes
* 🧩 User-Agent switching
* 🏠 Custom homepage support
* 🎨 Dark mode toggle
* 🖥 Desktop and Start Menu shortcuts
* 🧾 Exportable diagnostics and local crash logging

---

## 📦 Installation Instructions

1. Double-click:

   ```
   BubblesTheDev Web Browser_Installer_0.0.35.exe
   ```

2. Choose your installation directory.
3. Select optional shortcuts if desired.
4. Click **Install**.
5. Launch the browser after installation completes.

---

## 📁 Default Installation Path

If no custom location is selected:

```
C:\Users\<YourUsername>\AppData\Local\Programs\BubblesTheDev Web Browser
```

---

## 🖥 System Requirements

* Windows 11
* 4 GB RAM minimum
* ~300 MB free disk space
* x64 architecture

---

## 🔐 Security Configuration

This release includes the following Electron security settings:

- `contextIsolation`: enabled
- `nodeIntegration`: disabled
- `sandbox`: enabled for renderer and helper windows
- Separate session handling for incognito windows
- Restricted permission handling
- BrowserView-based tab runtime instead of renderer-managed `webviewTag`
- No telemetry endpoints configured
- No auto-updater service configured

---

## 🧾 Diagnostics And Crash Reports

This release includes local diagnostics logging for runtime failures and renderer/tab process exits.

Users can export a diagnostics report from:

`Tools > Export Diagnostics Report`

Diagnostics are stored locally on the user machine and are not transmitted automatically.

**Support email for crash reports:**
`bubblesthedevwebbrowsersupport@fnbubbles420.org`

When reporting a problem, attach the exported diagnostics JSON file to the support email.

---

## 🔒 Privacy Notice

This application:

- Does not collect personal data automatically
- Does not transmit telemetry automatically
- Does not include analytics services
- Does not connect to BubblesTheDev-owned servers for diagnostics upload
- Does not include AI, machine learning, or remote inference systems

Network traffic occurs only when the user initiates browsing activity or visits websites.

---

## ⚠️ SmartScreen Notice

If this application is distributed without trusted code signing, Windows SmartScreen may display a warning.

If prompted:

1. Click **More Info**
2. Select **Run Anyway**

Using a trusted code-signing certificate is recommended for public distribution.

---

## 🔄 Updating

Current update process is manual:

1. Close the existing browser instance.
2. Install the newer version using the latest installer.
3. Replace the previous installation if prompted.

---

## 🛠 Troubleshooting

**Application does not launch:**  
Reinstall the browser and ensure Windows Defender or other antivirus software is not blocking the executable.

**A page or tab crashes:**  
Reopen the browser, export a diagnostics report from the Tools menu, and email it to support.

**Installer is blocked by Windows:**  
Use the SmartScreen steps above, or install a signed release build when available.

---

## 📜 License

Proprietary – BubblesTheDev  
All Rights Reserved.

Read the license and data collection details here:  
[License file and data collection](https://github.com/KernFerm/BubblesTheDev-WebBrowser/blob/main/LICENSE)

---

## 💙 Built By

BubblesTheDev  
2026

---

## RELEASES

[Get the web browser here](https://github.com/KernFerm/BubblesTheDev-WebBrowser/releases/tag/0035-Installer-Version-webbrowser)
