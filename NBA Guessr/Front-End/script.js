async function handleLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(username, password);

    let datos = {
        username: username,
        password: password
    }

    const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        body: JSON.stringify(datos),
        headers: {
            "Content-Type": "application/json",
        },
    })

    const respuesta = await response.json();
    if (respuesta.length != 0) {
        changeScreen();
    } else
        alert("Datos incorrectos");
}

/*
async function register() {
    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;

    try {
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const result = await response.json();

        if (response.ok) {
            alert(result.message);
            changeScreen(); // Assuming this function exists and is defined elsewhere
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while trying to register. Please try again later.');
    }
}



async function checkGuess() {
    const userGuess = document.getElementById("guessed-team").value.trim().toUpperCase();
    const teamName = currentImage.split('.')[0]; 

    try {
        const response = await fetch('http://localhost:3000/check-guess', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                team_name: teamName,
                user_guess: userGuess
            })
        });

        const result = await response.json();

        if (response.ok && result.correct) {
            alert("Correct!");
            score++; 
            changeToPlayerScreen(); 
        } else {
            alert("Incorrect. Try again.");
            if (score <= 16) {
                changeToBadScoreGif(); 
            }
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while checking the guess. Please try again later.');
    }
}


async function checkPlayerGuess() {
    const userPlayerGuess = document.getElementById("guessed-player").value.trim().toUpperCase();
    const playerName = currentImage.split('.')[0]; 

    try {
        const response = await fetch('http://localhost:3000/check-player-guess', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                player_name: playerName,
                user_player_guess: userPlayerGuess
            })
        });

        const result = await response.json();

        if (response.ok && result.correct) {
            alert("Correct!");
            score++; 
            if (score == 62) {
                changeToGoodScoreGif(); 
            }
            changeToNext(); 
        } else {
            alert("Incorrect. Try again.");
            if (score <= 16) {
                changeToBadScoreGif(); 
            }
            if (score > 16 && score < 40) {
                changeToMidScoreGif(); 
            }
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while checking the player guess. Please try again later.');
    }
}




*/