async function login() {

    const username = getUsername();
    const password = getPassword(); 

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const result = await response.json();

        if (response.ok) {
            alert(result.message);
            changeScreen();

        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while trying to log in. Please try again later.');
    }
}

async function register() {

    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;

    try {
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const result = await response.json();

        if (response.ok) {
            alert(result.message);
            changeScreen();
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
    const teamName = currentImage.split('.')[0]; // Assuming image name matches team name

    const response = await fetch('/check-guess', {
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
    if (result.correct) {
        alert("Correct!");
    } else {
        alert("Incorrect. Try again.");
    }
}