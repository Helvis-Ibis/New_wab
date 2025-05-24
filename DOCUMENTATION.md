# Documentation Wabajob

## Vue d'ensemble

Wabajob est une plateforme complète de recherche d'emploi et de recrutement conçue spécifiquement pour le marché africain. Elle connecte les chercheurs d'emploi avec des recruteurs potentiels, tout en offrant des outils de gestion de carrière et de recrutement.

## Table des matières

1. [Architecture du projet](#architecture-du-projet)
2. [Fonctionnalités principales](#fonctionnalités-principales)
   - [Espace chercheur d'emploi](#espace-chercheur-demploi)
   - [Espace recruteur](#espace-recruteur)
   - [Fonctionnalités communes](#fonctionnalités-communes)
3. [Technologies utilisées](#technologies-utilisées)
4. [Structure des dossiers](#structure-des-dossiers)
5. [Installation et configuration](#installation-et-configuration)
6. [Déploiement](#déploiement)
7. [Guide de contribution](#guide-de-contribution)
8. [Bonnes pratiques](#bonnes-pratiques)

## Architecture du projet

Wabajob est construit comme une application web monopage (SPA) utilisant React.js. L'application est structurée autour de deux espaces principaux :

- **Espace chercheur d'emploi** : Permet aux utilisateurs de rechercher des emplois, créer leur CV, postuler à des offres et suivre leurs candidatures.
- **Espace recruteur** : Permet aux entreprises de publier des offres d'emploi, rechercher des candidats et gérer les processus de recrutement.

L'application utilise React Router pour la navigation entre les différentes pages et composants, et Tailwind CSS pour le style et la mise en page.

## Fonctionnalités principales

### Espace chercheur d'emploi

1. **Tableau de bord** (`DashboardHome.jsx`)

   - Vue d'ensemble des activités récentes
   - Statistiques de candidature
   - Recommandations d'emploi personnalisées

2. **Profil utilisateur** (`Profile.jsx`)

   - Gestion des informations personnelles
   - Paramètres de confidentialité
   - Préférences de recherche d'emploi

3. **Recherche d'emploi** (`SearchJobs.jsx`)

   - Filtres avancés par secteur, localisation, type de contrat
   - Système de recherche par mots-clés
   - Affichage des résultats pertinents

4. **Détails des offres** (`JobDetails.jsx`)

   - Informations détaillées sur les offres d'emploi
   - Possibilité de postuler directement
   - Sauvegarde des offres intéressantes

5. **Gestion du CV** (`CV.jsx`, `CVPreview.jsx`)

   - Création et édition de CV
   - Prévisualisation avant impression
   - Export en PDF

6. **Formations** (`Trainings.jsx`)

   - Catalogue de formations disponibles
   - Recommandations basées sur le profil
   - Suivi des formations en cours

7. **Recruteurs** (`Recruiters.jsx`)

   - Liste des entreprises qui recrutent
   - Profils détaillés des recruteurs
   - Possibilité de suivre des entreprises spécifiques

8. **Candidatures** (`Applications.jsx`)

   - Suivi des candidatures envoyées
   - Statut des processus de recrutement
   - Historique des interactions

9. **Publications** (`Publications.jsx`)

   - Fil d'actualité des publications des recruteurs
   - Possibilité d'interagir (likes, commentaires)
   - Partage de contenu pertinent

10. **Paramètres** (`Settings.jsx`)
    - Gestion du compte
    - Préférences de notification
    - Options de confidentialité

### Espace recruteur

1. **Tableau de bord recruteur** (`Dashboard.jsx`)

   - Vue d'ensemble des activités de recrutement
   - Statistiques des offres publiées
   - Candidatures récentes

2. **Publication d'offres** (`PostJob.jsx`)

   - Formulaire détaillé pour créer des offres d'emploi
   - Options de visibilité et de promotion
   - Gestion des critères de sélection

3. **Recherche de profils** (`Profiles.jsx`)

   - Filtres avancés pour trouver des candidats
   - Système de matching basé sur les compétences
   - Sauvegarde de profils intéressants

4. **Gestion des offres** (`MyOffers.jsx`, `JobOffers.jsx`)

   - Liste des offres publiées
   - Statistiques de performance par offre
   - Modification et suppression d'offres

5. **Demandes de recrutement** (`RecruitmentRequests.jsx`)

   - Gestion des candidatures reçues
   - Suivi des étapes du processus de recrutement
   - Communication avec les candidats

6. **Page entreprise** (`CreatePage.jsx`, `PageDetail.jsx`)

   - Création et personnalisation de la page entreprise
   - Présentation de l'entreprise et de sa culture
   - Gestion du contenu et des médias

7. **Paramètres recruteur** (`Setting.jsx`)
   - Configuration du compte recruteur
   - Préférences de notification
   - Options de facturation

### Fonctionnalités communes

1. **Authentification** (`Login.jsx`, `Register.jsx`)

   - Inscription et connexion sécurisées
   - Récupération de mot de passe
   - Authentification par réseaux sociaux

2. **Pages informatives**

   - Page d'accueil (`Home.jsx`)
   - Contact (`Contact.jsx`)
   - FAQ (`Faq.jsx`)
   - Mentions légales (`Legal.jsx`)
   - Politique de confidentialité (`Privacy.jsx`)
   - Reçus et facturation (`Receipt.jsx`)

3. **Navigation et mise en page**
   - Barre de navigation responsive (`Navbar.jsx`)
   - Mise en page principale (`Layout.jsx`)
   - Mise en page des tableaux de bord (`DashboardLayout.jsx`, `RecruiterDashboardLayout.jsx`)

## Technologies utilisées

- **Frontend** :

  - React.js - Bibliothèque UI pour construire l'interface utilisateur
  - React Router - Gestion des routes et de la navigation
  - Tailwind CSS - Framework CSS utilitaire pour le style
  - Lucide React - Bibliothèque d'icônes
  - Headless UI - Composants UI accessibles sans style prédéfini

- **Build et développement** :

  - Vite - Outil de build rapide pour le développement moderne
  - ESLint - Linting du code JavaScript/React
  - PostCSS - Traitement CSS avec plugins

- **Déploiement** :
  - Vercel - Plateforme de déploiement pour applications frontend

## Structure des dossiers

```
wabajob/
├── public/               # Fichiers statiques accessibles publiquement
├── src/                  # Code source principal
│   ├── assets/           # Images, polices et autres ressources
│   │   ├── common/       # Composants UI génériques (boutons, cartes, etc.)
│   │   ├── dashboard/    # Composants spécifiques au tableau de bord
│   │   ├── layout/       # Composants de mise en page
│   │   ├── recruiter-dashboard/ # Composants spécifiques au tableau de bord recruteur
│   │   └── utils/        # Composants utilitaires
│   ├── pages/            # Pages de l'application
│   │   ├── dashboard/    # Pages du tableau de bord chercheur d'emploi
│   │   └── recruiter-dashboard/ # Pages du tableau de bord recruteur
│   ├── styles/           # Fichiers de style globaux
│   ├── App.jsx           # Composant racine de l'application
│   ├── App.css           # Styles spécifiques à l'application
│   ├── index.css         # Styles globaux
│   └── main.jsx          # Point d'entrée de l'application
├── .gitignore            # Fichiers et dossiers ignorés par Git
├── package.json          # Dépendances et scripts npm
├── postcss.config.js     # Configuration PostCSS
├── tailwind.config.js    # Configuration Tailwind CSS
├── vercel.json           # Configuration de déploiement Vercel
└── vite.config.js        # Configuration Vite
```

## Installation et configuration

### Prérequis

- Node.js (v16 ou supérieur)
- npm (v7 ou supérieur)

### Installation

1. Cloner le dépôt :

   ```bash
   git clone git@github.com:Samed6/wabajob.git
   cd wabajob
   ```

2. Installer les dépendances :

   ```bash
   npm install
   ```

3. Lancer le serveur de développement :

   ```bash
   npm run dev
   ```

4. L'application sera disponible à l'adresse : `http://localhost:5173`

## Déploiement

### Déploiement sur Vercel

1. Installer Vercel CLI (si ce n'est pas déjà fait) :

   ```bash
   npm install -g vercel
   ```

2. Déployer en prévisualisation :

   ```bash
   vercel
   ```

3. Déployer en production :
   ```bash
   vercel --prod
   ```

### Configuration de déploiement

Le fichier `vercel.json` contient la configuration nécessaire pour le déploiement sur Vercel :

```json
{
	"buildCommand": "npm run vercel-build",
	"outputDirectory": "dist",
	"rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## Guide de contribution

### Processus de développement

1. Créer une branche pour chaque nouvelle fonctionnalité ou correction :

   ```bash
   git checkout -b feature/nom-de-la-fonctionnalite
   ```

2. Faire des commits réguliers avec des messages descriptifs :

   ```bash
   git commit -m "Description claire de la modification"
   ```

3. Pousser les modifications vers GitHub :

   ```bash
   git push origin feature/nom-de-la-fonctionnalite
   ```

4. Créer une Pull Request pour la revue de code

### Standards de code

- Suivre les conventions ESLint configurées dans le projet
- Utiliser des noms de variables et de fonctions descriptifs
- Commenter le code complexe
- Écrire des tests pour les nouvelles fonctionnalités

## Bonnes pratiques

### Performance

- Optimiser les images et ressources statiques
- Utiliser le lazy loading pour les composants lourds
- Minimiser les re-rendus inutiles avec React.memo et useMemo

### Accessibilité

- Utiliser des attributs ARIA appropriés
- Assurer un contraste suffisant pour le texte
- Supporter la navigation au clavier

### Sécurité

- Valider toutes les entrées utilisateur
- Éviter les vulnérabilités XSS
- Utiliser HTTPS pour toutes les requêtes API

---

© 2024 Wabajob. Tous droits réservés.
