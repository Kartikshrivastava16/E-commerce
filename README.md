# 🛍️ ShopNest — Premium E-Commerce Web App

> **ApexPlanet Software Pvt Ltd · Task-5 Final Project**  
> Timeline: 9 Days · Built with HTML, CSS & JavaScript

![ShopNest Banner](https://img.shields.io/badge/ShopNest-E--Commerce-2563eb?style=for-the-badge)
![Task](https://img.shields.io/badge/Task-5%20Final%20Project-f59e0b?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Complete-16a34a?style=for-the-badge)

---

## 📌 Table of Contents

- [About the Project](#-about-the-project)
- [Task Requirements](#-task-requirements)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Pages Overview](#-pages-overview)
- [Products Catalogue](#-products-catalogue)
- [Performance Optimizations](#-performance-optimizations)
- [Cross-Browser Compatibility](#-cross-browser-compatibility)
- [Technologies Used](#-technologies-used)
- [How to Run](#-how-to-run)

---

## 📖 About the Project

**ShopNest** is a fully functional, multi-page e-commerce web application built as the **Capstone Final Project** for ApexPlanet Task-5. It integrates all skills learned — semantic HTML, responsive CSS, and dynamic JavaScript — into one complete, real-world shopping experience.

The store sells **20 genuine Indian market products** across Electronics, Fashion, Home & Living, and Sports categories — with real brands (boAt, Levi's, JBL, Prestige, etc.), accurate prices, discount percentages, and review counts.

---

## ✅ Task Requirements

All three requirements from the task brief are fully implemented:

### 1. 🏗️ Build a Full Web Application (Capstone Project)
| Requirement | Status |
|---|---|
| Integrate all skills into one complete web app | ✅ Done |
| Dynamic features (e-commerce site) | ✅ Cart, search, filter, sort |
| Uses HTML, CSS, and JavaScript | ✅ All three |
| Multiple pages with navigation | ✅ 5 pages |

### 2. ⚡ Optimize for Performance
| Optimization | Implementation |
|---|---|
| Minimize CSS | Single stylesheet with CSS Variables — no repetition |
| Lazy loading hints | `content-visibility: auto` on images |
| Reduce HTTP requests | All styles in one file; fonts via single Google Fonts link |
| GPU acceleration | `will-change: transform` on cards and navbar |
| Compositor-only transitions | Only `transform`, `opacity`, `box-shadow` animated |
| Reduced motion support | `@media (prefers-reduced-motion)` respected |
| Print stylesheet | Hides decorative elements when printing |

### 3. 🌐 Cross-Browser Compatibility & Mobile Responsiveness
| Feature | Details |
|---|---|
| Mobile-first responsive layout | CSS Grid `auto-fill/minmax`, fluid `clamp()` typography |
| Hamburger menu | Animated slide-down mobile nav |
| Chrome / Firefox / Safari / Edge | Vendor prefixes, Firefox scrollbar API, Safari flex-gap fallback |
| Custom select styling | Cross-browser `appearance: none` with SVG arrow |
| Input normalization | `-webkit-appearance` reset for all browsers |
| Dark mode | Full theme via CSS custom properties + toggle |
| Accessibility | `aria`-compatible, keyboard-navigable |

---

## ✨ Features

- 🛒 **Shopping Cart** — Add, remove, update quantities, persistent via `localStorage`
- 🔍 **Live Product Search** — Filters products in real time as you type
- 🗂️ **Category Filter** — Electronics, Fashion, Home, Sports
- 🔃 **Sort Options** — Price low→high, high→low, top rated
- 🌙 **Dark / Light Mode** — Toggle with preference saved across sessions
- 🔔 **Toast Notifications** — Non-intrusive "added to cart" feedback
- 📧 **Newsletter Signup** — With success confirmation
- 📬 **Contact Form** — With validation and success message
- 🎞️ **Scroll Animations** — Cards fade-in on scroll via IntersectionObserver
- 💰 **Discount Badges** — Auto-calculated % off shown in green
- ⭐ **Review Counts** — Formatted as `1.2L+` or `54K+` (Indian style)

---

## 📁 Project Structure

```
Task-5-Final-Project/
│
├── index.html          # Home page — Hero, Features, Featured Products, Newsletter
├── products.html       # All Products — Search, Filter, Sort
├── cart.html           # Shopping Cart — Qty controls, Order Summary, Checkout
├── about.html          # About ShopNest — Stats, Team
├── contact.html        # Contact — Info + Message Form
│
├── css/
│   └── style.css       # Complete stylesheet (responsive, dark mode, cross-browser)
│
├── js/
│   ├── main.js         # Cart logic, product card template, theme, animations
│   └── products-data.js # 20 real products with brands, prices, reviews
│
└── README.md           # This file
```

---

## 📄 Pages Overview

### 🏠 Home (`index.html`)
- Animated hero section with CTA buttons
- 4 feature highlights (Free Shipping, Returns, Secure Payment, Gift Wrap)
- 4 featured products grid
- Newsletter subscription form
- Full footer with links and contact info

### 🛍️ Products (`products.html`)
- All 20 products displayed in a responsive grid
- Live search bar
- Category dropdown filter
- Sort by price / rating
- Empty state message when no results found

### 🛒 Cart (`cart.html`)
- Lists all added items with emoji, name, price, quantity controls
- Increase / decrease / remove items
- Real-time subtotal and total calculation
- Sticky order summary sidebar
- One-click checkout with confirmation

### 👥 About (`about.html`)
- Company story and mission
- Stats: Customers, Products, Brands, Rating
- Animated stacked cards visual
- Team member cards

### 📞 Contact (`contact.html`)
- Contact info: email, phone, address, hours
- Full message form with Name, Email, Subject, Message
- Success message on submit

---

## 🛒 Products Catalogue

20 genuine products from real Indian market brands:

| # | Product | Brand | Category | Price |
|---|---|---|---|---|
| 1 | Airdopes 141 TWS Earbuds | boAt | Electronics | ₹1,299 |
| 2 | Redmi 13C 5G (6GB+128GB) | Xiaomi | Electronics | ₹11,999 |
| 3 | Ninja Call Pro Smartwatch | Fire-Boltt | Electronics | ₹1,799 |
| 4 | MK215 Wireless Keyboard & Mouse | Logitech | Electronics | ₹1,595 |
| 5 | Go 3 Portable Bluetooth Speaker | JBL | Electronics | ₹2,499 |
| 6 | Mi 32" Smart TV 4A | Xiaomi | Electronics | ₹17,499 |
| 7 | Men's Polo T-Shirt | US Polo Assn. | Fashion | ₹699 |
| 8 | 511 Slim Fit Jeans | Levi's | Fashion | ₹2,099 |
| 9 | Unisex Foldable Backpack 30L | Wildcraft | Fashion | ₹1,299 |
| 10 | Analog Men's Watch | Fastrack | Fashion | ₹1,295 |
| 11 | Iris 750W Mixer Grinder | Prestige | Home | ₹2,195 |
| 12 | Thermosteel Duo DLX Flask 1L | Milton | Home | ₹699 |
| 13 | 9W LED Bulb Pack of 6 | Philips | Home | ₹399 |
| 14 | Non-Stick Cookware Set | Amazon Solimo | Home | ₹1,099 |
| 15 | Digital Kitchen Scale | HealthSense | Home | ₹449 |
| 16 | Storm Running Shoes | Nivia | Sports | ₹1,299 |
| 17 | Resistance Bands Set (5 Bands) | Boldfit | Sports | ₹599 |
| 18 | Anti-Skid Yoga Mat 6mm | Strauss | Sports | ₹799 |
| 19 | Tourna Cricket Tennis Ball (6-Pack) | Cosco | Sports | ₹349 |
| 20 | Quechua 10L Hiking Backpack | Decathlon | Sports | ₹999 |

---

## ⚡ Performance Optimizations

```
✅ Single CSS file            — Reduces HTTP requests
✅ CSS Custom Properties      — Avoids style duplication, enables theming
✅ will-change: transform     — GPU compositing layer for smooth animations
✅ content-visibility: auto   — Defers rendering of off-screen content
✅ Compositor-only animations — transform & opacity only (no layout thrash)
✅ IntersectionObserver       — Scroll animations without scroll event listeners
✅ localStorage caching       — Cart & theme persist without server round-trips
✅ clamp() typography         — No JS needed for fluid font scaling
✅ Minified SVG data URIs     — Custom select arrows without extra image files
```

---

## 🌐 Cross-Browser Compatibility

Tested and compatible with:

| Browser | Version |
|---|---|
| Google Chrome | 90+ |
| Mozilla Firefox | 88+ |
| Safari (macOS/iOS) | 14+ |
| Microsoft Edge | 90+ |
| Mobile Chrome (Android) | 90+ |
| Mobile Safari (iPhone) | 14+ |

**Compatibility techniques used:**
- `-webkit-appearance` / `-moz-appearance` resets
- Firefox `scrollbar-width` + `scrollbar-color` API
- `@supports not (gap)` flex fallback for older Safari
- Standard `appearance: none` for cross-browser select elements
- `scroll-behavior: smooth` with graceful degradation

---

## 🛠️ Technologies Used

| Technology | Usage |
|---|---|
| **HTML5** | Semantic markup, forms, accessibility |
| **CSS3** | Grid, Flexbox, Variables, Animations, Media Queries |
| **Vanilla JavaScript** | DOM manipulation, localStorage, IntersectionObserver |
| **Google Fonts** | Playfair Display (headings) + DM Sans (body) |
| **localStorage API** | Cart persistence, theme preference |

> No frameworks. No build tools. No dependencies. Pure HTML + CSS + JS.

---

## 🚀 How to Run

**No installation required.** Just open in a browser:

```
1. Download or clone the project folder
2. Open index.html in any modern browser
3. That's it — the full app works offline!
```

**Or with Live Server (VS Code):**
```
1. Open the folder in VS Code
2. Right-click index.html → "Open with Live Server"
3. Auto-reloads on file save
```

---

## 👨‍💻 Author

**Karthik**  
Intern · ApexPlanet Software Pvt Ltd  
📍 Bhopal, Madhya Pradesh, India

---

## 📜 License

Built for educational purposes as part of the ApexPlanet internship program.  
© 2026 ShopNest · ApexPlanet Software Pvt Ltd
