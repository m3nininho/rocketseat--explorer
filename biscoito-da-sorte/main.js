const handleClosedClick = document.querySelector("#handleClosedClick");
const screen1 = document.querySelector("#closed-box");
const screen2 = document.querySelector("#open-box");
const luckyMessageHTML = document.querySelector("#luckyMessage");
const btnReset = document.querySelector("#btnReset");

handleClosedClick.addEventListener("click", changeScreen);
btnReset.addEventListener("click", handleClickReset);

function changeScreen() {
  classChanger();
}

function classChanger() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function randomPhrases() {
  let luckyMessage = [
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "Viva",
    "Continue em frente",
    "Você é capaz",
    "Você é demais",
    "A vida é única",
    "Um abraço pode salvar tudo",
  ];
  let luckyMessageLength = luckyMessage.length;
  const randomNumber = Math.floor(Math.random() * luckyMessageLength);

  luckyMessageHTML.innerText = luckyMessage[randomNumber];
}
randomPhrases();

function handleClickReset() {
  classChanger();
  randomPhrases();
}