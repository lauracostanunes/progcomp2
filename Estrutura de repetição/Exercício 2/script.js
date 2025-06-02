function lucro() {
    let preco = 5.0;
    const custoFixo = 200.0;
    let pessoas = 120;
    let lucroMaximo = 0;
    let melhorPreco = 0;
    let relatorio = '';
    while (preco >= 1.0) {
        let lucro = (preco * pessoas) - custoFixo;
        relatorio += `Preço: R$ ${preco.toFixed(2)} - Pessoas: ${pessoas} - Lucro: R$ ${lucro.toFixed(2)}\n`;
        if (lucro > lucroMaximo) {
            lucroMaximo = lucro;
            melhorPreco = preco;
        }
        preco -= 0.5;
        pessoas += 26;
    }
    alert(`${relatorio}\nLucro máximo: R$ ${lucroMaximo.toFixed(2)} com ingresso a R$ ${melhorPreco.toFixed(2)}`);
}