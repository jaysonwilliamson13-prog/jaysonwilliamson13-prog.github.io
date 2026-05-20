function calculateAverage() {
  const g1 = Number(document.getElementById('grade1').value);
  const g2 = Number(document.getElementById('grade2').value);
  const g3 = Number(document.getElementById('grade3').value);
  const average = (g1 + g2 + g3) / 3;
  document.getElementById('averageResult').innerText =
    "Average Grade: " + average.toFixed(2);
}

function startTimer() {
  let time = Number(document.getElementById('minutes').value) * 60;
  const display = document.getElementById('timerDisplay');
  const interval = setInterval(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    display.innerText =
      String(minutes).padStart(2, '0') + ":" +
      String(seconds).padStart(2, '0');
    time--;
    if (time < 0) {
      clearInterval(interval);
      display.innerText = "Done!";
    }
  }, 1000);
}

function countdown() {
  const examDate = new Date(document.getElementById('examDate').value);
  const today = new Date();
  const difference = examDate - today;
  const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
  document.getElementById('countdownResult').innerText =
    days + " days left until your exam.";
}
