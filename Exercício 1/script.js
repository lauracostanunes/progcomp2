function grupos() {
    let conta = 1
    let grupo = A, B, C, D, AUX
    A = Number(prompt('Informe o valor de A'))
    B = Number(prompt('Informe o valor de B'))
    C = Number(prompt('Informe o valor de C'))
    D = Number(prompt('Informe o valor de D'))
    while (conta <= 3) {
        if (A>B) {
            AUX = A; B=A; B=AUX }
        if (B>C) {
            AUX = B; B=C; C=AUX }
        if (C>D) {
                AUX = C; C=D; D=AUX }
        conta++
    }
    alert ('Ordem crescente ${A} ${B} ${C} ${D}')
    alert ('Ordem decrescente ${D} ${C} ${B} {A}')
}