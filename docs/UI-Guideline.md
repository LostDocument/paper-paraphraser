# UI/UX Design Guidelines

## Project Title

**Client-Side Local Document Similarity & Plagiarism Indication Web Application**

---

## Version Information

| Item              | Description                                      |
| ----------------- | ------------------------------------------------ |
| Document Version  | 1.0                                              |
| Date              | January 2026                                     |
| Author            | (Your Name)                                      |
| Status            | Design Guideline                                 |
| Intended Audience | UI/UX Designers, Frontend Developers, Evaluators |

---

## 1. Introduction

### 1.1 Purpose

This document defines the **UI/UX design guidelines** for the web application.  
It ensures that the interface:

- Is usable and readable for long analytical sessions
- Communicates results neutrally and responsibly
- Aligns with academic and research-oriented expectations

This guideline complements the **Software Requirements Specification (SRS)** and serves as a **single source of truth for UI decisions**.

---

### 1.2 Design Philosophy

> **The interface must support analysis, not judgment.**

The UI is designed as a **decision-support interface**, not an enforcement or accusation tool.

---

## 2. Design Style Definition

### 2.1 UI Style Name

**Academic Minimalism with Subtle Claymorphism**

---

### 2.2 Style Description

- **Academic Minimalism** as the core style:
  - Clean layouts
  - High readability
  - Information-first hierarchy
- **Subtle Claymorphism** applied selectively:
  - Soft surfaces for containers
  - Gentle depth for interactive elements
  - No visual dominance over content

---

### 2.3 Design Goals

- Reduce cognitive load
- Encourage careful reading and comparison
- Avoid emotional stress or accusation
- Maintain credibility in academic contexts

---

## 3. Color Guidelines

### 3.1 Primary Color

**Primary Color:** Muted Academic Blue

**Design Intent:**

- Trustworthy
- Neutral
- Suitable for academic and analytical tools

**Usage:**

- Primary action buttons (e.g., Analyze)
- Active states
- Section headers
- Icons indicating interaction or status

**Restrictions:**

- Do not use as body text color
- Do not use for plagiarism text highlights

---

### 3.2 Neutral Colors (Base Palette)

| Purpose         | Color Guidance     |
| --------------- | ------------------ |
| Background      | White or off-white |
| Surface / Cards | Light gray         |
| Primary text    | Dark gray          |
| Secondary text  | Medium gray        |

Neutral colors should dominate the interface.

---

### 3.3 Status Colors (Secondary Only)

| Status            | Color Guidance        |
| ----------------- | --------------------- |
| Low similarity    | Soft green            |
| Medium similarity | Muted amber           |
| High similarity   | Muted red / brown-red |

**Rules:**

- Status colors must never replace text explanations
- Avoid bright or alarming tones

---

## 4. Typography Guidelines

### 4.1 Typography Principles

- Readability over personality
- Comfortable for long-form reading
- Clear hierarchy

---

### 4.2 Text Categories

| Category      | Style Guidance                            |
| ------------- | ----------------------------------------- |
| Headings      | Calm, medium-weight                       |
| Body text     | High readability, comfortable line height |
| Labels        | Clear, concise                            |
| Code / hashes | Monospace                                 |

---

### 4.3 Typography Rules

- Avoid decorative fonts
- Avoid excessive font weights
- Maintain consistent spacing

---

## 5. Layout Guidelines

### 5.1 Overall Layout Structure

```

[ Header ]
Application Title
Short Description

[ Input Section ]
Upload / Paste Area
Word Count
Analyze Button

[ Summary Section ]
Similarity Percentage
Risk Indicator
Explanation Text

[ Breakdown Section ]
Source Similarity List

[ Comparison Section ]
Side-by-side Text Comparison

[ Footer ]
Export / Reset
```

---

### 5.2 Layout Principles

- Vertical flow (top to bottom)
- Progressive disclosure
- Avoid modal dialogs for core content
- Use expandable sections for details

---

## 6. Component Design Guidelines

### 6.1 Claymorphism Usage Rules

**Allowed for:**

- Cards / containers
- Upload areas
- Buttons
- Section grouping

**Not allowed for:**

- Long text areas
- Plagiarism highlights
- Data tables
- Analysis results typography

**Depth Rules:**

- Soft shadows only
- No heavy blur
- No exaggerated depth

---

### 6.2 Buttons

- Primary button uses primary color
- Secondary buttons use neutral tones
- Disabled state clearly visible

---

### 6.3 Tables & Lists

- Simple grid layout
- Clear alignment
- Sortable by similarity score
- Expandable rows for details

---

## 7. Highlighting & Comparison Guidelines

### 7.1 Highlight Principles

- Soft background highlights
- Rounded edges
- Same color = same source
- Tooltip on hover explaining source

---

### 7.2 Split Comparison View

```
┌────────────────────┬────────────────────┐
│ User Document │ Reference Document │
│ (Highlighted) │ (Highlighted) │
└────────────────────┴────────────────────┘
```

---

### 7.3 Highlight Restrictions

- No flashing effects
- No underlines as primary indicator
- Avoid red-only highlighting

---

## 8. UX Writing & Microcopy

### 8.1 Tone of Voice

- Neutral
- Informative
- Supportive
- Non-judgmental

---

### 8.2 Approved Terminology

| Avoid       | Use Instead           |
| ----------- | --------------------- |
| Plagiarized | Similar text detected |
| Cheating    | Similarity indication |
| Violation   | Matching segments     |

---

### 8.3 Example Microcopy

✅ “Some text segments are similar to reference sources.”  
❌ “Plagiarism detected in your document.”

---

## 9. Accessibility Guidelines

### 9.1 Accessibility Principles

- Sufficient color contrast
- Do not rely on color alone
- Keyboard navigable
- Readable font sizes

---

### 9.2 Reading Comfort

- Adequate line spacing
- Limited line width
- Minimal visual noise

---

## 10. Emotional & Ethical Considerations

### 10.1 Emotional Safety

- Avoid alarming visuals
- Avoid aggressive language
- Encourage review, not fear

---

### 10.2 Ethical Positioning

The interface must reinforce that:

- Similarity ≠ plagiarism
- Human judgment is essential
- The system supports learning and improvement

---

## 11. Design Acceptance Criteria

A design is considered acceptable if it:

- Prioritizes readability over decoration
- Uses claymorphism subtly
- Avoids accusatory language
- Clearly explains results
- Supports long reading sessions comfortably

---

## 12. Future UI Considerations (Out of Scope)

- Dark mode
- Custom themes
- User personalization
- Multi-language support

---

## Final Design Statement

This UI design guideline defines a **calm, academic, and supportive interface** that enables users to understand document similarity clearly while maintaining credibility, ethical responsibility, and usability.
