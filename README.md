# 🖥️ BubblesTheDev Web Browser

## Installer Package – Version 0.6.5

**Installer File:**
`BubblesTheDev Web Browser_Installer_0.6.5.exe`

**Author:** BubblesTheDev  
**Platform:** Windows 11 (x64)  
**Engine:** Chromium (Electron 40)

[Download BubblesTheDev Web Browser](https://github.com/KernFerm/BubblesTheDev-WebBrowser/releases)

[Browser-Privacy-Comparison](https://github.com/KernFerm/BubblesTheDev-WebBrowser/blob/main/Browser-Privacy-Comparison.md)

[Data-Collection-and-Privacy-Notice](https://github.com/KernFerm/BubblesTheDev-WebBrowser/blob/main/Data-Collection-and-Privacy-Notice.md)

[Architecture](https://github.com/KernFerm/BubblesTheDev-WebBrowser/blob/main/ARCHITECTURE.md)

---

## 🚀 Overview

BubblesTheDev Web Browser is a desktop web browser built with Electron and a BrowserView-based tab runtime.

Version `0.6.5` adds a bookmark bar, Chrome-style tab context actions, split-view browsing, per-site permission controls, modular download protection, on-page search provider switching, fullscreen reliability fixes, secure compressed local persistence, sleeping background tabs, and an in-app runtime checks panel.

This installer package installs the browser on Windows with optional desktop and Start Menu shortcuts.

---

## ✨ Features

* 🗂 Multi-tab browsing with a BrowserView-based tab runtime
* 🏠 Bubbles Search Engine default home page at `bubbles://home`
* 🌐 Direct URL browsing and plain-text search from the same address bar
* 🔎 Search results enriched in the background with DuckDuckGo results and Google suggestions
* 🚫 Ad and tracker blocking with live counters on the Bubbles page
* 🔐 Improved popup login compatibility for sites such as Google, Twitch, and Facebook
* ⭐ Bookmarks system
* 📌 Bookmark bar with removable saved-page chips
* 📜 History tracking
* 🪟 Split-view browsing with a draggable divider
* 🧭 Per-site permissions for camera, microphone, notifications, location, popups, clipboard, automatic downloads, and fullscreen
* 🕶 Incognito window support
* 🖨 Print support
* 💾 Save Page As functionality
* 📥 Download tracking with recent-download management
* 🛡 Modular download protection with provider fallback, Authenticode verification, and protected open-file gating
* 🧠 Built-in Task Manager for tab processes
* 🌙 Sleeping background tabs with manual sleep/wake controls in Task Manager
* 🧩 User-Agent switching
* 🏠 Custom homepage support
* 🎵 Local-only Music Player with explicit opt-in before folder scans
* ⌨️ Edit menu and keyboard shortcut guide for common browser actions
* 🧾 Encrypted diagnostics export and local crash logging
* ✅ Runtime checks panel for ad blocking, download providers, encrypted storage, and performance status

---

## 📦 Installation Instructions

1. Double-click:

   ```
   BubblesTheDev Web Browser_Installer_0.6.5.exe
   ```

2. Choose your installation directory.
3. Select optional shortcuts if desired.
4. Click **Install**.
5. Launch the browser after installation completes.

If you already have an older version installed, open `Start > Settings > Apps`, find `BubblesTheDev Web Browser`, uninstall the older version, and then install version `0.6.5`.

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

This release includes the following Electron security settings and browser protections:

- `contextIsolation`: enabled
- `nodeIntegration`: disabled
- `sandbox`: enabled for renderer and helper windows
- BrowserView-based tab runtime instead of renderer-managed `webviewTag`
- Separate session handling for incognito windows
- Restricted permission handling
- Download protection runs through modular scanner providers and can block or withhold risky files from in-app execution
- Ad and tracker request filtering
- No telemetry endpoints configured
- No auto-updater service configured

---

## 🎵 Music Player

The Music Player is local-only and off by default.

- No music folder is scanned until the user explicitly agrees inside the Music Player window
- The user can scan the default Music folder or choose another local folder
- Playback uses local files only
- Music library data is not uploaded or shared by the app

---

## 🧾 Diagnostics And Crash Reports

This release includes local diagnostics logging for runtime failures and renderer or tab process exits.

Users can export a diagnostics report from:

`Tools > Export Diagnostics Report`

Diagnostics are stored locally on the user machine and are not transmitted automatically. Exported diagnostics reports are encrypted before they are written to disk.

**Support email for crash reports:**
`bubblesthedevwebbrowsersupport@fnbubbles420.org`

When reporting a problem, attach the exported encrypted diagnostics file to the support email.

---

## 🔒 Privacy Notice

This application:

- Does not collect personal data automatically
- Does not transmit telemetry automatically
- Does not include analytics services
- Does not connect to BubblesTheDev-owned servers for diagnostics upload
- Does not include AI, machine learning, or remote inference systems
- Stores browser data locally on the user's device in compressed form, with OS-backed encryption when available

Network traffic occurs when the user browses websites or uses built-in search features.

When the user runs a search from `bubbles://home`, the browser may contact DuckDuckGo and Google endpoints in the background to assemble the Bubbles search experience.

---

## 🔎 Privacy Proof

The application stores browser data and diagnostics locally under the Electron user data folder, and diagnostics are exported only when the user manually chooses to save them.

```js
function getDataPath() {
   return path.join(app.getPath('userData'), 'browser_data.bin');
}

function getDiagnosticsDir() {
   return path.join(app.getPath('userData'), 'diagnostics');
}
```

Browser features such as history, bookmarks, site permission settings, homepage settings, Music Player settings, and local diagnostics are stored on the user's device to support browser functionality and are not automatically transmitted.

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
2. Open `Start > Settings > Apps`.
3. Find `BubblesTheDev Web Browser` and uninstall the older version if needed.
4. Install the newer version using the latest installer.

Uninstall behavior for installers built from the current source:

- The uninstaller removes the selected install directory.
- The uninstaller also removes local browser data directories created under the current Windows user profile.
- If files remain after uninstall, the usual cause is that the browser or one of its helper processes was still running during removal.

---

## 🛠 Troubleshooting

**Application does not launch:**  
Reinstall the browser and ensure Windows Defender or other antivirus software is not blocking the executable.

**A page or tab crashes:**  
Reopen the browser, export a diagnostics report from the Tools menu, and email it to support.

**A login popup does not appear:**  
Update to the latest release, because current builds include popup-window handling needed by many sign-in flows.

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

[Get the web browser here](https://github.com/KernFerm/BubblesTheDev-WebBrowser/releases)
