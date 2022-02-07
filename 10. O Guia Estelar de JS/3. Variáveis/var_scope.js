/*

O Scope ou Escopo determina a visibilidade de uma variável em um código, e para entender scope precisamos primeiramente entender block statement, que é o código presente dentro de chaves. O escopo do var é global, ou seja, uma variável declarada com var poderá ser usada em todo o código.

conceito hoisting

*/

console.log(`> existe x antes do bloco?`, x)

{
    var x = 0
    console.log(x)
}

console.log(`> existe x depois do bloco?`, x)
