# Anonymous Feedback

BubblesTheDev Web Browser includes an optional browser-owned feedback panel.

The feedback panel is designed for short product feedback only. It does not ask for a name, email address, account handle, or other contact field. Users choose a category, type a plain-text message, review the privacy confirmation, and can optionally include basic technical details such as browser version, Windows major version, CPU architecture, CPU type, RAM, and GPU type.

The message box shows a category-specific placeholder format for Bug Report, Feature Suggestion, Accessibility Feedback, Privacy Feedback, Performance Feedback, Website Compatibility Issue, General Feedback, and Other. The placeholder is only guidance and disappears when the user starts typing.

For support requests that need a reply, contact support.bubblesthedev.webbrowser@gmail.com instead of using anonymous feedback.

## Privacy Behavior

The browser does not attach browser activity, profile data, local files, diagnostics exports, crash reports, linked identity state, or AI memory to feedback submissions.

Feedback messages are not saved as a local feedback history. A successful submission clears the visible form. A failed submission keeps the typed message visible so the user can retry or copy it elsewhere.

Feedback is sent securely by the browser with a minimized payload. Ordinary connection information may still be processed as part of delivering the request.

## Safety Controls

Before sending, the browser scans only the text typed into the feedback message. It blocks obvious sensitive personal material, and lower-confidence personal information patterns are shown as warnings for user review.

Submissions are sent only from trusted browser UI. Redirects are disabled, responses are handled inside the panel, and raw service responses are not rendered as HTML. Local cooldown and honeypot controls reduce duplicate or automated submissions.
