# EU Digital Rights Notice

This document explains how BubblesTheDev Web Browser is designed to support privacy, user control, transparency, accessibility, and data-protection expectations for users in the European Union and European Economic Area.

This document is informational only and does not replace legal advice.

Public support contact: support.bubblesthedev.webbrowser@gmail.com.

## Current Documentation Target

This document is aligned with the current public BubblesTheDev Web Browser documentation for version `1.3.105`.

Security fixes are generally provided for the most recent stable release of the browser. Older versions are not supported for current security fixes.

## Project Scope

BubblesTheDev Web Browser is a desktop web browser project.

It is not a social media platform, marketplace, app store, advertising network, cloud storage provider, or public content-hosting service.

The browser is designed around:

* local-first browser data handling
* privacy-focused defaults
* user-controlled diagnostics behavior
* isolated browser profile support
* accessibility-focused improvements
* browser-controlled installer-based update behavior
* local ad and tracker blocking without remote URL-scanning telemetry
* profile-local privacy counters and temporary Guest/Incognito privacy controls
* local Canvas and JavaScript fingerprinting protection with Strict as the default mode
* local Developer Workspace controls for supported developer apps and developer websites
* local Virtual Machine Center guidance for VMware Workstation Pro and Linux ISO setup
* local utility tools such as File Converter, Universal Media Controls, Clipboard History, Per-Tab Volume Mixer, and Download Scheduler
* browser-owned feedback controls, including the `Ctrl+Shift+F` Send Feedback shortcut

## EU Digital Rights Principles

The browser is designed to support user-first principles such as:

* privacy
* transparency
* user control
* accessibility
* local-first data handling
* clear permission behavior
* clear update behavior
* clear diagnostics behavior

The browser is also designed to avoid built-in telemetry, built-in analytics for ordinary browsing, built-in behavioral advertising profiles, and cloud synchronization by default.

## GDPR-Related User Rights

Users in the European Union and European Economic Area may have rights under data-protection law when personal data is processed.

Depending on the situation, those rights may include:

* the right to be informed
* the right of access
* the right to rectification
* the right to erasure
* the right to restriction of processing
* the right to data portability
* the right to object
* rights related to automated decision-making and profiling

The browser is designed to reduce the amount of personal data processed by the browser project itself by keeping ordinary browser data local by default.

## Fingerprinting Protection

Version `1.3.105` defaults to Strict Canvas and JavaScript fingerprinting protection. These protections reduce high-entropy browser surfaces locally and can be relaxed to Balanced or Off by the user for site compatibility.

The browser does not upload canvas images, page contents, visited URLs, browsing history, or fingerprint values to a remote fingerprinting service.

## Local-First Browser Data

Normal browser data is intended to remain on the user's device by default.

Local browser data may include:

* browser settings and preferences
* browsing history and bookmarks
* saved sign-in metadata and encrypted sign-in storage
* per-site permission settings
* browser profile preferences and recovery data
* one linked connected-account identity per profile where the user chooses to use it, including provider, email, display name, and avatar presentation
* supported streaming-session data
* optional Music Player and Music Downloader settings
* language and accessibility preferences
* local diagnostics data
* profile-local ad and tracker blocking counters
* install-linked metadata for custom or external-drive installs
* toolbar clock preferences and Developer Workspace preferences where the user uses those features
* optional Clipboard History settings and entries where the user enables that tool
* local Download Scheduler records where supported
* File Converter, Universal Media Controls, and Per-Tab Volume Mixer preferences where supported

Standard browser profiles are intended to remain isolated from one another. Guest browsing is intended to remain non-persistent. Guest and Incognito privacy counters, temporary per-site controls, and current-tab privacy reports are not written into standard profile storage.

Stored browser data is designed to remain local. Where stronger system-backed protection is available, the browser uses it.

## No Built-In Telemetry Or Analytics For Ordinary Browsing

The browser does not include built-in telemetry or analytics services for ordinary browser data collection.

It is not designed to automatically upload:

* browsing history
* bookmarks
* saved sign-in data
* website page content
* ordinary browser settings
* local AI memory contents

The browser also does not include a built-in always-on hidden auto-updater client.

## Network Activity

The browser is not offline-only.

Outbound network activity can still occur when the user:

