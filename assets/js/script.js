const res = document.querySelector(".result");
const a = 2;
const b = 3;

main();

function main() {
    let sims = 0;

    while(sims <= 0) {
        sims = parseInt(prompt("Cuantas simulaciones desea correr?"));

        if(sims <= 0) alert("Numero invalido. El numero de simulaciones tiene que ser mayor que 0.");
    }

    const rand = getRandomNums(b, a, sims);
    const result = monteCarlo(b, a, func, sims, rand);

    res.innerHTML = `<p>El resultado matematico de la integral es: 24</p>
    <p>El resultado aproximado de la integral es: ${result}</p>
    <p>El porcentaje de error entre el valor aproximado y el real es de: ${(Math.abs(24-result)/24)*100}%`
}

function func(x) {
    return 3*Math.pow(x, 2) + 2*x;
}

function getRandomNums(max, min, sims) {
    const rand = new Array(sims);
    for(let i = 0; i < sims; i++) {
        rand[i] = Math.random() * (max - min) + min;
    }

    return rand;
}

function monteCarlo(b, a, func, sims, array) {
    let integral = 0.0;

    for(let i = 0; i < sims; i++) {
        integral += func(array[i]);
    }

    return (b - a)/parseFloat(sims)*integral;
}

