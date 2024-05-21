document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn');

    calculateBtn.addEventListener('click', calculateProjectileMotion);

    function calculateProjectileMotion() {
        const u = parseFloat(document.getElementById('initialVelocity').value);
        const theta = parseFloat(document.getElementById('angle').value);
        const g = 9.81; // acceleration due to gravity in m/s^2

        // Convert angle to radians
        const thetaRad = theta * (Math.PI / 180);

        // Calculate range
        const range = (u * u * Math.sin(2 * thetaRad)) / g;

        // Calculate maximum height
        const maxHeight = (u * u * Math.sin(thetaRad) * Math.sin(thetaRad)) / (2 * g);

        // Calculate time of flight
        const timeOfFlight = (2 * u * Math.sin(thetaRad)) / g;

        // Display results
        document.getElementById('range').textContent = `Range: ${range.toFixed(2)} meters`;
        document.getElementById('maxHeight').textContent = `Maximum Height: ${maxHeight.toFixed(2)} meters`;
        document.getElementById('timeOfFlight').textContent = `Time of Flight: ${timeOfFlight.toFixed(2)} seconds`;
    }
});
