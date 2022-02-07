/*

Diferentemente de var, const e let são variáveis com escopo local, ou seja, só são visíveis no escopo onde foram criadas e em escopos interiores ao de criação. Em uma variável let, porém, pode-se alterar o valor em um escopo e o valor irá persistir no escopo de criação.

let e const e conceito de variavel local

*/


let y = 1

{
    let y = 0
    console.log(`> existe x antes?`, y)
}

console.log(`> existe x depois do bloco?`, y)
