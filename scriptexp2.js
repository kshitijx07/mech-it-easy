const form = document.getElementById('calculator-form');
const p1 = document.getElementById('p1');
const d1 = document.getElementById('d1');
const p2 = document.getElementById('p2');
const d2 = document.getElementById('d2');
const m1 = document.getElementById('m1');
const m2 = document.getElementById('m2');
const m = document.getElementById('m');
const results = document.getElementById('results');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const m1Value = parseFloat(p1.value) * parseFloat(d1.value);
  const m2Value = parseFloat(p2.value) * parseFloat(d2.value);
  const mValue = m1Value + m2Value;
  m1.textContent = m1Value.toFixed(2);
  m2.textContent = m2Value.toFixed(2);
  m.textContent = mValue.toFixed(2);
});