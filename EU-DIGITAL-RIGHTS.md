# EU Digital Rights Notice

This document explains how BubblesTheDev Web Browser is designed to respect privacy, user control, data protection, transparency, accessibility, and digital rights for users in the European Union and European Economic Area.

This document is informational only and does not replace legal advice.

Official browser website:

https://bubbles-browser.fnbubbles420.org

Support email:

bubbles-support@bubbles-browser.fnbubbles420.org

## Current Documentation Target

This document is aligned with the current public BubblesTheDev Web Browser documentation for version `1.1.32`.

Security fixes are generally provided for the most recent stable release of the browser.

Older versions are not supported for security fixes.

Users should run the latest available version of BubblesTheDev Web Browser to receive the newest security fixes, privacy improvements, and browser updates.

## Project Scope

BubblesTheDev Web Browser is a desktop web browser project.

It is not a social media platform, marketplace, app store, advertising network, cloud storage provider, public content-hosting platform, public user-generated-content service, or government identity service.

The browser is designed around local-first storage, privacy-focused defaults, user control, Chromium-based browsing, Electron security practices, safer downloads, isolated streaming sessions, accessibility-focused improvements, optional local AI features, user-controlled diagnostics, and visible installer-based update behavior.

## EU Digital Rights Principles

BubblesTheDev Web Browser is designed to support user-first digital principles, including:

Privacy

User control

Transparency

Security

Accessibility

Local-first data handling

Clear permission behavior

Clear update behavior

Clear diagnostics behavior

No built-in behavioral advertising profile system

No built-in telemetry system for ordinary browsing

No built-in analytics SDKs for ordinary browser data collection

No cloud synchronization by default

The browser’s public privacy posture is designed to support people-centered digital rights by limiting unnecessary browser-side data collection and keeping normal browser data local by default.

## GDPR Related User Rights

Users in the European Union and European Economic Area may have rights under data protection law when personal data is processed.

Depending on the situation, these rights may include:

Right to be informed

Right of access

Right to rectification

Right to erasure

Right to restriction of processing

Right to data portability

Right to object

Rights related to automated decision-making and profiling

BubblesTheDev Web Browser is designed to reduce the amount of personal data processed by the browser project itself.

Most normal browser data is intended to remain on the user’s device unless the user chooses to browse external websites, use external search providers, download files, export diagnostics manually, enable privacy-safe diagnostics, sign into websites, sign into supported streaming services, or interact with third-party services.

## Local-First Browser Data

BubblesTheDev Web Browser stores normal browser data locally on the user’s device in the browser's local app-data folder.

Local browser data may include:

Homepage settings

Browsing history

Bookmarks

Bookmark-import consent choices

Saved password metadata

Encrypted saved-password vault entries

Imported Chromium extension metadata for extensions the user chooses to load

Imported ProtonVPN WireGuard profile metadata for valid `.conf` files the user chooses to add

Toolbar visibility

Bookmark bar visibility

Selected shell theme

Per-site permission settings

Service-specific persistent Streaming Hub session partitions

Optional Music Player opt-in state

Chosen local music folder

Music Downloader consent state

Music Downloader queue state

Music Downloader cooldown timing

Music Downloader abuse-lock timing

Music Downloader recent job history

Music Downloader approved output folder

Gaming and streaming performance settings

Stream-stability preferences

Local AI settings

Current-session AI preferences

Encrypted profile-isolated AI memory for standard profiles

Cached search results and suggestions used by the internal `bubbles://home` page

Install-linked path metadata used for custom or external-drive installs

Accessibility settings such as reading, focus, motion, contrast, spacing, and related user-preference options

This browser-state data is not designed to be automatically uploaded.

## Storage Protection

The browser’s persisted browser-state data is compressed before being written to disk.

When stronger system-backed protection is available, the browser uses it.

If that protection is unavailable, the data is still stored locally in compressed form.

Saved passwords are stored separately from the main browser data file.

Each saved password value is encrypted before it is written to disk.

The password vault file is also wrapped in the browser’s encrypted persistence envelope.

## No Built-In Telemetry Or Analytics For Ordinary Browsing

BubblesTheDev Web Browser does not include built-in telemetry or analytics services for ordinary browser data collection.

