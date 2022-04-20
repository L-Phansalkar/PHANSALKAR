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

function clickToRevealReviews() {
  var reviews = document.getElementById("reviews");
  reviews.classList.toggle("hidden");
}
const reviewsClick = document.getElementById("reviewclick");
reviewsClick.addEventListener("click", () => clickToRevealReviews());

function clickToRevealForm() {
  var form = document.getElementById("form");
  form.classList.toggle("hidden");
}
const formClick = document.getElementById("add");
formClick.addEventListener("click", () => clickToRevealForm());

let words = document.getElementById("writeithere");
let urname = document.getElementById("urname");
let rel = document.getElementById("rel");
const clickToSubmit = document.getElementById("submit");
clickToSubmit.addEventListener("click", () => submitForm());
function submitForm() {
  console.log(words.value, urname.value, rel.value);
}
