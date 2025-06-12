function ex5(){
    let num = [], maiores = 0, menores = 0, iguais = 0
    for(let i = 0; i < 10; i++){
        num[i] = Number(prompt(`Informe o número ${i+1}`))
            if(num[i] > num[0]){
                maiores++
            } else if(num[i] < num[0]){
                menores++
            } else{
                iguais++
            }
    }
    console.log(`Maiores que o primeiro: ${maiores}\n`+
`Menores que o primeiro: ${menores}\n`+
`Iguais: ${iguais}`)
}