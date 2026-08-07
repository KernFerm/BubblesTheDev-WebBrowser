# Local Ollama AI Chat

BubblesTheDev Web Browser includes an optional local AI chat panel for users who choose to run Ollama on their own computer.

## Defaults

- AI Chat is disabled by default.
- AI Internet Search is disabled by default.
- Ask Before Every AI Search is enabled by default.
- The model picker shows two recommended small starter models for download, and it can also use compatible models already installed in the user's local Ollama library.
- If the recommended tag is not installed but a matching local tag is available, the panel discloses the installed model name being used.
- The browser only talks to Ollama through the local loopback Ollama service.

## Privacy

The chat feature does not require a cloud AI account and does not automatically upload browser content. Internet search is controlled by the browser and requires a visible user approval flow when Ask Before Every AI Search is enabled.

Do not paste sensitive personal, account, or browser information into AI Chat. The browser blocks obvious sensitive and unsafe prompts before they reach Ollama or internet search.

## User Experience

AI Chat can open in its own panel or a pop-out window. When a local model is generating a reply, the prompt area shows which model is responding and asks the user to wait for the answer.

The browser can start the local Ollama server as a hidden managed background process when the user chooses Open Ollama. That managed process is stopped when the browser quits so it is not left running by the browser after close.

If Ollama is not installed, the AI Chat panel offers an optional Install Ollama action. The same reviewed privileged setup module is also available to the NSIS installer through a narrow helper mode after the browser files are installed. Both paths download only from the approved official Ollama HTTPS source, verify the downloaded Windows executable, verify the Windows Authenticode signature and signer identity, and refuse to run unverified installers.

## Internet Search

When AI Internet Search is enabled, the browser may retrieve public HTTPS web results after approval. Private, local, LAN, non-HTTPS, redirect, and non-text destinations are blocked. The retrieval layer checks DNS results before connecting so public-looking names that resolve to private or local addresses are rejected. Links that appear to contain private access details are rejected before retrieval.

Web excerpts are treated as untrusted source material and are not allowed to control the browser. Obvious prompt-injection instructions from retrieved pages are neutralized before the text is passed to the local model, and web-assisted answers are labeled separately from local-only answers.

## Data Controls

Use Delete AI Chat Data in the AI Chat panel to clear the visible chat transcript and profile-local AI memory. Incognito chat state is temporary for the current session.

## Installer Status

The browser installer must allow the core browser to install without enabling AI Chat or accepting Ollama-specific terms. The installer may offer optional Ollama app setup, but it does not enable AI Chat and does not download models. Users enable AI Chat and download models later from `Tools > AI Chat` inside the browser.

The shared optional Ollama setup flow now includes:

- an approved official source allowlist
- HTTPS-only download validation
- DNS checks that block local, private, link-local, and metadata destinations
- redirect validation through the same allowlist
- file-size, content-type, empty-download, partial-download, and PE-header checks
- Windows Authenticode and signer verification before execution
- time-of-check/time-of-use hash checks before and after execution
- safe progress rows for Ollama setup, with model downloads left to the in-browser AI Chat panel
- Continue Without AI behavior when optional setup fails

The NSIS installer invokes the narrow helper only when optional Ollama app setup was selected and the Ollama agreement was accepted. Core browser installation still continues when AI component setup is skipped or optional Ollama setup fails.

Packaged-build visible workflow checks and installed NSIS scenarios A-F must still be performed in an isolated Windows environment before claiming the full installer workflow has been visibly verified end to end.
