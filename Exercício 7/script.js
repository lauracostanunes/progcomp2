function ex7(){
        let idade;
        let altura;
        let peso;
        let qntd50mais = 0;
        let somaAltura = 0;
        let qntIdade1020 = 0;
        let qntd40menos = 0;
        for(let conta =1; conta<=5; conta++){
            do {
                idade = Number(prompt(`Informe a idade`))
            }
            while (idade < 0)
            do {
                peso = Number(prompt(`Informe o peso`))
            }
            while (peso < 0)
            do{
                altura = Number(prompt(`Informe a altura`))
            }
            while (altura < 0)
            if (idade > 50) {
            qntd50mais++
            }
            if (idade >= 10 && idade <= 20) {
                somaAltura = somaAltura + altura
                qntIdade1020++
            }
            if (peso < 40){
                qntd40menos++
            }
        }
        alert(`Quantidade de pessoas com mais de 50 anos: ${qntd50mais}
        Média da altura das pessoas com idades entre 10 e 20 anos: ${somaAltura/qntIdade1020}
        Porcentagem de pessoas com menos de 40kg: ${qntd40menos/5*100}`)
    }