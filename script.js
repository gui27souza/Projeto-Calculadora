let saida = document.getElementById('saida')
let valor = 0
let valor_temp = 0
let operacao = ''

function numero(elemento) {
    saida.textContent += elemento.value
}

function calcular(elemento) {
    operacao = elemento.value
    valor_temp = Number(saida.textContent)
    saida.textContent = ''
}

function enter() {
    switch (operacao) {
        case '+':
            saida.textContent = Number(valor_temp) + Number(saida.textContent)
            valor_temp = ''
            operacao = ''
        break

        case '-':
            saida.textContent = Number(valor_temp) - Number(saida.textContent)
            valor_temp = ''
            operacao = ''
        break

        case '*':
            saida.textContent = Number(valor_temp) * Number(saida.textContent)
            valor_temp = ''
            operacao = ''
        break

        case '/':
            saida.textContent = Number(valor_temp) / Number(saida.textContent)
            valor_temp = ''
            operacao = ''
        break
    }
}

function clean() {
    saida.textContent = ''
    valor = 0
    valor_temp = 0
    operacao = ''
}

// Imprecisão em 1.2 - 0.3
// Dá p colocar . duas ou mais vezes