// script.js

// Fetch environment variable and display it on the webpage
fetch('/env')
    .then(response => response.json())
    .then(data => {
        document.getElementById('env-var').textContent = `MY_ENV_VAR: ${data.MY_ENV_VAR}`;
    })
    .catch(error => {
        console.error('Error fetching environment variable:', error);
        document.getElementById('env-var').textContent = 'Error fetching environment variable';
    });
