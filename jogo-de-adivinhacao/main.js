const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

// Função callback
function handleTryClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) == randomNumber) {
    screen1.classList.add("hide");
    screen2.classList.remove("hide");

    document.querySelector(
      ".screen2 h2"
    ).innerText = `você acertou em ${xAttempts} tentativas`;
  }

  inputNumber.value = "";
  xAttempts++;
}

// Eventos
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

btnTry.addEventListener("click", handleTryClick);

// Função anonima
btnReset.addEventListener("click", function () {
  screen1.classList.remove("hide");
  screen2.classList.add("hide");
  xAttempts = 1;
});
