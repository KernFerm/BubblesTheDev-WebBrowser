# Data Collection and Privacy Notice

This notice explains the current privacy posture of BubblesTheDev Web Browser version `1.2.7`.

BubblesTheDev Web Browser is designed to keep ordinary browser data local to the user's device unless the user chooses to browse websites, use search providers, download files, export diagnostics, or enable optional privacy-safe reporting features where supported.

The application does not include built-in telemetry, analytics SDKs, cloud sync, or a fully silent hidden always-on auto-update client as part of ordinary browser use.

Where the browser bundle includes a trusted-root certificate for browser-controlled protections, the installer can check whether that same certificate is already present in the current user's trusted-root store before asking Windows to install it again.

## What The Browser Does Not Collect By Default

The browser is not designed to automatically send the following as part of built-in telemetry or analytics:

* browsing history
* bookmarks
* saved passwords
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
* saved password metadata and encrypted password storage
* per-site permission settings
* toolbar and bookmark bar preferences
* shell theme choice
* accessibility preferences
* language preferences and locale settings
* profile recovery data and session restoration data
* optional Music Player and Music Downloader settings
* supported streaming-session data
* cached search results and suggestions used by the browser's internal search experience
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

## Network Activity

This browser is not offline-only.

Outbound network traffic can still occur when the user:

* opens websites or web apps
* signs into websites
* uses built-in or external search features
* downloads files
* uses passkey or WebAuthn sign-in flows on supported sites
* signs into supported streaming services
* checks for or downloads updates where that feature is available

This network activity is part of normal browser use and should not be confused with built-in telemetry.

## Certificates And Trust Prompts

If the current browser build includes the same trusted-root certificate that is already installed in the current user's trusted-root store, the installer can skip the repeated certificate-install prompt.

If a future browser build includes a different replacement certificate, Windows may still ask the user to confirm installation of that new certificate into the current user's trusted-root store.

## Update Data Preservation

Installed update flows are intended to preserve ordinary browser data during normal version replacement.

Current update behavior includes an extra local save pass before a managed update install closes the browser, including normal browser-state persistence, password persistence, profile restore-point capture, and browser-session storage flush attempts.

## Streaming, Music, And AI Features

Some browser features involve additional local-only or opt-in handling:

* supported streaming services use browser-managed isolated sessions
* the Music Player is local-only and requires explicit user action before scanning a folder
* the Music Downloader is intentionally restricted and local-first
* local AI features are designed to run on-device where supported
* the `AI & Diagnostics` panel can preserve local draft, preview, summary, and scroll state when the panel is closed and reopened
* AI memory is intended to remain isolated per profile where supported
* incognito AI memory is intended to remain non-persistent where supported

## Uninstall And Data Retention

The uninstaller removes the installed application files.

It may also allow the user to remove selected categories of local data, such as:

* browser profile data
* saved passwords
* diagnostics reports

If a category is not selected for removal, that data may remain on the device for a future reinstall or later use.

## Privacy Summary

BubblesTheDev Web Browser is designed around a local-first privacy model.

In practical terms, that means:

* ordinary browser data stays on-device by default
* built-in telemetry and analytics are not part of normal browser use
* diagnostics stay local unless the user explicitly chooses otherwise
* guest browsing is intended to remain non-persistent
* supported AI and accessibility features are designed to remain local where supported
* websites, search providers, streaming services, and download sources still receive normal traffic when the user chooses to use them

If future browser features materially change this privacy posture, the public privacy documentation should be updated accordingly.
