# 📦 Installation des dépendances manquantes

## Dépendances requises pour le Content Growth Engine

Le projet utilise **Recharts** pour les graphiques de performance analytics (WF7+8).

### Installation

```bash
npm install recharts
```

### Vérification

Après installation, vérifiez que `package.json` contient :

```json
{
  "dependencies": {
    ...
    "recharts": "^2.10.0"
  }
}
```

---

## Installation complète (première fois)

```bash
# 1. Installer toutes les dépendances
npm install

# 2. Installer Recharts
npm install recharts

# 3. Démarrer le projet
npm start
```

---

## Dépendances actuelles du projet

### UI/UX
- `react` 19.0.0
- `react-dom` 19.0.0
- `react-router-dom` ^6.4.0
- `react-icons` ^4.4.0
- `@chakra-ui/*` (divers composants)

### Styling
- `tailwindcss` ^3.1.8
- `@emotion/react` ^11.10.5
- `@emotion/styled` ^11.10.5

### Charts (existant)
- `apexcharts` 3.35.5
- `react-apexcharts` 1.4.0

### Charts (à ajouter)
- `recharts` (pour PerformanceAnalytics)

---

## Troubleshooting

### Erreur : "recharts is not defined"

```bash
npm install recharts
```

### Erreur : "Module not found: Can't resolve 'recharts'"

```bash
# Nettoyer et réinstaller
rm -rf node_modules
rm package-lock.json
npm install
npm install recharts
```

### Erreur de version React

Si Recharts rencontre des problèmes avec React 19, utiliser :

```bash
npm install recharts --legacy-peer-deps
```

---

## ✅ Checklist post-installation

- [ ] `npm install recharts` exécuté avec succès
- [ ] Aucune erreur dans la console au démarrage
- [ ] `/cge/analytics` s'affiche correctement
- [ ] Les charts (Area, Bar, Radar) sont visibles
- [ ] Pas de warning "peer dependencies"

---

**Prêt !** Le système est maintenant complet et fonctionnel. 🚀
