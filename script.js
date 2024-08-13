// Selecting elements from the HTML
const startButton = document.getElementById("startButton");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("timer");
const holes = document.querySelectorAll(".hole");

// Select audio elements for sounds
const bompSound = document.getElementById("bomp-sound");
const endSound = document.getElementById("end-sound");
const highSound = document.getElementById("high-sound");

console.log("Elements selected:", {startButton, scoreDisplay, timeDisplay, holes});

let score = 0;
let time = 30;
let isPlaying = false;
let countdown;

console.log("Initial game state:", {score, time, isPlaying});

// Function to generate a random time interval
function randomTime(min, max) {
    const randTime = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`Generated random time: ${randTime}ms`);
    return randTime;
}

// Function to display images in holes
function displayImage() {
    console.log("Displaying images in holes");
    holes.forEach(hole => {
        hole.classList.remove("active");
        console.log(`Removed active class from hole:`, hole);
    });

    const randomHole = holes[Math.floor(Math.random() * holes.length)];
    randomHole.classList.add("active");
    console.log(`Set random hole active:`, randomHole);

    const displayTime = randomTime(500, 1500);
    setTimeout(() => {
        randomHole.classList.remove("active");
        console.log(`Removed active class after timeout:`, randomHole);

        if (isPlaying) {
            displayImage();
        }
    }, displayTime);
}

// Function to start the game
function startGame() {
    console.log("Starting game");
    score = 0;
    time = 30;
    isPlaying = true;
    startButton.disabled = true;
    startButton.textContent = "Playing...";
    console.log("Game started:", {score, time, isPlaying});

    scoreDisplay.textContent = `Score: ${score}`;
    timeDisplay.textContent = `Time left: ${time}`;

    countdown = setInterval(() => {
        time--;
        timeDisplay.textContent = `Time left: ${time}`;
        console.log(`Countdown update: ${time} seconds left`);

        if (time === 0) {
            clearInterval(countdown);
            isPlaying = false;
            startButton.disabled = false;
            startButton.textContent = "Start Game";
            console.log("Game ended");
            const message = getMessage();
            timeDisplay.textContent = message;
            console.log(`Final message: ${message}`);
            score > 20 ? highSound.play() : endSound.play();
        }
    }, 1000);

    displayImage();
}

// Event listener for the start button
startButton.addEventListener("click", () => {
    console.log("Start button clicked");
    startGame();
});

// Event listener for clicking on images
holes.forEach(hole => {
    hole.addEventListener("click", () => {
        if (hole.classList.contains("active")) {
            console.log(`Hole clicked:`, hole);
            score++;
            scoreDisplay.textContent = `Score: ${score}`;
            console.log(`Score updated: ${score}`);
            
            // Play bomp sound
            bompSound.currentTime = 0;
            bompSound.play();
            
            // Add a red border to the clicked image
            const image = hole.querySelector("img");
            image.classList.add("clicked");
            console.log(`Clicked image:`, image);

            // Remove the red border after a short delay
            setTimeout(() => {
                image.classList.remove("clicked");
                console.log(`Removed clicked border from image:`, image);
            }, 300);
        }
    });
});

// Function to get a fun message based on the score
function getMessage() {
    let message;
    if (score === 0) {
        message = "You blinked, didn't you?";
    } else if (score < 10) {
        message = "Nice effort! Keep practicing!";
    } else if (score < 20) {
        message = "You're getting good at this!";
    } else {
        message = "Wow, you're a FaceBomp champion!";
    }
    console.log(`Generated message based on score ${score}: ${message}`);
    return message;
}
