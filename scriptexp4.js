const calculator = document.getElementById('calculator');
const result = document.getElementById('result');

calculator.addEventListener('submit', function(event) {
	event.preventDefault();

	const t1 = parseFloat(calculator.t1.value);
	const t2 = parseFloat(calculator.t2.value);
	const beta = parseFloat(calculator.beta.value);

	if (isNaN(t1) || isNaN(t2) || isNaN(beta)) {
		result.textContent = 'Please enter valid numbers for T1, T2, and β.';
		return;
	}

	const mu = Math.log(t2 / t1) / beta;

	result.textContent = `μ = ${mu.toFixed(2)}`;
});