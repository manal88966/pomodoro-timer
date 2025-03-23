

let focusTitleElement = document.getElementById('focus');
let breakTitleElement = document.getElementById('break');
let focusTime = 25;
let breakTime = 5;
let seconds = 59;
let timer = null; // Stocker l'intervalle ici

// Affichage initial au chargement de la page
window.onload = () => {
    document.getElementById('minutes').innerHTML = focusTime;
    document.getElementById('seconds').innerHTML = "00";

    focusTitleElement.classList.add('active');
};

// Fonction pour démarrer le minuteur
function start() {
    // Changer l'affichage des boutons
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    let focusMinutes = focusTime - 1;
    let breakMinutes = breakTime - 1;
    let breakCount = 0;

    // Fonction de compte à rebours
    let timeFunction = () => {
        // Mettre à jour l'affichage
        document.getElementById('minutes').innerHTML = focusMinutes;
        document.getElementById('seconds').innerHTML = seconds < 10 ? "0" + seconds : seconds;

        // Décrémenter les secondes
        seconds--;

        if (seconds == -1) {
            seconds = 59;
            focusMinutes--;

            if (focusMinutes == -1) {
                if (breakCount % 2 == 0) {
                    // Passer au break
                    focusMinutes = breakMinutes;
                    breakCount++;

                    // Changer l'affichage du panneau
                    focusTitleElement.classList.remove('active');
                    breakTitleElement.classList.add('active');
                } else {
                    // Retour au focus
                    focusMinutes = focusTime;
                    breakCount++;

                    // Changer l'affichage du panneau
                    breakTitleElement.classList.remove('active');
                    focusTitleElement.classList.add('active');
                }
            }
        }
    };

    // Démarrer le compte à rebours
    timer = setInterval(timeFunction, 1000);
}

// Fonction pour réinitialiser le minuteur
function reset() {
    clearInterval(timer); // Arrête le minuteur
    document.getElementById('start').style.display = "block";
    document.getElementById('reset').style.display = "none";

    focusTitleElement.classList.add('active');
    breakTitleElement.classList.remove('active');

    focusTime = 25;
    breakTime = 5;
    seconds = 0;

    document.getElementById('minutes').innerHTML = focusTime;
    document.getElementById('seconds').innerHTML = "00";
}