* opens websites or web apps
* signs into websites
* uses built-in or external search features
* downloads files
* uses passkey or WebAuthn flows on supported websites
* signs into supported streaming services
* checks for or downloads updates where available
* manually exports or sends diagnostics where supported

This is part of normal browser use and should not be confused with built-in telemetry.

## Updates

The browser may include a browser-controlled installer update flow with visible progress, along with background update checks and background installer downloads. After the browser downloads a new version, the regular installer opens and the end user completes the installer prompts.

The update model is intended to remain visible and user-controlled rather than a hidden silent update service.

If the browser bundle includes the same trusted-root certificate that is already present in the current user's trusted-root store, the installer can skip repeating the certificate-install prompt. If the bundled certificate changes in a later build, Windows may still require the user to confirm trust for that replacement certificate.

Installed update flows are also intended to preserve ordinary browser data during normal version replacement by performing an extra local save and session-flush pass before the browser closes for installation.

## Diagnostics And Runtime Checks

Diagnostics are generated locally.

Current public behavior includes:

* local runtime diagnostics
* manual encrypted diagnostics export
* optional privacy-safe reporting controls where supported
* no ordinary automatic diagnostics upload by default

Diagnostics are intended to remain on-device unless the user explicitly exports them or enables a supported privacy-safe reporting feature.

## Ad And Tracker Blocking

The built-in ad and tracker blocker is designed to run locally.

Current public behavior includes local rules for known ad hosts, tracker hosts, tracking beacon paths, error-monitoring collectors, YouTube ad or tracking endpoints, and obvious ad-slot cosmetic hiding.

Blocked-request counters are local browser status indicators. The blocker is not designed to send visited URLs or page contents to a remote filter service.

## Local AI Privacy

Optional local AI features, if included, are intended to support on-device behavior where available.

AI Chat, where included, is an optional local Ollama chat surface. It can run in its own panel or pop-out window and is designed to use approved local Ollama models on the user's own computer through the local loopback service only.

Current public expectations include:

* local AI processing where supported
* optional AI Chat through local Ollama where supported
* no cloud AI account required for local AI Chat
* no automatic upload of AI Chat content, browser activity, profile data, diagnostics exports, local files, or AI memory to a cloud AI service as part of local AI Chat
* profile-isolated AI memory where supported
* non-persistent AI memory for incognito or other ephemeral contexts where supported
* no cloud-sync expectation for AI memory
* local `AI & Diagnostics` and AI Chat panel state can remain available when those panels are closed and reopened within the browser

## Developer Workspace Privacy

Developer Workspace is a local browser tool for opening supported developer applications and developer websites from trusted browser UI.

The browser is not designed to upload installed-app detection results, custom app paths, favorites, selected file or folder paths, or Developer Workspace usage as telemetry. Websites cannot use Developer Workspace to detect installed local apps, read local app paths, launch local programs, or open files and folders.

Developer Workspace install buttons open official app websites for the user to review. They do not silently download installers, run package managers, or install developer tools in the background.

## Accessibility And Inclusive Use

The browser includes accessibility-focused features intended to improve usability for more people.

Current public documentation includes support for features such as:

* reading-focused tools
* simplified browsing options
* reduced-motion and high-contrast support
* persistent local accessibility preferences

## Automated Decision-Making And Profiling

The browser is not designed to make legal, employment, housing, credit, health, insurance, government-benefit, or similarly significant automated decisions about users.

It is not designed to create behavioral advertising profiles.

If a current-session AI health or runtime-status feature is present, it should be treated as a browser runtime indicator rather than a permanent user score or decision system.

## Site Permissions And Profile Controls

The browser may support:

* per-site permission settings
* profile creation and switching
* optional profile locking
* backup, restore, and recovery actions where supported

Users should review site permissions carefully when a website requests sensitive access.

If a user chooses to link a supported provider account such as GitHub, Discord, or Google to a browser profile, the user can generally revoke that provider access later from the provider's own account settings or authorized-applications page.

## Important Limitations

No browser can make every website private.

Websites, internet service providers, operating systems, extensions, VPN providers, search engines, streaming services, authenticators, payment services, and other third parties may still process information depending on how the user chooses to use the web.

## Document Review

This document should be reviewed when major browser features materially change the browser's privacy, diagnostics, account, cloud, or platform behavior.

## Public Contact Notes

Public support contact: support.bubblesthedev.webbrowser@gmail.com.

Users should not send sensitive personal, account, payment, or identity information in support messages.

