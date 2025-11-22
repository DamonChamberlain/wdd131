document.addEventListener('DOMContentLoaded', () => {

    try {
        const currentYearSpan = document.getElementById('current-year');
        if (currentYearSpan) {
            currentYearSpan.textContent = new Date().getFullYear();
        }

        const lastModifiedSpan = document.getElementById('last-modified');
        if (lastModifiedSpan) {
            lastModifiedSpan.textContent = document.lastModified;
        }
    } catch (error) {
        console.error("Error setting footer content:", error);
    }

    const temperatureC = 10;
    const windSpeedKmh = 5;

    const windChillSpan = document.getElementById('wind-chill');

    function calculateWindChill(temperature, windSpeed) {
        return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
    }

    if (temperatureC <= 10 && windSpeedKmh > 4.8 && windChillSpan) {
        const windChillValue = calculateWindChill(temperatureC, windSpeedKmh);
        
        windChillSpan.textContent = `${windChillValue.toFixed(1)}°C`;
    } else if (windChillSpan) {
        windChillSpan.textContent = "N/A";
    }
});