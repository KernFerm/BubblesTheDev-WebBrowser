# Changelog

This changelog reconstructs the project history from version `0.0.24` through `1.0.30` using the repository's tagged compare data, release notes, versioned README changes, and current installer/update work.

## 1.0.30

### Updated

- The package version was advanced to `1.0.30`.
- Electron was updated to `42.0.0`.
- Release documentation and installer-facing version references were refreshed for `1.0.30`.
- The installer no longer presents a manual-update-only setup choice. Automatic updates are now the standard setup behavior for installed builds.
- Manual `Check for Updates` remains available from the app menu for user-initiated version and status checks.

### Performance

- Browser UI update churn was reduced by coalescing autocomplete, task-manager refresh, tab-strip rerender, and split-view drag work more aggressively.
- Browser-state synchronization between the main process and renderer was tightened to reduce unnecessary high-frequency updates during normal browsing.
- Heavy media pages such as Twitch and YouTube now use a softer browser-state debounce path for noisy tab metadata updates.

### Memory

- Background tab sleeping now activates earlier under memory pressure and trims more tabs per pass to reduce long-session memory growth.
- In-memory history, downloads, diagnostics, and search caches were capped more aggressively to keep retained browser state smaller over time.

### Notes

- Trusted-source-aware downloads, passkey compatibility, external-drive install handling, and diagnostics tools remain part of the current browser build.
- Existing browser features remain in place, including bookmark bar support, split-view browsing, site permissions, ad blocking, download protection, sleeping tabs, runtime diagnostics, password storage, VPN tools, and the local-only Music Player.

## 1.0.27

### Added

- The shell theme menu now supports multiple muted built-in color themes: `Graphite`, `Slate Blue`, `Forest Ash`, and `Mocha`.
- A persistent toolbar-visibility state was added so users can hide the main shortcut row while keeping the address bar and quick-access `»` menu available.
- Keyboard shortcuts were added for `Toggle Bookmark Bar` (`Ctrl+Shift+B`) and `Toggle Toolbar` (`Ctrl+Alt+T`), and the shortcut guide was updated to match.

### Updated

- The `Bookmarks` and `»` toolbar menus now use native popup menus instead of in-page dropdown overlays.
- The toolbar layout was refined so hidden-toolbar mode still keeps the omnibox accessible and the quick-access menu visible.
- The `Theme` app menu was expanded from a single dark-mode toggle into a muted multi-theme selector with `Ctrl+Shift+D` cycling between themes.
- `ARCHITECTURE.md` and `Browser-Privacy-Comparison.md` were updated to document the current shell state, theme behavior, updater validation, and extension/password hardening paths.

### Security

- Managed updates now fail closed unless both the release metadata URL and installer URL use `https:` and the published release includes a valid SHA-256 hash for installer verification before launch.
- Imported extensions now load without local file access, reject symlinked folders, require Manifest V2 or V3 structure, and warn the user before importing extensions with broad or higher-risk permissions.
- Password save and reveal flows are now restricted to secure contexts such as `https:` pages and local loopback development hosts.
- The renderer-side CSP was tightened with explicit `object-src 'none'`, `base-uri 'none'`, `frame-ancestors 'none'`, and narrower resource directives.
- Several renderer UI paths were cleaned up to reduce unnecessary `innerHTML` usage in favor of direct DOM construction.

### Dependency Audit

- A local `npm audit` pass reported `0` known vulnerabilities in the current dependency tree.

## 1.0.25

### Updated

- The package version was advanced to `1.0.25`.
- Release and README documentation were updated to match the `1.0.25` installer package name and current feature set.
- Download handling was refined so files from trusted sources such as GitHub can complete more reliably while browser security protections remain in place.
- The page context menu and tab context menu were refined toward a cleaner Chromium-style workflow.
- Passkey and WebAuthn sign-in compatibility for supported websites was improved.
- Install-path handling was updated so external-drive installs can move install-linked browser data off `C:` and onto the selected external drive.

### Performance

- Memory usage was reduced on streaming-heavy sites such as Twitch and Kick to improve responsiveness and stability.

