function calculateAverage() {
  const g1 = Number(document.getElementById('grade1').value);
  const g2 = Number(document.getElementById('grade2').value);
  const g3 = Number(document.getElementById('grade3').value);

  const average = (g1 + g2 + g3) / 3;

  document.getElementById('averageResult').innerText =
    "Average GCSE Grade: " + average.toFixed(2);
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

function studyHelper() {
  const question = document.getElementById('studyQuestion').value;

  let response = "Try breaking the topic into smaller sections and revising with flashcards.";

  if (question.toLowerCase().includes("math")) {
    response = "Practice past-paper questions and show all working.";
  }

  if (question.toLowerCase().includes("science")) {
    response = "Focus on key definitions and diagrams.";
  }

  document.getElementById('studyAnswer').innerText = response;
}

function addFlashcard() {
  const q = document.getElementById('flashQuestion').value;
  const a = document.getElementById('flashAnswer').value;

  const card = document.createElement('div');
  card.className = "flashcard";
  card.innerHTML = "<strong>Q:</strong> " + q + "<br><strong>A:</strong> " + a;

  document.getElementById('flashcards').appendChild(card);
}

function saveUser() {
  const username = document.getElementById('username').value;

  localStorage.setItem("studyspark_user", username);

  document.getElementById('userResult').innerText =
    "Saved user: " + username;
}

document.getElementById('darkModeBtn').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
