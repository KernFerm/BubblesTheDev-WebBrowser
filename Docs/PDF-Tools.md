# Local PDF Tools

BubblesTheDev Web Browser handles PDF tooling locally. PDFs are opened through browser-controlled file dialogs, edited in trusted main-process code, and saved to user-selected local paths.

## Local Libraries

The PDF tools use:

* `pdf-lib` for byte-level PDF edits, drawing, form-field updates, page operations, and saving modified PDF bytes.
* `pdf.js-extract` for independent local text extraction used by verification tests and redaction checks.
* `pdf-to-png-converter` with `@napi-rs/canvas` for local rasterized page replacement when arbitrary existing page content must be permanently redacted.

Both libraries are packaged with the application and do not require a remote PDF API.

## Supported Local Editing

The PDF panel can open a visible local PDF viewer/editor canvas or a pop-out PDF editor tool when more room is needed. Current visible editor actions include:

* Save As / Save Copy
* click-to-place text directly on a visible PDF page
* add note text
* highlight regions
* draw freehand ink lines for annotation or signing with mouse or touch
* draw simple rectangles and ellipses
* add typed signature text
* pick a saved typed signature
* place, drag, and resize signature objects
* update supported form fields
* flatten forms when requested
* rotate pages
* remove pages
* reorder pages
* duplicate pages
* combine local PDFs

The annotation toolbar is intended to expose familiar browser-style PDF controls for local text, highlighting, drawing, signatures, page navigation, and save actions. The editor UI is local browser UI, not a cloud document editor.

The original PDF is preserved by default. Edited output is written to a new file unless the user explicitly chooses an existing path in the save dialog.

## Visual Cover vs Permanent Redaction

Visual Cover draws an opaque region onto a page. It is useful for presentation but is not permanent redaction because underlying PDF text or objects may still be recoverable.

Permanent Redaction is only reported as verified when the saved PDF is reopened locally and text extraction confirms the target text is absent.

For arbitrary existing page text, vector content, scanned page regions, and embedded image regions, the browser uses rasterized page replacement:

* affected pages are rendered locally to PNG
* redaction rectangles are burned into the rendered image pixels
* the affected PDF pages are rebuilt as image-only pages
* the original affected page content streams, hidden text layers, annotations, and form appearances are not copied into the replacement page
* unaffected pages are copied from the original where safe

This is intentionally conservative. It prevents the original affected page content from remaining underneath an overlay, but redacted pages may lose selectable text, vector fidelity, form interactivity, and accessibility semantics. File size may increase.

## Security Boundaries

PDF processing is local-only:

* no PDF uploads
* no cloud PDF processing
* no third-party preview service
* no document-content telemetry
* no unrestricted renderer file access
* no automatic external launches from PDFs

Malformed, oversized, encrypted, or unsupported PDFs are rejected or reported through the browser-controlled PDF service.
