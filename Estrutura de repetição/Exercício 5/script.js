function tabuada(){
    let n, cont, result
    for(cont = 1; cont<=10; cont++){
      let tabuada = ""  
        for(n = 0; n <= 10; n++){
            result = cont * n
            tabuada+= `${cont} x ${n} = ${result}\n`
        }
       alert(tabuada) 
    }
}