# SECURITY.md

## Security Policy

The **BubblesTheDev Web Browser** project takes security seriously. This document explains how security issues should be reported, how reports are handled, and what users should expect from the project's public security policy.

---
## Supported Versions

Security fixes are generally provided for the most recent stable release of the browser.

| Version | Supported |
| ------- | --------- |
| **1.3.105** | Yes |
| Older versions | No |

Users should run the latest available version of the browser to receive the newest security fixes and improvements.

---

## Reporting a Vulnerability

If you discover a security vulnerability, report it privately through the project's current private security reporting path.

**Do not open a public GitHub issue for security reports.**

Please include:

* a clear description of the issue
* steps to reproduce the problem
* the affected browser version
* operating system details
* redacted supporting details or proof of concept if available

Please do not include sensitive personal, account, payment, or identity information in a report. Redact private data before sending supporting details.

The more detail included in the report, the faster the issue can usually be validated and addressed.

---

## Response Process

When a report is received, the general process is:

1. Acknowledge the report
2. Investigate and validate the issue
3. Prepare a fix if needed
4. Release a security update when appropriate
5. Share public disclosure details after a fix is available

Response times can vary depending on severity, complexity, and reproducibility, but confirmed issues are handled as responsibly and as quickly as possible.

---

## Private Handling Workflow

Security reports are handled privately rather than through public issue discussion.

That workflow is intended to:

* reduce unnecessary exposure while a fix is being prepared
* keep reproduction details limited to the people working the issue
* avoid publishing exploit details before affected users have a chance to update
* move to public disclosure only after remediation work is available or the risk has been otherwise addressed

---

## Responsible Disclosure

Security researchers are asked to:

* allow reasonable time for investigation and remediation
* avoid public disclosure before a fix is available
* provide enough technical detail to help reproduce the issue

Responsible disclosure helps protect users while fixes are being prepared.

---

## Scope

This policy applies to:

* the browser application
* installer packages
* official project repositories

Third-party components such as **Electron**, **Chromium**, and **Node.js** follow their own security policies and release cycles.

---

## Dependency Security

The project depends on upstream open-source software, including:

* Electron
* Chromium
* Node.js

Security fixes in these dependencies may require updating the browser to newer upstream versions. Keeping dependencies current is an important part of maintaining the browser's security posture.

---

## Security Approach

The browser is developed with a reduced-surface approach that emphasizes:

