function ex1() {
    let vet = []
    for (let i = 0; i < 6; i++) {
        vet.push(Number(prompt(`Informe o ${i+1}º número`)))
    }
    // fazer cálculos
    let pares = [], impares = []
    for (let i = 0; i < 6; i++) {
        if (vet[i]%2 == 0) { // elemento é par
            pares.push(vet[i])
        }
        else {
            impares.push(vet[i])
        }
    }
    alert(`
    ${pares.length} são pares: ${pares}
    ${impares.length} são ímpares: ${impares}`)
}

// i = posição do vetor
// v[i] = elemento na posição i