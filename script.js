function makeBubble() {
  let clutter = "";

  for (let i = 1; i <= 168; i++) {
    const randomNumber = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${randomNumber}</div>`;
  }

  document.querySelector("#pbottom").innerHTML = clutter;
}

let score = 0;
let timer = 60;
function runTimer() {
  let timerinterval = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer-value").textContent = timer;
    } else {
      clearInterval(timerinterval);
      document.querySelector("#pbottom").innerHTML = `<h1>game ended 😔</h1>`;
      document.querySelector("#hit-value").textContent = 0;
    }
  }, 1000);
}
let newHitVal = 0;

function getNewHit() {
  newHitVal = Math.floor(Math.random() * 10);
  document.querySelector("#hit-value").textContent = newHitVal;
}

document
  .querySelector("#pbottom")
  .addEventListener("click", function (details) {
    let clickedNumber = Number(details.target.textContent);
    if (clickedNumber === newHitVal) {
      score += 10;
      document.querySelector("#score-value").textContent = score;
      getNewHit();
    }
  });

runTimer();
makeBubble();
getNewHit();
