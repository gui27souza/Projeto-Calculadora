let saida = document.getElementById('saida')
let valor = 0
let valor_temp = 0
let operacao = ''

function numero(elemento) {
    valor = elemento.value
    saida.innerText += valor
}

function somar() {
    operacao = 'soma'
    valor_temp = Number(saida.innerText)
    saida.innerText = ''
    valor = ''
}
// Existe algum problema em subtrair numeros de dois ou mais digitos
function subtrair() {
    operacao = 'subtracao'
    valor_temp = Number(saida.innerText)
    saida.innerText = ''
    valor = ''
}
function multiplicar() {
    operacao = 'multiplicacao'
    valor_temp = Number(saida.innerText)
    saida.innerText = ''
    valor = ''
}
function dividir() {
    operacao = 'divisao'
    valor_temp = Number(saida.innerText)
    saida.innerText = ''
    valor = ''
}

function enter() {
    switch (operacao) {
        case 'soma':
            saida.innerText = Number(valor_temp) + Number(valor)
        break

        case 'subtracao':
            saida.innerText = Number(valor_temp) - Number(valor)
        break

        case 'multiplicacao':
            saida.innerText = Number(valor_temp) * Number(valor)
        break

        case 'divisao':
            saida.innerText = Number(valor_temp) / Number(valor)
        break
    }
}

function clean() {
    saida.innerText = ''
    valor = 0
    valor_temp = 0
    operacao = ''
}