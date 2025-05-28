function loja(){
    let V = 0, P = 0, valor, cont, opcao, valorTotal
    for(cont = 1; cont <= 15; cont++){
        opcao = prompt("V = À vista\nP = A prazo")
            if(opcao != "V" && opcao != "v" && opcao != "P" && opcao != "p"){
                alert("Informe uma opção válida")
                cont--
                continue
            }
        valor = Number(prompt("Informe o valor da compra:"))
            if(valor <= 0){
                alert("Informe um valor válido")
                cont--
                continue
            }
        if(opcao === "V" || opcao === "v"){
            V+= valor
        } else{
            P+= valor
        }
    }
    valorTotal = V + P
    alert(`Valor à vista: R$${V}\n`
        + `Valor a prazo: R$${P}\n`
        + `Valor das compras: R$${valorTotal}\n`
        + `Valor da primeira prestação a prazo: R$${(P/3).toFixed(2)}`
    )
}