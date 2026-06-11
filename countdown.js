const TARGET_TIMESTAMP = 1781218800; 

(function() {
    const targetTime = TARGET_TIMESTAMP * 1000;

    const elDays = document.getElementById("cd-days");
    const elHours = document.getElementById("cd-hours");
    const elMinutes = document.getElementById("cd-minutes");
    const elSeconds = document.getElementById("cd-seconds");
    const container = document.querySelector(".countdown-container");

    if (!elDays || !elHours || !elMinutes || !elSeconds) return;

    function updateCountdown() {
        const now = Date.now();
        const difference = targetTime - now;

        if (difference <= 0) {
            if (container) {
                container.innerHTML = `<div class="countdown-value" style="font-size: 1.3rem; color: #00ffcc; text-shadow: 0 0 10px rgba(0,255,204,0.4);">¡EVENTO INICIADO!</div>`;
            }
            clearInterval(intervalId);
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        elDays.innerText = String(days).padStart(2, '0');
        elHours.innerText = String(hours).padStart(2, '0');
        elMinutes.innerText = String(minutes).padStart(2, '0');
        elSeconds.innerText = String(seconds).padStart(2, '0');
    }
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.classList.add('oculto');
        }
    }, 1600); 

    const intervalId = setInterval(updateCountdown, 1000);
    updateCountdown();
})();
