document.addEventListener('DOMContentLoaded', function() {
    const timerElement = document.getElementById('countdown-timer');
    let countdown = 5; // Set countdown time in seconds

    // Update countdown every second
    const interval = setInterval(() => {
        timerElement.textContent = countdown;
        countdown--;

        if (countdown < 0) {
            clearInterval(interval);
            // Redirect to game page
            window.location.href = '/game';
        }
    }, 1000);
});
