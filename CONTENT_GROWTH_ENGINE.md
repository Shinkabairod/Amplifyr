# Content Growth Engine - Architecture Documentation

## 🎯 Vue d'ensemble

Le **Content Growth Engine** est un système complet de production de contenu automatisé composé de 9 workflows (WF0-WF8) formant une boucle d'optimisation continue (flywheel).

## 📁 Structure du projet

```
src/
├── ContentGrowthEngine.jsx          # 🏠 Dashboard principal avec navigation
├── OverviewDashboard.jsx            # 📊 Vue d'ensemble du système
├── components/
│   ├── OnboardingForm.jsx           # WF0 - Setup client
│   ├── ResearchEngine.jsx           # WF1 - Intelligence & scraping
│   ├── ContentDecisionEngine.jsx    # WF2 - Décisions stratégiques
│   ├── ScriptStudio.jsx             # WF3 - Génération de scripts
│   ├── PipelineDashboard.jsx        # WF4+5 - Pipeline production (alternative)
│   ├── PublishingCenter.jsx         # WF6 - Distribution multi-plateforme
│   └── PerformanceAnalytics.jsx     # WF7+8 - Analytics & optimisation
├── ProductionHub.jsx                # WF4+5 - Hub de production vidéo
├── layouts/cge/index.jsx            # Layout routing CGE
└── routes-cge.js                    # Configuration des routes
```

## 🔄 Les 9 Workflows

### **Phase 1: SETUP**

#### **WF0: Onboarding** 📋
- **Fichier:** `components/OnboardingForm.jsx`
- **Route:** `/cge/onboarding`
- **Design:** Dark theme, formulaire progressif 5 sections
- **Fonction:** Collecte des informations client (business, audience, goals, platforms)
- **Données clés:** Business model, ICP, brand tone, posting cadence
- **Output:** Brand Blueprint → Notion Database

---

### **Phase 2: INTELLIGENCE**

#### **WF1: Research Engine** 🔬
- **Fichier:** `components/ResearchEngine.jsx`
- **Route:** `/cge/research`
- **Design:** Dark theme avec 4 tabs
- **Fonction:** Scraping multi-source via Apify (Instagram, TikTok, YouTube, LinkedIn)
- **Features:**
  - Viral Hooks Library (18 hooks avec filtres)
  - Trend Radar (5 tendances avec status Rising/Peaking/Declining)
  - Competitor Analysis (7 concurrents avec métriques)
  - Source Data (10 logs de scraping)
- **Output:** Trend Database, Topic List

#### **WF2: Content Decision Engine** 🧠
- **Fichier:** `components/ContentDecisionEngine.jsx`
- **Route:** `/cge/decisions`
- **Design:** Light/Dark toggle, calendrier hebdomadaire
- **Fonction:** Sélection stratégique du contenu + approbation
- **Features:**
  - Calendrier 7 jours avec 20 slots de contenu
  - Pillar distribution bar (Authority/Education/Inspiration/Entertainment)
  - AI reasoning panel
  - Side panel détaillé par slot avec priority score
- **Output:** Content Calendar, Approved Topics

---

### **Phase 3: PRODUCTION**

