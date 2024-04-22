let saida = document.getElementById('saida')
let valor_temp = 0
let operacao = ''

function numero(elemento) {
    saida.textContent += elemento.value
}
function pontoFlutuante(elemento) {
    if (!(saida.textContent.includes('.'))) {
        saida.textContent += elemento.value
    }
}

function calcular(elemento) {
    if (operacao == '') {
        operacao = elemento.value
        valor_temp = Number(saida.textContent)
        saida.textContent = ''
    } else {
        window.alert(`Operação já selecionada: ${valor_temp} ${operacao} ${saida.textContent}\nPressione Enter ou limpe a operação com C.`)
    }
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

        case 'x':
            saida.textContent = Number(valor_temp) * Number(saida.textContent)
            valor_temp = ''
            operacao = ''
        break

        case '÷':
            saida.textContent = Number(valor_temp) / Number(saida.textContent)
            valor_temp = ''
            operacao = ''
        break
    }
}

function clean() {
    saida.textContent = ''
    valor_temp = 0
    operacao = ''
}

// Imprecisão em 1.2 - 0.3