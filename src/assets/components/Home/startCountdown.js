export function startCountdown(targetDate) {
    const countdownElement = document.getElementById("contador");

    function updateCountdown() {
        const currentDate = new Date().getTime();
        const timeDifference = targetDate - currentDate;

        if (timeDifference <= 0) {
            countdownElement.textContent = "Evento Finalizado!";
            return;
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);

    return () => clearInterval(countdownInterval);
};