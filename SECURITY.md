# SECURITY.md

## Security Policy

The **BubblesTheDev Web Browser** project takes security seriously. This document explains how security issues should be reported, how reports are handled, and what users should expect from the project's public security policy.

---

## Supported Versions

Security fixes are generally provided for the most recent stable release of the browser.

| Version | Supported |
| ------- | --------- |
| **1.2.100** | Yes |
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
* screenshots, logs, or proof of concept if available

Please do not include sensitive personal information in a report. Do not send passwords, session tokens, recovery codes, payment information, government identifiers, or full personal documents. If screenshots or logs are necessary, redact private data before sending them.

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
* visible, user-controlled, browser-controlled installer update behavior with progress visibility and regular installer handoff rather than a hidden always-on updater model
* direct provider sign-in by default unless a separate brokered flow is explicitly enabled by the browser operator

Public security documentation is intentionally kept high-level. Detailed implementation behavior may change between releases and is documented separately where appropriate.

---

## Contact

For security matters, use the project's current private security reporting path rather than public channels.

Community channels should not be used for security reports or for sharing logs that may contain private information.

---