#### **WF3: Script Studio** ✍️
- **Fichier:** `components/ScriptStudio.jsx`
- **Route:** `/cge/script-studio`
- **Design:** Dark studio aesthetic (#08080d)
- **Fonction:** Génération de scripts via Claude API
- **Features:**
  - Sidebar avec 5 scripts filtrables par status
  - Editor avec 4 sections (HOOK/TENSION/VALUE/CTA) color-coded
  - 3 hook variants avec AI scores
  - AI Review panel (6 scores détaillés)
  - Tabs: Script Editor | Captions | History
- **Output:** Final Script, Notion Page

#### **WF4+5: Production Hub** 🎬
- **Fichier:** `ProductionHub.jsx`
- **Route:** `/cge/production`
- **Design:** Light theme professionnel (#f8f8f6)
- **Fonction:** Recording + Editing workflow
- **Features:**
  - Role switcher (Admin/Copywriter/Client/Editor)
  - Tabs: Scenes | Script | Video Versions | Caption
  - Video player placeholder avec timestamps
  - Editing checklist (6 items)
  - AI QA panel (conformity score, transcript match)
  - Multi-format export (9:16, 1:1, 16:9) avec progress
  - Correction timeline avec video/text feedback
- **Output:** Edited Video (multi-formats), S3 URLs

#### **Alternative: Pipeline Dashboard** 🏗️
- **Fichier:** `components/PipelineDashboard.jsx`
- **Route:** `/cge/pipeline`
- **Design:** Light theme 3 colonnes
- **Fonction:** Vue pipeline complète avec 11 statuts
- **Features:**
  - Sidebar: 5 scripts avec pipeline overview
  - Main: 4 tabs (Scenes | Script & Copy | Video Versions | Caption)
  - Scenes expandables color-coded (HOOK/TENSION/VALUE/PROOF/CTA)
  - Copy history timeline
  - 5 modals (Approve, Revision, Upload, Submit, Correction)
- **Différence vs ProductionHub:** Focus admin/workflow vs focus production/editing

---

### **Phase 4: DISTRIBUTION**

#### **WF6: Publishing Center** 📡
- **Fichier:** `components/PublishingCenter.jsx`
- **Route:** `/cge/publishing`
- **Design:** Dark theme avec platform colors
- **Fonction:** Scheduling + publication multi-plateforme
- **Features:**
  - Scheduling queue (5 vidéos) avec drag & drop simulé
  - Platform cards (4) : Instagram/TikTok/YouTube/LinkedIn
    - Connection status, scheduled count, best posting times, caption preview
  - 24-hour timeline avec slots colorés par plateforme
  - Publication log (10 entrées) avec status
  - CTA Strategy panel (4 stratégies avec performance)
- **Output:** Published Posts, Post IDs

---

### **Phase 5: ANALYTICS**

#### **WF7+8: Performance Analytics** 📊
- **Fichier:** `components/PerformanceAnalytics.jsx`
- **Route:** `/cge/analytics`
- **Design:** Dark premium avec gradients
- **Fonction:** Analytics + Optimization loop
- **Features:**
  - Period selector (7d/30d/90d)
  - 6 KPI cards avec delta % (Views, Engagement, Followers, Best Video, Conversion, Published)
  - Performance chart (Recharts Area) avec toggle Views/Engagement/Followers
  - Content classification: Winners (25%) | Neutrals (60%) | Losers (15%)
  - Pattern Analysis:
    - Hook Performance (bar chart horizontal, 7 types)
    - Pillar Engagement (bar chart vertical, 4 pillars)
    - Format Trends (list avec arrows, 5 formats)
    - CTA Conversion (bar chart, 4 CTAs)
  - Weekly Report Preview:
    - Top 3 + Bottom 3 avec raisons
    - 3 Key Insights
    - Next week strategy
    - "Send Report" button
  - 5 AI Optimization Suggestions avec toggle Apply
- **Output:** Insights Report, Strategy Updates → **Boucle vers WF2**

---

### **Dashboards Spéciaux**

#### **Content Growth Engine** 🏠
- **Fichier:** `ContentGrowthEngine.jsx`
- **Route:** `/cge/dashboard`
- **Design:** Dark avec sidebar collapsible
- **Fonction:** Navigation shell principale
- **Features:**
  - Sidebar (64px collapsed / 240px expanded)
  - Sections groupées par phase (Setup/Intelligence/Production/Distribution/Analytics/System)
  - 9 modules + Settings + Architecture
  - Breadcrumb, role switcher, notifications center
  - Module placeholders avec metrics preview

#### **Overview Dashboard** 📈
- **Fichier:** `OverviewDashboard.jsx`
- **Route:** `/cge/overview`
- **Design:** Dark avec gradients hero
- **Fonction:** Vue d'ensemble système complet
- **Features:**
  - Hero section avec 5 stats (9 Workflows, 70+ Nodes, 15 Apify Actors, 4 Platforms, 7d cycle)
  - Workflow Pipeline (9 cards interactives expandables)
  - Tech Stack grid (12 services avec coûts)
  - Cost Estimator (scalable par nombre de clients)
  - Architecture diagram (ASCII art)
  - Quick Actions (8 boutons vers modules)

---

## 🎨 Design Systems

### **Dark Theme (majoritaire)**
```
Background:  #07070b
Surface:     #0e0e16
Border:      #1a1a2e
Accent:      #ff5722
```
**Utilisé par:** ContentGrowthEngine, OverviewDashboard, OnboardingForm, ResearchEngine, ScriptStudio, PublishingCenter, PerformanceAnalytics

### **Light Theme (Production)**
```
Background:  #f8f8f6
Surface:     #ffffff
Border:      #e8e6e1
Text:        #1a1a1a
```
**Utilisé par:** ProductionHub, PipelineDashboard

### **Dark/Light Toggle**
- **ContentDecisionEngine** supporte les deux avec toggle

### **Fonts**
- **UI:** DM Sans / Instrument Sans
- **Code/Mono:** JetBrains Mono / IBM Plex Mono

### **Platform Colors**
```
Instagram: #E1306C
TikTok:    #00f2ea
YouTube:   #FF0000
LinkedIn:  #0077B5
```

---

## 🔗 Flux de données (Data Flow)

```
WF0 (Onboarding)
  ↓ Brand Blueprint
WF1 (Research) ← Apify Scrapers
  ↓ Trends + Hooks
WF2 (Decisions) ← Performance Insights (WF8)
  ↓ Content Calendar
WF3 (Script Studio) ← Claude API
  ↓ Final Scripts
WF4 (Recording) ← Client Upload
  ↓ Raw Media
WF5 (Editing) ← Creatomate + Whisper
  ↓ Final Videos (multi-format)
WF6 (Publishing) → Instagram/TikTok/YouTube/LinkedIn APIs
  ↓ Post IDs
WF7 (Analytics) ← Platform APIs
  ↓ Metrics
WF8 (Optimization) → Strategy Updates
  ↓
  └→ LOOP BACK TO WF2 (Flywheel)
```

---

## 🚀 Démarrage

### **Accès aux routes**

```bash
# Dashboard principal
http://localhost:3000/cge/dashboard

# Overview du système
http://localhost:3000/cge/overview

# Workflows individuels
http://localhost:3000/cge/onboarding       # WF0
http://localhost:3000/cge/research         # WF1
http://localhost:3000/cge/decisions        # WF2
http://localhost:3000/cge/script-studio    # WF3
http://localhost:3000/cge/production       # WF4+5
http://localhost:3000/cge/pipeline         # WF4+5 (alternative)
http://localhost:3000/cge/publishing       # WF6
http://localhost:3000/cge/analytics        # WF7+8
```

### **Installation**

```bash
npm install
npm start
```

---

## 📊 État des données

**Toutes les données sont en React state (pas de localStorage).**

Chaque composant contient des données de démo réalistes :
- ResearchEngine: 18 hooks, 5 trends, 7 competitors, 10 scrape logs
- ContentDecisionEngine: 20 content slots sur 2 semaines
- ScriptStudio: 5 scripts à différents stades
- ProductionHub: 5 scripts avec versions/corrections
- PublishingCenter: 5 vidéos en queue, 4 platforms, 10 publication logs
- PerformanceAnalytics: 30 jours de métriques, 20 vidéos classées

---

## 🎯 Prochaines étapes (intégration n8n)

1. **Connecter n8n workflows** aux composants via API
2. **Remplacer React state** par appels API réels
3. **Ajouter authentification** (actuellement bypass)
4. **Configurer webhooks** pour updates temps réel
5. **Intégrer Apify** pour scraping réel
6. **Connecter Claude API** pour génération scripts
7. **Setup Creatomate** pour editing automatique
8. **Connecter Platform APIs** (IG/TT/YT/LI)

---

## 📝 Notes techniques

- **Recharts** utilisé pour tous les graphiques (PerformanceAnalytics)
- **React Router v6** pour navigation
- **React Icons (io5)** pour iconographie
- **Tailwind CSS** pour styling
- **Google Fonts** pour typography
- Pas de state management global (chaque composant autonome)
- Pas de backend (prévu pour n8n webhooks)

---

## ✅ Checklist de cohérence

- [x] Tous les workflows (WF0-WF8) créés
- [x] Design systems cohérents
- [x] Routes configurées
- [x] Layout CGE créé
- [x] App.jsx updated
- [x] Navigation principale (ContentGrowthEngine)
- [x] Overview dashboard
- [x] Données de démo complètes
- [x] Responsive design
- [x] Animations & transitions
- [x] Icons cohérents
- [x] Typography harmonisée
- [x] Colors branded
- [x] Flywheel WF8→WF2 visible

---

**Version:** 1.0
**Date:** 2024-01-20
**Stack:** React 19, Tailwind CSS, Recharts, React Router v6
