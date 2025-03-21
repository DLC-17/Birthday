// Initialize confettiCount from localStorage or set to 0
let confettiCount = parseInt(localStorage.getItem("confettiCount")) || 0;

// Update the counter display on page load
document.getElementById("counter").innerText = `Confetti Launched: ${confettiCount} times`;

function updateCounter() {
    confettiCount++;
    localStorage.setItem("confettiCount", confettiCount); // Save to localStorage
    document.getElementById("counter").innerText = `Confetti Launched: ${confettiCount} times`;
}

function launchCelebration() {
    let sound = document.getElementById("birthdaySound");
    let muteCheckbox = document.getElementById("muteCheckbox");
    if (sound && !muteCheckbox.checked) {
        sound.play();
    }
}

function launchConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
    updateCounter();
}

function Reveal() {
    document.body.style.opacity = "1"; // Fade in the entire page
    document.querySelector(".container").style.opacity = "1"; // Fade in the container
    document.querySelector(".conter").style.opacity = "1"; // Fade in the container
}