# Portfolio FSJP

A minimalist, single-page application (SPA) portfolio site built for **Geet Pimple**. Clean dark aesthetic layout designed with vanilla JavaScript routing, optimized specifically for **GitHub Pages** directory subpaths.

---

## Features

* **Single Page Application Routing:** Native HTML5 History API routing without extra dependencies or client-side framework bloat.
* **GitHub Pages Ready:** Pre-configured base routes (`/portfolio-fsjp/`) preventing standard subpath 404 image and route errors.
* **Dynamic Last.fm Track Carousel:** Lightweight JS interval rotator displaying recently played music scrobbles.
* **Clean Dark Aesthetic:** Minimal CSS framework setup leveraging Inter and JetBrains Mono fonts.

---

## File Hierarchy

```text
portfolio-fsjp/
├── index.html        # Shell file containing all page view templates
├── 404.html          # Redirect script for direct subpath navigation
├── style.css         # Dark theme styling and layout definitions
├── script.js        # Client-side router & interactive components
└── assets/
    ├── favicon.png   # Browser tab icon (32x32 px or 64x64 px)
    ├── avatar.png    # Profile picture / avatar
    └── resume.pdf    # Downloadable CV link target


todo
fix favicon and avatar bro idk why its not working