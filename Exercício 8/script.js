function ex8() {
    let idade, altura, peso, olhos, cabelos;
    let qntdIdadePeso = 0;
    let somaIdadeAlturaBaixa = 0;
    let qntdAlturaBaixa = 0;
    let qntdOlhosAzuis = 0;
    let qntdRuivosSemAzul = 0;
    const totalPessoas = 6;

    for (let i = 1; i <= totalPessoas; i++) {
        do {
            idade = prompt(`Informe a idade ${i}:`);
        } while (isNaN(idade) || Number(idade) <= 0);
        idade = Number(idade);

        do {
            peso = prompt(`Informe o peso ${i} (kg):`);
        } while (isNaN(peso) || Number(peso) <= 0);
        peso = Number(peso);

        do {
            altura = prompt(`Informe a altura ${i} (cm):`);
        } while (isNaN(altura) || Number(altura) <= 0);
        altura = Number(altura);

        do {
            olhos = prompt(`Cor dos olhos ${i}:\nA - Azul\nP - Preto\nV - Verde\nC - Castanho`).toUpperCase();
        } while (!['A', 'P', 'V', 'C'].includes(olhos));

        do {
            cabelos = prompt(`Cor do cabelo ${i}:\nP - Preto\nC - Castanho\nL - Loiro\nR - Ruivo`).toUpperCase();
        } while (!['P', 'C', 'L', 'R'].includes(cabelos));

        if (idade > 50 && peso < 60) {
            qntdIdadePeso++;
        }

        if (altura < 150) {
            somaIdadeAlturaBaixa += idade;
            qntdAlturaBaixa++;
        }

        if (olhos === 'A') {
            qntdOlhosAzuis++;
        }

        if (cabelos === 'R' && olhos !== 'A') {
            qntdRuivosSemAzul++;
        }
    }

    let mediaIdades = qntdAlturaBaixa > 0 ? (somaIdadeAlturaBaixa / qntdAlturaBaixa).toFixed(2) : "N/A";
    let porcentagemAzuis = ((qntdOlhosAzuis / totalPessoas) * 100).toFixed(2);

    alert(`Resultados:
Quantidade com idade > 50 e peso < 60kg: ${qntdIdadePeso}
Média das idades com altura < 1.5m: ${mediaIdades}
Porcentagem com olhos azuis: ${porcentagemAzuis}%
Ruivos sem olhos azuis: ${qntdRuivosSemAzul}`);
}
