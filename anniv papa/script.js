function goToCake() {

    document
        .getElementById("gateau")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* Bougie */

function toggleCandle(candle) {

    candle.classList.toggle("off");

    checkCandles();

}


function lightCandles() {

    const candles =
        document.querySelectorAll(".candle");

    candles.forEach(function(candle) {

        candle.classList.remove("off");

    });

    document.getElementById("message-cake").textContent =
        "🔥 Toutes les bougies sont allumées ! Fais un vœu ! ✨";

}


function blowCandles() {

    const candles =
        document.querySelectorAll(".candle");

    candles.forEach(function(candle) {

        candle.classList.add("off");

    });

    document.getElementById("message-cake").textContent =
        "🎉 JOYEUX ANNIVERSAIRE ! 🎉";

    celebrate();

}


function checkCandles() {

    const candles =
        document.querySelectorAll(".candle");

    let allOff = true;

    candles.forEach(function(candle) {

        if (!candle.classList.contains("off")) {
            allOff = false;
        }

    });

    if (allOff) {

        document.getElementById("message-cake").textContent =
            "🎉 Toutes les bougies sont éteintes ! Joyeux anniversaire ! ❤️";

        celebrate();

    }

}


/* Confettis */

function celebrate() {

    for (let i = 0; i < 100; i++) {

        const confetti =
            document.createElement("div");

        confetti.className = "confetti";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.background =
            getRandomColor();

        confetti.style.animationDelay =
            Math.random() * 1 + "s";

        document.body.appendChild(confetti);

        setTimeout(function() {

            confetti.remove();

        }, 4000);

    }

}


function getRandomColor() {

    const colors = [
        "#ff5f9e",
        "#ffd166",
        "#06d6a0",
        "#4cc9f0",
        "#ffffff"
    ];

    return colors[
        Math.floor(Math.random() * colors.length)
    ];

}


/* Effet souris */

document.addEventListener("mousemove", function(event) {

    const hero =
        document.querySelector(".hero-content");

    if (!hero) return;

    const x =
        (event.clientX / window.innerWidth - .5) * 10;

    const y =
        (event.clientY / window.innerHeight - .5) * 10;

    hero.style.transform =
        `translate(${x}px, ${y}px)`;

});