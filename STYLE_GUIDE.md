# Excavating AI Website Style Guide

## Aesthetic Direction

The website is designed as an interactive extension of the presentation visual language, not as a neutral academic page. Its core aesthetic is a corrupted research-poster / machine-vision magazine system:

- Black-and-white collage base with high contrast image fragments.
- Red used for urgency, warning, disappearance, and critical claims.
- Cyan used for annotation, scan fields, system layers, and computational overlays.
- Pixel deletion blocks, scan lines, reticles, measurement lines, bounding boxes, and interface fragments.
- Dense typographic hierarchy: oversized display headlines, compact monospace metadata, and readable sans-serif analysis text.
- Poster logic over card logic: each section behaves like a large composed sheet, with layered evidence and active controls.

The design should feel like it belongs to the same visual collection as the presentation materials: fractured faces, dataset grids, red/cyan label typography, archival evidence, and technical measurement graphics.

## Information Structure

The complete precedent study is organized into nine website sections:

1. Cover / Title Interface
   - Opens with a typographic title spread rather than the poster image.
   - Uses animated data texture, oversized type, and red/cyan system marks to establish the collection language.

2. Part 1 / Data Sheet
   - Authors, date, medium, dataset focus, audience, and central question.
   - Converts the assignment data sheet into a visual filing system.

3. Interactive System / Pipeline
   - Shows the project as a machine-vision chain:
     collect images, label, taxonomy, train, classify, critique.
   - Uses animated face layers and a CG scanner to connect software workflow with rhetorical meaning.
   - Stage buttons swap imagery as well as text, so the visual field changes with the concept.

4. Relational Diagram / Actors + Processes
   - Maps image subjects, datasets, annotators, taxonomies, authors, publics, institutional responses, and design critique.
   - Uses the black-field, thick-route language of Anatomy of an AI System as a visual reference.
   - Clickable nodes update a readout and highlight connected routes.
   - Includes a short thought-process note explaining how to read the diagram from data extraction to public critique.

5. Part 2 / Layers of Analysis
   - Ontological analysis.
   - Historical and contextual analysis.
   - Visual and aesthetic representation.
   - Includes clickable ontology nodes for images, labels, taxonomy, labor, models, and power.

6. Original Image File / Interactive Plates
   - Uses original Excavating AI images.
   - Each plate animates and updates an explanatory reading panel.

7. Part 3 / Method, Rhetoric, Practice
   - Opens with the relational diagram, so the methodology begins by mapping actors, resources, processes, and feedback loops.
   - Methodology: software approach, data uses and provenance, theoretical methods.
   - Rhetorical analysis: how the precedent argues and why it is critical.
   - Wider practice: links to Crawford's and Paglen's larger bodies of work.
   - Personal appraisal and criticism.

8. Assessment
   - Design takeaways.
   - Appraisal and ethical criticism.
   - React-based behavioral trace console that turns local browsing traces into an absurd machine label.

9. Sources
   - Source bibliography and visual-system note.

## Interaction Components

- Animated canvas field: moving network points, scan bars, and glitch pulses.
- Pipeline simulator: stage buttons update text, imagery, meters, and system chip.
- Relational map: SVG actor/process nodes update a live readout and route highlights.
- Part 2 layer tabs: switch between ontology, historical context, and visual representation.
- Ontology orbit: component buttons explain the project building blocks.
- Image plates: original images move, zoom, and receive overlay lines when selected.
- Method cards: Part 3 topics update a live readout.
- React irony console: records only local page interactions such as clicks, scroll depth, and section changes, then reveals a deliberately absurd identity label: "According to your operation log on this page, the machine has classified you as [label]. But that is absurd, is it not?" This component functions as a small political practice by making the violence of classification visible and ridiculous. The measured values are real local traces from the current browser session, while the label and confidence score are intentionally constructed as critique.
- Scramble mode: toggles a temporary corrupted display state.

## Typography

- Display: Archivo Black, used for large presentation-scale headlines and major labels.
- Interface metadata: IBM Plex Mono, used for navigation, tags, controls, and source labels.
- Analysis text: Space Grotesk, used for body copy and readable explanation.

The type contrast is intentional: loud poster headlines against precise technical metadata and clear analytic prose.

## Color Rules

- Primary paper: `#f4f3ef`
- Ink: `#060606`
- Cyan annotation: `#17c8ee`
- Red warning: `#ef2a20`
- White panels: `#ffffff`

The palette should remain mostly black, white, gray, cyan, and red. Avoid soft beige editorial styling, purple gradients, decorative blobs, or generic AI neon.

## Image Rules

- Use original Excavating AI images as evidence plates.
- Use the attached presentation materials as the visual key for the site.
- Reference images are used as texture and motion material, not as replacements for the precedent evidence.
- Generated images should not be used for conceptual evidence.

## Accessibility + Layout

- Buttons are real buttons and include readable text.
- Interactive updates use live regions where useful.
- The layout collapses to one column on mobile.
- Motion respects `prefers-reduced-motion`.
- Text remains inside its containers at mobile and desktop sizes.
