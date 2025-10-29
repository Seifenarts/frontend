# SeifenArts Frontend

SeifenArts ist ein realer Online-Shop für handgemachte Seifenbouquets.  
Dieses Frontend wurde mit **Next.js**, TypeScript, Redux Toolkit und Tailwind CSS gebaut, mit UI-Komponenten von ShadCN.

🌎 **Deployment:** (https://seifenarts-production-9e4c.up.railway.app/)

---

## 📋 Features

- Anzeige der Produkte  
- Sortierung nach Kategorien oder Preis  
- Benutzerregistrierung, Login und Passwort-Wiederherstellung  
- Warenkorb-Funktionalität  
- Erstellung und Abschluss von Bestellungen  
- Zahlungsintegration  
- Seiten über das Unternehmen und den Produktionsprozess  

---

## 🛠️ Tech Stack

- **TypeScript**  
- **Next.js 15.5.3**  
- **React 19.1.0**  
- **Redux Toolkit + React Redux**  
- **Tailwind CSS + tailwind-merge + tailwindcss-animate**  
- **ShadCN UI**  
- **Radix UI Komponenten** (`Accordion`, `Dialog`, `Toggle`, `Slot`)  
- **Axios** (HTTP-Client)  
- **Lucide React** (Icons)  
- **clsx & class-variance-authority** (bedingtes Styling)

**Dev Tools:** ESLint, TypeScript, PostCSS, Autoprefixer  

## ✅ Hinweise

Dieses Frontend nutzt den Next.js App Router und ist mit dem Backend für Produktverwaltung und Bestellungen verbunden.
State-Management wird über Redux Toolkit gehandhabt, UI-Zustände über ShadCN UI und Radix-Komponenten.
Tailwind CSS zusammen mit tailwind-merge sorgt für konsistentes und responsives Styling.

---

## 🚀 Installation & Start

### Voraussetzungen
- Node.js 20+  
- npm 9+  

### Installation
```bash
git clone https://github.com/LutsDM/seifenarts-frontend.git
cd seifenarts-frontend
npm install
npm run dev
