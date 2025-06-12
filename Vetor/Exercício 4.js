function ex4(){
    let num = [], soma = 0
    for(let i = 0; i < 8; i++){
        num[i] = Number(prompt(`Informe o numero ${i}`))
        soma+= num[i]
    }
    let media = soma/8
    let acimaMedia = []
    for(let i = 0; i < 8; i++){
        if(num[i] > media){
            acimaMedia.push(num[i])
        }
    }
    console.log(`Média: ${(media).toFixed(1)}\n`+
`Quantidade acima da média: ${acimaMedia.length}\n`+
`Numeros acima da média: ${acimaMedia}`)
}