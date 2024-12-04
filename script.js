// Cambia entre las pantallas de inicio y perfil
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.style.display = 'none';
    });
    document.getElementById(screenId).style.display = 'flex';
}

// Maneja el botón de inicio
document.getElementById('startButton').addEventListener('click', () => {
    showScreen('profileScreen');
    fetchGitHubProfile();
});

// Solicita información del perfil de GitHub
function fetchGitHubProfile() {
    const username = 'DiazCarmody';
    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('profileInfo').innerHTML = `
                <p><strong>Nombre:</strong> ${data.name}</p>
                <p><strong>Bio:</strong> ${data.bio}</p>
                <p><strong>Repositorios Públicos:</strong> ${data.public_repos}</p>
            `;
        })
        .catch(error => console.error('Error al obtener el perfil:', error));
}
