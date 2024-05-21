function calculate() {
    const lengths = document.querySelectorAll('.length');
    const xs = document.querySelectorAll('.x');
    const ys = document.querySelectorAll('.y');
    const lxs = document.querySelectorAll('.lx');
    const lys = document.querySelectorAll('.ly');
    
    let sumLx = 0;
    let sumLy = 0;
    let sumL = 0;

    for (let i = 0; i < lengths.length; i++) {
        const length = parseFloat(lengths[i].value) || 0;
        const x = parseFloat(xs[i].value) || 0;
        const y = parseFloat(ys[i].value) || 0;

        const lx = length * x;
        const ly = length * y;

        lxs[i].textContent = lx.toFixed(2);
        lys[i].textContent = ly.toFixed(2);

        sumL += length;
        sumLx += lx;
        sumLy += ly;
    }

    document.getElementById('sumLx').textContent = sumLx.toFixed(2);
    document.getElementById('sumLy').textContent = sumLy.toFixed(2);

    const xResult = sumLx / sumL;
    const yResult = sumLy / sumL;


    document.getElementById('result').textContent =`x = ${xResult.toFixed(2)}  y = ${yResult.toFixed(2)}`;
}