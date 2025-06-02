function tabuada(){
     let i, cont, result
    let tabuada = ""
    i = Number(prompt("Insira um número: "))
    for(cont = 0; cont<=10; cont++){
        result = cont * i
        tabuada+= `${i} x ${cont} = ${result}\n`
    }
    alert(tabuada)
}