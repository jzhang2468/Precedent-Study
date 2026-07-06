# Excavating AI Editorial Archive Style Guide

## Aesthetic Direction

The site uses a warm editorial portfolio style inspired by magazine layouts and writer-portfolio templates. The tone is archival, critical, and text-forward rather than promotional. The design should feel like a printed research dossier translated to the web: cream paper, dark ink, gold annotation marks, large serif headlines, and generous reading space.

The visual language supports the subject matter of *Excavating AI*: images are treated as evidence, not decoration. Screenshots and figures from the original precedent are presented intact, with captions that identify their role in the argument.

## Palette

- Paper background: warm cream and parchment tones.
- Primary text: near-black brown ink.
- Secondary text: muted brown-gray.
- Accent: restrained archival gold.
- Lines and rules: pale tan dividers.
- Image grounds: soft white paper.

## Typography

- Display type: `Playfair Display` for the title, section headings, captions with emphasis, and editorial moments.
- Interface/body type: `Rubik` for navigation, labels, metadata, buttons, and compact supporting text.
- Headings are large and literary, while body copy remains calm and readable.
- All letter spacing stays neutral; the design relies on scale, contrast, and spacing instead of exaggerated tracking.

## Page Structure

- Sticky header: institutional identity, course/archive title, and a simple About link.
- Section rail: scroll-aware navigation using gold star markers inspired by the reference aesthetic.
- Hero: large editorial title and metadata paired with an original ImageNet interface image from *Excavating AI*.
- Project facts: compact three-part metadata grid for medium, focus, and audience.
- Article sections: long-form archive reading flow with clear dividers.
- Image File section: a gallery of original precedent visuals.
- Source lists: numbered editorial bibliography entries with notes.
- Demo section: a small classifier interaction that explains reductive labeling.
- Footer: quiet archive identity.

## Components

### Header

The header is sticky and translucent, with a thin bottom rule. It keeps the page grounded in the Columbia GSAPP project-archive context while staying visually quiet.

### Section Rail

The rail uses decorative star markers and active-state highlighting. On wide screens it can sit beside the content; on medium and mobile screens it becomes a horizontal sticky strip to avoid overlapping the long title.

### Hero Figure

The hero figure must use original precedent material. The current image is the ImageNet Basic User Interface from *Excavating AI*. It is shown with `object-fit: contain` so the interface remains legible and is not cropped.

### Image Dossier

The Image File section includes original images downloaded from the project source:

- `assets/original/imagenet-interface-2.jpg`
- `assets/original/top-banner-skulls.png`
- `assets/original/imagenet-taxonomy.png`
- `assets/original/diff-face.png`
- `assets/original/msceleb.jpg`
- `assets/original/i-am-a-man.jpg`

These images should remain documentary and captioned. Avoid replacing them with generated imagery.

### Source Lists

Bibliographic entries use large serif numbers and thin rules. Each entry has a source line and a short interpretive note, matching the archive/dossier tone.

### Interactive Demo

The classifier demo is intentionally simple. Its purpose is not to simulate ImageNet Roulette accurately, but to show the conceptual reduction of a person into one administrative label. The panel is styled like a small editorial annotation rather than an app widget.

## Responsive Behavior

- Desktop: two-column hero with text and image side by side.
- Medium screens: section rail becomes a sticky horizontal strip.
- Mobile: single-column hero, scrollable section rail, stacked project facts, and one-column image gallery.
- Images use stable aspect ratios and `object-fit: contain` where preserving the original figure matters.

## Implementation Files

- `index.html`: semantic page structure and content.
- `style.css`: full visual system, responsive layout, and component styling.
- `script.js`: section-rail active state and classifier demo interaction.
- `assets/original/`: original precedent images from `https://excavating.ai/`.

## Design Rule

Do not use invented or generated images for the precedent itself. Any primary visual material should come from the original project or clearly cited related source material, and it should be captioned as evidence.
