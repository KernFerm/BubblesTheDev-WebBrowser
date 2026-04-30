# SECURITY.md

## Security Policy

The **BubblesTheDev Web Browser** project takes security seriously. This document explains how security issues should be reported and how vulnerabilities are handled.

---

## Supported Versions

Security updates are typically provided for the most recent release versions of the browser.

| Version        | Supported                 |
| -------------- | ------------------------- |
| 1.0.15 | ✔ Supported               |
| Older Releases | NOT SUPPORTED |

Users are encouraged to always run the **latest available version** of the browser to ensure they receive security improvements and bug fixes.

---

## Reporting a Vulnerability

If you discover a security vulnerability in the project, please report it responsibly.

**Do NOT create a public GitHub issue for security vulnerabilities.**

Instead, please report the issue privately using the following method:

**Email:** [securitygithubissue@fnbubbles420.org](mailto:securitygithubissue@fnbubbles420.org)

When reporting a vulnerability, please include:

* a clear description of the issue
* steps required to reproduce the problem
* affected version of the browser
* operating system information
* screenshots or logs if available

Providing detailed information helps reproduce and resolve the issue faster.

---

## Response Process

When a security report is received, the following general process is used:

1. Acknowledgement of the report
2. Investigation and validation of the issue
3. Development of a fix if necessary
4. Security patch release
5. Public disclosure (after a fix is available)

The project aims to acknowledge security reports as quickly as possible and address confirmed vulnerabilities in a responsible manner.

---

## Responsible Disclosure

Security researchers are asked to follow responsible disclosure practices:

* Allow reasonable time for the issue to be investigated and fixed
* Avoid publishing exploit details before a fix is released
* Provide sufficient technical details to reproduce the issue

Responsible disclosure helps protect users while the issue is resolved.

---

## Scope

This security policy applies to:

* the browser application
* installer packages
* official project repositories

Third‑party dependencies (such as Electron or Chromium) follow their own security policies and update cycles.

---

## Dependency Security

The project relies on several open‑source components including:

* Electron
* Chromium
* Node.js

Security updates provided by these upstream projects may require updating the browser to newer versions.

Keeping dependencies up to date is part of maintaining the browser's security posture.

---

## Security Philosophy

The browser design follows a minimal‑surface approach:

* minimal background services
* no telemetry frameworks
* local‑first data storage
* reliance on Chromium sandboxing and process isolation

This approach helps reduce unnecessary network communication and potential attack surfaces.

---

## Contact

For any security concerns related to the project:

Join the discord and ping me. [https://discord.gg/zQbJJgwbUv](https://discord.gg/zQbJJgwbUv)  

---

Developed by **BubblesTheDev**
