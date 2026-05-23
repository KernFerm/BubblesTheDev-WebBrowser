# BubblesTheDev Web Browser 5-Tab Performance Test

This document summarizes the automated 5-tab browser benchmark for BubblesTheDev Web Browser. The current harness launches the browser with the same five sites, waits for them to settle, captures browser-owned process metrics, and rewrites this report locally.

## Test Overview

Browser: BubblesTheDev Web Browser  
Build Target: `1.1.32`  
Package Version: `1.1.32`  
Platform: Windows 11 x64  
Engine: Electron / Chromium  
Test Type: Automated real-world 5-tab usage test  
Last Automated Run: `2026-05-21T01:16:41.862Z`  
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
5. FNBubbles420 Org website

## Test Conditions

The automated run uses the following conditions:

- The browser launches with a clean temporary profile for the test run
- The same 5 tabs are opened on every run
- The harness waits about `45 seconds` before capturing metrics
- Autoplay is blocked during the automated comparison run to reduce unfair media spikes
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
| Browser Processes | 11 |
| RAM Usage | Around `1.83 GB` |
| CPU Usage | Around `6.4%` across the post-settle sample window |
| Test Type | Automated heavy-site usage |
| Media Tabs Included | Twitch and YouTube |

## Baseline Policy

Version `1.1.32` is the starting baseline for future 5-tab performance comparisons in this project.

- Older manual comparison notes have been removed from this document
- Future comparisons should use the same automated harness and the same test conditions
- Version-to-version performance tracking should move forward from `1.1.32`

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

In the latest automated run, BubblesTheDev Web Browser remained stable with approximately `1.83 GB` of RAM usage and about `6.4%` CPU usage across browser-owned processes over the post-settle sample window. On the test machine used here, that indicates solid resource handling during a multi-tab browsing session built around heavy public websites.

## Built-In Performance Behavior

Build `1.1.32` includes performance-related behavior intended to improve longer browsing sessions, including:

- background tab throttling for inactive tabs
- automatic sleeping tabs under memory pressure
- manual sleep and wake controls in the built-in Task Manager
- working-set and performance-state reporting in the app
- adaptive performance optimization for gaming and streaming workloads
- localization startup and UI-update optimizations so the larger multilingual system does not create obvious browser lag

These features help provide additional context for the results shown in this document.

## Top Memory Tabs From Latest Run

1. Best Fails of the Week 😂 Try Not To Laugh - YouTube - 429.5 MB, 0%
2. Twitch - 282 MB, 0%
3. (untitled) - 157.7 MB, 0%
4. FNBubbles420 Organization - 93.4 MB, 0%
5. Facebook - 0 MB, 0%

## Comparison Direction

This report now treats version `1.1.32` as the first clean automated reference point for future comparisons.

When newer versions are tested, their results should be compared against the automated `1.1.32` baseline rather than older manual notes.

## Raw Output

The latest machine-readable result is also written to:

`docs/5-tab-performance-test.latest.json`

## Project Link

https://github.com/KernFerm/BubblesTheDev-WebBrowser
