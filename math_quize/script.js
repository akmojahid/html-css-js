let num1, num2, correctAnswer;
let right = 0;
let wrong = 0;

function generateQuestion() {
  // Hide the next question button initially
  document.getElementById("next-question").style.display = "none";
  document.getElementById("feedback").innerText = "";

  // Generate two random numbers for the multiplication table
  num1 = Math.floor(Math.random() * 20) + 1;
  num2 = Math.floor(Math.random() * 20) + 1;

  // Display the question
  document.getElementById("question").innerText = `What is ${num1} x ${num2}?`;

  // Calculate the correct answer
  correctAnswer = num1 * num2;

  // Generate random options including the correct answer
  let options = generateOptions(correctAnswer);

  // Assign the options to the buttons
  const buttons = document.querySelectorAll(".option");
  buttons.forEach((button, index) => {
    button.innerText = options[index];
    button.style.backgroundColor = "#007bff"; // Reset color
    button.disabled = false; // Enable button
  });
}

function generateOptions(correctAnswer) {
  // Generate 3 random wrong options and insert the correct one
  let options = new Set();
  options.add(correctAnswer);

  while (options.size < 4) {
    let wrongAnswer = Math.floor(Math.random() * 400) + 1; // Random number between 1 and 400
    options.add(wrongAnswer);
  }

  return Array.from(options).sort(() => Math.random() - 0.5); // Shuffle the options
}

function checkAnswer(button) {
  const userAnswer = parseInt(button.innerText);

  // Disable all buttons after an answer is chosen
  const buttons = document.querySelectorAll(".option");
  buttons.forEach(btn => btn.disabled = true);

  if (userAnswer === correctAnswer) {
    document.querySelector('.right p').innerHTML = right += 1;

    button.style.backgroundColor = "green";
    document.getElementById("feedback").innerText = "Correct!";
  } else {
    document.querySelector('.wrong p').innerHTML = wrong += 1;

    button.style.backgroundColor = "red";
    document.getElementById("feedback").innerText = `Wrong! The correct answer is ${correctAnswer}.`;
  }
  // Show the next question button
  document.getElementById("next-question").style.display = "block";
}

// Initialize the first question when the page loads
window.onload = generateQuestion;