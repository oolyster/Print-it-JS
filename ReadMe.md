# Print it ! - Site vitrine

Site vitrine pour **Print it !**, imprimeur familial rennais, réalisé dans le cadre de la formation OpenClassrooms *Intégrateur Web* (projet "Premiers pas en JavaScript").

Le site est en pur HTML / CSS / JavaScript (pas de framework, pas de dépendances) et met en avant un slideshow d'images animé en JavaScript.

## Fonctionnalités

- Bannière en diaporama (slideshow) avec :
  - défilement des images et des accroches via les flèches gauche/droite,
  - indicateurs de position ("dots") synchronisés avec la slide affichée,
  - retour automatique au début/à la fin du diaporama en boucle.
- Présentation de l'entreprise, des produits, des points forts et des coordonnées de contact.

## Structure du projet

```
Print-it-JS/
├── index.html          # Structure de la page
├── assets/
│   ├── style.css        # Mise en forme du site
│   ├── script.js         # Logique du diaporama
│   └── images/           # Visuels du site et du diaporama
```

## Le diaporama en bref

Le comportement du slideshow est piloté par `assets/script.js` :

- un tableau `slides` contient, pour chaque slide, son image et son accroche (`tagLine`) ;
- `displayDots()` crée les indicateurs ("dots") au chargement, un par slide ;
- `goToSlide(direction)` est appelée au clic sur une flèche (`1` pour avancer, `-1` pour reculer) : elle met à jour l'index courant (avec retour en boucle via un modulo), l'indicateur sélectionné, l'image et l'accroche affichées.

## Lancer le projet en local

Aucune installation n'est nécessaire : ouvrez simplement [index.html](index.html) dans un navigateur, ou servez le dossier avec une extension type *Live Server* pour un rechargement automatique pendant le développement.

## Contexte

Projet réalisé en autoformation avec l'accompagnement d'un mentor OpenClassrooms.
