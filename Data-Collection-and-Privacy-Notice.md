Data Collection and Privacy Notice

BubblesTheDev Web Browser is designed to keep browser data local to the user's device unless the user chooses to visit external websites or use external web services.

The application does not include built-in telemetry, analytics SDKs, automatic crash upload services, cloud synchronization, or AI monitoring systems.

Specifically:

* No telemetry services are embedded in the application.
* No background analytics services are executed.
* No behavioral tracking mechanisms are included by the application itself.
* No advertising identifiers are generated or transmitted by the application itself.
* No cloud-based synchronization features are implemented.
* No automatic diagnostics upload path is implemented.

Local browser data such as history, bookmarks, homepage settings, and optional Music Player settings is stored on the user's device in the Electron `userData` directory.

The Music Player is local-only and off by default.

* No music folder is scanned until the user explicitly agrees inside the Music Player window.
* The user can choose the default Music folder or another local folder.
* The application does not upload or share the user's music files.

The browser still makes normal outbound network requests when the user browses the web.

Examples:

* Opening websites and web apps
* Loading page assets such as images, scripts, fonts, and media
* Using search from `bubbles://home`

When the user runs a search from `bubbles://home`, the application may contact DuckDuckGo and Google endpoints in the background to assemble the search experience shown on that internal page.

The application does not establish outbound connections to BubblesTheDev-controlled servers for tracking or data collection purposes.

BubblesTheDev values user privacy and has intentionally designed this software without built-in surveillance, telemetry, analytics, or automatic remote reporting components.

Any future feature that would materially change this privacy posture should be disclosed in updated privacy and release documentation.
