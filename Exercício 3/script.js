function idades() {
    let idade;
    let conta = 1;
    let total = 0;
    let faixa1 = 0; // Até 15 anos
    let faixa2 = 0; // De 16 a 30
    let faixa3 = 0; // De 31 a 45
    let faixa4 = 0; // De 46 a 60
    let faixa5 = 0; // Acima de 60
    while (conta <= 8) {
        idade = Number(prompt(`Informe a idade do indivíduo ${conta}:`));
        if (idade >= 0 && idade <= 15) {
            faixa1++; } 
        else if (idade >= 16 && idade <= 30) {
            faixa2++; } 
        else if (idade >= 31 && idade <= 45) {
            faixa3++; }
        else if (idade >= 46 && idade <= 60) {
            faixa4++; }
            else {
            faixa5++; }
        total++;
        conta++;
    }
    let perc1 = (faixa1 / total * 100).toFixed(1);
    let perc5 = (faixa5 / total * 100).toFixed(1);
    alert(`
    Total de pessoas: ${total}
    Faixa 1 (até 15 anos): ${faixa1}
    Faixa 2 (16 - 30 anos): ${faixa2}
    Faixa 3 (31 - 45 anos): ${faixa3}
    Faixa 4 (46 - 60 anos): ${faixa4}
    Faixa 5 (acima de 60 anos): ${faixa5}
    Percentual até 15 anos: ${perc1}%
    Percentual acima de 60 anos: ${perc5}%`);
}