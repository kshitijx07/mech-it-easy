document.addEventListener('DOMContentLoaded', function() {
    const calculateInertiaBtn = document.getElementById('calculateInertiaBtn');

    calculateInertiaBtn.addEventListener('click', calculateInertia);

    function calculateInertia() {
        const m = parseFloat(document.getElementById('mass').value);
        const L = parseFloat(document.getElementById('length').value);
        const n = parseFloat(document.getElementById('rotations').value);

        // Calculate analytical moment of inertia
        const I = (m * L * L) / 12;
        document.getElementById('analyticalInertia').textContent = `Analytical Moment of Inertia (I) = ${I.toFixed(4)} kg·m²`;

        // Calculate table values
        const rows = document.querySelectorAll('#dataTable tbody tr');
        let sumIg = 0;

        rows.forEach(row => {
            const b = parseFloat(row.querySelector('.b').value);
            const T = parseFloat(row.querySelector('.T').value);

            if (!isNaN(b) && !isNaN(T)) {
                const t = T / n;
                const Io = (t * t * m * 9.81 * b) / (4 * Math.PI * Math.PI);
                const Ig = Io - (m * b * b);

                row.querySelector('.t').textContent = t.toFixed(2);
                row.querySelector('.Io').textContent = Io.toFixed(2);
                row.querySelector('.Ig').textContent = Ig.toFixed(2);

                sumIg += Ig;
            } else {
                row.querySelector('.t').textContent = '';
                row.querySelector('.Io').textContent = '';
                row.querySelector('.Ig').textContent = '';
            }
        });

        const averageIg = sumIg / rows.length;
        document.getElementById('averageIg').textContent = averageIg.toFixed(4);

        // Display final result
        const finalResult = `Average Ig = ${averageIg.toFixed(4)} kg·m², Analytical I = ${I.toFixed(4)} kg·m²`;
        document.getElementById('finalResult').textContent = finalResult;
    }
});
