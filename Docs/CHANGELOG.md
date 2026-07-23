# Changelog

This changelog summarizes notable public release changes through version `1.2.160`.

## 1.2.160

### Updated

- The package version was advanced to `1.2.160`.
- Release-facing documentation was updated to reflect version `1.2.160`.
- Bundled `yt-dlp.exe` is now version `2026.07.05`.
- Secure DNS settings now show provider DNS addresses in the security panel.
- Password breach warnings are enabled by default for newly normalized security settings.
- The Privacy & Security panel now includes clearer Secure DNS provider details, password breach warning controls, and restart guidance for DNS changes.
- Local Send to Device support now uses same-Wi-Fi LAN discovery without Google account dependency or telemetry, with clearer panel notes that both devices need BubblesTheDev WebBrowser installed.
- Page sharing now includes QR code generation and a `Create Shortcut` option for saving the current page as a Windows shortcut.
- The Profile Manager page has a cleaner desktop layout and friendlier end-user wording for profiles, PINs, and local data.
- The Profile Manager now opens in a larger default window and uses a more polished grey desktop background with stronger blue/orange neon panel accents.
- The main browser toolbar layout was refined so the clock, Tools button, navigation controls, address bar, user-agent selector, Go button, and status pills sit in a cleaner primary row.
- The keyboard shortcuts guide now documents `Ctrl+Shift+P` for Profile Manager, `F10` for Focus Mode, and `Alt+F4` for exiting the browser on Windows.

### Fixed

- Fixed pinned sites so they can use the site's icon instead of falling back to a single-letter tile, and pinned sites persist across browser restarts.
- Fixed the bookmarks menu so users can see and scroll their saved bookmark list from the menu.
- Added a restart-browser prompt after Secure DNS changes so users can apply DNS settings without guessing what to do next.
- Fixed QR code generation reliability so page-share QR codes scan correctly on phones, with safer QR popup copy-button handling.
- Fixed the toolbar Tools button so it uses a round icon-only control while keeping the existing toolbar actions available.

### Notes

- Version `1.2.160` is the current documented public release in this changelog.

## 1.2.145

### Updated

- The package version was advanced to `1.2.145`.
- Bundled `yt-dlp.exe` is now version `2026.07.04`.
- Release-facing documentation was updated to reflect version `1.2.145`.

### Fixed

- Fixed Streaming Hub provider connect pages so isolated streaming tabs and hardened sign-in popups now open at normal `100%` zoom instead of appearing zoomed out.
- Fixed browser zoom behavior so ordinary websites no longer inherit the browser-wide accessibility page zoom by default.
- Fixed manual page zoom carry-over so a zoom change in one tab now stays scoped to the current site instead of making unrelated websites appear zoomed out in the same tab.
- Fixed stale saved tab zoom overrides so older zoomed-out state is cleared automatically when it no longer matches the current site.

### Notes

- Version `1.2.145` was the documented public release before `1.2.160`.

## 1.2.140

### Updated

- The package version was advanced to `1.2.140`.
- Release-facing documentation was updated to reflect version `1.2.140`.

### Notes

- Version `1.2.140` was the documented public release before `1.2.145`.

## 1.2.130

### Updated

- The package version was advanced to `1.2.130`.
- Locked dependencies were refreshed for the current packaged build.
- Release-facing documentation was updated to reflect version `1.2.130`.
- The top menu structure is now also accessible from `More tools` for easier in-app access.

### Changed

- The `Update Installation` card was removed from the performance panel because the current updater flow already runs in automatic installer-handoff mode.
- `More tools` now includes a top-menu visibility toggle so the native menu bar can be enabled or disabled from inside the browser.
- Zoom controls are now available from `More tools` and from the page right-click context menu.
- The page right-click context menu now surfaces `Cut`, `Copy`, and `Paste` actions more clearly.

### Release

- The `1.2.130` Windows installer package name is `BubblesTheDev Web Browser_Installer_1.2.130.exe`.

### Notes

- Version `1.2.130` was the documented public release before `1.2.140`.

## 1.2.115

### Updated

- The package version was advanced to `1.2.115`.
- Locked dependencies were refreshed for the current packaged build.
- Release-facing documentation was updated to reflect version `1.2.115`.
- Package author metadata was normalized to a cleaner npm-compatible format while keeping the same name, brand, and support email.

### Installer

- Desktop and Start Menu shortcuts were updated so future rebuilt Windows installers can create shortcuts with the hover description `Access the Internet with privacy.`

### Release

- The `1.2.115` Windows installer package name is `BubblesTheDev Web Browser_Installer_1.2.115.exe`.

### Notes

- Version `1.2.115` was the documented public release before `1.2.130`.

## 1.2.110

### Updated

- The package version was advanced to `1.2.110`.
- Release-facing documentation was updated to reflect version `1.2.110`.
- The Bubbles Search Engine now blends real on-page results from DuckDuckGo and Google instead of relying on a single-provider-first flow.
- Search results rendered on `bubbles://home` now show which provider supplied each result card.

### Features

- Added the lightweight animated `Aurora Drift` shell theme.
- Removed the older `Casual` shell theme from the current built-in theme list.
- Improved the custom local-image banner theme flow so banner images present more cleanly across the browser shell.
- Refined the Bubbles home search experience so `Bubbles` mode uses both DuckDuckGo and Google together.

### Release

- The `1.2.110` Windows installer package name is `BubblesTheDev Web Browser_Installer_1.2.110.exe`.

### Notes

- Version `1.2.110` was the documented public release before `1.2.115`.

## 1.2.105

### Updated

- The package version was advanced to `1.2.105`.
- The Electron dependency line was refreshed to `43.1.0`.
- Bundled `yt-dlp.exe` was updated to `2026.07.04`.
- Bundled `ffmpeg.exe` and `ffprobe.exe` were updated to `8.1.2`.
- Release-facing documentation was updated to reflect version `1.2.105`.

### Features

