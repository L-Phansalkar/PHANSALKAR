function clickToRevealAbout() {
  var aboutme = document.getElementById("aboutme");
  aboutme.classList.toggle("hidden");
}
const aboutMeClick = document.getElementById("aboutmeclick");
aboutMeClick.addEventListener("click", () => clickToRevealAbout());

function clickToRevealFacts() {
  var aboutme = document.getElementById("aboutme");
  aboutme.classList.toggle("hidden");
}
const faqClick = document.getElementById("faq");
faqClick.addEventListener("click", () => clickToRevealFacts());
