//cambiar nombre completo del equipo igual que en base de datos, sin png, imagenes pixeladas
const images = [
    "Atlanta Hawks", "Boston Celtics", "Brooklyn Nets", "Charlotte Hornets", "Chicago Bulls", "Cleveland Cavaliers", "Dallas Mavericks", "Denver Nuggets", "Detroit Pistons", 
    "Golden State Warriors", "Houston Rockets", "Indiana Pacers", "Los Angeles Clippers", "Los Angeles Lakers", "Memphis Grizzlies", "Miami Heat", "Milwaukee Bucks", 
    "Minnesota Timberwolves", "New Orleans Pelicans", "New York Knicks", "Oklahoma City Thunder", "Orlando Magic", "Philadelphia 76ers", "Phoenix Suns", 
    "Portland Trail Blazers", "Sacramento Kings", "San Antonio Spurs", "Toronto Raptors", "Utah Jazz", "Washington Wizards"
];

const imagePath = "images/";

const imageType = ".png";

let remainingImages = [...images]; 

let currentImage = "";

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * remainingImages.length);
    const selectedImage = remainingImages.splice(randomIndex, 1)[0]; 
    return selectedImage;
}

function updateImage() {
    const imageElement = document.getElementById("team-image");
    const randomImage = getRandomImage();

    if (randomImage !== null) {
        imageElement.src = imagePath + randomImage + imageType;
        currentImage = randomImage;
    }
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

let score = 0;

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

function changeToNext() {
    updateImage(); 
}