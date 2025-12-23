# 📘 Portfolio Template — React + Vite

## 🚀 Overview

This is a **modern, responsive portfolio website template** built with **React, Vite, and Tailwind CSS**, designed for developers who want a clean, high-performance personal site.

The template follows **clean architecture principles**, **centralized data management**, and **smooth UI interactions**—perfect for freelancers, students, and professionals.

---

## ✨ Features

- ⚡ **React + Vite** — fast dev server & optimized production build
- 🎨 **Tailwind CSS (latest)** — modern, responsive, and customizable UI
- 🧩 **Component-based architecture** — clean, reusable components
- 📦 **Centralized data config** — update content from one place
- 📱 **Fully responsive** — mobile, tablet, and desktop ready
- 🌙 **Dark modern aesthetic** — classic & professional look
- 🧠 **Performance-aware background effects** — optimized rendering
- 🔗 **Anchor-based smooth navigation**
- 📩 **Contact-ready structure** — easy EmailJS / Formspree integration
- 🚀 **Vercel / Netlify ready**

---

## 🗂 Project Structure

```bash
src/
│
├─ components/          # Reusable UI components
│  ├─ Navbar.tsx
│  ├─ Footer.tsx
│  ├─ ProjectCard.tsx
│  └─ Background.tsx
│
├─ pages/               # Page sections
│  ├─ Home.tsx
│  ├─ About.tsx
│  ├─ Project.tsx
│  └─ Contact.tsx
│
├─ data/
│  └─ project.ts        # 🔥 Centralized content & metadata
│
├─ styles/
│  └─ global.css
│
└─ App.tsx
```

---

## 🧠 Centralized Data System

All site content is managed from one single file:

```bash
src/data/project.ts
```

#### You can easily update:

- Brand name & site metadata

- About section content

- Skills & tech stack

- Project list

- External links

➡️ No need to edit multiple components.

---

## 🛠 Tech Stack

- React 18

- Vite

- TypeScript

- Tailwind CSS

- Lucide Icons

- (Optional) Framer Motion / EmailJS

---

## ⚙️ Installation

```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo
npm install
npm run dev
```

---

## 📦 Build for Production

```bash
npm run build
```

The output will be generated in the `dist/` folder.

---

## 🌍 Deployment

This template works perfectly with:

- Vercel

- Netlify

- Cloudflare Pages

Vercel Settings

- Framework: Vite

- Build Command: `npm run build`

- Output Directory: `dist`

---

## ✍️ Customization Guide

#### Update Profile & Content

```bash
src/data/project.ts
```

#### Add New Project

```bash
export const projectItems = [
  {
    title: "New Project",
    description: "Project description here",
    tech: ["React", "Tailwind"],
    link: "#",
  },
]
```

---

## ♿ Accessibility & Performance

- Semantic HTML

- Reduced-motion friendly

- Optimized background rendering

- Minimal runtime overhead

---

## 📄 License

This project is provided as a commercial-ready template.
You may customize and use it for personal or client projects.

---

## 🙌 Author

Built with attention to **performance, maintainability, and clean UI**.

---
