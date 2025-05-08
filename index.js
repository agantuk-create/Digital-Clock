// Function to update time and date based on selected timezone
function updateTime() {
    const now = new Date();
    const selectedTimezone = document.getElementById('timezone').value;

    const options = {
        timeZone: selectedTimezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };

    const time = now.toLocaleTimeString('en-US', options);
    document.getElementById("clock").textContent = time;

    const date = now.toLocaleDateString('en-US', { timeZone: selectedTimezone });
    document.getElementById("date").textContent = date;

    // Update greeting based on time
    const hour = now.getHours();
    let greeting = "Good Morning!";
    if (hour >= 12 && hour < 18) {
        greeting = "Good Afternoon!";
    } else if (hour >= 18) {
        greeting = "Good Evening!";
    }
    document.getElementById("greeting").textContent = greeting;
}

// Toggle between Light and Dark modes
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("light-theme");
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
    updateTime();
    setInterval(updateTime, 1000);
});
