document.getElementById('force-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const force1 = parseFloat(document.getElementById('force1').value);
    const force2 = parseFloat(document.getElementById('force2').value);
    const angle = parseFloat(document.getElementById('angle').value);
  
    const result = calculateResultant(force1, force2, angle);
  
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
      <p>Resultant Force: ${result.magnitude.toFixed(2)}</p>
    `;
  });
  
  function calculateResultant(force1, force2, angle) {
    
    const resultMagnitude = Math.sqrt(Math.pow(force1, 2) + Math.pow(force2, 2) + 2 * force1 * force2 * Math.cos(angle * Math.PI / 180));
  
    return { magnitude: resultMagnitude};
}