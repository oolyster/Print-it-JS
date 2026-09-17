/*
Déclaration des slides
tableau d'objets propriétés "image" et "tagLine"
*/

const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

/*
Déclaration des variables pour les éléments du DOM et initialisation de l'index courant
*/

const dots = document.querySelector(".dots");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerImage = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const bannerChemin = "./assets/images/slideshow/"; //chemin pour les images
let currentIndex = 0;

/*
Fonction pour afficher les dots en fonction du nombre de slides et de l'index courant
*/

const displayDots = () => {
  dots.innerHTML = ""; // on vide la div de class dots
  for (let i = 0; i < slides.length; i++) {
    // on crée un div pour chaque dot et on lui ajoute la classe dot
    const div = document.createElement("div");
    div.classList.add("dot");
    dots.appendChild(div);
    // si l'index courant est égal à l'index de la slide, on ajoute la classe dot_selected
    if (i === currentIndex) {
      div.classList.add("dot_selected");
    }
  }
};
// on appelle la fonction pour afficher les dots au chargement de la page
displayDots();

// on récupère tous les dots pour pouvoir les manipuler dans la fonction goToSlide
const allDots = document.querySelectorAll(".dots .dot");

/*
Fonction pour changer l'index courant et afficher la slide correspondante sur les flèches gauche et droite, puis mettre à jour les dots
*/
const goToSlide = (direction) => {
  // on récupère tous les dots
  if (allDots.length === 0) return;
  // on enlève la classe dot_selected à la dot correspondante à l'index courant
  allDots[currentIndex].classList.remove("dot_selected");
  // on calcule le nouvel index courant en fonction de la direction (1 pour droite, -1 pour gauche) et du nombre de slides
  currentIndex = (currentIndex + direction + slides.length) % slides.length;
  // on ajoute la classe dot_selected à la dot correspondante à l'index courant
  allDots[currentIndex].classList.add("dot_selected");
  // on change l'image et la tagline en fonction de l'index courant
  bannerImage.src = bannerChemin + slides[currentIndex].image;
  bannerText.innerHTML = slides[currentIndex].tagLine;
};

// on ajoute des écouteurs d'événements sur les flèches gauche et droite pour changer l'index courant et afficher la slide correspondante
arrowRight.addEventListener("click", () => goToSlide(1));
arrowLeft.addEventListener("click", () => goToSlide(-1));

// /*
// Fonction pour changer l'index courant et afficher la slide correspondante sur la flèche droite, puis mettre à jour les dots, faite avec Basseydou
// */
// const allDots = document.querySelectorAll(".dots .dot");
// // on ajoute un écouteur d'événement sur chaque dot pour changer l'index courant et afficher la slide correspondante
// const clickRight = () => {
//   // on enlève la classe dot_selected à la dot correspondante à l'index courant
//   if (allDots.length > 0) {
//     allDots[currentIndex].classList.remove("dot_selected");
//     currentIndex++;
//     // si on est sur la dernière slide, on revient à la première
//     if (currentIndex >= slides.length) {
//       currentIndex = 0;
//     }
//     // on ajoute la classe dot_selected à la dot correspondante à l'index courant
//     allDots[currentIndex].classList.add("dot_selected");
//     //  on change l'image et la tagline en fonction de l'index courant
//     bannerImage.src = bannerChemin + slides[currentIndex].image;
//     // on change la tagline en fonction de l'index courant
//     bannerText.innerHTML = slides[currentIndex].tagLine;
//   }
// };

// // on ajoute un écouteur d'événement sur la flèche droite pour changer l'index courant et afficher la slide correspondante
// arrowRight.addEventListener("click", clickRight);

// /*
// Fonction pour changer l'index courant et afficher la slide correspondante sur la flèche gauche, puis mettre à jour les dots, faite avec Basseydou
// */
// const clickLeft = () => {
//   if (allDots.length > 0) {
//     allDots[currentIndex].classList.remove("dot_selected");
//     currentIndex--;
//     if (currentIndex < 0) {
//       currentIndex = slides.length - 1;
//     }
//     allDots[currentIndex].classList.add("dot_selected");
//     bannerImage.src = bannerChemin + slides[currentIndex].image;
//     bannerText.innerHTML = slides[currentIndex].tagLine;
//   }
// };

// arrowLeft.addEventListener("click", clickLeft);

// /*
// Fonction pour afficher l'image et la tagline en fonction de l'index courant, faite par Adeline
// */
// const afficheBanner = () => {
//   bannerImage.src = bannerChemin + slides[currentIndex].image; // je change l'image
//   bannerText.innerHTML = slides[currentIndex].tagLine; // je change la tagline
// };
// //  on appelle la fonction pour afficher la slide au chargement de la page
// afficheBanner();

// /*
// Fonction pour changer l'index courant et afficher la slide correspondante sur la flèche gauche, puis mettre à jour les dots
// */
// const slideGauche = () => {
//   // si on est sur la première slide, on revient à la dernière, sinon on décrémente l'index
//   if (currentIndex == 0) {
//     currentIndex = slides.length - 1;
//   } else {
//     currentIndex--;
//   }
//   // on affiche la slide correspondante et on met à jour les dots
//   afficheBanner();
//   displayDots();
// };

// /*
// Fonction pour changer l'index courant et afficher la slide correspondante sur la flèche droite, puis mettre à jour les dots
// */
// const slideDroite = () => {
//   // si on est sur la dernière slide, on revient à la première, sinon on incrémente l'index
//   if (currentIndex == slides.length - 1) {
//     currentIndex = 0;
//   } else {
//     currentIndex++;
//   }
//   // on affiche la slide correspondante et on met à jour les dots
//   afficheBanner();
//   displayDots();
// };

// /*
// Écouteurs d'événements pour les flèches gauche et droite
// */
// arrowLeft.addEventListener("click", slideGauche);
// arrowRight.addEventListener("click", slideDroite);
