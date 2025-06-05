function ex2() {
    let vet = [] // Declarar vetor
    // Entrada de dados
    for (let i = 0; i < 10; i++) {
        vet.push(Number(prompt(`Informe o ${i+1}º número`)))
    }
    // Alterar o vetor conforme o exercício
    for (let i = 0; i < 6; i++) {
        if (i%2 == 0) { // Posição par
            vet[i] = vet[i] + 10
        }
        else {
            vet[i] = vet[i] * 5
        }
    }
    alert(`${vet}`)
}