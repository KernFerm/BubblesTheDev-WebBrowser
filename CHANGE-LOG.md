# Changelog

This changelog reconstructs the project history from version `0.0.24` through `0.1.5` using the repository's tagged compare data, release notes, and versioned README changes.

## 0.6.3

### Added

- Bookmark bar support was added to the main browser shell with persistent saved-page chips, one-click navigation, and inline removal.
- Chrome-style tab context actions were added for new tab, duplicate tab, close tab, and split-view replacement.
- Split-view browsing was added so two BrowserView tabs can be displayed side-by-side with a draggable divider.
- Site permission controls were added from the address bar shell for camera, microphone, notifications, location, popups, clipboard, automatic downloads, and fullscreen.
- The Bubbles home page now keeps provider results on-page while switching between Bubbles, Google-backed, and DuckDuckGo-backed result sources.

### Updated

- Download protection now runs through a modular provider chain with fallback behavior, including Windows Defender, Authenticode signature checks, and browser heuristics.
- Ad-block diagnostics now show loaded-rule status and per-page blocked counters in addition to the existing Bubbles home verification page.
- Full-screen handling now uses a clean `F11` toggle path plus an in-shell exit control.
- Local browser state and exported diagnostics now use compressed persisted payloads, with OS-backed encryption when available.
- A runtime checks panel was added to the browser shell so users can inspect security, download protection, ad blocking, executable path, and performance state in-app.

### Fixed

- Full-screen exit reliability was improved so the window can still be closed or exited cleanly while full-screen is active.

### Performance

- Hidden BrowserView tabs now opt into background throttling so inactive pages use less CPU and memory pressure during normal browsing.
- Background tabs can now be put to sleep automatically under memory pressure, and the Task Manager can manually sleep or wake eligible tabs.

## Version Range Summary

- Start version: `0.0.24`
- Intermediate milestones found in repository history: `0.0.35`, `0.0.50`
- End version: `0.1.5`

## 0.0.24 -> 0.0.35

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

## Source Basis

This file was reconstructed from:

- the repository compare history for `0.0.24 -> 0.0.35`, `0.0.35 -> 0.0.50`, and `0.0.50 -> 0.1.5`
- the in-repo `release.md` for version `0.1.5`
- the repository's tagged README and documentation diffs
