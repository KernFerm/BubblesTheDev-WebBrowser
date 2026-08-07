# SECURITY.md

## Security Policy

The **BubblesTheDev Web Browser** project takes security seriously. This document explains how security issues should be reported, how reports are handled, and what users should expect from the project's public security policy.

---

## Supported Versions

Security fixes are generally provided for the most recent stable release of the browser.

| Version | Supported |
| ------- | --------- |
| **1.2.410** | Yes |
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
* Chromium sandboxing and process isolation where applicable
* strict separation between web content and privileged browser operations
* tighter controls around downloads, diagnostics, profile handling, and other higher-risk browser features
* local ad and tracker blocking rules that avoid remote URL-scanning services
* local link-safety inspection that analyzes URLs on-device without fetching third-party previews
* local website app records and shortcuts validated from normal HTTP and HTTPS page origins
* local PDF tooling kept behind browser-controlled file dialogs instead of exposing unrestricted file-system access to web content
* packaged local PDF editing libraries that save edited bytes locally and verify redaction outcomes without uploading document content
* browser-level permission-use indicators sourced from the existing permission request flow
* browser-owned anonymous feedback submission with a trusted IPC sender check, no contact fields, local sensitive-data scanning, and no local feedback history
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

Version `1.2.410` keeps the dependency audit clean with targeted dependency overrides for vulnerable transitive build-tool packages. The current project audit reports zero known npm vulnerabilities.

The browser also keeps runtime trust-manifest checks for sensitive runtime files, including the main browser runtime and preload surfaces.

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

---
