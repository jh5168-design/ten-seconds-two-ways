---
name: Ten Seconds Two Ways
description: A classroom timer experiment presented as a ruled lab record
colors:
  paper: "#f4efdf"
  paper-deep: "#e8dfc9"
  ink: "#1d2928"
  muted-ink: "#53605b"
  annotation-red: "#a43a2b"
  progress-blue: "#215f73"
  progress-blue-pale: "#bed7d8"
  loader: "#aaa28f"
  notes-muted: "#c4cec7"
  notes-accent: "#d58b74"
typography:
  display:
    fontFamily: "Georgia, Times New Roman, serif"
    fontSize: "clamp(3rem, 7.6vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Georgia, Times New Roman, serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Trebuchet MS, Verdana, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.08em"
  timer:
    fontFamily: "Courier New, monospace"
    fontSize: "clamp(3rem, 7vw, 5.3rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.04em"
rounded:
  control: "6px"
  choice: "999px"
spacing:
  tight: "0.7rem"
  standard: "1rem"
  section: "clamp(3rem, 7vw, 6rem)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "0.8rem 1.15rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.progress-blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "0.8rem 1.15rem"
    height: "48px"
  choice-unselected:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.choice}"
    padding: "0.7rem 1rem"
  choice-selected:
    backgroundColor: "{colors.progress-blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.choice}"
    padding: "0.7rem 1rem"
---

# Design System Ten Seconds Two Ways

## Overview

**Creative North Star: "The Lab Notebook"**

The interface treats the timing comparison as one page in a classroom experiment notebook. Warm paper, ruled lines, dark ink, restrained annotations, and timer numerals make the page feel observed and recorded without presenting it as formal research.

The experience stays readable and direct. The first viewport introduces the question at editorial scale, while the experiment itself uses a divided trial sheet. Motion appears only inside the timed trials and progress feedback.

**Key Characteristics:**

- Warm paper surfaces with dark green-black ink
- Editorial serif headlines paired with compact sans-serif labels
- Monospaced numerals reserved for measured time
- Red annotations for questions and trial labels
- Blue reserved for designed progress, selected choices, and hover states

## Colors

The palette resembles ink, correction marks, and cool progress notation on aged paper.

### Primary

- **Progress Blue** (#215f73): Guided progress, selected choices, and active button states.

### Secondary

- **Annotation Red** (#a43a2b): Questions, trial labels, and the timer colon.
- **Progress Blue Pale** (#bed7d8): The empty portion of progress tracks.

### Neutral

- **Notebook Paper** (#f4efdf): Main surface and light foreground text.
- **Deep Paper** (#e8dfc9): Supporting warm neutral.
- **Ink** (#1d2928): Primary text, dark sections, dividers, and default buttons.
- **Muted Ink** (#53605b): Secondary explanations and status text on paper.
- **Loader Taupe** (#aaa28f): Inactive stroke on the minimal-feedback spinner.
- **Notes Muted** (#c4cec7): Secondary copy on the dark notes section.
- **Notes Accent** (#d58b74): Definition labels on the dark notes section.

**The Measured Color Rule.** Red marks the question and blue marks designed feedback. Neither color replaces the dark ink used for ordinary reading.

## Typography

**Display Font:** Georgia with Times New Roman fallback

**Body Font:** Georgia with Times New Roman fallback

**Label Font:** Trebuchet MS with Verdana and sans-serif fallbacks

**Timer Font:** Courier New with monospace fallback

**Character:** The serif voice makes the page read like a written record. Sans-serif labels organize actions and metadata, while monospaced numerals identify measured time.

### Hierarchy

- **Display** (400, clamp(3rem, 7.6vw, 6rem), 0.95): First-viewport thesis only.
- **Headline** (400, clamp(2.4rem, 5vw, 4.8rem), 1): Major page sections.
- **Title** (400, 1.5rem): Trial names.
- **Body** (400, 1rem to 1.08rem, 1.55): Explanations, notes, and statuses with a preferred measure near 62 characters.
- **Label** (700, 0.72rem to 0.8rem, 0.04em to 0.1em, uppercase where used): Navigation, trial labels, and compact metadata.
- **Timer** (700, clamp(3rem, 7vw, 5.3rem), 1): Countdown values with tabular numerals.

**The Measurement Voice Rule.** Monospace appears only where the interface displays time or another measured value.

## Layout

The page uses a centered container capped at 1180 pixels with one rem of minimum outer breathing room. Major sections are paper sheets separated by two rem and lifted from the warm background. The opening uses a two-column composition; the experiment uses two equal trial columns divided by a single vertical rule.

At 780 pixels and below, the opening and trial sheet become single-column sequences. The trial divider rotates into a horizontal rule, the notes comparison becomes stacked, and no horizontal overflow is allowed.

## Elevation & Depth

Paper sheets use one ambient shadow, `0 18px 50px rgba(59, 48, 28, 0.16)`, to separate them from the desk-like background. Interactive buttons use a smaller downward shadow, `0 5px 14px rgba(29, 41, 40, 0.18)`. Borders and tonal changes handle all other structure.

**The Paper Stack Rule.** Wide ambient shadows belong to whole paper sheets. Controls receive only the smaller action shadow, and internal content remains flat.

## Shapes

Paper sections and experiment divisions use straight edges. Action buttons use a restrained 6 pixel radius. Fully rounded pills are reserved for the three compact reflection choices; they are not a general container shape.

## Components

### Buttons

- **Shape:** Restrained rectangle with a 6 pixel radius and a 48 pixel minimum height.
- **Primary:** Ink background with paper text and 0.8rem by 1.15rem padding.
- **Hover and Focus:** Hover changes to Progress Blue. Focus uses a 3 pixel Progress Blue ring with a 4 pixel offset.
- **Disabled:** Fifty percent opacity, no shadow, and a not-allowed cursor.

### Chips

- **Style:** Reflection choices use a 1 pixel Ink border, transparent background, and full pill radius.
- **State:** Selected choices fill with Progress Blue and switch to white text.

### Cards and Containers

- **Corner Style:** Square paper sheets and trial regions.
- **Background:** Notebook Paper for the experiment and Ink for the explanatory notes section.
- **Shadow Strategy:** Only page-level paper surfaces use ambient depth.
- **Border:** Experiment structure uses 1 to 2 pixel Ink rules.

### Navigation

Navigation uses compact bold sans-serif labels with visible underlines and generous underline offset. It remains a single row on mobile and does not collapse into a menu for this small information set.

### Trial Sheet

Each trial combines a label, stage, status message, and start button. Trial A hides its numeric countdown. Trial B exposes the same countdown and adds a progress track and changing prompt. Both disable all start controls while a timer is active.

## Do's and Don'ts

### Do

- **Do** keep the same duration and spatial weight for both comparison trials.
- **Do** reserve blue for visible progress, selection, and active states.
- **Do** keep status messages readable even when motion is reduced.
- **Do** use ruled texture only on the notebook surfaces that justify it.

### Don't

- **Don't** imply that personal impressions are research results.
- **Don't** use decorative cards to subdivide information already organized by rules and spacing.
- **Don't** add extra motion outside the timed experience.
- **Don't** use monospaced type as a general technical costume.
