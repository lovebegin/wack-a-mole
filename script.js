<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wack-A-Nut</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="score">Score: 0</div>
    <div id="timer">Time left: 30</div>
    <button id="startButton">Start Game</button>
    <div class="game-board">
        <div class="hole"><img src="images/Alice_Weidel.jpg" alt="Alice Weidel"></div>
        <!-- Additional holes -->
    </div>
    <audio id="bomp-sound" src="sounds/bomp.wav"></audio>
    <audio id="end-sound" src="sounds/game-end.wav"></audio>
    <audio id="high-sound" src="sounds/game-end_high.wav"></audio>
    <script src="script.js"></script>
</body>
</html>