- Added more built-in shell themes, including `Aurora Glow`, `Ember Night`, and `Ocean Mist`.
- Added a custom local-image banner theme so the user can choose a picture from their own computer.
- Improved custom theme image fitting so uploaded images present more cleanly across the browser shell.

### Release

- The `1.2.105` Windows installer package name is `BubblesTheDev Web Browser_Installer_1.2.105.exe`.

### Notes

- Version `1.2.105` was the documented public release before `1.2.110`.

## 1.2.100

### Updated

- The package version was advanced to `1.2.100`.
- Release-facing documentation was updated to reflect version `1.2.100`.
- Public update documentation was clarified so normal browser clients can still receive updates without shipping a shared client update secret in the browser files.
- Public security and privacy documentation was refreshed to describe direct provider sign-in by default and the reduced update-check data posture in simpler language.

### Security And Privacy

- The browser no longer ships a default shared client update secret in public configuration.
- Public-facing docs now reflect that ordinary installed browser clients can still check for updates while admin-only release management remains separate.
- Public-facing docs continue to avoid sensitive operational details and personal information.

### Release

- The `1.2.100` Windows installer package name is `BubblesTheDev Web Browser_Installer_1.2.100.exe`.

### Notes

- Version `1.2.100` was the documented public release before `1.2.105`.

## 1.2.85

### Updated

- The package version was advanced to `1.2.85`.
- Release-facing documentation was updated to reflect version `1.2.85`.
- Locked dependencies were refreshed for the current packaged build.

### Security And Privacy

- This maintenance release keeps the browser's current local-first privacy posture with no new public-facing telemetry or analytics behavior documented for this release.

### Release

- The `1.2.85` Windows installer package name is `BubblesTheDev Web Browser_Installer_1.2.85.exe`.

### Notes

- Version `1.2.85` was the documented public release before `1.2.100`.

## 1.2.83

### Updated

- The package version was advanced to `1.2.83`.
- Release-facing documentation was updated to reflect version `1.2.83`.
- Locked dependencies were refreshed for the current packaged build.

### Security And Privacy

- This maintenance release keeps the browser's current local-first privacy posture with no new public-facing telemetry or analytics behavior documented for this release.

### Release

- The `1.2.83` Windows installer package name is `BubblesTheDev Web Browser_Installer_1.2.83.exe`.

### Notes

- Version `1.2.83` was the documented public release before `1.2.85`.


### Fixed

- Fixed browser history import so supported local Edge, Chrome, Brave, Opera, and Firefox history sources are read from temporary safe copies of their databases instead of the live database path.
- Fixed browser history import source discovery so supported Chromium profile-based history locations can be found beyond a single default profile.
- Fixed extension import scanning so supported Chromium browser profiles are searched more broadly for importable extensions.
- Fixed manual extension import so the user can select an extension file and the browser resolves the owning extension root from its `manifest.json`.

### Updated

- Updated the browser-side extensions panel copy to use simpler end-user wording for scan and manual import behavior.
- Updated the manual extension import flow to guide the user toward the extension `manifest.json` file instead of a generic folder-only instruction.
- Updated the shipped `locales` folders so current module-level locale packs are fully translated instead of relying on broad English placeholder coverage.

## 1.2.80

### Updated

- The package version was advanced to `1.2.80`.
- Release-facing documentation was updated to reflect version `1.2.80`.
- Public release documentation was aligned with the current `1.2.80` release.

### Security And Privacy

- The browser continues its local-first privacy posture with no new public-facing telemetry or analytics behavior documented for this release.

### Release

- The `1.2.80` Windows installer package name is `BubblesTheDev Web Browser_Installer_1.2.80.exe`.

### Notes

- Version `1.2.80` was the documented public release before `1.2.83`.

## 1.2.15

### Updated

- The package version was advanced to `1.2.15`.
- Release-facing documentation was updated to reflect version `1.2.15`.
- Locked dependencies were refreshed for the current packaged build.
- Bundled `yt-dlp.exe` was updated to `2026.6.9`.

### Security And Privacy

- This maintenance release remains focused on dependency and bundled-binary updates.
- The browser continues its local-first privacy posture with no new public-facing telemetry or analytics behavior.

### Release

- The `1.2.15` Windows installer package name is `BubblesTheDev Web Browser_Installer_1.2.15.exe`.

### Notes

- Version `1.2.15` is a maintenance release focused on dependency updates and the bundled `yt-dlp.exe 2026.6.9` refresh, with no new headline browser features.

## 1.2.13

### Updated

- The package version was advanced to `1.2.13`.
- Release-facing documentation was updated to reflect version `1.2.13`.
- Locked dependencies were refreshed for the current packaged build.

### Security And Privacy

- This maintenance release is focused on dependency security updates.
- The browser continues its local-first privacy posture with no new public-facing telemetry or analytics behavior.

### Release

- The `1.2.13` Windows installer package name is `BubblesTheDev Web Browser_Installer_1.2.13.exe`.

### Notes

- Version `1.2.13` is a dependency security maintenance release with no new headline browser features.

## 1.2.10

### Updated

- The package version was advanced to `1.2.10`.
- Release-facing documentation was updated to reflect version `1.2.10`.
- Locked dependencies were refreshed for the current packaged build.

### Security And Privacy

- This maintenance release is focused on dependency security updates.
- The browser continues its local-first privacy posture with no new public-facing telemetry or analytics behavior.

### Release

- The `1.2.10` Windows installer package name is `BubblesTheDev Web Browser_Installer_1.2.10.exe`.

### Notes

- Version `1.2.10` is a dependency security maintenance release with no new headline browser features.

## 1.2.8

### Updated

- The package version was advanced to `1.2.8`.
- Release-facing documentation was updated to reflect version `1.2.8`.
- The managed update install handoff now returns to the regular installer flow instead of the newer silent-wrapper path.

### Fixed

- Automatic update installs now fall back to the older installer-driven behavior that was working more reliably in practice.

### Security And Privacy

- This maintenance release keeps the browser's local-first privacy posture with no new public-facing telemetry or analytics behavior.

