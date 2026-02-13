// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

const videoSection = document.getElementById("video-section");
const video = document.getElementById("memory-video");
const meetLink = document.getElementById("meet-link");

// Open letter
envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";

  setTimeout(() => {
    document.querySelector(".letter-window").classList.add("open");
  }, 50);
});

// Move NO button
noBtn.addEventListener("mouseover", () => {
  const distance = 200;
  const angle = Math.random() * Math.PI * 2;

  const moveX = Math.cos(angle) * distance;
  const moveY = Math.sin(angle) * distance;

  noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// YES clicked
yesBtn.addEventListener("click", () => {
  title.textContent = "You just made my day ❤️";
  catImg.src = "cat_dance.gif";

  buttons.style.display = "none";
  finalText.style.display = "block";
  videoSection.style.display = "block";

  video.play();
});

// Show Meet link after video
video.addEventListener("ended", () => {
  meetLink.style.display = "inline-block";
});
