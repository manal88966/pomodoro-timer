

let focusTitleElement = document.getElementById('focus');
let breakTitleElement = document.getElementById('break');
let focusTime = 25;
let breakTime = 5;

let seconds = 59;

// Array of quotes
const quotes = [
    "The key to success is to focus on goals, not obstacles.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "Believe in yourself and all that you are.",
    "Your only limit is your mind.",
    "The only way to do great work is to love what you do."
];

// Function to display a random quote
function displayRandomQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote').innerText = randomQuote;
}

// Display random quote on page load
window.onload = () => {
    displayRandomQuote();
    document.getElementById('minutes').innerHTML = focusTime;
    document.getElementById('seconds').innerHTML = seconds;
    focusTitleElement.classList.add('active');
}

// Start timer function
function start() {
    // Hide start button and show reset button
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    // Reset seconds
    seconds = 59;

    let focusMinutes = focusTime - 1;
    let breakMinutes = breakTime - 1;
    let breakCount = 0;

    // Countdown function
    let timeFunction = () => {
        // Update the display
        document.getElementById('minutes').innerHTML = focusMinutes;
        document.getElementById('seconds').innerHTML = seconds;

        // Decrease seconds
        seconds = seconds - 1;

        if (seconds == -1) {
            focusMinutes = focusMinutes - 1;

            if (focusMinutes == -1) {
                if (breakCount % 2 == 0) {
                    // Start break
                    focusMinutes = breakMinutes;
                    breakCount++;
                    // Change the panel
                    focusTitleElement.classList.remove('active');
                    breakTitleElement.classList.add('active');
                    displayRandomQuote();  // Display a new quote when the break starts
                } else {
                    // Continue focus
                    focusMinutes = focusTime;
                    breakCount++;
                    // Change the panel
                    breakTitleElement.classList.remove('active');
                    focusTitleElement.classList.add('active');
                    displayRandomQuote();  // Display a new quote when focus starts
                }
            }
            seconds = 59;
        }
    };

    // Start countdown
    setInterval(timeFunction, 1000);
}

// Reset function
function reset() {
    // Reset the timer to initial values
    seconds = 59;
    document.getElementById('minutes').innerHTML = focusTime;
    document.getElementById('seconds').innerHTML = seconds;

    // Reset the panels
    focusTitleElement.classList.add('active');
    breakTitleElement.classList.remove('active');

    // Reset the buttons
    document.getElementById('start').style.display = "block";
    document.getElementById('reset').style.display = "none";

    // Display a new random quote
    displayRandomQuote();
}