### Release

- The `1.2.8` Windows installer package name is `BubblesTheDev Web Browser_Installer_1.2.8.exe`.

### Notes

- Version `1.2.8` is a maintenance release focused on restoring the earlier installer-based update behavior.

## 1.2.7

### Updated

- The package version was advanced to `1.2.7`.
- Release-facing documentation was updated to reflect version `1.2.7`.
- Project dependencies were refreshed for the current packaged build.

### Security And Privacy

- This maintenance release is focused on dependency security updates and keeping the packaged browser build current.
- The browser continues its local-first privacy posture with no new public-facing telemetry or analytics behavior.

### Release

- The `1.2.7` Windows installer package name is `BubblesTheDev Web Browser_Installer_1.2.7.exe`.

### Notes

- Version `1.2.7` is a dependency security maintenance release with no new headline browser features.

## 1.2.5

### Updated

- The package version was advanced to `1.2.5`.
- Release-facing documentation was updated to reflect version `1.2.5`.
- Managed update installs now save the user's preferred install behavior for future updates: `Install updates automatically when possible` or `Ask before installing updates`.
- Managed updates now support both automatic and prompt-based post-download install paths while keeping that saved choice local to the device for future updates.
- The browser now surfaces a clearer end-of-update message that the new version is ready to open.
- Managed update behavior now pauses background updater activity while `OBS` or `Streamlabs` is active, reducing the risk of updater traffic competing with active streaming sessions.
- The browser now surfaces a visible update-status indicator when managed updates are paused because `OBS` or `Streamlabs` is active.

### Fixed

- `OBS` or `Streamlabs` close detection now clears the update-pause state faster so the browser does not appear stuck in a paused-update state for an extended period after streaming software closes.

### Security And Privacy

- This maintenance release continues the browser's local-first privacy posture with no new public-facing data collection behavior.

### Release

- The `1.2.5` Windows installer package name is `BubblesTheDev Web Browser_Installer_1.2.5.exe`.

### Notes

- Version `1.2.5` keeps the current browser feature set while refining update behavior, saved install preferences, and streaming-aware updater safety.

## 1.2.4

### Updated

- The package version was advanced to `1.2.4`.
- Release-facing documentation was updated to reflect version `1.2.4`.
- Managed update behavior now saves the user's preferred install behavior for future updates: `Install updates automatically when possible` or `Ask before installing updates`.
- Managed update installs now support both automatic and prompt-based post-download install paths while keeping that choice local to the device for future updates.
- Managed update behavior now defers background update activity while `OBS` or `Streamlabs` is active, reducing the risk of updater traffic competing with active gaming or streaming sessions.
- The browser now surfaces a visible update-status indicator when managed updates are paused because `OBS` or `Streamlabs` is active.

### Fixed

- `OBS` or `Streamlabs` close detection now clears the update-pause state faster so the browser does not appear stuck in a paused-update state for an extended period after streaming software closes.
- Managed update completion messaging now ends with a clearer end-user notification that the new browser version is ready to open.

### Security And Privacy

- This maintenance release continues the browser's local-first privacy posture with no new public-facing data collection behavior.

### Release

- The `1.2.4` Windows installer package name is `BubblesTheDev Web Browser_Installer_1.2.4.exe`.

### Notes

- Version `1.2.4` keeps the current browser feature set while refining update behavior around active streaming and gaming workflows.

## 1.2.3

### Updated

- The package version was advanced to `1.2.3`.
- Locked dependencies were refreshed for the current packaged build.
- Release-facing documentation was updated to reflect version `1.2.3`.
- Managed update installs were refined so installed builds can show download and install progress, hand off to a silent installer run, and notify the user when the new version is ready to open.
- Current-user trusted-root certificate handling was refined so installs can skip the repeated certificate prompt when the same bundled certificate is already trusted, while still prompting Windows confirmation for a newly bundled replacement certificate.

### Fixed

- Managed update installs now run an extra local save and session-flush pass before the browser closes for installation so normal user data is better preserved during updates.
- The `AI & Diagnostics` panel now preserves its local draft, preview, summary, and scroll state when the panel is closed and reopened.
- Managed update installs now keep the bundled license visible during installation and close that license window when install completion is confirmed.

### Security And Privacy

- This maintenance release continues the browser's local-first privacy posture with no new public-facing data collection behavior.

### Release

- The `1.2.3` Windows installer package name is `BubblesTheDev Web Browser_Installer_1.2.3.exe`.

### Notes

- Version `1.2.3` is a dependency-update maintenance release with no new headline browser features, while also refining the installed update experience.

## 1.2.1

### Updated

- The release-facing documentation was refreshed to reflect version `1.2.1`.
- Connected-account profile cards were improved so linked identities can surface the account display name and avatar more clearly.
- The profile sign-in flow was cleaned up so account linking behaves more predictably for end users.
- Profile-management actions such as edit, backup, and delete guidance were refined so the current profile experience is clearer for end users.
- The newer profile and auth surfaces remain routed through the browser localization pipeline and current supported locale coverage.

### Security And Privacy

- The browser keeps the local-first profile protections introduced in recent releases.
- Public documentation for this release continues to avoid sensitive operational details and personal information.

### Release

- The `1.2.1` Windows installer package name is `BubblesTheDev Web Browser_Installer_1.2.1.exe`.

### Notes

- Version `1.2.1` refines the profile-system release with smoother connected-account behavior and clearer end-user profile identity handling.

## 1.2.0

### Added

- Added a broader browser profile system with isolated profile storage, profile switching, and per-profile session restoration.
- Added Guest Mode with non-persistent cleanup behavior on close.
- Added optional profile PIN protection, clearer lock or unlock handling, and profile edit or delete flows.
- Added encrypted profile secrets, encrypted profile session snapshots, restore points, and safer profile backup or restore behavior.
- Added a profile security surface with visibility into sessions, permissions, recovery, and import-related profile actions.
- Added broader profile recovery, profile repair, and session-restore behavior aimed at safer restarts after failures.

