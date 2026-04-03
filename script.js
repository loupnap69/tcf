// Fonction pour simuler un envoi de formulaire
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche l'envoi réel

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Merci ${name} !\nVotre message a été envoyé.\nEmail: ${email}\nMessage: ${message}`);
});

// Fonction pour afficher une carte basique (peut être améliorée avec une vraie API comme Leaflet ou Google Maps)
function initMap() {
    const mapElement = document.getElementById('map');
    mapElement.innerHTML = '<p>Carte interactive des lignes à venir...</p>';
}

window.onload = initMap;

function showLineInfo(line) {
    const descriptions = {
        "T1": "Tram T1 - Trajet : [Description de l'itinéraire T1]",
        "T2": "Tram T2 - Trajet : [Description de l'itinéraire T2]",
        "T3": "Tram T3 - Trajet : [Description de l'itinéraire T3]",
        "T4": "Tram T4 - Trajet : [Description de l'itinéraire T4]",
        "T5": "Tram T5 - Trajet : [Description de l'itinéraire T5]",
        "T6": "Tram T6 - Trajet : [Description de l'itinéraire T6]",
        "T7": "Tram T7 - Trajet : [Description de l'itinéraire T7]",
        "T8": "Tram T8 - Trajet : [Description de l'itinéraire T8]",
        "T9": "Tram T9 - Trajet : [Description de l'itinéraire T9]",
        "T10": "Tram T10 - Trajet : [Description de l'itinéraire T10]",
        "Métro A": "Métro A - Trajet : [Description de l'itinéraire Métro A]",
        "Métro B": "Métro B - Trajet : [Description de l'itinéraire Métro B]",
        "Métro C": "Métro C - Trajet : [Description de l'itinéraire Métro C]",
        "Métro D": "Métro D - Trajet : [Description de l'itinéraire Métro D]",
        "Métro E": "Métro E - Trajet : [Description de l'itinéraire Métro E]",
        "Métro F": "Métro F - Trajet : [Description de l'itinéraire Métro F]",
        "Métro R": "Métro R - Trajet : [Description de l'itinéraire Métro R]"
    };

    // Affiche la description de la ligne choisie
    document.getElementById('line-description').textContent = descriptions[line] || "Informations indisponibles.";
}
