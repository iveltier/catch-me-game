const box = document.getElementById("box");
const colors = [
  "red",
  "lime",
  "blue",
  "yellow",
  "pink",
  "purple",
  "aqua",
  "orange",
  "brown",
];

const message = [
  "loser",
  "komm doch her",
  "es ist doch nicht so schwer",
  "ich könnte das den ganzen Tag machen",
  "es hat mich noch keiner geschlagen",
  "bingo bango bango bish bash bosh",
  "Fang mich doch",
  "ich bin schneller als du",
  "ich bin speed",
  "ich bin der aller besteste",
  "pew pew",
  "trau dich",
  "sogar meine oma ist schneller als du",
  "ich bin schneller als licht",
  "ich bin schneller als der schall",
  "ich bin der auserwählte",
  "machst du schon schlapp?",
  ":)",
  "imagine losing to me",
  "you never gonna catch me",
];

box.addEventListener("mouseover", (event) => {
  const maxX = window.innerWidth - box.offsetWidth;
  const maxY = window.innerHeight - box.offsetHeight;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  box.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  box.textContent = message[Math.floor(Math.random() * message.length)];
  box.style.right = x + "px";
  box.style.top = y + "px";
  document.body.style.background = `linear-gradient(${Math.floor(
    Math.random() * 360
  )}deg, ${colors[Math.floor(Math.random() * colors.length)]}, ${
    colors[Math.floor(Math.random() * colors.length)]
  })`;
});
