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

// appeler la div de class dots
const dots = document.querySelector(".dots");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerImage = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const bannerChemin = "./assets/images/slideshow/"; //chemin pour les images
let currentIndex = 0;

const displayDots = () => {
  dots.innerHTML = ""; // on vide la div de class dots
  for (let i = 0; i < slides.length; i++) {
    const div = document.createElement("div");
    div.classList.add("dot");
    dots.appendChild(div);

    if (i === currentIndex) {
      div.classList.add("dot_selected");
    }
  }
};

displayDots();

// fonction pour changer l'image affichée
const afficheBanner = () => {
  bannerImage.src = bannerChemin + slides[currentIndex].image; // je change l'image
  bannerText.innerHTML = slides[currentIndex].tagLine; // je change la tagline
};

afficheBanner();

const slideGauche = () => {
  if (currentIndex == 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex--;
  }
  afficheBanner();
  displayDots();
};

const slideDroite = () => {
  if (currentIndex == slides.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  afficheBanner();
  displayDots();
};

arrowLeft.addEventListener("click", slideGauche);
arrowRight.addEventListener("click", slideDroite);
