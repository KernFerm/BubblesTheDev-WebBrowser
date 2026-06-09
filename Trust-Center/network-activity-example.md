<!--
Feature Representation: User-initiated network activity compared with non-telemetry browser behavior.
Conceptual Production Behavior: The production browser uses the network for normal browsing, downloads, updates, streaming, and sign-in flows when the user chooses those actions.
Removed Details: Real endpoints, update services, provider wiring, request policies, and internal traffic rules have been intentionally removed.
Why This Example Exists: It helps users understand that normal internet traffic is not the same thing as hidden analytics.
Transparency Notice: This file is a transparency representation and not production source code.
-->

# Network Activity Example

## What This Feature Does

This feature explains that a web browser still needs to use the internet when the user asks it to do internet things.

Examples include:

* opening a website
* using a search provider
* signing into a service
* streaming video
* downloading a file
* checking for updates where supported

## Why It Matters

Many people hear "privacy browser" and assume it means "no internet traffic at all."

That would not make sense for a real browser.

What matters is the difference between:

* traffic caused by the user choosing to browse
* hidden background collection done for analytics or profiling

The browser's documented trust model is based on that difference.

## Privacy Impact

The browser docs say that normal web traffic should not be confused with built-in telemetry.

That means:

* opening a site sends traffic to that site because the user asked for it
* using search sends traffic to the chosen search provider
* downloading a file contacts the file source
* update checks can use the network when that feature is used

What the browser aims to avoid by default is silent background analytics behavior that collects browsing data for profiling.

## Accessibility Impact

This feature helps accessibility users too, because plain explanations reduce confusion.

People using assistive tools or simplified interfaces still deserve a clear answer to a common question:

"Why is the browser using the internet?"

## Example Workflow

A streamer opens the browser and:

1. Signs into a streaming site.
2. Opens a game guide website.
3. Downloads a file they chose.
4. Checks whether a browser update is available.

All of those actions create network traffic because the user requested them.

That is different from the browser silently collecting analytics about behavior in the background.

## Technical Notes

The production browser is documented as local-first, not offline-only.

A safe conceptual flow looks like this:

```js
/*
  Conceptual example only.
  This is not production code.
*/

function handleUserNavigation(userAction) {
  if (userAction.type === "open-website") {
    return "connect to requested website";
  }

  if (userAction.type === "download-file") {
    return "connect to requested download source";
  }

  return "no hidden analytics behavior implied by this example";
}
```

This example intentionally omits:

* real URLs
* real update hosts
* real provider configuration
* real request handling rules