The browser is not designed to upload browsing history automatically.

The browser is not designed to upload bookmarks automatically.

The browser is not designed to upload saved passwords automatically.

The browser is not designed to upload website page content automatically.

The browser is not designed to create advertising identifiers by itself.

The browser is not designed to generate or transmit built-in advertising profiles by itself.

The browser is not designed to use cloud synchronization by default.

The browser does not include automatic diagnostics upload for ordinary diagnostics behavior.

The browser does not include a built-in silent auto-updater client.

## Network Activity

BubblesTheDev Web Browser is not an offline-only application.

Outbound network activity can happen when the user:

Opens websites or web apps

Signs into websites

Signs into supported streaming services through the Streaming Hub

Loads page assets such as images, scripts, fonts, and media

Downloads files

Uses external search engines directly

Uses search from `bubbles://home`

Uses websites that request passkey or WebAuthn authentication

Uses update checking or update download behavior when available

Manually sends privacy-safe diagnostics when enabled and approved by the user

Optionally enables privacy-safe severe-event reporting

When the user searches from `bubbles://home`, the browser may contact DuckDuckGo and Google services to assemble results, related searches, and suggestions.

Third-party websites and search providers may process information under their own privacy policies, cookie policies, and terms.

## Updates

BubblesTheDev Web Browser may include update checking and installer-based update behavior.

The browser’s update model is designed around visible update behavior, secure update connections, verified installer launches, and installer-time registration support for installed builds where available.

The browser does not silently replace itself in the background as a hidden auto-updater service.

Installed builds can check for newer release metadata, download an installer, verify the installer, and launch the update flow when available.

Installed builds may also create or refresh a Desktop folder named `BubblesTheDev - WebBrowser Update Notes` so bundled release notes for the current version remain visible locally.

The update flow is designed to stop rather than continue if required security checks do not pass before launch.

Update-related technical data should be limited to update support, version support, security validation, installer reliability, and troubleshooting.

Update-related data should not include:

Browsing history

Bookmarks

Saved passwords

Private tabs

Website page content

Personal files

AI memory contents

Full diagnostics reports unless the user manually exports or sends an approved privacy-safe report

Possible update-related technical data may include:

Browser version

Platform

Architecture

Update mode

Install path

Install ID if used by the managed update flow

Last update check time

Install directory

Install drive root

Detected install drive type

IP address as seen by the update server

## Diagnostics And Runtime Checks

Diagnostics are generated locally.

The browser may write runtime diagnostic entries to a local diagnostics directory.

Users can manually export an encrypted `.bdiag` diagnostics report.

The browser’s diagnostics model is designed so diagnostics remain on-device unless the user explicitly chooses to export them or explicitly enables privacy-safe reporting features.

Privacy-safe diagnostics should be disabled by default unless the user turns them on.

Users can preview approved diagnostic data before sending where supported.

Users can manually send a privacy-safe report where supported.

Users can send a privacy-safe test report where supported.

Users can optionally allow privacy-safe severe-event reporting where supported.

Privacy-safe diagnostics are intended to remain narrower than general browser data collection.

Privacy-safe diagnostics are not meant to include:

Browsing history

Saved passwords

AI memory contents

Personal documents

Website page content

Private files

## Local AI Privacy

BubblesTheDev Web Browser may include optional local AI features.

Current local AI behavior is designed around on-device processing where supported.

Offline summarization can run locally on the device where supported.

Runtime analysis can run locally on the device where supported.

AI memory is isolated per profile where supported.

Standard profiles can keep encrypted AI memory locally where supported.

Incognito AI memory is non-persistent.

Guest or other ephemeral contexts are intended to avoid persistent AI memory.

AI memory is not designed as a cloud-sync feature.

AI memory contents are not intended to be included in privacy-safe diagnostics payloads.

The `AI & Diagnostics` panel may show current-session browser health, runtime analysis, encrypted profile-memory status, refresh controls, and privacy-safe diagnostics controls.

## Accessibility And Inclusive Use

BubblesTheDev Web Browser includes accessibility-focused features intended to make the browser easier to use for more people.

Current public documentation for version `1.1.32` includes accessibility features such as:

Reader mode

Read aloud support for supported reading flows

Selection-based reading tools

Reading ruler support

