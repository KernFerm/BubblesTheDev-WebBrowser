# Changelog

This changelog reconstructs the project history from version `0.0.24` through `0.1.5` using the repository's tagged compare data, release notes, and versioned README changes.

## 0.5.5 Planned

### Added

- Bookmark bar support is planned for quick access to saved sites from the main browser UI.
- Chrome-style right-click tab actions are planned, including creating a new tab from the tab area context menu.
- Split-view browsing is planned so two pages can be viewed side by side in the same browser window.
- Flexible installation support is planned, allowing users to install the browser anywhere on their system, including internal drives, USB flash drives, external HDDs, and SSDs.
- Ad blocker verification system is planned, including:
  - Real-time status indicator
  - Blocked ads/trackers counter per page
  - Diagnostic/test capability
- Site permissions system is planned similar to modern browsers, including per-site controls for:
  - Camera
  - Microphone
  - Notifications
  - Location
  - Pop-ups
  - Clipboard access
  - Automatic downloads
- Bubbles Search Engine upgrade is planned:
  - Google backend integration (where applicable)
  - Google autocomplete/suggestions
  - DuckDuckGo and additional search providers
  - Ability to switch or aggregate providers
  - Homepage displays search results directly (no forced redirect)
- Private browsing IP protection is planned:
  - Hide the user's IP address while browsing in incognito/private mode
  - Ensure no session persistence or local tracking in private mode

---

### Privacy & Data Protection

- BubblesTheDev Web Browser is designed to keep browser data local to the user's device unless the user chooses to visit external websites or use external web services.
- The application does not include built-in telemetry, analytics SDKs, automatic crash upload services, cloud synchronization, or AI monitoring systems.

Specifically:

- No telemetry services are embedded in the application.
- No background analytics services are executed.
- No behavioral tracking mechanisms are included by the application itself.
- No advertising identifiers are generated or transmitted by the application itself.
- No cloud-based synchronization features are implemented.
- No automatic diagnostics upload path is implemented.
- Local browser data such as history, bookmarks, homepage settings, and optional Music Player settings is stored on the user's device in the Electron `userData` directory.

---

### Updated

- Download protection is planned to move beyond Windows Defender-only scanning and support multiple antivirus providers or scanner integrations.
- Full-screen behavior is planned to be revised so `F11` cleanly toggles full-screen on and off.
- Installer system is planned to support user-defined install locations instead of forcing a default path.

---

### Fixed

- A full-screen usability fix is planned so the browser can still be closed reliably while in full-screen mode.
- Additional safeguards are planned to ensure `Alt + F4` and window controls always function correctly in all states.

---

### Performance

- CPU usage optimization is planned to reduce background and active-tab overhead as much as possible during normal browsing.
- Memory optimization is planned to push average browser memory use below the current baseline while keeping stability and feature support intact.

---

### Compression

- Maximum compression is planned for local storage, including cached data and stored settings, while maintaining performance.

---

### Encryption 

- Secure storage for browser data is planned.
- Encryption for sensitive local files is planned.
- OS-backed credential storage is planned.
- Secure export system (logs/diagnostics) is planned to prevent sensitive data exposure.

---

### Planned (Future Version 0.8.3)

- VPN integration will be introduced in version `0.8.3`, including support for:
  - NordVPN
  - ExpressVPN
  - ProtonVPN
  - Custom VPN configuration files supported by ProtonVPN

---

## Version Range Summary

- Start version: `0.0.24`
- Intermediate milestones found in repository history: `0.0.35`, `0.0.50`
- End version: `0.1.5`

## 0.0.24 -> 0.0.35
...

### Added

- Exportable diagnostics and local crash logging were introduced.
- A documented crash-report workflow was added through `Tools > Export Diagnostics Report` with a support email contact.
- `Data-Collection-and-Privacy-Notice.md` was added to formalize the browser's no-telemetry and no-analytics position.

### Updated

