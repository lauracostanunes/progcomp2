function ex1() {
    let vet = []
    for (let i = 0; i < 6; i++) {
        vet.push(Number(prompt(`Informe o ${i+1}º número`)))
    }
    let par = 0, impar = 0
    for (let i = 0; i < 6; i++) {
        if (vet[i]%2 == 0) { // elemento é par
            par++
        }
        else {
            impar++
        }
    }
}


// i = posição do vetor
// v[i] = elemento na posição i