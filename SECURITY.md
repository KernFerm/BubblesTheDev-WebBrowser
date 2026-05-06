# SECURITY.md

## Security Policy

The **BubblesTheDev Web Browser** project takes security seriously. This document explains how to report security issues and how confirmed vulnerabilities are handled.

---

## Supported Versions

Security fixes are generally provided for the most recent stable release of the browser.

| Version | Supported |
| ------- | --------- |
| **1.0.30** | Yes |
| Older versions | No |

Users should run the latest available version of the browser to receive the newest security fixes and improvements.

---

## Reporting a Vulnerability

If you discover a security vulnerability, please report it privately.

**Do not open a public GitHub issue for security reports.**

Report vulnerabilities by email:

**Email:** [securitygithubissue@fnbubbles420.org](mailto:securitygithubissue@fnbubbles420.org)

Please include:

* a clear description of the issue
* steps to reproduce the problem
* the affected browser version
* operating system details
* screenshots, logs, or proof of concept if available

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

## Security Philosophy

The browser is developed with a reduced-surface approach that emphasizes:

* minimal background services
* no built-in telemetry frameworks
* local-first data storage
* reliance on Chromium sandboxing and process isolation where applicable

This approach helps limit unnecessary network activity and reduces avoidable attack surface.

---

## Contact

For security matters, email is the preferred contact method:

**Email:** [securitygithubissue@fnbubbles420.org](mailto:securitygithubissue@fnbubbles420.org)

If needed, you may also reach out through the community Discord:

[https://discord.gg/zQbJJgwbUv](https://discord.gg/zQbJJgwbUv)

---

Developed by **BubblesTheDev**
