function clickToRevealAbout() {
  var aboutme = document.getElementById("aboutme");
  aboutme.classList.toggle("hidden");
}
const aboutMeClick = document.getElementById("aboutmeclick");
aboutMeClick.addEventListener("click", () => clickToRevealAbout());

function clickToRevealFacts() {
  var funfact = document.getElementById("funfac");
  funfact.classList.toggle("hidden");
}
const faqClick = document.getElementById("faq");
faqClick.addEventListener("click", () => clickToRevealFacts());
