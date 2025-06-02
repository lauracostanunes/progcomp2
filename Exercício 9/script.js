function ex9() {
    let idade, altura, peso;
    let qntdPeso90Altura150 = 0;
    let somaIdades = 0;
    let qntdTotal = 7;
    let qntdAltura190 = 0;
    let qntdIdade1030Altura190 = 0;
    for (let conta = 1; conta <= qntdTotal; conta++) {
        do {
            idade = Number(prompt(`Informe a idade ${conta}:`));
        } while (isNaN(idade) || idade <= 0);

        do {
            peso = Number(prompt(`Informe o peso (kg) ${conta}:`));
        } while (isNaN(peso) || peso <= 0);

        do {
            altura = Number(prompt(`Informe a altura (cm) ${conta}:`));
        } while (isNaN(altura) || altura <= 0);

        if (peso > 90 && altura < 150) {
            qntdPeso90Altura150++;
        }
        somaIdades += idade;
        if (altura > 190) {
            qntdAltura190++;
            if (idade >= 10 && idade <= 30) {
                qntdIdade1030Altura190++;
            }
        }
    }
    let mediaIdades = somaIdades / qntdTotal;
    let porcentagem1030Altura190;
if (qntdAltura190 > 0) {
    porcentagem1030Altura190 = (qntdIdade1030Altura190 / qntdAltura190 * 100).toFixed(2);
} else {
    porcentagem1030Altura190 = 0;
}
    alert(`Quantidade de pessoas com peso > 90kg e altura < 150cm: ${qntdPeso90Altura150}
Média das idades: ${mediaIdades.toFixed(2)}
Porcentagem de idade entre 10 e 30 anos com mais de 190cm: ${porcentagem1030Altura190}%`);
}
