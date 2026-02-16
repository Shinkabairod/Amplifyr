# 🚀 Content Growth Engine - Quick Start Guide

## Démarrage rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Démarrer le serveur de développement
npm start

# 3. Ouvrir dans le navigateur
http://localhost:3000
```

La route par défaut redirige automatiquement vers `/cge/dashboard`.

---

## 🗺️ Navigation des Workflows (par ordre d'utilisation)

### **Étape 1 : Setup Client**
👉 **[/cge/onboarding](/cge/onboarding)** - WF0: Onboarding Form
- Formulaire progressif 5 sections
- Collecte : Business, Audience, Content Preferences, Goals, Platforms
- Output : Brand Blueprint

---

### **Étape 2 : Intelligence & Recherche**

👉 **[/cge/research](/cge/research)** - WF1: Research Engine
- 4 tabs : Viral Hooks | Trend Radar | Competitor Analysis | Source Data
- 18 hooks prouvés, 5 tendances, 7 concurrents
- Scraping automatique via Apify

👉 **[/cge/decisions](/cge/decisions)** - WF2: Content Decision Engine
- Calendrier hebdomadaire avec 20 slots
- Pillar distribution (Authority/Education/Inspiration/Entertainment)
- AI strategy reasoning
- Approve/Modify/Reject par slot

---

### **Étape 3 : Production de Contenu**

👉 **[/cge/script-studio](/cge/script-studio)** - WF3: Script Studio
- 5 scripts avec sidebar filtrable
- Editor 4 sections (HOOK/TENSION/VALUE/CTA)
- 3 hook variants avec AI scores
- AI Review panel avec 6 scores détaillés

👉 **[/cge/production](/cge/production)** - WF4+5: Production Hub
- Role switcher (Admin/Copywriter/Client/Editor)
- 4 tabs : Scenes | Script | Video Versions | Caption
- Editing checklist + AI QA
- Multi-format export (9:16, 1:1, 16:9)

**OU**

👉 **[/cge/pipeline](/cge/pipeline)** - Pipeline Dashboard (alternative)
- Vue complète pipeline avec 11 statuts
- 3 colonnes : Sidebar | Main Content | Modals
- Scenes expandables color-coded
- 5 modals pour actions workflow

---

### **Étape 4 : Distribution**

👉 **[/cge/publishing](/cge/publishing)** - WF6: Publishing Center
- Scheduling queue avec 5 vidéos
- 4 platform cards (Instagram/TikTok/YouTube/LinkedIn)
- Timeline 24h avec slots colorés
- CTA strategy panel

---

### **Étape 5 : Analytics & Optimisation**

👉 **[/cge/analytics](/cge/analytics)** - WF7+8: Performance Analytics
- Period selector (7d/30d/90d)
- 6 KPI cards avec delta %
- Performance chart (Recharts)
- Content classification : Winners | Neutrals | Losers
- Pattern Analysis (4 charts)
- Weekly Report Preview
- 5 AI Optimization Suggestions → **Loop back to WF2**

---

## 🏠 Dashboards Spéciaux

👉 **[/cge/dashboard](/cge/dashboard)** - Content Growth Engine
- Navigation shell principale
- Sidebar avec 9 modules groupés par phase
- Module placeholders avec métriques

👉 **[/cge/overview](/cge/overview)** - Overview Dashboard
- Vue système complète
- Workflow pipeline interactif
- Tech stack + cost estimator
- Architecture diagram

---

## 📊 Flux complet (workflow idéal)

```
1. /cge/onboarding        → Configurer client
2. /cge/research          → Analyser trends
3. /cge/decisions         → Planifier contenu
4. /cge/script-studio     → Générer scripts
5. /cge/production        → Produire vidéos
6. /cge/publishing        → Publier multi-plateforme
7. /cge/analytics         → Analyser performance
   └→ Optimisations → Retour à l'étape 3 (flywheel)
```

---

## 🎨 Design Themes

- **Dark Theme** : Majorité des composants (#07070b bg)
- **Light Theme** : Production Hub, Pipeline Dashboard (#f8f8f6 bg)
- **Toggle** : ContentDecisionEngine supporte les deux

---

## 🔑 Composants clés par fichier

| Workflow | Fichier | Route | Design |
|----------|---------|-------|--------|
| WF0 | `components/OnboardingForm.jsx` | `/cge/onboarding` | Dark |
| WF1 | `components/ResearchEngine.jsx` | `/cge/research` | Dark |
| WF2 | `components/ContentDecisionEngine.jsx` | `/cge/decisions` | Light/Dark |
| WF3 | `components/ScriptStudio.jsx` | `/cge/script-studio` | Dark Studio |
| WF4+5 | `ProductionHub.jsx` | `/cge/production` | Light |
| WF4+5 Alt | `components/PipelineDashboard.jsx` | `/cge/pipeline` | Light |
| WF6 | `components/PublishingCenter.jsx` | `/cge/publishing` | Dark |
| WF7+8 | `components/PerformanceAnalytics.jsx` | `/cge/analytics` | Dark Premium |
| Dashboard | `ContentGrowthEngine.jsx` | `/cge/dashboard` | Dark |
| Overview | `OverviewDashboard.jsx` | `/cge/overview` | Dark |

---

## 🛠️ Troubleshooting

**Problème:** Page blanche après démarrage
- **Solution:** Vérifier que la route par défaut `/` redirige bien vers `/cge/dashboard` dans `App.jsx`

**Problème:** Composants ne s'affichent pas
- **Solution:** Vérifier que `routes-cge.js` importe correctement tous les composants

**Problème:** Styles non appliqués
- **Solution:** Vérifier que Tailwind CSS est bien configuré dans `tailwind.config.js`

**Problème:** Charts ne s'affichent pas
- **Solution:** Installer Recharts : `npm install recharts`

---

## 📚 Ressources

- **Documentation complète:** `CONTENT_GROWTH_ENGINE.md`
- **Architecture n8n:** À venir
- **API Documentation:** À venir

---

**Prêt à démarrer ?** 🚀

```bash
npm start
```

Puis navigue vers http://localhost:3000 et explore les workflows !
