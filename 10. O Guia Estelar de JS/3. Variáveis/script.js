/*

Para nomearmos variáveis corretamente e de um jeito inteligente, precisamos saber de algumas coisas, como: JavaScript é case-sensitive (sensível à letras maiúsculas e minúsculas) e aceita a cadeia de caracteres Unicode, podendo receber acentuações. Em um nome de variável em JS você pode: Iniciar com caracteres especiais, iniciar com letras e colocar acentos, lembrando sempre que letras maiúsculas e minúsculas fazem a diferença. Em contraste, você não pode: Iniciar com números e colocar espaços vazios. Idealmente você deve colocar nomes significativos, que fazem sentido na aplicação, explicando o que a variável é, usando camel case, onde a primeira palavra de uma frase é toda minúscula, e as subsequentes não se separam por espaço e tem a primeira letra maiúscula, por exemplo: oNomeDessaVariável, e usar nomes em inglês.

* JS e case-sentitive
* JS aceita a cadeira de caracteres unicode

- Posso
    * Iniciar com esses caracteres especiais: $ _
    * Iniciar com letras maiúsculas e minúsculas
    * Colocar acentos
    * Letas maiusculas e minúsculas fazem diferenca

- Nao posso
    * Iniciar com numeros
    * Colocar espacos vazios

- Ideal
    * Criar nomes que fazem sentido
    * Que explique o que a variavel e ou faz
    * camelCase
    * snake_case
    * Escrever em ingles

*/

let Walison = 'Walison'
let walison = 'walison'


let name = "Walison"

let checkIfNameExists = name === "Walison"

checkIfNameExists // camelCase 
check_if_name_exists // snake_case 
