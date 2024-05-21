const calculator = document.getElementById('calculator');
const result = document.getElementById('result');

calculator.addEventListener('submit', function(event) {
    event.preventDefault();

    const w = parseFloat(calculator.w.value);
    const p = parseFloat(calculator.p.value);
    const theta = parseFloat(calculator.theta.value) * Math.PI / 180; // convert to radians

    if (isNaN(w) || isNaN(p) || isNaN(theta)) {
        result.textContent = 'Please enter valid numbers for W, P, and θ.';
        return;
    }

    const N = w * Math.cos(theta);
    const mu_max = (p - w * Math.sin(theta)) / N;

    if (mu_max > 1) {
        result.textContent = 'μmax cannot be greater than 1.';
    } else {
        result.textContent = `N = ${N.toFixed(2)}  μmax = ${mu_max.toFixed(2)}`;
    }
});
