<div align="center">

<!-- Animated SVG Banner -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 180" width="860" height="180">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0d0d1a"/>
      <stop offset="100%" style="stop-color:#111827"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#6366f1"/>
      <stop offset="50%" style="stop-color:#a855f7"/>
      <stop offset="100%" style="stop-color:#06b6d4"/>
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="softglow">
      <feGaussianBlur stdDeviation="2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <rect width="860" height="180" fill="url(#bg)" rx="14"/>

  <line x1="0" y1="60" x2="860" y2="60" stroke="#ffffff06" stroke-width="1"/>
  <line x1="0" y1="120" x2="860" y2="120" stroke="#ffffff06" stroke-width="1"/>
  <line x1="215" y1="0" x2="215" y2="180" stroke="#ffffff06" stroke-width="1"/>
  <line x1="430" y1="0" x2="430" y2="180" stroke="#ffffff06" stroke-width="1"/>
  <line x1="645" y1="0" x2="645" y2="180" stroke="#ffffff06" stroke-width="1"/>

  <circle cx="760" cy="30" r="90" fill="#6366f1" fill-opacity="0.06">
    <animate attributeName="r" values="90;105;90" dur="6s" repeatCount="indefinite"/>
  </circle>
  <circle cx="100" cy="155" r="70" fill="#06b6d4" fill-opacity="0.05">
    <animate attributeName="r" values="70;82;70" dur="7s" repeatCount="indefinite"/>
  </circle>

  <g transform="translate(68, 62)" filter="url(#glow)">
    <path d="M58 42 Q60 20 40 18 Q32 18 26 24 Q18 16 8 22 Q-2 22 0 36 L54 36 Z"
          fill="none" stroke="url(#accent)" stroke-width="2.8" stroke-linejoin="round">
      <animate attributeName="stroke-opacity" values="1;0.45;1" dur="3.5s" repeatCount="indefinite"/>
    </path>
    <line x1="28" y1="48" x2="28" y2="65" stroke="#a855f7" stroke-width="2.8" stroke-linecap="round"/>
    <polyline points="20,56 28,46 36,56" fill="none" stroke="#a855f7" stroke-width="2.8"
              stroke-linejoin="round" stroke-linecap="round">
      <animate attributeName="opacity" values="1;0.2;1" dur="2.2s" repeatCount="indefinite"/>
    </polyline>
  </g>

  <text x="430" y="78"
        font-family="'Segoe UI', system-ui, sans-serif"
        font-size="42" font-weight="800"
        fill="url(#accent)" text-anchor="middle" filter="url(#glow)">
    Personal Cloud
    <animate attributeName="opacity" values="0.88;1;0.88" dur="4s" repeatCount="indefinite"/>
  </text>

  <text x="430" y="112"
        font-family="'Segoe UI', system-ui, sans-serif"
        font-size="13" fill="#94a3b8" text-anchor="middle" letter-spacing="4">
    FRONTEND  ·  YOUR FILES, YOUR CLOUD
  </text>

  <line x1="290" y1="124" x2="570" y2="124" stroke="url(#accent)" stroke-width="1.5" stroke-opacity="0.5">
    <animate attributeName="x1" values="290;330;290" dur="4s" repeatCount="indefinite"/>
    <animate attributeName="x2" values="570;530;570" dur="4s" repeatCount="indefinite"/>
  </line>

  <g font-family="'Segoe UI', system-ui, sans-serif" font-size="12" fill="#64748b" filter="url(#softglow)">
    <text x="248" y="152" text-anchor="middle">⚛  React</text>
    <text x="332" y="152" text-anchor="middle">⚡  Vite</text>
    <text x="415" y="152" text-anchor="middle">🎨  Dark UI</text>
    <text x="506" y="152" text-anchor="middle">☁  Supabase</text>
    <text x="594" y="152" text-anchor="middle">🔐  JWT Auth</text>
  </g>
</svg>

<br/>

<!-- Nav links — all inside one div, using img tags so GitHub centers them reliably -->
<a href="https://github.com/Coder-Ankit001/Personal-Cloud-Backend">
  <img src="https://img.shields.io/badge/⚙︎%20Backend%20Repo-Personal--Cloud--Backend-6366f1?style=for-the-badge&logo=github&logoColor=white" alt="Backend Repo"/>
</a>
&nbsp;&nbsp;
<a href="https://your-demo-url.vercel.app">
  <img src="https://img.shields.io/badge/🚀%20Live%20Demo-Coming%20Soon-a855f7?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo"/>
</a>
&nbsp;&nbsp;
<img src="https://img.shields.io/badge/Status-Active%20Dev-06b6d4?style=for-the-badge" alt="Status"/>

<br/><br/>

<!-- Tech stack — all img tags, no raw markdown, stays centered -->
<img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React"/>
&nbsp;
<img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite"/>
&nbsp;
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript"/>
&nbsp;
<img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white" alt="Axios"/>
&nbsp;
<img src="https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white" alt="Supabase"/>

</div>

---

## 🌐 Overview

**Personal Cloud** is a self-hosted cloud storage app — a personal alternative to Google Drive. Built with **React + Vite**, it features a dark-themed UI with multiple color themes, full file and folder management, dynamic breadcrumb navigation, and content-type filtering.

> 📦 **This repo is the frontend client only.** The API lives in [Personal-Cloud-Backend](https://github.com/Coder-Ankit001/Personal-Cloud-Backend).

---

## ✨ Features

### 🗂️ File & Folder Management
- Full CRUD — create, rename, move, and delete nodes
- Dynamic breadcrumb navigation for deep folder traversal
- Content-type filtering to surface files by category
- Grid view with dynamic folder content listing

### ⬆️ Upload & Download
- Streaming uploads supporting 18+ file extensions
- Single-click download with preserved filenames

### 🔐 Authentication
- JWT stored in HTTP-only cookies — zero `localStorage` exposure
- Auth-aware routing with automatic redirects

### 🎨 UI / UX
- Dark theme with multiple per-node color theme options
- FSM-driven file move state for predictable interactions
- `AuthContext` → `FileSystemContext` provider hierarchy
- Axios interceptors for centralized error handling

### 🚧 Coming Soon

| Feature | Status |
|---|---|
| 🔍 Full-text search | Planned |
| 📋 List view | Planned |
| 🔗 File sharing | Planned |
| 🕓 File versioning | Planned |
| 🗑️ Trash bin | Planned |
| ⚙️ CI/CD via GitHub Actions | Planned |

---

## 🛠️ Tech Stack

| | Technology |
|---|---|
| 🧩 Framework | React 18 + Vite |
| 🌐 HTTP Client | Axios |
| 🔄 State | React Context API + FSM |
| 🔐 Auth | JWT via HTTP-only cookies |
| ☁️ Storage | Supabase S3-compatible |

---

## 📁 Project Structure
 
```
Personal Cloud - Frontend/
├── src/
│   ├── components/
│   │   ├── ui/                   # Low-level primitives (Icon, IconButton, FileSystem)
│   │   ├── BreadCrumbs.jsx       # Path navigation bar
│   │   ├── CardGrid.jsx          # Grid container for nodes
│   │   ├── FileCard.jsx          # File node card
│   │   ├── FolderCard.jsx        # Folder node card
│   │   ├── NodeOptions.jsx       # Context menu (rename, move, delete)
│   │   ├── NodeRenameForm.jsx    # Inline rename input
│   │   ├── Navbar.jsx
│   │   └── Sidebar.jsx
│   ├── contexts/
│   │   ├── AuthContext.jsx       # Auth state & JWT management
│   │   └── FileSystemContext.jsx # File tree, CWD, node operations
│   ├── hooks/
│   │   ├── useAuth.js
│   │   └── useFileSystem.js
│   ├── layouts/
│   │   ├── RootLayout.jsx
│   │   ├── MainLayout.jsx
│   │   ├── ProtectedLayout.jsx   # Auth guard wrapper
│   │   ├── AuthForm.jsx
│   │   ├── CreateNewFolder.jsx
│   │   └── UploadFile.jsx
│   ├── utils/
│   │   └── api.js               # Axios instance & interceptors
│   ├── Router.jsx
│   └── main.jsx
├── .env.example
└── vite.config.js
```

---

## 🚀 Getting Started

**Prerequisites:** Node.js v18+, a running [Personal-Cloud-Backend](https://github.com/Coder-Ankit001/Personal-Cloud-Backend) instance.

```bash
git clone https://github.com/Coder-Ankit001/Personal-Cloud-Frontend.git
cd Personal-Cloud-Frontend
npm install
cp .env.example .env
```

**⚙️ `.env` setup:**

```env
VITE_API_BASE_URL=http://localhost:5000
```

**▶️ Run:**

```bash
npm run dev      # Development — http://localhost:5173
npm run build    # Production build
npm run preview  # Preview build locally
```

---

## 🗺️ Roadmap

- [x] 🟣 Grid view with full CRUD
- [x] 🟣 JWT HTTP-only cookie auth
- [x] 🟣 Dynamic breadcrumb navigation
- [x] 🟣 Content-type filtering
- [x] 🟣 Industry Grade FileSystem
- [ ] ⬜ List view toggle
- [ ] ⬜ Full-text search
- [ ] ⬜ File sharing
- [ ] ⬜ Trash bin
- [ ] ⬜ GitHub Actions CI/CD

---

<div align="center">

Built by 🌟 [Coder-Ankit001](https://github.com/Coder-Ankit001)

</div>