Focus mode

Simplified browser UI

Larger control targets in simplified browsing flows where supported

Reduced-motion support

High-contrast support

Persistent local accessibility preferences that automatically apply on startup

These features are intended to support clearer reading, lower visual noise, stronger visibility, easier control use, and better continuity across sessions.

## Automated Decision-Making And Profiling

BubblesTheDev Web Browser is not designed to make legal, employment, housing, credit, health, government-benefit, insurance, or similarly significant automated decisions about users.

The browser is not designed to create behavioral advertising profiles.

The browser is not designed to score users for eligibility decisions.

The local AI health model, if included, should be treated as a current-session browser runtime and stability feature.

It is not a permanent user reputation score.

It is not a legal or financial decision system.

It is not an advertising profile.

## Site Permissions

The browser may support per-site permission settings.

Site permissions may include controls related to:

Camera

Microphone

Location

Notifications

Downloads

Popups

Media behavior

Other browser-controlled permissions

The browser should avoid granting sensitive permissions without user awareness or user action.

Users should review site permissions when they visit websites that request sensitive access.

## Streaming Hub Privacy

BubblesTheDev Web Browser may include a Streaming Hub.

Supported streaming services use dedicated persistent Electron session partitions instead of the shared default browsing session where supported.

The browser is designed so each supported streaming service can maintain its own isolated session.

Supported streaming sessions may include hardened login popup behavior, one-popup-per-service limits, popup cooldown protection, service-specific navigation allowlists, unsafe-scheme blocking, blocked downloads inside streaming views, and per-service session clearing.

The browser is not designed to collect, intercept, store, or read streaming-service passwords.

The browser is not designed to export streaming-service session data.

The browser is not designed to intentionally expose streaming cookies or tokens to renderer-visible APIs.

Streaming service accounts, subscriptions, billing, content, DRM systems, login systems, recommendations, and service data are controlled by the streaming service provider.

As of version `1.1.32`, the current public documentation lists supported Streaming Hub services as:

Disney+

Hulu

Max

Netflix

Paramount+

Prime Video

Apple TV+

AMC+

Peacock

Crunchyroll

YouTube TV

Sling TV

Pluto TV

The Roku Channel

Plex

Discovery+

ESPN+

MGM+

STARZ

Tubi

## Music Player Privacy

The Music Player is local-only and off by default.

No music folder is scanned until the user explicitly agrees inside the Music Player window.

The user can choose the default Music folder or another local folder.

Playback uses local files only.

The browser is not designed to upload or share the user’s music files.

## Music Downloader Privacy And Responsible Use

The Music Downloader is local-first and intentionally restricted.

It requires explicit responsible-use consent before downloads can be queued.

It accepts only supported YouTube single-video audio flows.

It rejects playlists, channels, livestreams, Shorts, malformed URLs, and bulk-style flows.

Certain YouTube watch-page radio parameters may be normalized back to a canonical single-video URL without enabling playlist downloads.

It uses bundled local binaries for download, probing, and conversion instead of cloud processing where supported.

It stores queue, cooldown, and abuse-control state locally so those controls persist across restarts.

It processes media inside an isolated local temp directory before moving validated mp3 output into the approved download folder.

The Music Downloader should only be used where the user has the legal right to download the content.

It should not be used to bypass copyright, paid access, digital rights management, platform restrictions, or terms of service.

## Download Protection

When users download files, the browser may perform local download-related handling.

This may include:

Trusted-source checks

Windows Security Center antivirus detection

Windows Attachment Services validation

Mark of the Web tagging

Windows Defender CLI scanning when available

Authenticode signature verification for executable or script-like file types

Browser-side heuristics

Protected open-file gating

Destination selection

Local save operations

These protections are part of download safety and file-handling behavior.

They are separate from ordinary browsing telemetry.

## Passkeys And WebAuthn

When the user signs in with a passkey on a supported website, the authentication request is between the user, the operating system or authenticator, Chromium or Electron, and that website’s login flow.

The browser’s role is compatibility and secure-context support.

BubblesTheDev Web Browser does not operate a separate Bubbles-controlled passkey cloud service.

Saved-password capture and reveal flows should be limited to secure contexts such as `https:` pages and local loopback development hosts.

