const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user_result img");
const cpuResult = document.querySelector(".cpu_result img");
const result = document.querySelector(".result");
const optionImages = document.querySelectorAll(".option_image");

const options = ["rock", "paper", "scissors"];

// Function to generate a random CPU choice
function generateCPURandomChoice() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// Function to determine the game outcome
function determineOutcome(userChoice, cpuChoice) {
  if (userChoice === cpuChoice) {
    return "Draw";
  } else if (
    (userChoice === "rock" && cpuChoice === "scissors") ||
    (userChoice === "paper" && cpuChoice === "rock") ||
    (userChoice === "scissors" && cpuChoice === "paper")
  ) {
    return "User";
  } else {
    return "CPU";
  }
}

// Loop through each option image element
optionImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    image.classList.add("active");

    const userChoice = options[index];
    userResult.src = `images/${userChoice}_image.png`;

    const cpuChoice = generateCPURandomChoice();
    cpuResult.src = `images/${cpuChoice}_image.png`;

    const outcome = determineOutcome(userChoice, cpuChoice);
    result.textContent = outcome === "Draw" ? "Match Draw" : `${outcome} Won!!`;

    // Loop through each option again to remove the "active" class from others
    optionImages.forEach((image2, index2) => {
      if (index !== index2) {
        image2.classList.remove("active");
      }
    });

    // Add "start" class to gameContainer and remove it after 2.5 seconds
    gameContainer.classList.add("start");

    setTimeout(() => {
      gameContainer.classList.remove("start");
    }, 2500);
  });
});
