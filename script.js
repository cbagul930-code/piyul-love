
function openMessage() {
  document.getElementById("page1")
    .classList.remove("active");

  document.getElementById("page2")
    .classList.add("active");
}

function goBack() {
  document.getElementById("page2")
    .classList.remove("active");

  document.getElementById("page1")
    .classList.add("active");
}

const container = document.getElementById("hearts");

function createHeart() {
  const heart = document.createElement("div");

  heart.className = "bubble";

  const messages = [
    "❤️ I love you",
    "♡ Piyu",
    "💕 I love you",
    "💗 Piyuu",
    "❤️ Forever"
  ];

  heart.innerText =
    messages[Math.floor(Math.random() * messages.length)];

  heart.style.left = Math.random() * 95 + "vw";
  heart.style.fontSize = (14 + Math.random() * 15) + "px";
  heart.style.animationDuration = (5 + Math.random() * 5) + "s";

  container.appendChild(heart);

  setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 450);
