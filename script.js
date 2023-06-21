let workLabel = document.getElementById("work");
let breakLabel = document.getElementById("break");

let workTime = 25;
let breakTime = 5;
let seconds = "00";

window.onload = () => {
  document.getElementById("minutes").innerHTML = workTime;
  document.getElementById("seconds").innerHTML = seconds;

  workLabel.classList.add("active");
};

function start() {
  document.getElementById("start").style.display = "none";
  document.getElementById("reset").style.display = "block";

  seconds = 59;

  let workMinutes = workTime - 1;
  let breakMinutes = breakTime - 1;

  breakCount = 0;

  let timerFunction = () => {
    document.getElementById("minutes").innerHTML = workMinutes;
    document.getElementById("seconds").innerHTML = seconds;

    seconds--;

    if (seconds === 0) {
      workMinutes = workMinutes - 1;
      if (workMinutes === -1) {
        if (breakCount % 2 === 0) {
          workMinutes = breakMinutes;
          breakCount++;

          workLabel.classList.remove("active");
          breakLabel.classList.add("active");
        } else {
          workMinutes = workTime;
          breakCount++;

          breakLabel.classList.remove("active");
          workLabel.classList.add("active");
        }
      }
      seconds = 59;
    }
  };

  setInterval(timerFunction, 1000);
}
