const backgroundMusic = document.getElementById("background-music");

function pauseBackgroundMusic() {
    backgroundMusic.currentTime = 0;
    backgroundMusic.pause();
}

function playBackgroundMusic() {
    backgroundMusic.currentTime = 0;
    backgroundMusic.play();
}