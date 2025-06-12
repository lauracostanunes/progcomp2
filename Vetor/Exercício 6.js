function ex6(){
    let num = []
    for(let i = 0; i < 12; i++){
        num[i] = Number(prompt(`Número ${i}`))
    }
    console.log(num)
    let search = Number(prompt(`Número a ser buscado`))
    let posicoes = []
    for(let i = 0; i < 12; i++){
        if(search == num[i]){
            posicoes.push(i)
        }
    }
    if(posicoes.length == 0){
        console.log(`O número não está no vetor`)
    }else if(posicoes.length == 1){
        console.log(`O número aparece ${posicoes.length} vez, na posição ${posicoes}`)
    }else{
        console.log(`O número aparece ${posicoes.length} vezes, nas posições ${posicoes}`)
    }
}