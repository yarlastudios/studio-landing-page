# Yarla Studios — Design Language & System

## 1. Design Philosophy

Yarla Studios presents itself as an independent design and engineering practice. The visual identity reflects a **craft-first, editorial sensibility** — confident, minimal, and tactile. Every surface communicates precision, contrast, and considered restraint.

**Core principles:**
- **Craft over decoration** — every element has intent. Nothing is purely ornamental.
- **High contrast, low noise** — bold typography, generous whitespace, minimal chrome.
- **Tactile digital** — grain textures, smooth physics, magnetic interactions bring warmth to the screen.
- **Typographic hierarchy as structure** — layout is driven by type scale, not boxes.
- **Dark/light polarity** — the site oscillates between warm paper tones and deep ink, using blue as the unifying signal.

---

## 2. Color System

### Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--blue` | `#1F2BFF` | Primary brand color, links, accents, dark-section highlights |
| `--blue-deep` | `#0A14CC` | Deep blue for hover/active states |
| `--blue-soft` | `#E7E8FF` | Soft blue for dark-section tags and emphasis |
| `--ink` | `#0A0A12` | Primary text, dark section backgrounds |
| `--ink-2` | `#1A1A24` | Secondary text |
| `--muted` | `#6B6B7A` | Tertiary text, metadata, captions |
| `--paper` | `#F6F5F1` | Main page background |
| `--paper-2` | `#ECEAE3` | Alternate/section background |
| `--line` | `#D9D6CC` | Borders, dividers, rules |
| `--white` | `#FFFFFF` | Card backgrounds, inverted text |

### Color principles
- **One accent color** — blue is the sole chromatic accent. All other colors are neutrals.
- **Warm neutrals** — paper tones have a subtle warmth (yellow-green cast), not sterile grey.
- **Contextual inversion** — sections alternate between paper/ink backgrounds to create rhythm.
- **Opacity as a tool** — white text on dark bg uses opacity (0.45–0.85) rather than separate grey tokens.

---

## 3. Typography

### Font stack

| Role | Font | Weights | Fallback |
|------|------|---------|----------|
| Display / UI | `Inter Tight` | 300, 400, 500, 600, 700, 800 | system-ui, sans-serif |
| Monospace / Meta | `JetBrains Mono` | 400, 500 | ui-monospace, monospace |
| Serif / Emphasis | `Instrument Serif` | 400 (italic) | Georgia, serif |

### Size ramps

- **Hero title** — `clamp(48px, 9.5vw, 168px)` / 700 weight / -0.045em tracking
- **Big heading** — `clamp(36px, 5.5vw, 88px)` / 600 weight / -0.035em tracking
- **Section heading** — `clamp(28px, 4.4vw, 64px)` (work titles)
- **Body** — 16px–18px / 400–500 weight
- **Meta / Mono** — 11px–13px / 500 weight / uppercase / wide letter-spacing

### Typographic principles
- **Expressive scale** — The difference between smallest (11px mono) and largest (168px display) is 15×, creating dramatic hierarchy.
- **Negative tracking** — All display sizes use negative letter-spacing for compact, confident word shapes.
- **Mono for structure** — All metadata, labels, tags, and numbers use JetBrains Mono for visual separation from body content.
- **Serif for emphasis only** — Instrument Serif italic is exclusively used inside `<em>` tags to add a hand-crafted, editorial voice.

---

## 4. Spacing & Layout

### Grid
- **12-column grid** used in the intro section (`grid-template-columns: repeat(12, 1fr)`)
- Sections use a flexible `section-head` layout of `1fr 2fr` for tag + heading pairing

### Padding
- Section padding: `120px var(--pad-x)` where `--pad-x: clamp(20px, 4vw, 64px)`
- Responsive collapse: sections reduce to `80px` padding below 700px

### Section rhythm
Every major section follows:
```html
<section class="section-name" id="section-name">
  <div class="section-head">
    <div class="section-tag"><span class="tag-num">/NN</span><span>Label</span></div>
    <h2 class="big-heading">Heading <em>emphasis</em></h2>
  </div>
  <!-- section content -->
</section>
```

### Responsive breakpoints
- **1100px** — nav links hide
- **1000px** — services grid goes 2 columns
- **900px** — grid collapses to single column, cursor hidden
- **800px** — various layout stacks
- **700px** — single column everywhere, reduced padding

---

## 5. Component System

### 5.1 Custom Cursor
- Fixed-position div that follows mouse with lerp easing (0.22 factor)
- States: `link`, `magnet`, `view`, `card` — each changes ring size, color, or label
- Hidden on touch devices (media query)
- Uses `mix-blend-mode: difference` for contrast independence

