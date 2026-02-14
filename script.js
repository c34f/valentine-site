/* =========================
   PAGE NAVIGATION
========================= */

function go(page){
  window.location.href = page;
}


/* =========================
   PASSWORD CHECK
========================= */

function checkPass(){
  const input = document.getElementById("pass");
  if(!input) return;

  if(input.value === "16102025"){ // your special date
    window.location.href = "intro.html";
  } else {
    alert("Hint: our special day 😉");
  }
}


/* =========================
   TYPING EFFECT
========================= */

const text = "I made this for you my YeetusTafeetus";
let i = 0;

function typeEffect(){
  const el = document.getElementById("typing");
  if(!el) return;

  if(i < text.length){
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 50);
  }
}


/* =========================
   LOVE CARD MESSAGES
========================= */

const messages = [
  "Whenever i see you smile,it brightens me up too",
  "Your presence in my life has a immense impact",
  "You match my vibes",
  "You are my favourite person",
  "I plan to marry you",
  "Giving my all because no one did in your past"
];

function reveal(card){
  if(!card) return;

  const random =
    messages[Math.floor(Math.random() * messages.length)];

  card.innerText = random;
}


/* =========================
   FINAL MESSAGE + CONFETTI
========================= */

function finalMessage(){
  const final = document.getElementById("final");
  if(!final) return;

  final.innerHTML =
    "Having you as my partner makes life a lot more colourful Happy Valentine's Day ❤️";

  if (typeof confetti === "function") {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}


/* =========================
   FLOATING HEARTS SYSTEM ❤️
========================= */

function createHearts(){
  const container = document.querySelector(".hearts");
  if(!container) return;

  setInterval(() => {

    const heart = document.createElement("span");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (8 + Math.random()*5) + "s";
    heart.style.fontSize = (14 + Math.random()*12) + "px";

    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 12000);

  }, 800);
}


/* =========================
   SAFE PAGE INITIALIZATION
========================= */

window.addEventListener("load", () => {
  typeEffect();   // runs only if typing element exists
  createHearts(); // runs only if hearts container exists
});
