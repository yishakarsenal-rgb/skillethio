# SkillEthio · ክህሎት ኢትዮጵያ

> **Bilingual (English / አማርኛ) 3D-gamified tech-learning dashboard for Ethiopian students.**
>
> 👨‍💻 **Built by Yishak Mekuannent** · የሰራው ይሸከምናልን ይሳክ

A production-ready, single-page React + Vite + Tailwind CSS application built
around a chunky, isometric visual language with neon green / gold glows,
floating background shapes, and bilingual UI strings throughout.

---

## ✨ Features

- 🌗 **Dark / Light mode** with deep slate (`#080E1A`) + neon glows, and crisp
  off-white (`#F8FAFC`) + mint/amber shadows. State is persisted to
  `localStorage` and respects `prefers-color-scheme` on first load.
- 🌐 **English ⇄ አማርኛ toggle** with Ethiopic-friendly typography
  (Noto Sans Ethiopic).
- 🎮 **Gamified stat badges** — Streak (🔥), XP (🏆), Level (⚡).
- 📚 **Learning Content Engine** — active course with a 65% animated progress
  bar, milestone ticks, and a 3D "stack of cards" preview.
- 🤖 **Embedded MiniMax AI Copilot** — bilingual chat widget with a static
  C++ tutorial response (swap the static payload for your backend endpoint).
- ⚡ **Interactive Practice Sandbox** — daily MCQ with functional click
  handlers, dynamic green `Correct! +50 XP` / red `Try Again` overlays,
  and live XP counter.
- 💳 **Premium Portal** — Chapa / Telebirr / CBE Birr CTA tuned for the
  Ethiopian market (299 ETB/month, ≈ $5.40).
- 🧊 **3D floating background** — CSS keyframe animations, isometric cubes,
  glow blobs, and shimmer progress.

## 🧱 Stack

| Layer       | Choice                                |
|-------------|---------------------------------------|
| Framework   | React 18 (JSX)                        |
| Bundler     | Vite 5                                |
| Styling     | Tailwind CSS 3 (`darkMode: 'class'`)  |
| State       | Context API (Theme + Language)        |
| Persistence | `localStorage`                        |
| Fonts       | Noto Sans Ethiopic · Space Grotesk    |

## 🚀 Getting started

```bash
# 1. Install
npm install

# 2. Dev server (http://localhost:5173)
npm run dev

# 3. Production build → ./dist
npm run build

# 4. Preview the production build
npm run preview
```

## ☁️ Deploy to Vercel

The repo includes a `vercel.json` that points Vercel at the Vite framework.

1. Push to GitHub.
2. Import the repo in Vercel — framework auto-detected as **Vite**.
3. Build command: `npm run build` · Output: `dist`.

Or via the CLI:

```bash
npm i -g vercel
vercel              # first deploy (preview)
vercel --prod       # production deploy
```

## 📁 Project structure

```
skillethio/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vercel.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── components/
    │   ├── FloatingShapes.jsx
    │   ├── Navbar.jsx
    │   ├── CourseCard.jsx
    │   ├── MiniMaxCopilot.jsx
    │   ├── PracticeSandbox.jsx
    │   └── PremiumPortal.jsx
    ├── contexts/
    │   ├── ThemeContext.jsx
    │   └── LanguageContext.jsx
    ├── data/
    │   └── questions.js
    └── i18n/
        └── translations.js
```

## 🌍 i18n

Every user-facing string lives in `src/i18n/translations.js` with both
`en` and `am` keys. To add a new key:

```js
myKey: { en: 'Hello', am: 'ሰላም' },
```

…and reference it from a component:

```jsx
import { useLanguage } from '../contexts/LanguageContext';
const { t } = useLanguage();
return <h1>{t('myKey')}</h1>;
```

## 🔌 Wiring a real MiniMax AI backend

`src/components/MiniMaxCopilot.jsx` ships with a static payload. Replace the
`askCopilot` body with:

```js
const res = await fetch('/api/copilot', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: trimmed, lang }),
});
const data = await res.json();
setMessages((prev) => [...prev, { role: 'user', text: trimmed }, { role: 'ai', text: data }]);
```

## 👨‍💻 Credits

**Built by Yishak Mekuannent** · የሰራው ይሸከምናልን ይሳክ

## 📜 License

MIT — built with ❤ in Addis Ababa · በአዲስ አበባ የተሰራ