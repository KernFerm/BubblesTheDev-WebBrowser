# Data Collection and Privacy Notice

This notice explains the current privacy posture of BubblesTheDev Web Browser version `1.3.001`.

BubblesTheDev Web Browser is designed to keep ordinary browser data local to the user's device unless the user chooses to browse websites, use search providers, download files, export diagnostics, or enable optional privacy-safe reporting features where supported.

The application does not include built-in telemetry, analytics SDKs, cloud sync, or a fully silent hidden always-on auto-update client as part of ordinary browser use.

Where the browser bundle includes a trusted-root certificate for browser-controlled protections, the installer can check whether that same certificate is already present in the current user's trusted-root store before asking Windows to install it again.

## What The Browser Does Not Collect By Default

The browser is not designed to automatically send the following as part of built-in telemetry or analytics:

* browsing history
* bookmarks
* saved sign-in data
* ordinary browser settings
* local AI memory contents
* accessibility preferences
* diagnostics data, unless the user explicitly exports it or enables a supported privacy-safe reporting feature

## Local Browser Data

Browser data is stored on the user's device.

Current local browser data may include:

* homepage and browser settings
* browser profile metadata and preferences
* connected-account identity metadata that the user chooses to link to a profile, such as provider, email, display name, and avatar presentation
* browsing history and bookmarks
* saved sign-in metadata and encrypted sign-in storage
* per-site permission settings
* toolbar and bookmark bar preferences
* shell theme choice and optional custom theme image path
* accessibility preferences
* language preferences and locale settings
* profile recovery data and session restoration data
* optional Music Player and Music Downloader settings
* supported streaming-session data
* cached search results and suggestions used by the browser's internal search experience
* local ad and tracker blocking counters
* local tab layout, tab group, workspace, and duplicate-tab preferences
* toolbar clock preferences for local or UTC time and 12-hour or 24-hour display
* local per-site privacy report counters for observed blocker and permission events
* local website app records and shortcut paths created by the user
* local sidebar preferences
* local PDF document records, annotation metadata, and edited PDF output paths selected by the user
* local Picture-in-Picture state, link-safety preferences, and permission-use indicators
* Developer Workspace preferences, favorites, and user-added custom developer app paths where the user chooses to add them
* optional AI Chat settings, selected local model, local chat transcript state, and local Ollama availability state where supported
* install-linked metadata for custom or external-drive installs

Guest browsing is intended to remain non-persistent. Standard profiles are intended to remain isolated from one another.
The current profile system supports up to `10` local browser profiles per installation. Each profile can carry one linked connected-account identity for profile presentation purposes.

Stored browser data is designed to remain local. Where stronger system-backed protection is available, the browser uses it. If that protection is unavailable, the data is still intended to remain on-device.

## Connected Accounts

Connected-account identity linking is optional.

Current browser-connected identity support may include providers such as GitHub, Discord, and Google where that feature is enabled in the browser build.

If a user chooses to link one of those accounts to a browser profile, the user can generally revoke that access later from the provider's own account settings or authorized-application page:

* GitHub account settings
* Discord authorized apps settings
* Google account security or connected-app settings

Revoking provider access from the user's own account remains under the user's control and does not require the browser to keep a cloud sync relationship.

## Diagnostics

Diagnostics are generated locally.

Current behavior includes:

* local runtime diagnostics
* manual encrypted diagnostics export
* optional privacy-safe reporting controls where supported
* no ordinary automatic diagnostics upload by default

Diagnostic data is intended to remain on-device unless the user explicitly exports it or explicitly enables a supported privacy-safe reporting feature.

## AI Chat

The browser may include an optional AI Chat panel and AI Chat pop-out window for local Ollama chat. AI Chat is designed to use approved local Ollama models on the user's own computer through the local loopback service only.

AI Chat does not require a cloud AI account. The browser does not automatically upload AI Chat content, browser activity, profile data, diagnostics exports, local files, or AI memory to a cloud AI service as part of local AI Chat.

If the user asks the browser to open Ollama, the browser may start a hidden browser-managed local Ollama server process and stop that managed process when the browser quits. Users should not type sensitive personal, account, or browser information into AI Chat.

## Anonymous Feedback

The browser includes an optional anonymous feedback panel. It asks for a category and a plain-text message only. It does not ask for a name, email address, account handle, or contact field.

For support requests that need a reply, users should contact support.bubblesthedev.webbrowser@gmail.com instead of using anonymous feedback.

The message box can show a category-specific example format before the user types. These examples are local placeholder text and are not sent unless the user intentionally types them into the message.

Users can optionally include basic technical details, limited to browser version, Windows major version, CPU architecture, CPU type, RAM, and GPU type. That option is off by default.

Feedback submissions are sent securely by the browser with a minimized payload. Ordinary connection information may still be processed as part of delivering the request. The browser does not attach browser activity, profile data, local files, diagnostics, crash reports, linked identity state, or AI memory to feedback submissions.

Feedback is not stored as a local feedback history. Successful submissions clear the visible form, and failed submissions keep the typed message visible so the user can decide what to do next.

## Ad And Tracker Blocking

The built-in ad and tracker blocker runs locally in the browser.

Current behavior includes:

* local request blocking for known ad networks, tracker hosts, error-monitoring collectors, tracking beacon paths, and selected YouTube ad or tracking endpoints
* local cosmetic hiding for obvious ad slots and blocked banner shells
* local per-tab and session counters for blocked ads and trackers

The blocker is not designed to upload visited URLs, browsing history, or page contents to a remote filtering service.

