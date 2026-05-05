# Vinkura AI - Developer & AI Assistant Guide

## Project Domain: India's Public Systems
Vinkura AI provides operational intelligence software for Indian government entities, focusing on police, administration, and inter-departmental interoperability.

## Implementation Details

### Navigation (`Navbar.tsx`)
- **Visuals**: Logo is `VINKURA`, weight `300`, uppercase.
- **Desktop**: Links only (Products, Company, Impact Studies, About Us). Hamburger is intentionally hidden.
- **Mobile**: Hamburger opens full-screen overlay.
- **State Logic**: 
  - `mobileMenuOpen`: Controls overlay visibility.
  - `Body Scroll Lock`: `useEffect` hook ensures background scrolling is disabled when menu is open.
- **Style**: Floating Glassmorphism with `20px` blur.

### Content Strategy (`FeaturedSection.tsx` & `SoftwareList.tsx`)
- Content is driven by high-impact, real-world deployments in India (Amarnath Yatra, Bareilly Police).
- **Featured**: 6-second auto-play carousel with tactical imagery.
- **Software**: Hover-revealed imagery with detailed descriptions of Core, Sentinel, Forge, Orbit, DDMS, and E-Maalkhana.

### The "Operating Layer" Philosophy
The website's structure mirrors the software:
- **Hero**: Clear statement of intent.
- **Carousel**: Proof of deployment.
- **List**: Deep dive into tools.
- **Bridge**: The underlying challenge and mission.
- **Partners**: Direct quotes from government heads.

## Tech Stack (Reminder)
- **Next.js 14+ (App Router)**
- **TypeScript**
- **styled-jsx** for 95% of component styling.
- **globals.css** for variables and `.container` utility.

## Future Tasks
1. **ProductTabs.tsx**: Currently a placeholder. Should be either removed or populated with Industry categories for deep filtering if more content is added.
2. **Impact Studies**: Links are currently placeholders.
3. **Multilingual Support**: Mentioned in `SoftwareList` ("Multilingual"). Consider adding a language switcher in the future.
4. **Data Ownership**: Maintain the "Sovereign Infrastructure" messaging in all copy.
