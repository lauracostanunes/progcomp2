function ex3() {
    let vet = [] // Declaração do vetor
    for (let i = 0; i < 10; i++) { // Entrada de dados
        do {
        vet[i] = (Number(prompt(`Informe a opinião do ${i+1}º usuário:
1- Gostou muito
2- Gostou
3- Não gostou`)))
    }
        while (vet[i] != 1 && vet[i] != 2 && vet[i] != 3)
    let conta1 = 0, conta2 = 0, conta3 = 0 // Calcular as ordens
    for (let i = 0; i < 6; i++) {
        if (vet[i] == 1) {
            conta1++
        }
        else if (vet[i] == 2) {
            conta2++
        }
        else {
            conta3++
        }
    }
}
    alert(`Gostaram muito: ${conta1}
Gostaram: ${conta2}
Não gostaram: ${conta3}
Porcentagem de "não gostaram": ${conta3/vet.length*100}`)
}