document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn');

    calculateBtn.addEventListener('click', calculateValues);

    function calculateValues() {
        const rows = document.querySelectorAll('#observationTable tbody tr');

        rows.forEach(row => {
            const m1 = parseFloat(row.querySelector('.m1').value);
            const m2 = parseFloat(row.querySelector('.m2').value);
            const u1 = parseFloat(row.querySelector('.u1').value);
            const u2 = parseFloat(row.querySelector('.u2').value);
            const v1 = parseFloat(row.querySelector('.v1').value);
            const v2 = parseFloat(row.querySelector('.v2').value);

            if (!isNaN(m1) && !isNaN(m2) && !isNaN(u1) && !isNaN(u2) && !isNaN(v1) && !isNaN(v2)) {
                // Calculate K.E
                const initialKE = 0.5 * m1 * u1 * u1 + 0.5 * m2 * u2 * u2;
                const finalKE = 0.5 * m1 * v1 * v1 + 0.5 * m2 * v2 * v2;
                const ke = finalKE - initialKE;

                // Calculate e
                const e = (v2 - v1) / (u1 - u2);

                row.querySelector('.ke').textContent = ke.toFixed(2);
                row.querySelector('.e').textContent = e.toFixed(2);
            } else {
                row.querySelector('.ke').textContent = '';
                row.querySelector('.e').textContent = '';
            }
        });
    }
});