- The installer package advanced from `0.0.24` to `0.0.35` with updated package naming and install instructions.
- The project README was rewritten around a BrowserView-based tab runtime instead of a generic lightweight-browser description.
- System requirements were tightened toward Windows 11 x64 packaging.
- Security documentation was expanded to call out sandboxing, `contextIsolation`, disabled `nodeIntegration`, incognito session separation, restricted permissions, and no auto-updater endpoints.

### Changed

- Feature wording was cleaned up for task manager behavior, shortcuts, and packaging details.
- Manual update guidance was clarified for installer-based upgrades.

### Notes

- An `info` status file was introduced as a simple project update marker.

## 0.0.35 -> 0.0.50

### Added

- Download protection for risky file types was added, including optional Windows Defender scan integration after downloads complete.
- A clear recent downloads action was added to the Downloads window.
- `ARCHITECTURE.md` was added to document runtime design, Electron process structure, local storage, diagnostics, and security model.
- `Browser-Privacy-Comparison.md` was added to explain privacy posture versus mainstream browsers.
- `SECURITY.md` was added with vulnerability reporting guidance and support policy.
- A privacy-proof section was added to the README to show that diagnostics and browser data remain local unless exported manually.

### Updated

- The main README was renamed from `Readme.md` to `README.md`.
- Installer naming changed to the `0.0.50` setup package format.
- Install and update instructions were revised to explicitly remove `0.0.35` before installing `0.0.50`.
- Privacy and data-collection documentation links were added to the README.

### Fixed

- A formatting issue in the diagnostics directory helper (`ensureDiagnosticsDir`) was corrected.

### Notes

- The temporary `info` file was renamed to `UPDATES`.
- The repository became much more documentation-driven in this release, especially around privacy, security, and architecture.

## 0.0.50 -> 0.1.5

### Added

- `bubbles://home` became the default home page.
- Bubbles Search Engine support was added, with background DuckDuckGo results and Google suggestions.
- Direct URLs and bare domains remained separate from search input in the address bar.
- Live home-page counters were added for ads blocked, trackers blocked, bookmarks saved, and history count.
- Ad and tracker request filtering was expanded, including YouTube-focused blocking behavior.
- Popup-based login compatibility was improved for sign-in flows used by sites such as Google, Twitch, and Facebook.
- A local-only Music Player window was added with explicit user opt-in before any folder scan begins.
- Edit menu roles and a shortcut/help guide were added for common browser actions.

### Updated

- Download management messaging was updated to reflect recent-download management.
- The architecture documentation was rewritten around the real runtime shape: `browser-runtime.js`, BrowserView tabs, helper windows, popup auth windows, Bubbles home page IPC, and Music Player state.
- The privacy comparison document was revised to better distinguish local-first behavior from normal web traffic and search-provider traffic.
- The data collection notice was expanded to document local storage for history, bookmarks, homepage settings, and Music Player settings.
- Update instructions were generalized to uninstall any older installed version before installing `0.1.5`.

### Changed

- The project README shifted from a general browser package description to a release overview centered on search, privacy, popup auth compatibility, and local-only media features.
- Security documentation now calls out ad and tracker filtering as part of the browser protection model.
- Privacy language was refined to explicitly state that the browser avoids first-party telemetry while still making normal website and search-provider requests when the user initiates those actions.

### Notes

- The official `0.1.5` release notes describe this release as the point where the browser's identity moved from a general Electron browser package to a branded Bubbles search-and-privacy focused desktop browser.

## Overall Changes From 0.0.24 To 0.1.5

### Added Across The Range

- Exportable diagnostics and local crash logging
- Download protection with Windows Defender integration
- Privacy, architecture, and security documentation
- Bubbles Search Engine and default internal home page
- Ad and tracker filtering with live counters
- Popup login compatibility improvements
- Local-only Music Player with explicit opt-in
- Edit menu roles and shortcut/help coverage

### Updated Across The Range

- Installer naming, packaging language, and upgrade instructions
- System requirement messaging toward Windows 11 x64
- README and release documentation quality and depth
- Privacy disclosures to better reflect actual app behavior

### Fixed Across The Range

- Diagnostics helper formatting issues
- Login-flow handling around popup-based authentication
