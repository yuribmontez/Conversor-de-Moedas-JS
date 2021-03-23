// function converter() {
//     var valorDolar = document.querySelector('.dolar').value
//     var resultado = parseFloat(valorDolar) * 5.50
//     v

//     document.querySelector('.resultado').innerHTML = 'O valor em real é: R$ ' + resultado.toFixed(2)
// }



// var moeda = document.querySelector('.moeda').value //Select
// var valor = document.querySelector('.valor').value //valor digitado

function converter() {
    var moeda = document.getElementById('moeda').value //Select
    var valor = document.getElementById('valor').value //valor digitado
    if (moeda == 'dolar') {
        var resultado = parseFloat(valor) * 5.50
    } else {
        var resultado = parseFloat(valor) * 6.58
    }

    document.getElementById('resultado').innerHTML = "O valor em real é: R$" + resultado.toFixed(2)
}