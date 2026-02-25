# FederalRico RP — Server Page (Trappin-style layout)

This is a simple, fast, static webpage you can host and link from your FiveM server listing.

## 1) Replace the screenshots
Put your own screenshots into `/assets` and keep the same file names:
- shot_car.png
- shot_event.png
- shot_nightlife.png
- banner.png (optional)

## 2) Host it (easy options)
### GitHub Pages (free)
- Create a repo (public)
- Upload these files
- Settings → Pages → Deploy from branch
- Copy your Pages URL

### Any web host
Upload the folder anywhere.

## 3) Link it in your server.cfg
Add:
sets sv_projectWebsite "YOUR_PAGE_URL_HERE"

## Notes
- The "COPY CONNECT" button copies: connect 191.96.152.68:30120
- Edit text in index.html to match your vibe.