### Updated

- The release-facing documentation was refreshed to reflect version `1.2.0`.
- Profile and auth browser UI strings were routed through the browser localization pipeline instead of relying on hardcoded English-only text.
- The browser-side import and recovery surfaces were expanded for the newer profile model.
- The new profile and auth UI strings were synced across the supported locale set, with broader direct translation coverage added for major language families.

### Security And Privacy

- Browser profiles now keep more browser state isolated by default instead of relying only on the earlier shared-session model.
- Guest Mode remains non-persistent and profile secrets remain encrypted in browser-controlled storage.
- The profile identity flow was refined to keep local profile handling clearer and more isolated.
- Public documentation for this release continues to avoid sensitive operational details and personal information.

### Performance

- Profile session restoration and browser-state recovery were tightened so switching and relaunching profiles does less repeated setup work.
- The newer profile-management and localization surfaces were tuned so the expanded multilingual profile UI adds less live runtime churn.

### Documentation

- Refreshed `README`, release, architecture, privacy, security, changelog, rights, performance, and update documentation for the `1.2.0` profile-system release.

### Release

- The `1.2.0` Windows installer package name is `BubblesTheDev Web Browser_Installer_1.2.0.exe`.

### Notes

- Version `1.2.0` turns the newer local-first browser profile system into the headline browser-management feature while keeping the existing multilingual, accessibility, diagnostics, streaming isolation, local AI, and Windows protection work in place.

## 1.1.33

### Updated

- The release-facing documentation was refreshed to reflect version `1.1.33`.
- Installer-side update-note handling was refined for a clearer Windows install experience.
- Active visible streaming tabs are no longer throttled as aggressively during OBS/Streamlabs-oriented performance optimization, reducing the risk of stream-source stutter while the browser is unfocused.

## 1.1.32

### Added

- Added a stronger main-process localization architecture with a centralized locale registry, locale metadata model, and locale inheritance-aware fallback handling.
- Added stronger built-in language coverage checks to help keep translations more complete and consistent.
- Added locale-aware formatter utilities for dates, times, numbers, currencies, plural rules, relative time, and list formatting.
- Improved startup reliability so the browser can recover more cleanly from unusual launch environments.
- Added more internal performance testing to improve startup and language-switch responsiveness.
- Added large multilingual expansion waves that brought the browser to `679` supported locale packs and `453` base language families.

### Updated

- The release-facing documentation was refreshed to reflect version `1.1.32` and the current multilingual architecture.
- The current user-facing docs were updated to better explain the installer-based update path.
- Localization handling was improved for language, script, region, and right-to-left display differences.
- Language tools and formatting support were expanded without changing the browser's local-first design.
- The localization startup path now defers heavier registry diagnostics so the first browser window can open sooner.
- Language switching now feels faster and smoother during live use.

### Security And Privacy

- Language packs remain local-only and now include stronger safety checks and more reliable fallback behavior.
- Localization diagnostics remain on-device and do not upload locale choices, language usage, or accessibility-related multilingual state.

### Performance

- Localization performance was tuned so broader language coverage adds less startup and runtime overhead.
- Service-level localization profiling now shows fast startup, low first-switch cost, and negligible memory growth under repeated locale changes.
- Additional internal testing was added to verify startup speed and language-switch performance.

## 1.1.16

### Updated

- The package version was advanced to `1.1.16`.
- Release-facing documentation was refreshed to reflect the current version number and protected installer package name.
- The `AI & Diagnostics` panel behavior was refined so section changes and setting interactions behave more smoothly.

### Security And Privacy

- The release packaging flow was refined for a more reliable installer preparation process.
- The earlier local AI, privacy-safe diagnostics, pinned binary verification, and hardened update checks remain in place.

### Release

- The `1.1.16` Windows installer package name is `BubblesTheDev Web Browser_Installer_1.1.16.exe`.

### Notes

- Version `1.1.16` is a follow-up refinement release built on the broader accessibility, installer, startup, and media-tool work introduced in `1.1.15`.

## 1.1.15

### Added

- Added a broader `Accessibility` panel experience with clearer user guidance and more reading-focused options in one place.
- Added `Reader mode`, `Read aloud`, `Selection Tools`, and `Reading ruler` improvements for easier reading support.
- Added `Focus mode` and `Simplified browser UI` support aimed at reducing clutter and making controls easier to use.
- Added persistent local accessibility preferences that reapply automatically at startup.
- Added installer-side registration improvements so new installs can attempt managed update registration during setup.

### Updated

- The package version was advanced to `1.1.15`.
- Release-facing documentation was refreshed to reflect the current version number and feature set.
- The Accessibility panel wording was softened and clarified to be more user-friendly and less technical.
- Desktop and Start Menu shortcut icon handling was refined for more consistent Windows behavior.
- Bundled media tools were updated to the current verified build.

### Performance

- Startup work was reorganized so the main window can open sooner while slower initialization continues in the background.
- The Music window now opens faster by returning an immediate loading state while the music library scan continues in the background.
- Browser-side state refresh behavior was tightened to reduce unnecessary Accessibility panel churn and repeated re-renders.

### Security And Privacy

- Accessibility page helpers now avoid running reading and selection tools on unsupported or internal page types.
- Installer registration and update handling were refined for more reliable setup behavior.
- Bundled media tools continue to use verified binaries before they run.

### Release

- The `1.1.15` Windows installer package name is `BubblesTheDev Web Browser_Installer_1.1.15.exe`.

### Notes

- Version `1.1.15` builds on the earlier `1.1.x` local AI and diagnostics work while shifting the main user-facing improvements toward accessibility, installer reliability, startup speed, and media-tool maintenance.

## 1.1.10

### Updated

- The package version was advanced to `1.1.10`.
- Release-facing documentation was refreshed to reflect the current version number.
- The `AI & Diagnostics` panel continues to include the newer `Refresh Status` action for live runtime checks while browsing.

### Performance

- The lighter background performance polling and reduced Task Manager refresh pressure remain in place for the current release.

