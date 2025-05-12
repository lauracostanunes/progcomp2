function grupos() {
    let grupo = 1;
    while (grupo <= 5) {
        let valores = [];
        let letra = ['A', 'B', 'C', 'D'];
        let contador = 0;
        while (contador < 4) {
            let valor = Number(prompt(`Grupo ${grupo} - Informe o valor ${letra[contador]}:`));
            valores.push(valor);
            contador++;
        }
        let ordemLida = valores.join(', ');
        let ordemCrescente = [...valores].sort((a, b) => a - b).join(', ');
        let ordemDecrescente = [...valores].sort((a, b) => b - a).join(', ');
        alert(`Grupo ${grupo}:
            Ordem lida: ${ordemLida}
            Crescente: ${ordemCrescente}
            Decrescente: ${ordemDecrescente}`);
        grupo++;
    }
}
