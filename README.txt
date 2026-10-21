GLITCHY — Temporary video landing page

FILES
index.html
assets/style.css
assets/app.js
assets/glitchy-bg.mp4
assets/poster.jpg

HOW TO DEPLOY
Upload index.html and the assets folder to the ROOT of your GitHub Pages repository.
Settings > Pages > Deploy from a branch > main > /(root).

HOW TO UPDATE
Open assets/app.js and edit CONFIG:
  contractAddress: your real CA (leave empty to show a dash and disable copy)
  x: X URL (already set to https://x.com/GlitchyWorld)
  telegram: Telegram URL (empty until provided)
  github: GitHub URL (empty until provided)

Video: replace assets/glitchy-bg.mp4 with another MP4 using the same filename.
Fallback image: replace assets/poster.jpg if you replace the video.

The video is muted, loops automatically, and fills the screen with object-fit:cover.
On portrait phones, its left/right edges are cropped by design. The central GLITCHY logo remains the focal point.
No signup, whitelist database, or wallet collection is implemented.
