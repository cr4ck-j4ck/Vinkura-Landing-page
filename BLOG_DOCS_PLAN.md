# Vinkura AI: Blog & Documentation System Plan

This document provides instructions for an AI agent (LLM) to build the Vinkura AI Blog and Documentation platforms. These systems are intended to be eventually merged into the main Vinkura institutional website.

## 1. Technical Stack & UI Principles

To ensure seamless integration, follow these UI and technical standards:

- **Framework**: Next.js (App Router).
- **Language**: TypeScript, React.
- **Styling**: Vanilla CSS with `styled-jsx` for component-level isolation and Global CSS for shared tokens.
- **Design Aesthetic**:
    - **Palette**: Deep blacks (`#000000`), pure whites (`#ffffff`), and subtle greys (`#fafafa`, `#eeeeee`).
    - **Typography**: 
        - Primary: `Outfit` (Headings, for that premium institutional feel).
        - Secondary: `Inter` (Body text, for readability).
    - **Visuals**: High-contrast, minimalist, "Institutional Archive" aesthetic. Use grayscale or muted tones for images.
    - **Interactions**: Subtle fade-ins, smooth scroll, and premium hover effects (minimal transform, mostly border or opacity shifts).

## 2. Blog Website Plan (blogs.vinkura.in)

The blog should serve as the "Intellectual Core" of Vinkura, focusing on Sovereign AI, GovTech research, and deployment updates.

- **Layout**:
    - **Home**: A "Journal" style listing with a featured post spotlight.
    - **Post Page**: Wide-margin, readable typography focus. No sidebars, minimal distractions.
- **Content Categories**:
    - `Sovereign Intelligence`: Deep-dives into national AI strategy.
    - `Deployment Logs`: Technical field updates from institutional deployments.
    - `Operational Governance`: Theory and practice of AI in public safety.
- **SEO Strategy**: Focus on keywords like "Sovereign AI India", "Institutional Governance Software", "GovTech Modernization".

## 3. Documentation Plan (docs.vinkura.in)

The documentation should be the "Technical Reference" for institutional developers and system administrators.

- **Structure**:
    - **Foundation**: Getting started with Vinkura Core.
    - **Modules**: Deep-dives into Sentinel, Forge, Orbit, DDMS, E-Maalkhana, and E-CTC.
    - **Deployment**: Detailed guides for Orbit on-prem and edge orchestration.
    - **Governance & Audit**: Technical specifications for audit logs and policy-as-code.
- **UI Components**:
    - Side navigation for hierarchy.
    - Code blocks with high-contrast themes.
    - Clear, numbered institutional steps.
- **Search**: Fast, semantic search across all modules.

## 4. Integration Strategy

When building these as separate repositories/sites:
1.  **Shared Layout**: Ensure the `Navbar` and `Footer` match the main site exactly.
2.  **CSS Tokens**: Copy the `:root` variables from `app/globals.css` to maintain color and font consistency.
3.  **Routing**: Use absolute URLs for links between the blog/docs and the main site until they are merged into a single monorepo.

## 5. Tone of Voice

- **Institutional**: Professional, authoritative, and stable.
- **Non-Techy**: Avoid excessive "startup" jargon. Use "Institutional Infrastructure" instead of "Tech Stack". Use "Operational Outcome" instead of "Feature".
- **Sovereign**: Emphasize national control, data residency, and jurisdictional integrity.
