# 🏴‍☠️ Captain Arpit — A Pirate's Tale

> *"Not all treasure is silver and gold, mate."* — **Captain Jack Sparrow**

An immersive, cinematic **Pirates of the Caribbean** themed personal portfolio and "About Me" website built for **Captain Arpit**. Designed with weathered parchment aesthetics, ocean night palettes, glowing gold treasures, and smooth interactive animations.

---

## 🧭 Live Sections & Features

1. **🗺️ Interactive Treasure Map Navigation**
   - Clickable nautical beacons pulsing on an ancient treasure map (`images/map.jpg`).
   - Smoothly jumps to all ship quarters with custom hover tooltips.
2. **✨ Bioluminescent Ocean Particle Canvas**
   - Floating firefly particle canvas with ambient golden glow and physics-based drifting.
3. **⚓ The Captain's Quarters (About Me)**
   - Bio, captain's motto, time at sea, completed voyages, and infinite curiosity stats.
4. **💰 Skills & Loot Chest**
   - Animated progress bars for C/C++, HTML5/CSS3, Problem Solving, and planned voyages into Python.
5. **🧭 Voyage Roadmap (Future Plan)**
   - Multi-phase timeline charting the journey from current foundations to high-impact Software Engineering.
6. **🗝️ Plunder Gallery**
   - Visual showcase of pirate adventures and maritime imagery with interactive zoom-and-reveal cards.
7. **📜 The Pirate Code**
   - Core development philosophy and oaths: continuous learning, clean code, failing forward, and sharing knowledge.
8. **⛵ Crew's Network**
   - Direct gangways to GitHub, LinkedIn, Instagram, and Gmail.
9. **🍾 Message in a Bottle**
   - Themed contact form with simulated bottle-launching confirmation.

---

## 📂 Project Directory Structure

```text
AboutMyself/
│
├── index.html          # Semantic HTML5 structure & content
├── style.css           # Complete pirate design system, tokens & responsive styles
├── script.js           # Particle engine, navigation observers & interactions
├── favicon.svg         # Pirate skull & crossed bones vector icon
├── site.webmanifest    # Progressive Web App (PWA) manifest
├── robots.txt          # Search engine crawler permissions
├── sitemap.xml         # XML Sitemap
├── README.md           # Project documentation & guide
├── .gitignore          # Git ignore rules
│
├── css/
│   └── style.css       # Stylesheet copy for modular directory structure
├── js/
│   └── script.js       # Script copy for modular directory structure
│
└── images/             # Visual assets
    ├── compass.jpg     # Vintage brass compass & nautical tools
    ├── harbor.jpg      # Pirate harbor at dusk
    ├── hero.jpg        # Stormy galleon sailing into sunset
    ├── map.jpg         # Ancient Caribbean treasure map
    └── treasure.jpg    # Plundered gold & jewels chest
```

---

## 🚀 How to Run Locally

### Option 1: Direct Browser Launch
Simply double-click [`index.html`](file:///c:/Users/ARPIT/OneDrive/Documents/AboutMyself/index.html) or right-click and choose **Open with > Google Chrome** (or your browser of choice).

### Option 2: Local HTTP Server (Recommended)
Run Python's built-in HTTP server from the project directory:
```bash
python -m http.server 8000
```
Then navigate to:
```text
http://localhost:8000
```

### Option 3: VS Code / IDE Live Server
Right-click [`index.html`](file:///c:/Users/ARPIT/OneDrive/Documents/AboutMyself/index.html) and select **Open with Live Server**.

---

## 🎨 Design Tokens & Palette

| Variable | Color Hex | Description |
| :--- | :--- | :--- |
| `--ocean-deep` | `#090d1a` | Deep nocturnal Caribbean sea |
| `--ocean-dark` | `#0f1628` | Twilight oceanic base |
| `--wood-dark` | `#1a120a` | Weathered galleon timber |
| `--gold` | `#d4a843` | Caribbean Aztec gold |
| `--gold-bright` | `#f0c75e` | Glowing doubloon highlight |
| `--parchment` | `#e8d5b0` | Weathered nautical cartography paper |
| `--blood` | `#8b1a1a` | Pirate bandana crimson |

### Typography
- **Headings & Logo**: [*Pirata One*](https://fonts.google.com/specimen/Pirata+One)
- **Sub-headings & Navigation**: [*Cinzel Decorative*](https://fonts.google.com/specimen/Cinzel+Decorative) & [*Cinzel*](https://fonts.google.com/specimen/Cinzel)
- **Body & Lore**: [*EB Garamond*](https://fonts.google.com/specimen/EB+Garamond)

---

## ⚓ Customization Guide

- **Update Bio & Stats**: Search for `<!-- 🏴‍☠️ >>> [EDIT "ABOUT MYSELF" SECTION BELOW]` in [`index.html`](file:///c:/Users/ARPIT/OneDrive/Documents/AboutMyself/index.html).
- **Edit Social Profile Links**: Search for `<!-- ⚓ >>> [EDIT CREW & SOCIAL PROFILE HYPERLINKS HERE]` in [`index.html`](file:///c:/Users/ARPIT/OneDrive/Documents/AboutMyself/index.html).
- **Modify Skills & Bar Percentages**: Edit the `data-width="80"` attributes in the `#skills` section.

---

## 📜 License & Credits

Built with rum, grit, and a fair wind.  
Inspired by the adventures of **Captain Jack Sparrow** and *Pirates of the Caribbean*.
