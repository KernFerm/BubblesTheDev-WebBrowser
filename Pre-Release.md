# MediaHarbor Pre-Release

## Before You Download

This is a pre-release version of MediaHarbor. It is meant for early testing, so some features may still change and a few rough edges are normal.

MediaHarbor is a desktop app for saving supported public media to your PC for lawful personal use. It is built to keep things simple, local-first, and private.

## What This App Does

- saves supported public videos, audio, images, and posts
- lets you preview a public link before downloading
- shows useful details like title, thumbnail, duration, uploader, and formats
- supports audio-only downloads when you do not need the full video
- includes optional local media tools like audio extraction and conversion
- keeps your history on your own device

## Supported Public Sites

MediaHarbor works with public links supported by `yt-dlp`, including sites like:

- YouTube
- Instagram
- TikTok
- X
- Reddit
- many other supported public platforms

Support can vary by site and by the type of post or media link.

## Privacy And Safety

MediaHarbor is designed with a local-first approach:

- download history stays on your device
- the app is designed not to collect analytics or telemetry
- sensitive settings are encrypted locally
- local processing tools run on your own device when possible

For safety and legal use, MediaHarbor does not include:

- DRM bypassing
- paywall bypassing
- private account access
- login-only scraping

Only download content you own or have permission to save.

## Included In This Windows Build

- `MediaHarbor-Setup-0.0.55.exe`
- bundled `yt-dlp.exe`
- bundled `ffmpeg.exe`
- bundled `ffprobe.exe`

Most end users should not need to install those tools separately for the packaged app.

## Simple How To Use

1. Install MediaHarbor.
2. Open the app.
3. Paste a supported public link.
4. Click `Preview`.
5. Choose where you want the file saved.
6. Click `Start download`.

For local media tools:

1. Open the `Local processing` section.
2. Pick an input file.
3. Pick where the new file should go.
4. Choose a mode like `Extract audio` or `Remux to MP4`.
5. Click `Run local process`.

## Pre-Release Notes

- this build is for early users and testing
- some features or supported sites may behave differently over time
- Windows may show a SmartScreen warning the first time you open the installer
- if something fails, try previewing the link first before starting the download

## Good To Know

- no ads
- no user accounts
- no paywalls
- no hidden tracking