* minimal unnecessary background services
* local-first browser data handling
* diagnostic redaction for sensitive-looking bearer tokens, authorization and cookie lines, sensitive URL parameters, sensitive key-value pairs, local paths, and error stack text
* Chromium sandboxing and process isolation where applicable
* strict separation between web content and privileged browser operations
* tighter controls around downloads, diagnostics, profile handling, and other higher-risk browser features
* local ad and tracker blocking rules that avoid remote URL-scanning services
* a local Privacy Protection Engine for ad blocking, tracker blocking, tracking URL parameter cleanup, and tracker classification
* OAuth-safe cleanup that protects sign-in parameters before removing known tracking parameters
* browser-maintained local compatibility rules for sign-in, CAPTCHA, payment, streaming, and release-download flows
* local validation of downloaded privacy lists before activation
* URLHaus-style host-file parsing for compatible malicious-domain protection lists
* security and cryptomining privacy rules that are not bypassed by ordinary per-site ad or tracker relaxations
* bounded cosmetic selector validation before local CSS injection
* profile-local custom privacy rules and site exceptions that are not exposed to normal websites
* profile-local per-site privacy controls for ads, trackers, tracking-parameter cleanup, cookie protection, and cosmetic hiding
* profile-local privacy source choices for optional lists
* profile-local privacy counters for standard profiles, with temporary-only counters for Guest and Incognito windows
* temporary Guest and Incognito per-site privacy controls for broken-page recovery without permanent profile writes
* profile-local cookie protection modes with targeted authentication compatibility for sign-in and OAuth flows
* WebRTC local IP protection modes that use Chromium's IP handling policy instead of fully disabling WebRTC
* WebGL renderer/vendor masking and debug renderer extension protection
* DNT/GPC request headers and JavaScript fingerprinting reductions for media-device labels, screen color depth, OfflineAudioContext, strict-mode timezone reporting, and sensor-style APIs
* local reporting for compatibility protections that preserve common site workflows without creating a remote browsing log
* non-blocking local CNAME tracker alias detection and known tracking-cookie stripping
* local-only privacy reports with aggregate counters, installed-list status, known tracking company summaries, current-tab protection details, and a Privacy Request Inspector that avoids displaying full query strings
* local-only Privacy Summary export with protection settings, aggregate counters, list health, and host-only saved site exceptions
* targeted clearing for saved site exceptions and per-site privacy controls without deleting unrelated browser data
* local link-safety inspection that analyzes URLs on-device without fetching third-party previews
* local website app records and shortcuts validated from normal HTTP and HTTPS page origins
* Developer Workspace as a browser-owned launcher with allowlisted built-in app definitions, user-selected custom executables, shell execution disabled, protected browser paths blocked, and no website access to app detection or launch IPC
* local PDF tooling kept behind browser-controlled file dialogs instead of exposing unrestricted file-system access to web content
* packaged local PDF editing libraries that save edited bytes locally and verify redaction outcomes without uploading document content
* browser-level permission-use indicators sourced from the existing permission request flow
* browser-owned anonymous feedback submission with a trusted IPC sender check, no contact fields, local sensitive-data scanning, and no local feedback history
* local File Converter operations behind trusted OS file pickers, bounded file sizes, bounded active jobs, bounded DOCX/ODT archive text extraction, safe output naming, output-folder containment checks, safe text/markup conversion adapters, and no online conversion upload
* optional Clipboard History that defaults off, explains that copied text is saved only after the local tool is enabled, stores bounded text locally, excludes sensitive-looking values where detectable, and is not exposed to websites
* Universal Media Controls and Per-Tab Volume Mixer exposed through trusted browser UI only, without ordinary website access to other tabs, and guarded by per-action request limits
* Download Scheduler records stored locally in the active standard profile, limited to known local status values, blocked from localhost/private-network background targets, updated from trusted browser download events, and started through the existing browser download security path
* File Converter, Media Controls, Clipboard History, Per-Tab Volume Mixer, and Download Scheduler IPC surfaces use trusted sender checks plus per-tool request limits to reduce renderer abuse and accidental loops
* local Subscription Tracker records kept in encrypted profile storage, blocked in Guest and Incognito windows, and exposed only through trusted browser IPC
* optional local Ollama AI Chat restricted to the local loopback service, with AI Internet Search off by default and separate from local-only chat
* optional Ollama installer setup limited to an approved official HTTPS source with DNS/private-network checks, PE validation, Authenticode verification, signer verification, and safe progress events
* AI web retrieval limited to approved public HTTPS search, DNS-verified public destinations, private-link blocking, response-size and content-type limits, and untrusted-source handling
* local Canvas fingerprint protection modes that change canvas readouts without remote telemetry
* local JavaScript fingerprinting reductions for high-entropy browser APIs with Strict as the default mode
* visible, user-controlled, browser-controlled installer update behavior with progress visibility and regular installer handoff rather than a hidden always-on updater model
* direct provider sign-in by default unless a separate brokered flow is explicitly enabled by the browser operator

Public security documentation is intentionally kept high-level. Detailed implementation behavior may change between releases and is documented separately where appropriate.

---

## Dependency And Runtime Verification

Version `1.3.005` keeps the dependency audit clean with targeted dependency updates and existing overrides for vulnerable transitive packages. The current project audit reports zero known npm vulnerabilities.

The browser also keeps runtime trust-manifest checks for sensitive runtime files, including the main browser runtime and preload surfaces.

The Disable Hardware Acceleration preference is a local performance setting. It is applied during startup before browser windows open and does not send GPU, OBS, game, capture, or browsing information to a remote service. The browser shows a user-visible restart prompt and Restart Browser button when the saved setting is waiting for a restart.

## Developer Workspace Security

Developer Workspace is a secure launcher, not a browser integration bridge.

External developer applications launch outside the browser trust boundary. They are not browser plugins, browser extensions, trusted browser modules, embedded Chromium views, or Electron child UI components.

Developer Workspace does not intentionally provide launched apps with browser cookies, passwords, passkeys, account access data, browsing history, open tabs, current page contents, profile folders, settings files, diagnostics files, AI Chat data, local AI memory, browser IPC, WebContents handles, DevTools control, or internal browser APIs.

