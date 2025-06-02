function ex2() {
    let vet = []
    for (let i = 0; i < 10; i++) {
        vet.push(Number(prompt(`Informe o ${i+1}º número`)))
    }
    // fazer cálculos
    let pares = [], impares = []
    for (let i = 0; i < 6; i++) {
        if (vet[i]%2 == 0) { // elemento é par
            pares.push(vet[i] + 10)
        }
        else {
            impares.push(vet[i] * 5)
        }
    }
    alert(`
    Soma pares: ${pares}
    Multiplicação ímpares: ${impares}`)
}