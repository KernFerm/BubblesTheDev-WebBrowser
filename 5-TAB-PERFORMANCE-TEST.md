# BubblesTheDev Web Browser 5-Tab Performance Test

This document summarizes a real-world 5-tab performance test for BubblesTheDev Web Browser. The goal of the test is to measure memory and CPU usage during active browsing rather than in an idle or blank-tab scenario.

## Test Overview

Browser: BubblesTheDev Web Browser  
Version Tested: `1.0.30`  
Platform: Windows 11 x64  
Engine: Electron / Chromium  
Test Type: Real-world 5-tab usage test  

## Test Machine

The results in this document were recorded on the following system:

- Processor: AMD Ryzen 7 7435HS (`3.10 GHz`)
- Installed RAM: `16.0 GB` (`15.7 GB usable`)
- Graphics Card: NVIDIA GeForce RTX 4070 Laptop GPU (`8 GB`)
- Operating System: Windows 11 Home `25H2`
- System Type: `64-bit operating system, x64-based processor`

## Tabs Used

The following websites were open during the test:

1. Twitch
2. YouTube
3. Facebook
4. X / Twitter
5. FNBubbles420 Org website

## Test Conditions

The test was recorded under the following conditions:

- All 5 tabs were fully loaded
- Tabs were opened manually before measurement
- Sleeping tabs were disabled, or all tabs were awake
- Video and media pages were fully loaded
- Videos were fully playing during the test
- Task Manager was used to capture RAM and CPU usage
- The same 5 tabs were used for each browser comparison
- No other heavy applications were intentionally running during the test

## Recorded Result

During the test, BubblesTheDev Web Browser produced the following results:

| Metric | Result |
|---|---|
| Open Tabs | 5 |
| Active Tabs | 5 |
| RAM Usage | Around `1.1 GB` |
| CPU Usage | Around `2.2%` average during testing |
| Test Type | Real-world usage |
| Media Tabs Included | Twitch and YouTube |

## Why This Test Matters

This test uses heavy, commonly visited websites rather than blank or near-idle tabs. Sites such as Twitch, YouTube, Facebook, and X / Twitter can place a much higher load on a browser because they often include:

- video playback
- live chat
- dynamic feeds
- background scripts
- media loading
- account sessions
- notifications
- tracking and advertising scripts

Because of that, this test provides a more practical view of browser behavior during normal everyday use.

## Result Summary

In this test run, BubblesTheDev Web Browser remained stable with approximately `1.1 GB` of RAM usage and about `2.2%` average CPU usage. On the test machine used here, that indicates solid resource handling during a multi-tab browsing session that included active media playback.

## Built-In Performance Behavior

Version `1.0.30` includes performance-related behavior intended to improve longer browsing sessions, including:

- background tab throttling for inactive tabs
- automatic sleeping tabs under memory pressure
- manual sleep and wake controls in the built-in Task Manager
- working-set and performance-state reporting in the app
- changes aimed at reducing long-session memory growth on heavy websites

These features help provide additional context for the results shown in this document.

## Real-World Comparison Chart

The chart below uses direct readings taken from the same machine during real-world testing.

| Browser | Processes | RAM Usage | CPU Usage | Notes |
|---|---:|---:|---:|---|
| BubblesTheDev Web Browser | 9 | `~1.1 GB` | `~2.2% avg` | 5 active tabs including Twitch and YouTube |
| Google Chrome | 21 | `~1.65 GB` | `6.5%` | Highest RAM usage in this comparison |
| Brave | 19 | `~1.20 GB` | `2.8%` | Closest result to BubblesTheDev Web Browser |
| Microsoft Edge | 20 | `~1.39 GB` | `3.8%` | Lower than Chrome, higher than Brave |

## Comparison Summary

Based on the direct results recorded in this document:

- BubblesTheDev Web Browser: `~1.1 GB`
- Brave: `~1.2 GB`
- Microsoft Edge: `~1.39 GB`
- Google Chrome: `~1.65 GB`

In this 5-tab test, BubblesTheDev Web Browser showed the lowest recorded RAM usage among the browsers directly tested on the same system.

## Project Link

https://github.com/KernFerm/BubblesTheDev-WebBrowser

