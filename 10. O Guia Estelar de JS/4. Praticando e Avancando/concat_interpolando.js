/*

Para declarar uma variável podemos usar var, let e const, e para atribuírmos valores à essa variável utilizamos o caractere =, e para vermos o tipo dessa variável podemos utilizar a função console.log(typeof variavel).

*/

var name

// assignment or atribuicao de Valores
name = "Walishow"

// qual o tipo de dados

// console.log(typeof name)

//agrupamento de declaracoes
let age, isHuman

age = 26
isHuman = true

//multiplos argumentos na funcao
console.log(name, age, isHuman)

// escrita de texto mais variáveis 
console.log('O ' + name + ' tem ' + age + ' anos')

// interpolando Valores com template literals or template strings
console.log(`O ${name} tem ${age} anos`)