# 🖥️ BubblesTheDev Web Browser

## Installer Package – Version 0.0.50

**Installer File:**
`BubblesTheDev Web Browser Setup 0.0.50.exe`

**Author:** BubblesTheDev  
**Platform:** Windows 11 (x64)  
**Engine:** Chromium (Electron 40)


[Download BubblesTheDev - Web Browser](https://github.com/KernFerm/BubblesTheDev-WebBrowser/releases/download/0035-bubblesthedev-webbrowser/BubblesTheDev.Web.Browser_Installer_0.0.50.exe)

[Browser-Privacy-Comparison](https://github.com/KernFerm/BubblesTheDev-WebBrowser/blob/main/Browser-Privacy-Comparison.md)

[Data-Collection-and-Privacy-Notice](https://github.com/KernFerm/BubblesTheDev-WebBrowser/blob/main/Data-Collection-and-Privacy-Notice.md)

---

## 🚀 Overview

BubblesTheDev Web Browser is a desktop web browser built with Electron and a BrowserView-based tab runtime.
This installer package installs the browser on Windows with optional desktop and Start Menu shortcuts.

Release version: `0.0.50`

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
* 🛡 Download protection with risky file warnings and Windows Defender scan integration
* 🧹 Clear recent downloads button in the Downloads window
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
   BubblesTheDev Web Browser Setup 0.0.50.exe
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
- Download protection flags high-risk file types and can run Windows Defender scans after downloads complete
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

## 🔎 Privacy Proof

The application stores browser data and diagnostics locally under the Electron user data folder, and diagnostics are exported only when the user manually chooses to save them.

```js
function getDataPath() {
   return path.join(app.getPath('userData'), 'browser_data.json');
}

function getDiagnosticsDir() {
   return path.join(app.getPath('userData'), 'diagnostics');
}

function ensureDiagnosticsDir() {
   const dirPath = getDiagnosticsDir();
   fs.mkdirSync(dirPath, { recursive: true });
   return dirPath;
}

function exportDiagnosticsReport() {
   const snapshot = buildDiagnosticsSnapshot();
   const stamp = new Date().toISOString().replace(/[:.]/g, '-');
   const defaultPath = path.join(ensureDiagnosticsDir(), `diagnostics-${stamp}.json`);

   return dialog.showSaveDialog({
      title: 'Export Diagnostics Report',
      defaultPath,
      filters: [{ name: 'JSON', extensions: ['json'] }]
   }).then((result) => {
      if (result.canceled || !result.filePath) return { ok: false, canceled: true };

      fs.writeFileSync(result.filePath, JSON.stringify(snapshot, null, 2), 'utf8');
      return { ok: true, filePath: result.filePath };
   });
}
```

Application code scan summary:

The application source was scanned for common telemetry, analytics, diagnostics upload, updater, and AI-related hooks, including patterns such as `fetch`, `XMLHttpRequest`, `WebSocket`, `navigator.sendBeacon`, `crashReporter`, `autoUpdater`, analytics SDK names, and common AI client references.

- No telemetry implementation found in application source
- No analytics SDK or tracking hooks found in application source
- No automatic diagnostics upload path found in application source
- No AI, machine learning, or remote inference implementation found in application source

Browser features such as history, bookmarks, homepage settings, and local diagnostics are stored on the user's device to support browser functionality and are not automatically transmitted.

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

[Get the web browser here](https://github.com/KernFerm/BubblesTheDev-WebBrowser/releases/tag/0050-Installer-Version-webbrowser)