### Release

- The `1.1.10` Windows installer package name is `BubblesTheDev Web Browser_Installer_1.1.10.exe`.

### Notes

- Version `1.1.10` carries forward the local AI, privacy-safe diagnostics, installer UX, and runtime optimization work introduced in the recent `1.1.x` releases.

## 1.1.7

### Updated

- The package version was advanced to `1.1.7`.
- Release-facing documentation was refreshed to reflect the current version number.
- The `AI & Diagnostics` panel continues to include the newer `Refresh Status` action for live runtime checks while browsing.

### Performance

- The lighter background performance polling and reduced Task Manager refresh pressure remain in place for the current release.

### Release

- The `1.1.7` Windows installer package name is `BubblesTheDev Web Browser_Installer_1.1.7.exe`.

### Notes

- Version `1.1.7` carries forward the local AI, privacy-safe diagnostics, installer UX, and runtime optimization work introduced in the recent `1.1.x` releases.

## 1.1.5

### Added

- Added an `AI & Diagnostics` panel to the browser UI.
- Added a `Refresh Status` button under the `AI & Diagnostics` panel title so users can request a fresh runtime status snapshot while browsing.
- Added encrypted profile-isolated local AI memory for standard profiles.
- Added non-persistent AI memory handling for incognito sessions.
- Added offline local summarization and isolated local AI runtime analysis.
- Added current-session AI health monitoring.
- Added automatic current-session AI health recovery reset behavior after severe low-health conditions.
- Added privacy-safe diagnostics preview, manual send, test send, and optional severe-event reporting controls.

### Performance

- Reduced background performance polling overhead so routine browser monitoring does less work during normal use.
- Lowered Task Manager refresh pressure by using a slower refresh cadence and skipping unnecessary hidden-window updates.
- Smoothed frequent browser-state updates so runtime status panels do less unnecessary churn during active browsing.

### Security And Privacy

- Improved local AI safety and reliability safeguards.
- Improved local AI memory protection and recovery behavior.
- Strengthened privacy-safe diagnostics protections.
- Kept public documentation focused on user-facing behavior.

### Installer

- Updated the NSIS finish flow so post-install work is shown in a visible branded progress window.
- Improved the finish window messaging so users can see what step is happening during the completion process.
- Hid the blank PowerShell console from the visible post-install flow.
- Extended the completion state so the result remains visible briefly before the window closes automatically.

### Documentation

- Refreshed `README`, release, architecture, privacy, security, changelog, and comparison documentation for version `1.1.5`.
- Updated public privacy and comparison documentation to describe the new local AI and privacy-safe diagnostics behavior without exposing sensitive infrastructure details.

### Release

- The `1.1.5` Windows installer package name is `BubblesTheDev Web Browser_Installer_1.1.5.exe`.

### Notes

- Version `1.1.5` expands the browser's local-first privacy model with on-device AI features while keeping diagnostics user-controlled and privacy-safe by default.

## 1.0.65

### Updated

- The package version was advanced to 1.0.65.
- Locked dependency versions were refreshed for the current packaged build.
- Release, README, privacy, security, comparison, changelog, architecture, and project update documentation were refreshed for 1.0.65.

### Release

- The 1.0.65 Windows installer package name is BubblesTheDev Web Browser_Installer_1.0.65.exe.
- The installer `ED32325BF17EE6F63B45329275515019654A1AD92235014647125F22B9DBE3FF` after final installer build.

### Notes

- Version 1.0.65 is a security-focused maintenance release with no new headline browser features.

## 1.0.61

### Updated

- The package version was advanced to `1.0.61`.
- Release, README, privacy, comparison, changelog, and architecture documentation were refreshed for `1.0.61`.
- The browser's normal UI state pipeline was adjusted so everyday browser-state updates no longer rebuild full performance summaries every time.

### Performance

- Routine browser updates now do less background performance work unless the user opens or refreshes the Performance panel.
- App metrics and performance summaries now use short-lived caching so repeated tab, title, or audio-state updates do less background work.
- The Performance panel now keeps detailed results more smoothly during normal browsing updates.

### Release

- The `1.0.61` Windows installer package name is `BubblesTheDev Web Browser_Installer_1.0.61.exe`.

### Notes

- Version `1.0.61` keeps the Streaming Hub, isolated streaming sessions, Windows-native download protection, AMC+ support, diagnostics tooling, and the hardened Music Downloader from `1.0.60`.

## 1.0.60

### Updated

- The package version was advanced to `1.0.60`.
- Architecture, privacy, security, README, release, and comparison documentation were refreshed for `1.0.60`.
- The browser now includes a dedicated Streaming Hub for isolated in-browser access to supported streaming services.
- The `1.0.60` documentation set now consistently describes the current Streaming Hub behavior, Windows-native download protection path, and local-first privacy model.

### Streaming Hub

- Added a new Streaming Hub entry in the browser UI for Disney+, Hulu, Max, Netflix, Paramount+, Prime Video, Apple TV+, AMC+, Peacock, Crunchyroll, YouTube TV, Sling TV, Pluto TV, The Roku Channel, Plex, Discovery+, ESPN+, MGM+, STARZ, and Tubi.
- Each supported streaming service now uses its own dedicated isolated session instead of the shared default browser session.
- Streaming tabs can now be reopened from the hub and their isolated service session can be cleared directly from the browser UI.

### Security

- Streaming views now use stronger built-in isolation and safer embedded-browser protections.
- Streaming navigation is now more tightly limited to trusted service destinations.
- Streaming sign-in popups now use dedicated hardened windows with one-popup-per-service enforcement and popup cooldown protection to reduce abuse.
- Streaming sessions now use tighter download, permission, and session protections.
- Streaming controls now use stricter browser-side safety rules.
- `Bubbles Safe Browsing` was simplified from the earlier custom-list model into a Windows-native download protection stack.
- Download protection now detects Windows-registered antivirus products through Windows Security Center and surfaces that status in Runtime Checks.
- Download save and open flows now work more closely with Windows security checks before sensitive file actions continue.
- Downloaded files now receive Mark of the Web tagging alongside the existing Windows Defender, Authenticode, and heuristic protection chain.

