//cambiar nombre completo del equipo igual que en base de datos, sin png, imagenes pixeladas
const images = [
    "BLAZERS.png", "BUCKS.png", "BULLS.png", "CAVS.png", "CELTICS.png",
    "CLIPPERS.png", "GRIZZLIES.png", "HAWKS.png", "HEAT.png", "HORNETS.png",
    "JAZZ.png", "KINGS.png", "KNICKS.png", "LAKERS.png", "MAGIC.png",
    "MAVS.png", "NETS.png", "NUGGETS.png", "PACERS.png", "PELICANS.png",
    "PISTONS.png", "RAPTORS.png", "ROCKETS.png", "SIXERS.png", "SPURS.png",
    "SUNS.png", "THUNDER.png", "TIMBERWOLVES.png", "WARRIORS.png", "WIZARDS.png"
];
const imagePath = "images/";

const imageType = ".png";

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

function updateImage() {
    const imageElement = document.getElementById("team-image");
    const randomImage = getRandomImage();
    imageElement.src = imagePath + randomImage; // + imageType
    currentImage = randomImage;
}

document.addEventListener("DOMContentLoaded", updateImage);

document.addEventListener("DOMContentLoaded", updateBadScoreGif);

document.addEventListener("DOMContentLoaded", updateGoodScoreGif);

const gifType = ".gif";

const badScoreGifPath = "gifs/bad score/";

const badScoreGifs = [
    "ben simmons",
    "failed dunk",
    "fultz",
];

function getRandomBadScoreGif() {
    const randomIndex = Math.floor(Math.random() * badScoreGifs.length);
    return badScoreGifs[randomIndex];
}

function updateBadScoreGif() {
    const imageElement = document.getElementById("bad-score-gif");
    const randomBadScoreGif = getRandomBadScoreGif();
    imageElement.src = badScoreGifPath + randomBadScoreGif + gifType;
}

let score = 62;

const scoreSquare = document.getElementById('score-square');

scoreSquare.textContent = score;

const scoreSquare1 = document.getElementById('score-square1');

scoreSquare1.textContent = score;

const scoreSquare2 = document.getElementById('score-square2');

scoreSquare2.textContent = score;

function changeScreen() {
    document.getElementById("login").style.display = "none";
    document.getElementById("game").style.display = "";
}

function changeToPlayerScreen(){
    document.getElementById("guess team").style.display = "none";
    document.getElementById("guess player").style.display = "";
}

function changeToBadScoreGif(){
    document.getElementById("game").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("goodScore").style.display = "none";
    document.getElementById("badScore").style.display = "";
}

function restartGame(){
    document.getElementById("badScore").style.display = "none";
    document.getElementById("goodScore").style.display = "none";
    document.getElementById("guess team").style.display = "";
    document.getElementById("login").style.display = "none";
    score = 0; 
    
    
}

const goodScoreGifPath = "gifs/good score/";

const goodScoreGifs = [
    "ant",
    "champagne",
    "michael jordan",
];

function getRandomGoodScoreGif() {
    const randomIndex = Math.floor(Math.random() * goodScoreGifs.length);
    return goodScoreGifs[randomIndex];
}

function updateGoodScoreGif() {
    const imageElement = document.getElementById("good-score-gif");
    const randomGoodScoreGif = getRandomGoodScoreGif();
    imageElement.src = goodScoreGifPath + randomGoodScoreGif + gifType;
}

function changeToGoodScoreGif(){
    document.getElementById("game").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("badScore").style.display = "none";
    document.getElementById("goodScore").style.display = "";
}