### Notes

- `Automatic updates` remains the default installer selection, while `Manual updates only` remains available.

# 1.0.17
- Dependency Security Update

  ## Highlights

- Encrypted saved-password vault with on-demand reveal, manual add and remove controls, and strong-password generation
- Bookmark import from Edge, Chrome, Brave, Opera, or a user-chosen bookmark file with explicit consent gating for path scans and manual file access
- Chromium extension import support for Edge, Chrome, Brave, and Opera profile folders plus manual folder import
- VPN manager support for NordVPN, ExpressVPN, ProtonVPN, and WireGuard with Proton `.conf` validation and import
- Browser-session public IP testing with separate IPv4 and IPv6 checks in the VPN panel
- Installer update-mode choice with `Automatic updates` and `Manual updates only`, plus an owner-run managed update server flow for installs that opt into automatic updates
- Installer-time opt-in registration so `Automatic updates` installs can notify the update server immediately after setup
- Manual `Check for Updates` entry in the app menu with clearer version and status feedback
- Improved uninstall flow with custom install-path tracking, external-drive install support, and better cleanup of stale install metadata
- Uninstall options that let users choose which local data categories should be removed or kept
- Existing browser shell features remain in place, including bookmark bar, split-view browsing, site permissions, ad blocking, download protection, sleepable tabs, and runtime diagnostics

## What's New In 1.0.17

- Password capture from supported login forms now stores encrypted entries locally and keeps passwords hidden until the user explicitly reveals them.
- The browser can suggest strong passwords both from the passwords panel and on supported password forms.
- Bookmark import now separates consent for browser-path scanning and manual bookmark-file browsing.
- Extension import scans supported Chromium profile locations and restores imported extensions into the persistent main session.
- VPN integration now includes installed-client detection, external app launch shortcuts, local Proton profile import, and browser network refresh support.
- Public IP testing now surfaces both IPv4 and IPv6 results so users can verify whether the browser session is going through the expected network path.
- Installer builds can now record whether the user selected `Automatic updates` or `Manual updates only`, register auto-update installs with an owner-run update server immediately after setup, and fetch/download the latest published installer from that server flow.
- The update server now restricts dashboard access, client-list access, and release publishing to the owner machine by default.
- Users can now manually run `Check for Updates` from the app menu and see installed-versus-available version feedback.
- Custom install locations now better support external HDDs, external SSDs, and USB flash drives.
- Uninstall now cleans up tracked custom install paths more reliably, lets users choose which local data categories to remove, and suppresses false leftover warnings when cleanup finishes successfully.
- `Automatic updates` is now the default installer selection, while `Manual updates only` remains available as an opt-out choice.

# 1.0.15 

## Highlights

- Encrypted saved-password vault with on-demand reveal, manual add and remove controls, and strong-password generation
- Bookmark import from Edge, Chrome, Brave, Opera, or a user-chosen bookmark file with explicit consent gating for path scans and manual file access
- Chromium extension import support for Edge, Chrome, Brave, and Opera profile folders plus manual folder import
- VPN manager support for NordVPN, ExpressVPN, ProtonVPN, and WireGuard with Proton `.conf` validation and import
- Browser-session public IP testing with separate IPv4 and IPv6 checks in the VPN panel
- Installer update-mode choice with `Automatic updates` and `Manual updates only`, plus an owner-run managed update server flow for installs that opt into automatic updates
- Installer-time opt-in registration so `Automatic updates` installs can notify the update server immediately after setup
- Manual `Check for Updates` entry in the app menu with clearer version and status feedback
- Improved uninstall flow with custom install-path tracking, external-drive install support, and better cleanup of stale install metadata
- Uninstall options that let users choose which local data categories should be removed or kept
- Existing browser shell features remain in place, including bookmark bar, split-view browsing, site permissions, ad blocking, download protection, sleepable tabs, and runtime diagnostics

## What's New In 1.0.15