## Local Browser Feature Data

Newer tab organization and browser-tool features are stored with the current browser profile where persistence is supported. This includes vertical-tab layout, tab groups, workspaces, duplicate-tab detection preferences, toolbar clock preferences, local website app records, local sidebar settings, local PDF annotation metadata, Developer Workspace preferences, and local permission-use indicators.

Guest and incognito sessions are treated as temporary. They do not permanently store workspaces, local website apps, or private per-session privacy-report data.

Link-safety inspection runs locally from the URL the user provides or inspects. It does not fetch remote page metadata by default and does not use third-party preview APIs.

PDF editing and redaction verification run locally with packaged libraries. The browser does not upload PDFs to a cloud PDF service. Permanent redaction is only reported as verified when the saved PDF is reopened locally and the target text is absent from local extraction results.

Developer Workspace is local-first. It does not transmit installed developer application detection results, custom developer app paths, favorite developer tools, selected files, selected folders, project names, or Developer Workspace usage to the browser operator, analytics providers, advertisers, or other remote endpoints. Missing-app Install buttons open official websites only and do not silently download or install software.

Introduced for version `1.3.001`, Virtual Machine Center is part of Developer Workspace. It does not transmit VMware detection, host architecture, RAM, CPU count, selected ISO names, ISO hashes, Linux distribution choices, VM usage, tutorial progress, or terminal-command usage as telemetry. ISO hash calculation is local and uses only a `.iso` file selected by the user through trusted browser UI.

The `Ctrl+Shift+F` Send Feedback shortcut opens the same browser-owned feedback panel as `Help > Send Feedback`. It does not add background collection, telemetry, diagnostics attachment, or Virtual Machine Center data upload.

## Fingerprinting Protection

Version `1.3.001` defaults to Strict Canvas and JavaScript fingerprinting protection. These protections reduce local browser surfaces such as Canvas readouts, Client Hints, Battery Status, Network Information, Web Bluetooth, WebGPU, WebUSB, Web Serial, WebHID, WebXR, plugins, speech voices, Web Audio, and ad-auction APIs where possible.

Fingerprinting protection runs locally in the browser and is not designed to upload canvas images, page contents, visited URLs, browsing history, or fingerprint values to a remote service. Users can switch to Balanced or Off in Privacy & Security if a site needs more compatibility.

## Network Activity

This browser is not offline-only.

Outbound network traffic can still occur when the user:

* opens websites or web apps
* signs into websites
* uses built-in or external search features
* downloads files
* sends optional anonymous feedback through the browser-owned feedback panel
* uses passkey or WebAuthn sign-in flows on supported sites
* signs into supported streaming services
* checks for or downloads updates where that feature is available
* uses Local Send to Device on the same Wi-Fi or local network
* enables Secure DNS, which routes DNS lookups through the selected DNS-over-HTTPS provider where supported

This network activity is part of normal browser use and should not be confused with built-in telemetry.

Local Send to Device is designed for local network discovery and delivery. It does not require a Google account, browser cloud sync, or built-in telemetry service, and both devices must be connected to the same Wi-Fi or local network for it to work correctly.

## Certificates And Trust Prompts

If the current browser build includes the same trusted-root certificate that is already installed in the current user's trusted-root store, the installer can skip the repeated certificate-install prompt.

If a future browser build includes a different replacement certificate, Windows may still ask the user to confirm installation of that new certificate into the current user's trusted-root store.

## Update Data Preservation

Installed update flows are intended to preserve ordinary browser data during normal version replacement.

Current update behavior includes an extra local save pass before a managed update install closes the browser, including normal browser-state persistence, sign-in data persistence, profile restore-point capture, and browser-session storage flush attempts.

The shipped browser application is also no longer expected to carry a shared client update secret in its public configuration files just to let normal installed users check for updates.

## Streaming, Music, And AI Features

Some browser features involve additional local-only or opt-in handling:

* supported streaming services use browser-managed isolated sessions
* the Music Player is local-only and requires explicit user action before scanning a folder
* the Music Downloader is intentionally restricted and local-first
* AI Chat is optional and uses local Ollama through local loopback only where supported
* local AI features are designed to run on-device where supported
* the `AI & Diagnostics` panel and AI Chat surfaces can preserve local draft, preview, summary, transcript, selected-model, and scroll state when the panel is closed and reopened
* AI memory is intended to remain isolated per profile where supported
* incognito AI memory is intended to remain non-persistent where supported
* Local Send to Device is designed for private same-network sharing instead of cloud account sync
* Developer Workspace launches external developer apps without sharing browser cookies, passwords, browsing history, open tabs, page contents, profile folders, or AI Chat data with those apps

## Uninstall And Data Retention

The uninstaller removes the installed application files.

It may also allow the user to remove selected categories of local data, such as:

* browser profile data
* saved sign-in data
* diagnostics reports

If a category is not selected for removal, that data may remain on the device for a future reinstall or later use.

## Privacy Summary

BubblesTheDev Web Browser is designed around a local-first privacy model.

In practical terms, that means:

* ordinary browser data stays on-device by default
* built-in telemetry and analytics are not part of normal browser use
* diagnostics stay local unless the user explicitly chooses otherwise
* guest browsing is intended to remain non-persistent
* same-network device sharing is local and does not use Google account sync
* supported AI and accessibility features are designed to remain local where supported
* websites, search providers, streaming services, and download sources still receive normal traffic when the user chooses to use them

If future browser features materially change this privacy posture, the public privacy documentation should be updated accordingly.