### 5.2 Buttons
- **Primary** (`btn-primary`) — Ink background, blue fill-on-hover (slide up from bottom)
- **Ghost** (`btn-ghost`) — Transparent with line border, darkens on hover
- **Outline** (`btn-outline`) — Ink border, fills ink on hover
- All buttons share: pill shape (999px radius), hover-arrow slide, label slide-up reveal
- Magnetic effect via JS on `[data-cursor="magnet"]`

### 5.3 Navigation
- Fixed header, scroll-aware (`scrolled` class adds blur + bg + smaller padding)
- 3-column grid layout: logo | links | CTA + clock
- Logo hover rotates SVG mark 180°
- Nav links have slide-up background fill on hover
- CTA button has dual-line text swap on hover

### 5.4 Hero
- Full-viewport-height section with animated morphing orb (blue gradient blobs)
- Title reveals with staggered rise animation (1.1–1.4s delays)
- Badge cycles through words (average → generic → boring → flat)
- Scroll indicator with animated line

### 5.5 Marquee
- Infinite scroll of capability keywords separated by blue diamond dots
- 38s animation loop, repeats content for seamless loop

### 5.6 Work List
- Hover rows with background fill (scaleY from bottom)
- Floating image peek panel follows cursor with lerp
- 6 project entries with number, title, meta tags, year

### 5.7 Services Grid
- 3-column grid with 1px gaps
- Each card has blue fill-on-hover (slide up from bottom)
- Decorative art elements (rings, windows, code, stacks, waves, graphs)
- Numbered 01–06

### 5.8 Process Timeline
- 4 steps in a 3-column grid (side | body | line)
- Each step has a vertical indicator line that turns blue on hover
- Number blinks on hover

### 5.9 Stats
- 4-column grid, blue background
- Animated counters on scroll (cubic ease-out, 1600ms duration)
- Hover changes background to ink

### 5.10 Testimonial Carousel
- 3 quotes with fade/slide transitions
- Manual navigation via arrows and dots
- Auto-advances every 6.5 seconds

### 5.11 Journal Cards
- 3-column card grid with border
- Hover: lift -4px, border darkens, arrow moves

### 5.12 Contact Form
- 2-column form layout
- Chip-style tag selectors with toggle state
- Submit animates button text to "Brief sent ✓"
- Full-width dark section with radial gradient glow

### 5.13 Footer
- Massive Yarla Studios wordmark (up to 280px / 18vw)
- 4-column link grid
- Status indicator with pulsing green dot

---

## 6. Motion & Interaction

### Timing
- **Primary easing**: `cubic-bezier(.7,0,.2,1)` — fast-in, slow-out
- **Reveal easing**: `cubic-bezier(.16,1,.3,1)` — overshoot-like smoothness
- **Duration range**: 250ms (cursor states) to 1200ms (title reveals)

### Interaction patterns
- **Magnetic pull** — buttons displace toward cursor on hover (25% x, 40% y)
- **Lerp following** — cursor and peek panel use smooth interpolation (0.18–0.22 factor)
- **Fill hover** — backgrounds slide in from bottom (nav links, service cards, work items)
- **Slide reveal** — text lines slide up on load (hero title)
- **Scroll reveal** — IntersectionObserver with 0.15 threshold adds `.in` class
- **Counter** — cubic ease-out counting on scroll (0.5 threshold)

### Animation reference
- `@keyframes rise` — hero title line reveal
- `@keyframes morph` — orb shape-shifting
- `@keyframes float` — slow positional drift
- `@keyframes marq` — infinite marquee scroll
- `@keyframes pulse` — green dot glow
- `@keyframes wv` — service card wave bars
- `@keyframes cycle` — hero badge word swap

---

## 7. Design Tokens (CSS Custom Properties)

```css
:root {
  --blue: #1F2BFF;
  --blue-deep: #0A14CC;
  --blue-soft: #E7E8FF;
  --ink: #0A0A12;
  --ink-2: #1A1A24;
  --muted: #6B6B7A;
  --paper: #F6F5F1;
  --paper-2: #ECEAE3;
  --line: #D9D6CC;
  --white: #FFFFFF;

  --f-display: 'Inter Tight', system-ui, sans-serif;
  --f-mono: 'JetBrains Mono', ui-monospace, monospace;
  --f-serif: 'Instrument Serif', Georgia, serif;

  --pad-x: clamp(20px, 4vw, 64px);
  --ease: cubic-bezier(.7,0,.2,1);
  --ease-out: cubic-bezier(.16,1,.3,1);
}
```

---

## 8. Content Voice

- **Tone**: Confident, direct, slightly editorial. Speaks in first-person plural ("we", "our").
- **Structure**: Short sentences. Minimal adjectives. Numbers and facts lead (e.g., "14-person studio", "62 engagements").
- **Section naming**: `/01`–`/07` numbered index creates a magazine-like table of contents.
- **Emphasis pattern**: Key phrases wrapped in `<em>` (Instrument Serif italic) to add a hand-annotated feel.