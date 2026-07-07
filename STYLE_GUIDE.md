# Excavating AI Editorial Review Style Guide

## Aesthetic Direction

The site uses a black-and-white newspaper/magazine editorial aesthetic with interactive analytical plates. It should feel like a critical special issue: a masthead, paper texture, high-contrast serif headlines, column rules, captions, issue labels, restrained red editorial marks, and carefully framed image evidence.

The interface keeps the interactive concept tools, but visually they are treated as editorial diagrams and annotated feature modules rather than a dark AI dashboard. The precedent images remain the main evidence.

## Palette

- Paper: black-and-white newsprint cream.
- Primary ink: near-black.
- Body text: dark gray.
- Secondary notes: mid gray.
- Editorial red: active states, plate marks, section labels, source emphasis.
- No additional color families should dominate; supporting interface tones stay grayscale.

## Typography

- Headlines and body reading: Georgia / Times-style serif, with large display scale for the hero and tighter serif hierarchy for sections.
- Metadata, captions, controls, and section numbers: `IBM Plex Mono`.
- Supporting deck text: `Space Grotesk` for contrast against the serif headlines.
- The overall rhythm should feel like a magazine feature: large display headline, clean sans-serif deck, dense captions, and compact editorial controls.

## Page Structure

- Sticky masthead: identifies the page as a GSAPP editorial review.
- Section rail: numbered navigation styled like a magazine contents index.
- Hero: special-issue title, deck, field labels, and original ImageNet interface image.
- Overview: editorial framing plus three signal cards: input, operation, output.
- Interactive Feature: data-pipeline simulator and evidence lens.
- Image File: original precedent visuals as clickable editorial/architectural plates.
- Format/Audience: concise contextual statement.
- Part 2 / Layers of Analysis: ontological, historical/contextual, and visual/aesthetic analysis.
- Source lists: bibliography in numbered newspaper-reference style.
- Classification Demo: interactive output panel showing label, confidence, and critique.

## Components

### Masthead

The header uses print rules, uppercase metadata, and a centered publication title. It should feel like the top of a special issue rather than a software toolbar.

### Image Plates

The Image File section treats each original image as an interactive editorial plate. Clicking a plate activates image motion and annotation overlays:

- Archive strip: the skull banner pans like a typological image strip.
- Taxonomic section: the ImageNet taxonomy zooms and receives a section line.
- Measurement elevation: the Diversity in Faces image receives dimension lines.
- Population grid: the MS-Celeb montage zooms into selected windows.
- Counter-image: the Memphis sanitation workers image pushes the protest signs forward.

Each plate updates a live readout below the image grid. The movement should explain why the image exists in the precedent study.

### Pipeline Simulator

The pipeline simulator remains interactive, but is styled as a magazine diagram. It explains:

1. Collect images
2. Label images
3. Inherit taxonomy
4. Train model
5. Public critique

Each stage updates the output text, active track, and neutrality/risk meter.

### Evidence Lens

The evidence lens swaps between original precedent visuals and gives each one an interpretive caption. It supports the argument that the project builds critique through screenshots, taxonomies, dataset montages, and counter-images.

### Ontology Cards

The ontology cards make the project's building blocks interactive:

- Material layer
- Classification layer
- Labor layer
- Technical layer
- Institutional layer
- Political layer

Selecting a card updates a live explanatory panel.

### Classification Demo

The demo simulates the reductive logic of ImageNet Roulette. A sample is assigned a label and confidence score, followed by critique text explaining what the output hides.

## Original Image Assets

The site uses original images downloaded from `https://excavating.ai/`:

- `assets/original/imagenet-interface-2.jpg`
- `assets/original/top-banner-skulls.png`
- `assets/original/imagenet-taxonomy.png`
- `assets/original/diff-face.png`
- `assets/original/msceleb.jpg`
- `assets/original/i-am-a-man.jpg`

Do not replace these with generated images. The project depends on the evidentiary force of the original materials.

## Responsive Behavior

- Desktop: magazine-style two-column hero; pipeline and evidence lens side by side; image plates in a feature grid.
- Medium screens: section rail becomes a horizontal contents strip.
- Mobile: single-column layout; all interactive modules stack vertically.
- Controls keep stable sizes so interaction does not shift the layout.

## Implementation Files

- `index.html`: semantic structure, research content, and interactive component markup.
- `style.css`: newspaper/magazine aesthetic, responsive layout, editorial panels, image plates, controls.
- `script.js`: section navigation active state, pipeline simulator, evidence lens, image plates, ontology cards, and classifier demo.
- `assets/original/`: original images from the precedent.

## Design Rule

The site should read like an interactive critical publication. Avoid generic AI spectacle. Every visual and interaction should clarify one of the project claims: datasets are built, labels are political, taxonomies encode assumptions, and classification turns people into machine-readable categories.
