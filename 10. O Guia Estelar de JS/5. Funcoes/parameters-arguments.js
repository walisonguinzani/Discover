/*

Também é possível declarar funções dentro de variáveis, desta maneira: const variavel = function() {}. Uma parte importante de funções são os parâmetros, que são similares variáveis que funcionam para colocar dados em funções, eles são declarados junto à declaração da função e quando a função for executada, os valores dos argumentos são colocados dentro dos parênteses.

*/

// function expression ou function anonymous
const sum = function (number1, number2) {
    console.log(number1 + number2)
}

sum(2, 8) // passando arguments