Websites loaded in the browser cannot use Developer Workspace to detect installed developer applications, read custom app paths, add apps, launch apps, open local files, open folders, or execute commands.

No command runner, generic shell execution endpoint, remote debugging endpoint, local HTTP control server, WebSocket control channel, named-pipe control channel, process injection, DLL injection, native window reparenting, or app-to-browser command channel was added for Developer Workspace.

Missing-app Install buttons open official download pages in normal browser tabs. They do not download installers, run installers, run winget, run PowerShell scripts, or modify external developer tools automatically.

Introduced for version `1.3.001`, Virtual Machine Center is part of Developer Workspace. It provides VMware Workstation Pro guidance, approved Linux ISO links, local VMware detection, and local ISO SHA-256 calculation. It does not install VMware, run VMware installers, create virtual machines, automate VMware, execute Linux commands, read guest files, read VM memory, disable Windows security, create firewall rules, or expose a VMware or guest-command bridge.

Virtual Machine Center accepts ISO files only through a trusted browser-owned file picker, validates the `.iso` extension, blocks protected browser-controlled paths, and returns only file metadata plus a local SHA-256 hash. It does not return ISO contents.

The `Ctrl+Shift+F` Send Feedback shortcut opens the same trusted browser-owned feedback panel as the Help menu. It does not expose feedback IPC to websites, VMware, Linux guests, or external applications.

## Subscription Tracker Security

Subscription Tracker is a local profile tool, not a financial account aggregator.

It does not connect to banks, credit cards, payment services, cancellation services, cloud AI analysis, or a remote BubblesTheDev subscription database. Manual records are stored in encrypted profile data separate from the OAuth secret bundle used for profile identity.

Normal Google profile sign-in does not request Gmail mailbox scopes. Gmail discovery uses a separate explicit Gmail read-only consent flow inside Subscription Tracker before any mailbox scan can run. Gmail scan results are minimized, classified locally, and placed in a review queue before they become confirmed subscription records.

The Local Subscription Service Catalog is bundled public reference data for service recognition only. It contains public provider names, official domains, and generic provider URLs. It does not contain user subscription records, Gmail content, account IDs, prices, notes, OAuth tokens, cookies, or browser history. Catalog recognition is separate from active-status logic and is never treated as proof that a subscription is active.

Websites cannot use Subscription Tracker IPC to read, write, export, delete, or open subscription records. Guest, Incognito, locked-profile, and untrusted-renderer access is blocked before tracker storage is read.

## Local AI Security

Local AI Chat does not give Ollama direct browser control. Browser-controlled IPC validates prompts, model choices, internet-search approval, and renderer trust before any local model request is sent. The AI service blocks obvious sensitive prompts, unsafe command/exploitation requests, and unsafe model output before it is displayed.

Optional AI Internet Search uses sanitized public web excerpts as untrusted source text. The browser blocks local, private-network, link-local, metadata, non-HTTPS, redirecting, and private-access destinations, and rejects DNS results that resolve to private or local addresses.

Optional Ollama setup is separate from core browser installation. The browser refuses HTTP, unapproved hosts, private-network redirects, malformed downloads, unsigned files, invalid signatures, unexpected signers, and files that change between verification and execution. Failure messages are intentionally generic, and the browser allows the user to continue without AI when optional Ollama setup fails.

## Feedback Safety

The optional feedback panel is for non-sensitive product feedback. It is anonymous from the browser UI perspective and does not request a name, email address, reply-to value, or account handle.

Feedback submission is restricted to trusted browser UI through preload IPC. The browser sends a minimal payload, disables redirects, handles generic success or failure messages inside the panel, and does not render raw service responses as HTML.

Category-specific feedback placeholders are local UI guidance only. They are not submitted unless the user types that content into the message field.

Before sending, the browser scans only the typed message for obvious sensitive personal material. Lower-confidence personal information patterns are shown as warnings. The browser does not attach browser activity, profile data, local files, diagnostics, crash reports, linked identity state, or AI memory.

Local cooldown and honeypot controls are present as abuse-reduction layers. Provider-side spam controls should remain enabled for server-side spam protection.

---

## Contact

For general support, contact support.bubblesthedev.webbrowser@gmail.com.

For security matters, use the project's current private security reporting path rather than public channels. If a security report must start by email, use a clear security-related subject line and do not include unredacted private data in the first message.

Community channels should not be used for security reports or for sharing logs that may contain private information.
