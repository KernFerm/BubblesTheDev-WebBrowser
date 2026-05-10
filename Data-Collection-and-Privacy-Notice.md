BubblesTheDev Web Browser 1.0.48

Version 1.0.48 is a feature and optimization release focused on making the browser feel lighter during gaming, smoother while streaming, more polished during install and updates, and more controlled for local media tools. This release keeps the gaming and streaming optimization work introduced in version 1.0.45, the refinements added in versions 1.0.46 and 1.0.47, and the hardened Music Downloader added in version 1.0.37.

What was added or changed for users:

* Kept intelligent gaming and streaming performance optimization for Windows 11 x64.
* Kept safe local detection for OBS Studio, Streamlabs Desktop, fullscreen applications, borderless-window gaming sessions, and sustained high CPU or GPU load.
* Kept automatic performance mode behavior that reduces unnecessary browser activity during gameplay or streaming sessions.
* Kept adaptive background throttling, reduced hidden-tab rendering pressure, safer renderer priority adjustments, and lighter active-session detector sampling.
* Kept a lightweight Performance panel with live optimization status, memory visibility, CPU and GPU summaries, and user controls.
* Kept configurable performance settings for gaming optimization mode, streaming optimization mode, aggressive tab sleeping, lower GPU usage mode, stream-stability prioritization, reduced background activity, automatic OBS and Streamlabs detection, and performance notifications.
* Added a more Chrome-like managed update feel with a one-time first-launch follow-up update check after install.
* Kept the hardened Music Downloader introduced in version 1.0.37 for approved YouTube single-video audio downloads only.
* Kept main-process queue controls, cooldown timers, duplicate blocking, abuse protection, and local consent gating for the Music Downloader.
* Kept bundled SHA-256 verification for `yt-dlp`, `ffmpeg`, and `ffprobe` before local execution.
* Kept isolated temp processing, restricted mp3-only conversion, ffprobe validation, and approved output-folder handling for downloaded audio.

Security, privacy, and stability highlights:

* Gaming and streaming optimization logic stays local to the device and does not use telemetry, cloud profiling, or invasive monitoring.
* The browser does not hook games, inject into protected processes, modify game memory, or interfere with anti-cheat systems.
* The Music Downloader remains intentionally limited and controlled rather than acting like a bulk downloader or unrestricted media toolkit.
* Renderer isolation, strict IPC boundaries, and local-first processing remain part of the browser design.
* Diagnostics remain local unless the user explicitly exports them.

Features included in this build:

* Multi-tab browsing
* Bookmark bar
* Split-view browsing
* Ad and tracker blocking
* Download protection
* Saved passwords
* Passkey sign-in support for compatible websites
* VPN tools
* Diagnostics and runtime checks
* Local-only Music Player
* Hardened Music Downloader
* Performance dashboard and status indicator
* Automatic gaming and streaming optimization
* External-drive install support

Quick summary of the 1.0.37 through 1.0.48 improvements:

* Version 1.0.37 added the hardened Music Downloader with local-only processing, strict URL validation, queueing, cooldowns, abuse controls, and bundled binary verification.
* Version 1.0.45 introduced intelligent gaming and streaming optimization to reduce browser impact while OBS Studio, Streamlabs Desktop, fullscreen games, or heavy system load are active.
* Version 1.0.46 continued that work with stronger stream-stability behavior, more aggressive browser back-off during active OBS sessions, and borderless-window gaming detection.
* Version 1.0.47 reduced active-session detector overhead with lighter polling and less frequent GPU counter sampling during gameplay.
* Version 1.0.48 adds a more polished installer-to-browser managed update experience with a one-time first-launch follow-up check.

Installer package:

* File name: `BubblesTheDev Web Browser_Installer_1.0.48.exe`
* SHA-256: `971275F89EEF68AAA6A7D35CEC65A054F541A8741B4779591AE548086B987FD6`

Privacy and safety notes:

* No built-in telemetry or analytics services are configured.
* Performance optimization uses local Windows-safe process and foreground-window monitoring only.
* The Music Downloader enforces responsible-use consent and supports approved YouTube single-video audio downloads only.
* Browser data handling remains local-first.
