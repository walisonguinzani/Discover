/*

Para passar valores de dentro da função para o resto do código, usa-se a palavra reservada return seguida do valor à ser retornado, parando assim a execução da função e mandando o valor para onde a função foi chamada.

*/

// function expression ou function anonymous
const sum = function (number1, number2) {
    let result = number1 + number2
    return result
}

let number1 = 34
let number2 = 25

sum(number1, number2) // passando arguments


console.log(`O numero 1 e ${number1}`)
console.log(`O numero 2 e ${number2}`)
console.log(`A soma e ${sum(number1, number2)}`)