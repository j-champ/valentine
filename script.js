// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");

const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

const video = document.getElementById("memory-video");
const meetLink = document.getElementById("meet-link");


// ------------------------------
// Open envelope → show letter
// ------------------------------
envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";

  setTimeout(() => {
    document.querySelector(".letter-window").classList.add("open");
  }, 50);
});


// ------------------------------
// Move NO button randomly
// ------------------------------
noBtn.addEventListener("mouseover", () => {
  const distance = 200;
  const angle = Math.random() * Math.PI * 2;

  const moveX = Math.cos(angle) * distance;
  const moveY = Math.sin(angle) * distance;

  noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});


// ------------------------------
// YES clicked → replace cat with video
// ------------------------------
yesBtn.addEventListener("click", () => {

  // Change title
  title.textContent = "You just made my day ❤️";

  // Hide buttons
  buttons.style.display = "none";

  // Show final text
  finalText.style.display = "block";

  // Hide heart cat GIF
  catImg.style.display = "none";

  // Show video in same spot
  video.style.display = "block";
  video.currentTime = 0;

  // Play video
  video.play().catch(() => {
    console.log("Autoplay blocked — user must press play.");
  });
});


// ------------------------------
// After video ends → show Meet
// ------------------------------
video.addEventListener("ended", () => {
  meetLink.style.display = "inline-block";
});

