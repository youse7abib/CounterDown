// summer of making counter down 
console.log("java script work done")
const eventData = new
    Date("2025-8-31").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const diff = eventData - now;

    if (diff <= 0) {
        document.querySelector(".countdown").innerHTML = "<h2> The hackthon started</h2>";
        return;
    }

    const Days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const Hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const Minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const Seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("Days").textContent = Days;
    document.getElementById("Hours").textContent = Hours;
    document.getElementById("Minutes").textContent = Minutes;
    document.getElementById("Seconds").textContent = Seconds;

}
setInterval(updateCountdown, 1000);


