function calculate() {
    const mass = parseFloat(document.getElementById('mass').value);
    const rows = document.querySelectorAll('#observationTable tr');

    let totalI = 0; // Variable to store the total sum of I values
    let rowCount = 0; // Variable to count the number of rows with valid input

    rows.forEach(row => {
        const N = parseFloat(row.querySelector('.N').value);
        const n = parseFloat(row.querySelector('.n').value);
        const t = parseFloat(row.querySelector('.t').value);
        const H = parseFloat(row.querySelector('.H').value);
        
        const w = (4 * Math.PI * n) / t;
        const r = 0;  // Assuming r is 0, as it's not defined in the problem statement

        const I = ((N * mass) / (N + n)) * ((2 * 9.81 * H) / (w * w) - r * r);

        if (!isNaN(I)) { // Check if I is a valid number
            totalI += I; // Add I to the total sum
            rowCount++; // Increment the row count
        }

        row.querySelector('.w').innerText = w.toFixed(2);
        row.querySelector('.I').innerText = isNaN(I) ? '-' : I.toFixed(2); // Display '-' if I is not a valid number
    });

    const averageI = rowCount > 0 ? totalI / rowCount : 0; // Calculate average if there are valid values
    const averageRow = document.createElement('tr');
    averageRow.innerHTML = `<td colspan="6">Average I:</td><td>${averageI.toFixed(2)}</td>`;

    const tableBody = document.querySelector('#observationTable');
    const existingAverageRow = tableBody.querySelector('.average-row');
    if (existingAverageRow) {
        existingAverageRow.replaceWith(averageRow); // Replace existing average row if it exists
    } else {
        tableBody.appendChild(averageRow); // Append average row to the table body
    }
}