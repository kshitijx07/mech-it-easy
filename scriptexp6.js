document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn');
    const result = document.getElementById('result');
    
    calculateBtn.addEventListener('click', calculate);

    function calculate() {
        const areas = document.querySelectorAll('.area');
        const xs = document.querySelectorAll('.x');
        const ys = document.querySelectorAll('.y');
        const axs = document.querySelectorAll('.ax');
        const ays = document.querySelectorAll('.ay');
        
        let sumAx = 0;
        let sumAy = 0;
        let sumArea = 0;

        for (let i = 0; i < areas.length; i++) {
            const area = parseFloat(areas[i].value) || 0;
            const x = parseFloat(xs[i].value) || 0;
            const y = parseFloat(ys[i].value) || 0;

            const ax = area * x;
            const ay = area * y;

            axs[i].textContent = ax.toFixed(2);
            ays[i].textContent = ay.toFixed(2);

            sumArea += area;
            sumAx += ax;
            sumAy += ay;
        }

        document.getElementById('sumArea').textContent = sumArea.toFixed(2);
        document.getElementById('sumAx').textContent = sumAx.toFixed(2);
        document.getElementById('sumAy').textContent = sumAy.toFixed(2);

        const xResult = sumAx / sumArea;
        const yResult = sumAy / sumArea;

        result.textContent = `Coordinates of centroid for the given shape are: x = ${xResult.toFixed(2)}, y = ${yResult.toFixed(2)}`;
    }
});
