console.log("Script loaded successfully");

// Selecting elements from the HTML first
const startButton = document.getElementById("startButton");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("timer");
const holes = document.querySelectorAll(".hole");

// Select audio elements for sounds
const bompSound = document.getElementById("bomp-sound");
const endSound = document.getElementById("end-sound");
const highSound = document.getElementById("high-sound");

// Variables for game state
let score = 0;
let time = 30;
let isPlaying = false;
let countdown;

// Log elements to console to verify they are loaded correctly
console.log("Script loaded");
console.log("Start Button:", startButton);
console.log("Score Display:", scoreDisplay);
console.log("Timer Display:", timeDisplay);

// Function to generate a random time interval
function randomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to display images in holes
function displayImage() {
    holes.forEach(hole => hole.classList.remove("active"));
    const randomHole = holes[Math.floor(Math.random() * holes.length)];
    randomHole.classList.add("active");
    const time = randomTime(500, 1500);

    setTimeout(() => {
        randomHole.classList.remove("active");
        if (isPlaying) {
            displayImage();
        }
    }, time);
}

// Function to start the game
function startGame() {
    score = 0;
    time = 30;
    isPlaying = true;
    startButton.disabled = true;
    startButton.textContent = "Playing...";
    scoreDisplay.textContent = `Score: ${score}`;
    timeDisplay.textContent = `Time left: ${time}`;

    countdown
