# Virtual Machine Center GUI Verification

Version target: `1.3.001`

Use this checklist for packaged Windows GUI verification. Mark items only after testing the visible app.

## Main Entry

- [ ] Open `Tools > Virtual Machine Center`.
- [ ] Confirm the panel opens without console, load, or layout errors.
- [ ] Confirm `Tools > Browser Features > Developer Workspace` can still open Virtual Machine Center.
- [ ] Confirm the Virtual Machine Center panel shows the `Ctrl+Shift+F` Send Feedback shortcut.
- [ ] Confirm the Virtual Machine Center `Send Feedback` button opens the Send Feedback panel.

## VMware

- [ ] Confirm VMware status shows `Not detected` on a machine without VMware Workstation Pro.
- [ ] Confirm VMware status shows `Installed` on a machine with VMware Workstation Pro installed.
- [ ] Confirm `Open VMware Workstation Pro` opens VMware only when detected.
- [ ] Confirm Broadcom information opens in a pop-out window.
- [ ] Confirm Broadcom support, downloads, privacy, terms, and VMware privacy links open official pages.

## Linux ISO Downloads

- [ ] Confirm only Ubuntu 26.04 LTS Intel / AMD 64-bit, Ubuntu 26.04 LTS ARM 64-bit, and Linux Lite 8.0 are shown.
- [ ] Confirm the host architecture recommendation appears on the matching Ubuntu card.
- [ ] Confirm each card has its own `Verify ISO` button.
- [ ] Confirm each card has its own `Installation Guide` button.
- [ ] Confirm download buttons open only the approved configured source URLs.

## ISO Verification

- [ ] Confirm canceling the ISO picker leaves the panel stable.
- [ ] Confirm selecting a non-ISO file is rejected.
- [ ] Confirm selecting an ISO from a protected browser folder is rejected.
- [ ] Confirm selecting the correct Ubuntu AMD64 ISO reports a SHA-256 match.
- [ ] Confirm selecting the correct Ubuntu ARM64 ISO reports a SHA-256 match.
- [ ] Confirm selecting the correct Linux Lite 8.0 ISO reports a SHA-256 match.
- [ ] Confirm selecting the wrong ISO for a card reports a SHA-256 mismatch.
- [ ] Confirm mismatch text tells the user not to install until confirmed.

## Storage Warning

- [ ] Confirm free disk space is visible when available.
- [ ] Confirm low free disk space shows a visible storage warning.
- [ ] Confirm the warning explains ISO size, VM disk space, and snapshot storage growth.

## Pop-Out Windows

- [ ] Confirm `Installation Guide` opens a pop-out window with an `OK` button.
- [ ] Confirm `OK`, `Escape`, and `Enter` close the installation guide.
- [ ] Confirm the installation guide changes when opened from a different OS card.
- [ ] Confirm `Open Command List` opens a pop-out window.
- [ ] Confirm the command list starts with no OS command list shown.
- [ ] Confirm selecting Ubuntu shows only Ubuntu commands.
- [ ] Confirm selecting Linux Lite shows only Linux Lite commands.
- [ ] Confirm command `Copy` buttons copy only the visible command text.
- [ ] Confirm `OK` and `Escape` close the command list.

## Feedback Shortcut

- [ ] Press `Ctrl+Shift+F` from the browser and confirm Send Feedback opens.
- [ ] Confirm the shortcut opens the same browser-owned feedback panel as `Help > Send Feedback`.
- [ ] Confirm ordinary websites, VMware, and Linux guests do not receive feedback IPC access.

## Security Regression

- [ ] Confirm ordinary websites cannot access `vmCenter:*` IPC APIs.
- [ ] Confirm the browser does not install VMware.
- [ ] Confirm the browser does not create virtual machines.
- [ ] Confirm the browser does not run Linux commands.
- [ ] Confirm the browser does not read VM files or VM memory.
- [ ] Confirm the browser does not upload ISO contents or hashes.
- [ ] Confirm browser passwords, cookies, tokens, profiles, and AI Chat data are not exposed to VMware or Linux guests.
