# BSPP - Site Officiel Fictif

Ce projet est une maquette de site web pour la Brigade de Sapeurs-Pompiers de Paris (BSPP). Il vise à présenter les missions, l'histoire et la boutique officielle avec un design moderne, professionnel et respectueux de l'identité visuelle de l'institution.

## 📁 Structure du Projet

```
/
├── index.html       # Page d'accueil
├── histoire.html    # Historique de la brigade
├── boutique.html    # Boutique en ligne (Shop)
├── contact.html     # Formulaire de contact
├── login.html       # Portail d'accès administrateur
├── dashboard.html   # Interface de gestion des produits
├── css/
│   └── style.css    # Styles globaux et personnalisés
├── js/
│   ├── main.js      # Logique globale (navigation, UI)
│   ├── shop.js      # Logique de la boutique
│   ├── admin.js     # Logique d'administration et authentification
│   └── contact.js   # Gestion du formulaire de contact
└── README.md        # Documentation du projet
```

## 🛠 Technologies

- **HTML5** : Structure sémantique.
- **Tailwind CSS** (via CDN) : Framework CSS pour le design responsive et rapide.
- **JavaScript (Vanilla)** : Interactivité et gestion du DOM.
- **Lucide Icons** : Icônes vectorielles légères.
- **Google Fonts** : Montserrat (Titres) et Inter (Texte).

## 🚀 Installation & Lancement

1. Clonez ce dépôt ou téléchargez les fichiers.
2. Ouvrez `index.html` dans votre navigateur web.
3. Pour accéder à l'administration :
   - Allez sur `login.html`.
   - Identifiants par défaut : `admin` / `bspp123`.

## ✨ Fonctionnalités Clés

- **Design Responsive** : Adapté aux mobiles, tablettes et ordinateurs.
- **Authentification Simple** : Protection de base de la page admin via `sessionStorage`.
- **Gestion Produits** : Ajout et suppression de produits dans le LocalStorage.
- **Identité Visuelle** : Respect des couleurs (Bleu/Blanc/Rouge) et ton officiel.

## ⚠️ Note

Ce site est une démonstration technique et n'est pas affilié à la véritable Brigade de Sapeurs-Pompiers de Paris.
