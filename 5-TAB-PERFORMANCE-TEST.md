# BubblesTheDev Web Browser 5-Tab Performance Test

This document summarizes the automated 5-tab browser benchmark for BubblesTheDev Web Browser. The current harness launches the browser with the same five sites, waits for them to settle, captures browser-owned process metrics, and rewrites this report locally.

## Test Overview

Browser: BubblesTheDev Web Browser  
Build Target: `1.1.33`  
Package Version: `1.1.33`  
Platform: Windows 11 x64  
Engine: Electron / Chromium  
Test Type: Automated real-world 5-tab usage test  
Last Automated Run: `2026-05-26T00:23:31.695Z`  
Harness: `node scripts/run-5-tab-performance-test.js`

## Test Machine

The latest automated run was recorded on the following system:

- Processor: AMD Ryzen 7 7435HS                             
- Installed RAM: `15.7 GB` (`15.4 GB usable`)
- Graphics Card: NVIDIA GeForce RTX 4070 Laptop GPU
- Operating System: Microsoft Windows 11 Home `2009`
- System Type: `64-bit operating system, x64-based processor`

## Tabs Used

The following websites are opened by the automated test harness:

1. Twitch
2. YouTube
3. Facebook
4. X / Twitter
5. Project website

## Test Conditions

The automated run uses the following conditions:

- The browser launches with a clean temporary profile for the test run
- The same 5 tabs are opened on every run
- The harness waits about `45 seconds` before capturing metrics
- Autoplay is allowed during the automated comparison run so the media tabs reflect a more active heavy-site session
- Metrics are captured from Electron app-process data plus the browser's internal performance summary
- RAM and CPU are reported from a short post-settle sample window instead of a single instant
- The report is rewritten locally after the run completes
- No telemetry, cloud reporting, or external analytics are used for the benchmark

Important note:

- This automated harness does not force account sign-in, autoplay, or user interaction on sites like Twitch, YouTube, Facebook, or X, so the results are best interpreted as a repeatable heavy-site loading benchmark rather than a guaranteed logged-in media-playback benchmark

## Latest Automated Result

During the latest automated run, BubblesTheDev Web Browser produced the following results:

| Metric | Result |
|---|---|
| Open Tabs | 5 |
| Active Tabs | 4 |
| Sleeping Tabs | 1 |
| Browser Processes | 10 |
| RAM Usage | Around `2.12 GB` |
| CPU Usage | Around `7.6%` across the post-settle sample window |
| Test Type | Automated heavy-site usage |
| Media Tabs Included | Twitch and YouTube |

## Why This Test Matters

This test uses heavy, commonly visited websites rather than blank or near-idle tabs. Sites such as Twitch, YouTube, Facebook, and X / Twitter can place a much higher load on a browser because they often include:

- video surfaces
- live or dynamic feeds
- background scripts
- media loading
- account-session behavior
- notifications
- tracking and advertising scripts

Because of that, this test provides a more practical view of browser behavior during normal everyday use than a blank-tab benchmark.

## Result Summary

In the latest automated run, BubblesTheDev Web Browser remained stable with approximately `2.12 GB` of RAM usage and about `7.6%` CPU usage across browser-owned processes over the post-settle sample window. On the test machine used here, that indicates solid resource handling during a multi-tab browsing session built around heavy public websites.

## Built-In Performance Behavior

Build `1.1.33` includes performance-related logic intended to improve longer browsing sessions, including:

- background tab throttling for inactive tabs
- automatic sleeping tabs under memory pressure
- manual sleep and wake controls in the built-in Task Manager
- working-set and performance-state reporting in the app
- adaptive performance optimization for gaming and streaming workloads
- localization startup and UI-update optimizations so the larger multilingual system does not create obvious browser lag

These features help provide additional context for the results shown in this document.

## Top Memory Tabs From Latest Run

1. Lacy - Twitch - 655.8 MB, 0%
2. Try Not To Laugh 🤣 Top 100 Funniest Videos Ever 😂 | Funny Videos Compilation 2026 #155 - YouTube - 412.3 MB, 0%
3. (untitled) - 157.1 MB, 0%
4. Project website - 97.1 MB, 0%
5. Facebook - 0 MB, 0%

## Historical Manual Comparison

The older manual comparison values below are preserved for context from an earlier human-run benchmark on the same machine. They are not rewritten by the automated harness.

| Browser | Processes | RAM Usage | CPU Usage | Notes |
|---|---:|---:|---:|---|
| BubblesTheDev Web Browser | 9 | `~1.1 GB` | `~2.2% avg` | Earlier manual 5-tab run including Twitch and YouTube |
| Google Chrome | 21 | `~1.65 GB` | `6.5%` | Historical manual comparison |
| Brave | 19 | `~1.20 GB` | `2.8%` | Historical manual comparison |
| Microsoft Edge | 20 | `~1.39 GB` | `3.8%` | Historical manual comparison |

## Raw Output

The latest machine-readable result is also written to:

`docs/5-tab-performance-test.latest.json`

## Project Link

https://github.com/KernFerm/BubblesTheDev-WebBrowser
