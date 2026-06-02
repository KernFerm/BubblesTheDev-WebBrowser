# Global User Rights Notice

This document explains the privacy, security, transparency, and user-control principles behind BubblesTheDev Web Browser for users worldwide.

This document is informational only and does not replace legal advice.

Official website and support contact details are published through the project's public release channels rather than embedded in this document.

## Current Documentation Target

This document is aligned with the current public BubblesTheDev Web Browser documentation for version `1.2.7`.

Security fixes are generally provided for the most recent stable release of the browser. Older versions are not supported for current security fixes.

## Project Scope

BubblesTheDev Web Browser is a desktop web browser project.

It is designed for users who want clearer control, privacy-focused defaults, local-first browser data handling, and visible documentation around browser behavior.

The browser is not a social media platform, marketplace, app store, cloud storage provider, advertising network, government identity service, or public content-hosting service.

## Core User Rights Supported By The Browser

The browser is designed around user-first principles such as:

* the right to privacy
* the right to transparency
* the right to control local browser data
* the right to understand update behavior
* the right to manage site permissions
* the right to use the browser without built-in behavioral analytics
* the right to use the browser without built-in advertising profiles
* the right to local-first features where possible
* the right to understand diagnostics behavior
* the right to understand local AI behavior
* the right to accessibility-focused improvements

## Local-First Design

The browser is designed so ordinary browser data stays on the user's device by default.

Local browser data may include:

* browser settings and preferences
* browsing history and bookmarks
* saved-password metadata and encrypted password storage
* per-site permission settings
* profile preferences and recovery data
* one linked connected-account identity per profile where the user chooses to use it, including provider, email, display name, and avatar presentation
* supported streaming-session data
* optional Music Player and Music Downloader settings
* language and accessibility preferences
* local diagnostics data
* install-linked metadata for custom or external-drive installs

Standard profiles are intended to remain isolated from one another. Guest browsing is intended to remain non-persistent.

## Storage Protection

Browser-state data is designed to remain local.

Where stronger system-backed protection is available, the browser uses it. Saved-password values are intended to be encrypted before being written to disk.

## No Built-In Telemetry Or Analytics For Ordinary Browsing

The browser does not include built-in telemetry or analytics services for ordinary browser data collection.

It is not designed to automatically upload:

* browsing history
* bookmarks
* saved passwords
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

The browser may include a browser-controlled installer update flow with visible progress, saved install preference support, and automatic or ask-before-installing behavior, along with background update checks and background installer downloads.

The update model is intended to remain visible and user-controlled rather than a hidden silent update service.

If the browser bundle includes the same trusted-root certificate that is already present in the current user's trusted-root store, the installer can skip repeating the certificate-install prompt. If a later build includes a different bundled replacement certificate, Windows may still require the user to confirm trust for that new certificate.

Installed update flows are also intended to preserve ordinary browser data during normal version replacement by performing an extra local save and session-flush pass before the browser closes for installation.

## Diagnostics And Runtime Checks

Diagnostics are generated locally.

Current public behavior includes:

* local runtime diagnostics
* manual encrypted diagnostics export
* optional privacy-safe reporting controls where supported
* no ordinary automatic diagnostics upload by default

Diagnostics are intended to remain on-device unless the user explicitly exports them or enables a supported privacy-safe reporting feature.

## Local AI Privacy

Optional local AI features, if included, are intended to support on-device behavior where available.

Current public expectations include:

* local AI processing where supported
* profile-isolated AI memory where supported
* non-persistent AI memory for incognito or other ephemeral contexts where supported
* no cloud-sync expectation for AI memory
* local `AI & Diagnostics` panel state can remain available when that panel is closed and reopened within the browser

If a current-session AI health or runtime-status feature is present, it should be treated as a browser runtime indicator rather than a permanent user score.

## Accessibility And Inclusive Use

The browser includes accessibility-focused features intended to make browsing easier to use for more people.

Current public documentation includes support for features such as:

* reading-focused tools
* simplified browsing options
* reduced-motion and high-contrast support
* persistent local accessibility preferences

## User Control

Users should remain in control of their browser experience.

That may include control over:

* browser settings
* browsing history and bookmarks
* site permissions
* downloads
* saved passwords
* supported streaming sessions
* profile creation, switching, and recovery actions where supported
* diagnostics export and supported privacy-safe diagnostics controls
* update checks where available
* uninstall data-removal choices

If a user chooses to link a supported provider account such as GitHub, Discord, or Google to a browser profile, the user can generally revoke that provider access later from the provider's own account settings or authorized-applications page.

## Important Limitations

No browser can control every part of the internet.

Websites, internet service providers, operating systems, extensions, VPN providers, search engines, streaming services, authenticators, payment services, and other third parties may still process information depending on how the user chooses to use the web.

## Document Review

This document should be reviewed when major browser features materially change the browser's privacy, diagnostics, account, cloud, or platform behavior.

## Public Contact Notes

Public website and support contact details should be maintained in the project's current public release channels.
