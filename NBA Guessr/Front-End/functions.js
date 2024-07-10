function changeScreen() {
    document.getElementById("login").style.display = "none";
    document.getElementById("game").style.display = "";
}
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


const badScoreGifs = [
    "NBA Guessr/Front-End/gifs/bad score/ben simmons.gif",
    "NBA Guessr/Front-End/gifs/bad score/failed dunk.gif",
    "NBA Guessr/Front-End/gifs/bad score/fultz.gif"
];

function getRandomBadScoreGif() {
    const randomIndex = Math.floor(Math.random() * badScoreGifs.length);
    return badScoreGifs[randomIndex];
}

function updateBadScoreGif() {
    const imageElement = document.getElementById("bad-score-gif");
    const randomBadScoreGif = getRandomBadScoreGif();
    imageElement.src = randomBadScoreGif;
}

document.addEventListener("DOMContentLoaded", updateBadScoreGif);






function changeToPlayerScreen(){
    document.getElementById("guess team").style.display = "none";
    document.getElementById("guess player").style.display = "";
}

function changeToBadScoreGif(){
    document.getElementById("game").style.display = "none";
    document.getElementById("loigin").style.display = "none";
    document.getElementById("badScore").style.display = "";
}