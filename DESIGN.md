# DESIGN.md — Impeccable Design System & 21st.dev Motion Language

## 1. Color System (Strict OKLCH Perceptual Palette)
No pure `#000000` or `#ffffff`. All neutrals are subtly tinted toward Hostinger's signature violet hue (`285°`).

- `--surface-canvas`: `oklch(98.6% 0.004 285)` (Tinted alabaster-violet canvas)
- `--surface-elevated`: `oklch(99.5% 0.002 285)` (Crisp elevated card surface)
- `--surface-subtle`: `oklch(95.8% 0.014 285)` (Soft architectural lavender-gray)
- `--surface-obsidian`: `oklch(14.5% 0.032 285)` (Deep Hostinger cosmos dark surface)
- `--surface-obsidian-elevated`: `oklch(19.5% 0.042 285)`
- `--ink-primary`: `oklch(16.5% 0.028 285)` (Deep violet-charcoal, >14:1 contrast)
- `--ink-secondary`: `oklch(42% 0.03 285)` (Accessible muted slate, >5.5:1 contrast)
- `--ink-on-dark`: `oklch(97.5% 0.006 285)`
- `--ink-muted-on-dark`: `oklch(78% 0.025 285)` (Strict >=4.5:1 contrast on dark)
- `--brand-violet`: `oklch(51% 0.24 285)` (Hostinger `#673de6` in OKLCH)
- `--brand-violet-hover`: `oklch(45% 0.24 285)`
- `--brand-mint`: `oklch(68% 0.16 172)` (Hostinger Emerald `#00b090`)
- `--brand-mint-surface`: `oklch(94% 0.045 172)`
- `--brand-mint-ink`: `oklch(32% 0.09 172)`
- `--border-hairline`: `oklch(90% 0.016 285)`
- `--border-strong`: `oklch(82% 0.035 285)`

## 2. Anti-Pattern Guardrails (Impeccable Rules)
1. **No Cardocalypse**: Never nest bordered boxes inside bordered cards. Specs and pricing inside a plan card use clean hairline dividers (`1px solid var(--border-hairline)`) and typographic alignment—never sub-boxes.
2. **No Emoji Clutter**: Replace juvenile emojis (🔥, ⭐, 🤖, 🚀, 💎) with crisp 1.5px geometric SVG icons and clean typographic badges.
3. **No Muddy Glowing Orbs**: Use architectural subtle grid patterns (`radial-gradient` dot matrix / hairline beams) and 21st.dev interactive cursor-tracking spotlight borders.

## 3. Typography & Numeric Discipline
- **Arabic Display & UI**: `IBM Plex Sans Arabic` & `Readex Pro` (modern, technical, geometric Arabic — far superior to generic rounded templates).
- **Latin Display & UI**: `Plus Jakarta Sans` (Hostinger's official geometric grotesque).
- **Monospace / Numbers / Specs**: `JetBrains Mono` with `font-variant-numeric: tabular-nums` on all prices, countdown digits, vCPU/RAM specs, and savings calculations.

## 4. 21st.dev Motion & Interactive Micro-Patterns
- **Spotlight Border Cards**: Mouse-move CSS custom properties (`--mouse-x`, `--mouse-y`) illuminate a radial border and subtle surface sheen across pricing cards and bento blocks.
- **Animated Number Transitions**: Smooth digit interpolation when switching billing cycles (`1m`, `12m`, `24m`, `48m`) or currencies (`USD`, `AED`, `SAR`, `EGP`).
- **Spring Pill Switcher**: Tactilesegmented control with active elevation and discount indicator pills.
- **Staggered Entrance & Scroll Reveal**: Subtle cubic-bezier(`0.16, 1, 0.3, 1`) upward reveal.