### Notes

- Version `1.0.60` keeps the existing gaming and streaming performance manager, Music Downloader hardening, diagnostics tooling, and passkey compatibility.
- Version `1.0.60` shifts the streaming story from performance-only tuning toward a privacy-first embedded streaming architecture with stronger session isolation and navigation controls.

## 1.0.52

### Updated

- The package version was advanced to `1.0.52`.
- Architecture, privacy, security, README, release, and release-note documentation were refreshed for `1.0.52`.
- The Music Downloader URL validation was refined to better handle normal single-video YouTube watch-page links.

### Music Downloader

- Certain YouTube watch URLs that include auto-added radio parameters such as `list=RD<videoId>&start_radio=1` are now normalized back to the canonical single-video watch URL.
- This keeps support focused on approved single-video audio downloads rather than enabling playlist or bulk-download behavior.
- Playlist-only, channel, Shorts, livestream, malformed, and bulk-style URLs remain blocked.

### Performance

- The fresher performance-panel refresh behavior and stronger OBS fallback detection path from `1.0.50` remain in place.
- Performance mode continues using improved OBS detection and more forgiving borderless-game detection from `1.0.49`.

### Release

- The `1.0.52` Windows installer package name is `BubblesTheDev Web Browser_Installer_1.0.52.exe`.

### Notes

- Version `1.0.52` keeps the earlier installer and release-flow polish added in `1.0.48`.
- Version `1.0.52` builds on the gaming and streaming optimization work introduced in `1.0.45` and the downloader hardening introduced in `1.0.37`.

## 1.0.50

### Updated

- The package version was advanced to `1.0.50`.
- Release, README, and release-note documentation were refreshed for `1.0.50`.
- The performance-mode status flow was adjusted so the UI requests a fresh detector sample instead of only showing cached state.

### Performance

- Opening the Performance panel or using `Refresh Status` now forces a new detection pass.
- OBS detection was improved so streaming activity is recognized more reliably.
- Performance mode should now surface OBS activity more reliably in the UI while keeping the earlier `1.0.49` detection improvements in place.

### Release

- The `1.0.50` Windows installer package name is `BubblesTheDev Web Browser_Installer_1.0.50.exe`.

### Notes

- Version `1.0.50` keeps the earlier installer and release-flow polish added in `1.0.48`.
- Version `1.0.50` builds directly on the detection reliability work added in `1.0.49`.

## 1.0.49

### Updated

- The package version was advanced to `1.0.49`.
- Release, README, architecture, privacy-comparison, security, and release-note documentation were refreshed for `1.0.49`.
- The gaming and streaming detection layer was adjusted to better match real OBS and Fortnite-style gameplay sessions.

### Performance

- OBS detection was broadened to catch more real-world process-name variants.
- Process discovery was made more reliable so active streaming sessions are less likely to be missed.
- Borderless-window detection was made more forgiving for games that do not present as strict fullscreen windows.
- Performance mode should now activate more consistently during active OBS and borderless gaming sessions.

### Release

- The `1.0.49` Windows installer package name is `BubblesTheDev Web Browser_Installer_1.0.49.exe`.

### Notes

- Version `1.0.49` keeps the earlier installer and release-flow polish added in `1.0.48`.
- Version `1.0.49` continues the gaming and streaming optimization work introduced in `1.0.45` and refined in `1.0.46` through `1.0.48`.

## 1.0.48

### Updated

- The package version was advanced to `1.0.48`.
- Architecture, privacy, comparison, README, release, and release-note documentation were refreshed for `1.0.48`.
- The installer flow was refined to feel more like a normal mainstream-browser install experience.

### Installer And Updates

- The installer and browser now work together for a more Chrome-like update feel.
- Fresh installs now have a smoother post-install follow-up experience after the installer finishes.
- The installer and browser release flow remain aligned for installed builds.
- The installer continues to require the license page and separate legal acknowledgement before setup continues.

### Notes

- Version `1.0.48` keeps the lighter adaptive gaming and streaming detector behavior introduced in `1.0.47`.
- Version `1.0.48` also keeps the stronger OBS-aware throttling and borderless-window gaming support added across `1.0.45` and `1.0.46`.

### Release

- The `1.0.48` Windows installer package name is `BubblesTheDev Web Browser_Installer_1.0.48.exe`.

## 1.0.47

### Updated

- The package version was advanced to `1.0.47`.
- Architecture, privacy, comparison, and changelog documentation were refreshed for `1.0.47`.
- The gaming and streaming performance detector was tuned to sample less aggressively during active sessions.

### Performance

- Detection now runs less often overall to reduce overhead during gameplay.
- Heavy polling is reduced once a gaming or streaming session is already detected.
- Expensive GPU counter sampling no longer runs every cycle.
- The browser now shifts into a lighter "do less checking" mode while gaming is active to reduce hitching and frame-drop risk.

### Release

- The `1.0.47` Windows installer package name is `BubblesTheDev Web Browser_Installer_1.0.47.exe`.

### Notes

- Version `1.0.47` continues refining the adaptive gaming and streaming optimization work introduced in `1.0.45` and extended in `1.0.46`.

## 1.0.46

### Updated

- The package version was advanced to `1.0.46`.
- Release, README, privacy, architecture, and changelog documentation were refreshed for `1.0.46`.
- The current `1.0.46` release documentation reflects the latest gaming and streaming optimization additions, including stronger OBS-aware throttling, stream-stability controls, and borderless-window gaming detection.

### Release

- The `1.0.46` Windows installer package name is `BubblesTheDev Web Browser_Installer_1.0.46.exe`.

### Notes

- Version `1.0.46` continues the adaptive gaming and streaming optimization work introduced in `1.0.45`.

## 1.0.45

### Added

