const content = [
  {
    title:
      "Somos especializados em peças na linha pesada <strong>há 50 anos.</strong>",
    description: "Tradição e confiança para quem move o Brasil.",
    button: "Fale Conosco",
    image: "../assets/truck.jpg",
    link: "./contact.html",
  },
  {
    title: "As melhores marcas em um só lugar.",
    description: "Revestimentos, freios, suspensão e muito mais.",
    button: "Ver Catálogo",
    image: "../assets/truck2.jpg",
    link: "./products.html",
  },
  {
    title: "Entrega rápida em todo o Brasil.",
    description: "Qualidade e agilidade para manter sua frota em movimento.",
    button: "Peça um Orçamento",
    image: "../assets/truck3.jpg",
    link: "./contact.html",
  },
];

let currentSlide = 0;
let interval = null;
function showSlide(index) {
  const carousel = document.querySelector("#carousel");
  carousel.style.backgroundImage = `url(${content[index].image})`;
  const carouselContent = carousel.querySelector("#carousel-content");
  carouselContent.querySelector("h1").innerHTML = content[index].title;
  carouselContent.querySelector("p").innerHTML = content[index].description;
  carouselContent.querySelector("button").innerHTML = content[index].button;
  carouselContent.querySelector("button").addEventListener("click", () => {
    window.location.href = content[index].link;
  });
}

function startInterval() {
  interval = setInterval(nextSlide, 5000);
}

function nextSlide() {
  clearInterval(interval);
  currentSlide++;
  if (currentSlide >= content.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
  startInterval();
}

function prevSlide() {
  clearInterval(interval);
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = content.length - 1;
  }
  showSlide(currentSlide);
  startInterval();
}

showSlide(currentSlide);
startInterval();

document
  .querySelector("#carousel-nav-btn.forward")
  .addEventListener("click", nextSlide);
document
  .querySelector("#carousel-nav-btn.back")
  .addEventListener("click", prevSlide);