- Password capture from supported login forms now stores encrypted entries locally and keeps passwords hidden until the user explicitly reveals them.
- The browser can suggest strong passwords both from the passwords panel and on supported password forms.
- Bookmark import now separates consent for browser-path scanning and manual bookmark-file browsing.
- Extension import scans supported Chromium profile locations and restores imported extensions into the persistent main session.
- VPN integration now includes installed-client detection, external app launch shortcuts, local Proton profile import, and browser network refresh support.
- Public IP testing now surfaces both IPv4 and IPv6 results so users can verify whether the browser session is going through the expected network path.
- Installer builds can now record whether the user selected `Automatic updates` or `Manual updates only`, register auto-update installs with an owner-run update server immediately after setup, and fetch/download the latest published installer from that server flow.
- The update server now restricts dashboard access, client-list access, and release publishing to the owner machine by default.
- Users can now manually run `Check for Updates` from the app menu and see installed-versus-available version feedback.
- Custom install locations now better support external HDDs, external SSDs, and USB flash drives.
- Uninstall now cleans up tracked custom install paths more reliably, lets users choose which local data categories to remove, and suppresses false leftover warnings when cleanup finishes successfully.
- `Automatic updates` is now the default installer selection, while `Manual updates only` remains available as an opt-out choice.

## 1.0.13

### Added

- A manual `Check for Updates` menu entry was added so users can trigger update checks on demand and see clearer version/status feedback.
- Custom install locations now explicitly support external HDDs, external SSDs, and USB flash drives with writable-path validation during setup.
- Uninstall now prompts the user to choose whether local browser data should be removed or kept for a future reinstall or update.

### Updated

- The package version was advanced to `1.0.13`.
- Current release documentation and installer-facing version references were updated to `1.0.13`.
- Installer metadata tracking was expanded to record install root and drive-type details for custom install paths.
- Update preference persistence now keeps custom install-path metadata in sync after launch.

### Fixed

- Uninstall cleanup now better targets tracked custom install directories instead of relying only on default locations.
- Ghost-install cleanup was improved by removing stale install metadata and validating remaining leftovers after uninstall.

# 1.0.1-0.10
- Security Update Dependency

# 1.0.1-0.7
- Security Update Dependency

# 1.0.1-0.5
- Security Update Dependency

# 1.0.1-0.3
- Security Update Dependency

# 1.0.10-01
- Security Update Dependency

## 1.0.10
- Security Update Dependency
- minor updates

## 1.0.8

### Updated

- The package version was advanced to `1.0.8`.
- Current release documentation and installer-facing version references were updated to `1.0.8`.

## 1.0.6

### Added

- Installer-time auto-update check-in was added so installs that choose `Automatic updates` can register with the owner-run update server immediately after setup.

### Updated

- The package version was advanced to `1.0.6`.
- Current release documentation and installer-facing version references were updated to `1.0.6`.
- The managed update server now separates end-user client access from owner-only dashboard and release-management actions.

## 0.9.23

### Added

- Encrypted saved-password storage was added with manual add, reveal, remove, and strong-password generation flows.
- Bookmark import was expanded to supported Chromium browser paths plus manual bookmark-file import.
- Separate consent gating was added for browser bookmark-path scanning and manual bookmark-file access.
- Chromium extension import support was added for Edge, Chrome, Brave, and Opera profile folders.
- VPN tooling was added for installed-client detection, Proton `.conf` validation/import, and browser-session IP checks.
- Installer update-mode selection was added for `Automatic updates` and `Manual updates only`, along with an owner-run managed updater that can register opted-in installs, publish the latest release, and let clients download and launch that installer.

### Updated

- Release, README, privacy, and architecture documentation were refreshed for version `0.9.23`.
- Update documentation was revised to describe the owner-run managed updater, published release flow, and the limited fields it collects.
- Browser persistence behavior was updated so uninstall no longer deletes app data by default.
- Startup logging was reduced so blocked tracker noise and low-level Chromium network spam do not flood the terminal.

### Fixed

- Bookmark import consent rules now apply correctly to both browser-path scanning and manual bookmark-file browsing.
- VPN `.conf` scanning was tightened so there is no automatic common-folder scan path.

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
