# Developer Workspace

BubblesTheDev Web Browser `1.3.001` includes Developer Workspace, a browser-owned launcher for supported local developer applications and developer websites.

Developer Workspace is available from:

`Tools > Browser Features > Developer Workspace`

## What It Does

Developer Workspace can:

* show supported developer apps that are installed or not found
* open installed supported apps as normal external Windows applications
* open official download pages for supported apps that are not found
* let the user add, rename, remove, and favorite custom developer applications
* open supported developer websites in the current tab, a new tab, Split View, or a pop-out browser window
* let Visual Studio Code open a user-selected file, user-selected folder, or the normal Downloads folder
* open Virtual Machine Center for beginner VMware Workstation Pro and Linux ISO setup guidance starting in version `1.3.001`

## Supported Built-In Apps

The built-in app list includes common developer tools such as:

* Visual Studio Code
* Visual Studio
* Windows Terminal
* GitHub Desktop
* Git Bash
* Docker Desktop
* Android Studio
* IntelliJ IDEA
* PyCharm
* WebStorm
* Eclipse
* Notepad++
* Sublime Text
* VMware Workstation Pro

PowerShell and Command Prompt are not shown in the current Developer Workspace app list.

## Virtual Machine Center

Starting in version `1.3.001`, Virtual Machine Center lives inside Developer Workspace and helps beginners set up a Linux virtual machine with VMware Workstation Pro.

Virtual Machine Center is available from:

`Tools > Virtual Machine Center`

It is also reachable from:

`Tools > Browser Features > Developer Workspace`

It can:

* explain the Broadcom account requirement for VMware Workstation Pro downloads
* open official Broadcom, VMware, Canonical, and Linux Lite pages
* detect VMware Workstation Pro locally from known Windows locations
* open VMware Workstation Pro as a normal external Windows application when the user clicks Open
* explain AMD64 / x86-64 versus ARM64
* show the approved Ubuntu 26.04 LTS and Linux Lite 8.0 ISO choices
* let the user select an existing `.iso` file and calculate its SHA-256 hash locally
* show beginner setup, terminal-command, security, performance, and troubleshooting guidance
* show the `Ctrl+Shift+F` Send Feedback shortcut for VM setup issues or suggestions

It does not install VMware, download VMware silently, run VMware installers, create virtual machines, automate VMware, run Linux commands, read guest files, read VM memory, or create a control bridge between VMware and the browser.

## Missing Apps

If a supported app is not found, Developer Workspace can show an `Install` button.

That button opens the official download page in the browser. It does not:

* silently download an installer
* run an installer
* use winget
* use Chocolatey
* run PowerShell scripts
* update external developer software

The user chooses what to install from the official website.

## Security Boundary

Developer Workspace is a secure launcher, not a browser integration bridge.

External applications launched from Developer Workspace do not receive privileged browser access. They do not receive:

* browser cookies
* passwords or passkeys
* account access data
* browsing history
* open tabs
* current page contents
* profile folders
* browser settings files
* diagnostics files
* AI Chat data
* local AI memory
* browser IPC access
* Electron or WebContents access
* DevTools protocol access

Websites loaded in the browser cannot use Developer Workspace to detect installed apps, read app paths, launch local programs, open local files, open folders, or execute commands.

Websites also cannot use Virtual Machine Center to detect VMware, select or hash ISO files, read VM files, launch VMware, read host resource details, or execute host or guest commands.

## File And Folder Actions

Developer Workspace only passes a local file or folder path to an external application when the user explicitly chooses that action from trusted browser UI.

The current enhanced file and folder actions are limited to Visual Studio Code.

Protected browser-controlled locations are blocked from Developer Workspace file and folder actions, including browser profile roots, application roots, diagnostics roots, and other internal browser-controlled locations.

## Web Developer Tools

Developer website shortcuts remain normal web content. They open through the browser's existing browsing surfaces and do not receive Node.js, Electron, local filesystem, Developer Workspace IPC, or browser-internal privileges.

## Local Data

Developer Workspace preferences are stored locally with the browser profile where persistence is supported.

This can include:

* whether Developer Workspace is enabled
* favorite developer tools
* custom developer app names
* custom developer app executable paths selected by the user
* default web-tool opening mode

Developer Workspace does not transmit installed-app detection results, custom app paths, selected files, selected folders, project names, favorites, or usage history to a remote analytics or telemetry service.

Virtual Machine Center does not transmit VMware detection, host architecture, RAM, CPU count, ISO selection, ISO hash, Linux choice, VM usage, or tutorial progress as telemetry.
