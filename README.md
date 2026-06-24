# Cinfluence — Website

Static site for [cinfluencedigital.com](https://cinfluencedigital.com). Built with HTML, CSS, and vanilla JS. Deployed via Netlify.

---

## Pages

| File | Route |
|------|-------|
| `index.html` | Home |
| `about.html` | About |
| `services.html` | Services |
| `pricing.html` | Pricing |
| `work.html` | Work |
| `contact.html` | Contact |

---

## Structure

```
/
├── index.html
├── about.html
├── services.html
├── pricing.html
├── work.html
├── contact.html
├── style.css          # Global stylesheet — all tokens, layout, components
├── main.js            # Nav scroll, mobile menu, fade-up observer, FAQ accordion
└── assets/
    ├── images/        # Founder and general photography
    ├── logos/         # Client logos (SVG, used in trust bar)
    ├── services/      # Service section cover images
    ├── videos/        # Short-form video content (Reels/TikToks)
    └── work/          # Work portfolio images
```

---

## Brand tokens

Defined as CSS custom properties in `style.css`:

| Token | Hex | Usage |
|-------|-----|-------|
| `--espresso` | `#261C13` | Primary dark — backgrounds, text |
| `--bark` / `--taupe` | `#53412A` | Secondary brown — body text, muted UI |
| `--gold` | `#B8935A` | Accent — labels, rules, highlights |
| `--ivory` | `#F8F7F2` | Light background |
| `--sage` | `#3A4137` | Secondary dark — accent sections |
| `--stone` | `#E3DFD9` | Neutral surface — borders, alternate sections |

**Typography**
- `--ff-serif`: Libre Baskerville — headings (H1–H3)
- `--ff-sans`: Montserrat — body, labels, nav, buttons

---

## Adding images

Replace placeholder `<div class="img-ph">` blocks with `<img>` tags. Image slots and recommended specs:

| Slot | File | Min size |
|------|------|----------|
| Hero (home) | `assets/images/hero-photo.jpg` | 1200×1800px |
| About strip (home) | `assets/images/about-strip.jpg` | 900×900px |
| Founder portrait (about) | `assets/images/founder-about.jpg` | 900×1200px |
| Founder secondary (about) | `assets/images/founder-2.jpg` | 900×1200px |
| Work — iLuxe | `assets/work/iluxe-graphicdesigns.jpg` | 800×1000px |
| Work — Hair Solution | `assets/work/hairsolution-graphicdesigns.jpg` | 800×1000px |
| Work — Style State | `assets/work/stylestate-graphicdesigns.jpg` | 800×1000px |

Client logos go in `assets/logos/` as SVG files. Current slots: `iluxe-logo.svg`, `hairsoluton-logo.svg`, `stylestate-logo.svg`, `winnieandco-logo.svg`, `epictales-logo.svg`, `rabble-logo.svg`.

---

## Adding video

Replace `.strip-bg` placeholder divs in the scroll strip with:

```html
<video autoplay muted loop playsinline src="assets/videos/reel-iluxe.mp4"></video>
```

The `.strip-gradient` overlay and `.strip-info` label sit on top via z-index — no changes needed to surrounding markup.

---

## Deployment

Hosted on **Netlify**, connected to this repository. Every push to `main` triggers a deploy.

- Production URL: `https://cinfluencedigital.com`
- Netlify dashboard: [app.netlify.com](https://app.netlify.com)

No build step — all files are served as-is.

---

## Discovery call link

Calendly URL used across CTAs:
```
https://calendly.com/hyacinth-cinfluencedigital/discovery-call
```

To update it, find-and-replace across all HTML files.

---

## Contact

**Hyacinth Blabagno** — Founder, Cinfluence  
hello@cinfluencedigital.com  
[instagram.com/cinfluence.digital](https://instagram.com/cinfluence.digital)