- A Windows-focused gaming and streaming performance manager was added to detect OBS Studio, Streamlabs Desktop, fullscreen-like and borderless-window foreground apps, and sustained CPU or GPU pressure through local system checks only.
- A new Performance panel and status indicator were added so users can see when optimization mode is active and adjust gaming or streaming behavior from the browser UI.
- New user-facing settings were added for gaming optimization mode, streaming optimization mode, aggressive tab sleeping, lower GPU usage mode, stream-stability prioritization, reduced background activity, auto-detection for OBS and Streamlabs, and performance notifications.

### Performance

- Hidden-tab frame rates, tab sleeping thresholds, and background activity are now adjusted dynamically during gaming or streaming sessions.
- Renderer-process priority behavior is now reduced more safely for inactive tabs during heavier sessions to help lower browser interference.
- Browser memory safeguards now integrate with the performance manager so tab suspension and background work can react more aggressively under streaming or gameplay pressure.
- The browser now backs off more aggressively during active OBS or Streamlabs sessions, including lower background browser FPS caps intended to reduce frame drops while gaming.

### Security

- The performance optimization layer stays local-only and uses Windows-safe process and foreground-window monitoring rather than hooking games, injecting into processes, or interfering with anti-cheat systems.
- Performance controls remain browser-managed rather than page-managed.

### Release

- The package version was advanced to `1.0.45`.
- Release, README, privacy, architecture, and security documentation were updated to match the `1.0.45` feature set.
- The `1.0.45` Windows installer package name is `BubblesTheDev Web Browser_Installer_1.0.45.exe`.

### Notes

- Version `1.0.45` builds on the hardened Music Downloader from `1.0.37` while adding a new adaptive performance layer for gamers and streamers.
- Existing browser capabilities remain in place, including bookmark bar support, split-view browsing, ad and tracker blocking, trusted-source-aware downloads, diagnostics tools, passkey compatibility, VPN tools, and the local-only Music Player.

## 1.0.37

### Added

- A hardened Music Downloader was added for approved YouTube single-video audio downloads only.
- Bundled media download and conversion support was added with verified tool integrity checks.
- A dedicated queue manager was added with a maximum of 3 concurrent downloads, duplicate blocking, abuse controls, and persisted cooldown state.
- Responsible-use consent gating, approved-folder selection, and isolated temp-directory processing were added to the Music Downloader flow.

### Security

- The Music Downloader now uses a more restricted and safer browser-controlled execution path.
- The Music Downloader was restricted to approved YouTube single-video audio flows and continues blocking playlists, channels, livestreams, Shorts, malformed links, and bulk-style use.
- Media validation and cleanup were added to make downloads more consistent and safer.

### Privacy

- Music Downloader processing remains local-first with no telemetry, no analytics, and no cloud-side media processing.
- Downloader state such as consent, approved folder, queue metadata, and cooldown timing is stored locally and restored across restarts.

### Release

- The package version was advanced to `1.0.37`.
- Release documentation and installer-facing version references were refreshed for `1.0.37`.

### Notes

- The Music Downloader is intentionally controlled and restricted rather than acting like a bulk downloader, scraper, or unrestricted ffmpeg front end.

## 1.0.32

### Updated

- The package version was advanced to `1.0.32`.
- Release documentation and installer-facing version references were refreshed for `1.0.32`.
- Project dependencies were refreshed to the current locked versions used by this build.
- The packaged dependency tree was updated for the `1.0.32` release.
- No major user-facing workflow changes were introduced in this maintenance release.

### Security

- Version `1.0.32` ships as a dependency security update focused on package freshness and lower-risk maintenance.
- A local `npm audit` pass reported `0` known vulnerabilities in the current dependency tree for version `1.0.32`.
- Supporting libraries for networking, sanitization, cookie handling, parsing, and secure storage remain updated in the packaged app.

### Release

- The `1.0.32` Windows installer package name is `BubblesTheDev Web Browser_Installer_1.0.32.exe`.

### Notes

- Existing browser features remain in place, including bookmark bar support, split-view browsing, ad blocking, download protection, saved passwords, passkey compatibility, VPN tools, diagnostics, and the local-only Music Player.
- The browser continues to follow a local-first privacy approach with no built-in telemetry or analytics services configured.

## 1.0.65

### Updated

- The package version was advanced to `1.0.65`.
- The browser runtime was updated to the current supported Electron base.
- Release documentation and installer-facing version references were refreshed for `1.0.65`.
- The installer no longer presents a manual-update-only setup choice. Automatic updates are now the standard setup behavior for installed builds.
- Manual `Check for Updates` remains available from the app menu for user-initiated version and status checks.

### Performance

- Browser UI update churn was reduced by coalescing autocomplete, task-manager refresh, tab-strip rerender, and split-view drag work more aggressively.
- Browser-state synchronization was refined to reduce unnecessary high-frequency updates during normal browsing.
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
- `ARCHITECTURE.md` and `Browser-Privacy-Comparison.md` were updated to reflect the current browser behavior.

### Security

- Managed updates now use stricter validation before an installer can be launched.
- Imported extensions now load without local file access, reject symlinked folders, require Manifest V2 or V3 structure, and warn the user before importing extensions with broad or higher-risk permissions.
- Password save and reveal behavior is now limited to safer secure contexts.
- Built-in browser page security rules were tightened.
- Several browser UI paths were cleaned up for safer and more reliable behavior.

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
- VPN manager support for NordVPN, ExpressVPN, ProtonVPN, and WireGuard with Proton profile import support
- Browser-session public IP testing with separate IPv4 and IPv6 checks in the VPN panel
- Installer update-mode choice with `Automatic updates` and `Manual updates only`
- Clearer installer-time update preference handling during setup
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
- Installer builds can now record whether the user selected `Automatic updates` or `Manual updates only` and keep that local preference available after setup.
- Release handling was tightened so administrative actions stay more restricted.
- Users can now manually run `Check for Updates` from the app menu and see installed-versus-available version feedback.
- Custom install locations now better support external HDDs, external SSDs, and USB flash drives.
- Uninstall now cleans up tracked custom install paths more reliably, lets users choose which local data categories to remove, and suppresses false leftover warnings when cleanup finishes successfully.
- `Automatic updates` is now the default installer selection, while `Manual updates only` remains available as an opt-out choice.

