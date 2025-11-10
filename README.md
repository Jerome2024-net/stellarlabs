# Stellar Labs - Agence de Développement Web & Design

Site web officiel de Stellar Labs, agence digitale basée à Cotonou, Bénin. Solutions web innovantes et sur mesure pour entreprises ambitieuses.

🌐 **Site officiel:** [stellar-labs.fr](https://stellar-labs.fr)

## Features

### 🎨 Design Premium
- Design moderne avec gradients et glassmorphism
- Animations fluides et transitions sophistiquées
- 100% responsive (mobile, tablette, desktop)
- Effets hover interactifs
- Interface professionnelle et épurée

### 📱 Sections
1. **Hero Section** - Présentation impactante avec CTA et trust indicators
2. **Services** - 4 services clés avec icônes et descriptions
3. **Tech Stack** - Technologies utilisées avec badges premium et featured AI
4. **Portfolio** - Grille responsive de 5 projets en vedette
5. **About** - Présentation de l'agence et valeurs
6. **Contact** - Formulaire d'onboarding qualifié avec validation temps réel
7. **Footer** - Liens rapides et informations contact

### ⚡ Fonctionnalités
- Navigation smooth scroll avec offset
- Menu hamburger mobile responsive
- Formulaire onboarding avec validation en temps réel
- Intégration Formspree pour réception emails
- Messages d'erreur personnalisés
- Compteur de caractères dynamique
- Custom radio buttons et checkboxes
- Animations d'apparition au scroll (Intersection Observer)
- États de validation visuels (success/error)

## Structure des Fichiers

```
├── index.html          # Page principale
├── css/
│   └── style.css      # Styles complets avec breakpoints responsive
├── js/
│   └── script.js      # Validation formulaire et interactivité
├── CNAME              # Configuration domaine personnalisé
├── .gitignore         # Fichiers exclus de Git
└── README.md          # Documentation
```

## Technologies Utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Grid, Flexbox, animations, glassmorphism
- **JavaScript (Vanilla)** - Validation, animations, UX
- **Font Awesome 6.4.0** - Bibliothèque d'icônes
- **Google Fonts Inter** - Typographie moderne
- **Formspree** - Gestion des soumissions de formulaire
- **GitHub Pages** - Hébergement et déploiement

## Domaine & Hébergement

- **Domaine:** stellar-labs.fr (acheté sur Hostinger)
- **Hébergement:** GitHub Pages
- **Repository:** [github.com/Jerome2024-net/stellarlabs](https://github.com/Jerome2024-net/stellarlabs)

### Configuration DNS (Hostinger)
Pour pointer stellar-labs.fr vers GitHub Pages, configurez les enregistrements DNS :

```
Type: A
Host: @
Value: 185.199.108.153

Type: A
Host: @
Value: 185.199.109.153

Type: A  
Host: @
Value: 185.199.110.153

Type: A
Host: @
Value: 185.199.111.153

Type: CNAME
Host: www
Value: jerome2024-net.github.io
```

## Installation Locale

1. Cloner le repository :
   ```bash
   git clone https://github.com/Jerome2024-net/stellarlabs.git
   cd stellarlabs
   ```

2. Lancer un serveur local :
   ```bash
   # Avec Python
   python -m http.server 8000
   
   # Avec Node.js
   npx serve
   ```

3. Ouvrir dans le navigateur : `http://localhost:8000`

## Déploiement

Push vers la branche main pour déployer automatiquement :
```bash
git add .
git commit -m "Update: description"
git push origin main
```

Le site sera disponible sur stellar-labs.fr après quelques minutes.

## Formulaire de Contact

Le formulaire d'onboarding collecte :
- Nom complet & entreprise
- Email professionnel & téléphone
- Type de projet (8 options)
- Description du projet (min 20 caractères)
- Budget estimé (4 tranches)
- Délai souhaité (5 options)
- Services additionnels (4 checkboxes optionnels)
- Consentement RGPD

**Endpoint Formspree:** https://formspree.io/f/mnnlaggd

## Personnalisation

### Couleurs
Variables CSS dans `style.css` :
```css
:root {
    --color-primary: #3B82F6;
    --color-dark: #0F172A;
    --color-gray-light: #94A3B8;
    /* ... */
}
```

### Contenu
- Modifier le texte dans `index.html`
- Remplacer les images Unsplash par vos propres visuels
- Mettre à jour les informations de contact

## Compatibilité Navigateurs

- Chrome (dernière version)
- Firefox (dernière version)
- Safari (dernière version)
- Edge (dernière version)
- Navigateurs mobiles iOS/Android

## Performance

- CSS optimisé avec animations 60fps
- JavaScript vanilla sans dépendances lourdes
- Images optimisées via Unsplash CDN
- Chargement rapide < 2s

## Contact

- **Email:** contact@stellar-labs.fr
- **Téléphone:** +229 59 97 20 79
- **Adresse:** Cotonou, Bénin - Afrique de l'Ouest

---

**© 2025 Stellar Labs - Agence de Développement Web & Design**