The browser should not intentionally offer those flows to arbitrary insecure pages.

## Extensions And VPN Profile Imports

BubblesTheDev Web Browser may support imported Chromium extensions.

Imported extensions require explicit user action and consent.

Imported extensions may be gated by path normalization, manifest validation, runtime enablement, and warnings for higher-risk permissions.

Imported extensions may be loaded without local file access where supported.

Extensions may have their own privacy and security behavior.

Users should only install extensions they trust.

The browser may detect installed VPN clients and may support importing valid ProtonVPN WireGuard `.conf` profile metadata for local reuse when the user chooses to add it.

Imported VPN profile metadata is stored locally.

## Gaming And Streaming Performance Controls

BubblesTheDev Web Browser may include local gaming and streaming performance controls.

These controls may include OBS or Streamlabs detection, borderless-game detection, local performance status sampling, tab sleeping, background throttling, memory-pressure tab suspension, media memory saver behavior, and stream-stability tuning.

These performance features are local runtime features.

They are not designed to be telemetry, cloud-managed optimization, game hooking, game injection, or anti-cheat bypass behavior.

## Uninstall And Data Retention

The uninstaller removes installed application files.

The uninstaller can also remove local data by category when the user chooses to do so.

Current public documentation describes removable local categories such as:

Browser profile data

Saved passwords

Diagnostics reports

Local update preferences where supported by the installer and uninstall flow

If a category is left unchecked during uninstall, that data may remain on the device for a future reinstall or update.

Uninstall cleanup may also target tracked custom install paths, remove stale uninstall metadata, remove tracked registry keys, and re-check reported leftover paths before showing warnings.

If the browser is installed on an external drive instead of `C:`, install-linked browser data and related install-path tracking can follow that selected external location instead of staying only on the main system drive.

## Digital Services Act Notice

The EU Digital Services Act applies to certain online services and platforms, including services such as marketplaces, social media networks, app stores, hosting services, and certain intermediary services.

BubblesTheDev Web Browser is a desktop browser.

It is not intended to operate as a social media platform, marketplace, app store, public content-hosting platform, or public user-generated-content service.

If future versions add hosted accounts, public user content, a marketplace, social posting, public file hosting, public reviews, public recommendations, or platform-style public content systems, this document should be reviewed and updated before those features are released.

## Third-Party Websites And Services

When users visit websites, sign into websites, use streaming services, use search engines, download files, use passkeys, use extensions, or interact with external services, those third parties may process data according to their own privacy policies, cookie policies, terms, and local laws.

BubblesTheDev Web Browser does not control third-party websites.

Users should review third-party privacy policies and terms before using those services.

## Security Reports

Security vulnerabilities should be reported privately.

Support email:

bubbles-support@bubbles-browser.fnbubbles420.org

Do not open a public GitHub issue for security reports.

Do not post security reports in public comments, public community channels, social media posts, or public issue threads.

Please include:

A clear description of the issue

Steps to reproduce the problem

The affected browser version

Operating system details

Screenshots, logs, or proof of concept if available

Do not send passwords, session tokens, recovery codes, payment information, government identifiers, or full personal documents.

If screenshots or logs are necessary, redact private data before sending them.

## User Requests

EU and EEA users may contact the BubblesTheDev Web Browser project for privacy, data, security, or support requests.

Website:

https://bubbles-browser.fnbubbles420.org

Support email:

bubbles-support@bubbles-browser.fnbubbles420.org

## Important Limitations

BubblesTheDev Web Browser is privacy-focused, but no browser can make every website private.

Websites, internet service providers, operating systems, extensions, VPN providers, search engines, streaming services, authenticators, payment services, and online accounts may still process information depending on how the user interacts with them.

Browser privacy protections cannot replace careful user behavior, trusted websites, strong passwords, secure devices, operating-system updates, or safe account practices.

## Document Review

This document should be reviewed when major browser features change.

Review is especially important if the browser adds:

Cloud sync

Hosted user accounts

Public user content

Marketplace features

Public review systems

Extension marketplace features

Cloud AI features

Advertising systems

Remote analytics

New diagnostics behavior

New update-server behavior

New third-party integrations

New public platform services

## Current Browser Website

https://bubbles-browser.fnbubbles420.org
