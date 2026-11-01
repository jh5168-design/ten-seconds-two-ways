# Ten Seconds Two Ways

**Designing the Structure and Style of an Interactive Experience**

An interactive web-based interface experiment exploring perceived duration and feedback design.

- **Live Site**: [https://jh5168-design.github.io/ten-seconds-two-ways/](https://jh5168-design.github.io/ten-seconds-two-ways/)
- **Repository**: [https://github.com/jh5168-design/ten-seconds-two-ways](https://github.com/jh5168-design/ten-seconds-two-ways)

---

## 1. Project Overview

**"The clock stays the same. The experience does not."**

*Ten Seconds Two Ways* is a single-page interactive experience investigating human perception of waiting time in digital interfaces. Users execute two comparative trials that both last exactly **10.0 seconds**:
- **Trial A (Minimal Feedback)**: Displays an indeterminate spinning loader and a static "Please wait…" message, concealing the elapsed time and remaining duration.
- **Trial B (Designed Feedback)**: Exposes a real-time countdown timer (10.0s to 0.0s), a progress bar, dynamic phase-based status messages, and a rhythmic 5-dot pulse animation.

Upon completing both trials, an impression recording form unlocks, inviting users to reflect on which wait felt subjectively shorter.

---

## 2. Design System: "The Classroom Lab Notebook"

The interface adopts a bespoke design system inspired by a laboratory observation record:
- **Surfaces**: Warm aged paper (`#f4efdf`) with ruled notebook lines (`repeating-linear-gradient`).
- **Typography**: Editorial serif headers (Georgia / Times New Roman) paired with crisp sans-serif labels (Trebuchet MS / Verdana) and monospaced measurement numerals (Courier New).
- **The Measured Color Rule**: Dark green-black ink (`#1d2928`) for readable content; annotation red (`#a43a2b`) exclusively for questions, trial badges, and timer colons; progress blue (`#215f73`) for designed feedback tracks and interactive states.
- **Elevation**: Ambient page-level drop shadows emulate physical paper sheets resting on a wooden desk.

---

## 3. Accessibility & Standards

Built strictly to WCAG 2.1 AA accessibility guidelines:
- **Semantic Structure**: Proper Landmark elements (`header`, `nav`, `main`, `section`, `article`, `form`, `fieldset`, `footer`).
- **Screen Reader Support**: Dedicated `role="status"` and `aria-live="polite"` regions announce trial execution and completion states.
- **Keyboard Navigation**: Distinct high-visibility focus indicators (`outline: 3px solid #0b6e83; outline-offset: 4px`) and a skip-to-content shortcut.
- **Reduced Motion**: Full support for `prefers-reduced-motion: reduce`, dropping animation durations to `.001ms` while maintaining clear visual state changes.

---

## 4. File Structure

```text
├── index.html        # Semantic HTML5 markup and accessible component hierarchy
├── styles.css        # CSS3 layout, custom properties, responsive queries, and animations
├── script.js         # Precise RAF timer engine, state transitions, and form control
├── DESIGN.md         # Comprehensive design system specifications and tokens
├── PRODUCT.md        # Product requirements, constraints, and user principles
└── README.md         # Project documentation and setup guide
```

---

## 5. Local Setup

No external build tools, compilers, or package managers required. Simply open `index.html` in any modern web browser.

To serve locally:
```bash
python3 -m http.server 8000
# Open http://localhost:8000 in your browser
```
