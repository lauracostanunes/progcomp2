function ex10() {
    let numero;
    let somaPares = 0;
    let somaPrimos = 0;
    for (let i = 1; i <= 10; i++) {
        do {
            numero = Number(prompt(`Digite o ${i}º número:`));
        } while (isNaN(numero) || numero <= 0);
        if (numero % 2 === 0) {
            somaPares += numero;
        }
        let divisores = 0;
        for (let j = 1; j <= numero; j++) {
            if (numero % j === 0) {
                divisores++;
            }
        }
        if (divisores === 2) {
            somaPrimos += numero;
        }
    }
    alert(`Soma dos números pares: ${somaPares}
Soma dos números primos: ${somaPrimos}`);
}