# 1.0.15 

## Highlights

- Encrypted saved-password vault with on-demand reveal, manual add and remove controls, and strong-password generation
- Bookmark import from Edge, Chrome, Brave, Opera, or a user-chosen bookmark file with explicit consent gating for path scans and manual file access
- Chromium extension import support for Edge, Chrome, Brave, and Opera profile folders plus manual folder import
- VPN manager support for NordVPN, ExpressVPN, ProtonVPN, and WireGuard with Proton profile import support
- Browser-session public IP testing with separate IPv4 and IPv6 checks in the VPN panel
- Installer update-mode choice with `Automatic updates` and `Manual updates only`
- Clearer installer-time update preference handling during setup
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
- Installer builds can now record whether the user selected `Automatic updates` or `Manual updates only` and keep that local preference available after setup.
- Release handling was tightened so administrative actions stay more restricted.
- Users can now manually run `Check for Updates` from the app menu and see installed-versus-available version feedback.
- Custom install locations now better support external HDDs, external SSDs, and USB flash drives.
- Uninstall now cleans up tracked custom install paths more reliably, lets users choose which local data categories to remove, and suppresses false leftover warnings when cleanup finishes successfully.
- `Automatic updates` is now the default installer selection, while `Manual updates only` remains available as an opt-out choice.

## 1.0.13

### Added

- A manual `Check for Updates` menu entry was added so users can trigger update checks on demand and see clearer version/status feedback.
- Custom install locations now explicitly support external HDDs, external SSDs, and USB flash drives during setup.
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

- Installer-time update preference handling was added for installs that choose `Automatic updates`.

### Updated

- The package version was advanced to `1.0.6`.
- Current release documentation and installer-facing version references were updated to `1.0.6`.
- Release handling now separates end-user update access from administrative actions.

## 0.9.23

### Added

- Encrypted saved-password storage was added with manual add, reveal, remove, and strong-password generation flows.
- Bookmark import was expanded to supported Chromium browser paths plus manual bookmark-file import.
- Separate consent gating was added for browser bookmark-path scanning and manual bookmark-file access.
- Chromium extension import support was added for Edge, Chrome, Brave, and Opera profile folders.
- VPN tooling was added for installed-client detection, Proton profile import, and browser-session IP checks.
- Installer update-mode selection was added for `Automatic updates` and `Manual updates only`, along with a clearer installer-based release path for end users.

### Updated

- Release, README, privacy, and architecture documentation were refreshed for version `0.9.23`.
- Update documentation was revised to describe the installer-based release flow in simpler public terms.
- Browser persistence behavior was updated so uninstall no longer deletes app data by default.
- Startup logging was reduced so blocked tracker noise and low-level Chromium network spam do not flood the terminal.

### Fixed

- Bookmark import consent rules now apply correctly to both browser-path scanning and manual bookmark-file browsing.
- VPN `.conf` scanning was tightened so there is no automatic common-folder scan path.

## 0.6.3

### Added

- Bookmark bar support was added to the main browser shell with persistent saved-page chips, one-click navigation, and inline removal.
- Chrome-style tab context actions were added for new tab, duplicate tab, close tab, and split-view replacement.
- Split-view browsing was added so two tabs can be displayed side-by-side with a draggable divider.
- Site permission controls were added from the address bar shell for camera, microphone, notifications, location, popups, clipboard, automatic downloads, and fullscreen.
- The Bubbles home page now keeps provider results on-page while switching between Bubbles, Google-backed, and DuckDuckGo-backed result sources.

### Updated

- Download protection now uses multiple Windows-aware safety checks with fallback protection behavior.
- Ad-block diagnostics now show loaded-rule status and per-page blocked counters in addition to the existing Bubbles home verification page.
- Full-screen handling now uses a clean `F11` toggle path plus an in-shell exit control.
- Local browser state and exported diagnostics now use compressed local storage, with OS-backed protection when available.
- A runtime checks panel was added to the browser shell so users can inspect security, download protection, ad blocking, executable path, and performance state in-app.

### Fixed

- Full-screen exit reliability was improved so the window can still be closed or exited cleanly while full-screen is active.

### Performance

- Hidden tabs now use background throttling so inactive pages use less CPU and memory during normal browsing.
- Background tabs can now be put to sleep automatically under memory pressure, and the Task Manager can manually sleep or wake eligible tabs.

## Version Range Summary

- Start version: `0.0.24`
- Intermediate milestones found in repository history: `0.0.35`, `0.0.50`
- End version: `0.1.5`

## 0.0.24 -> 0.0.35

### Added

- Exportable diagnostics and local crash logging were introduced.
- A documented crash-report workflow was added through `Tools > Export Diagnostics Report` with a private support contact path.
- `Data-Collection-and-Privacy-Notice.md` was added to formalize the browser's no-telemetry and no-analytics position.

### Updated

- The installer package advanced from `0.0.24` to `0.0.35` with updated package naming and install instructions.
- The project README was rewritten to better reflect the browser's real feature set and design.
- System requirements were tightened toward Windows 11 x64 packaging.
- Security documentation was expanded to better explain the browser's privacy and safety protections.

### Changed

- Feature wording was cleaned up for task manager behavior, shortcuts, and packaging details.
- Manual update guidance was clarified for installer-based upgrades.

### Notes

- An `info` status file was introduced as a simple project update marker.

## 0.0.35 -> 0.0.50

### Added

- Download protection for risky file types was added, including optional Windows Defender scan integration after downloads complete.
- A clear recent downloads action was added to the Downloads window.
- `ARCHITECTURE.md` was added to document the browser's overall design, local storage, diagnostics, and security model.
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
- The architecture documentation was rewritten to better match the browser's real structure and feature set.
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
