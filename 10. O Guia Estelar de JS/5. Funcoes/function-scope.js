/*

Parâmetros, mesmo se tiverem o mesmo nome que alguma outra variável do seu código, são apenas modificados e persistem no escopo da função.

*/

let subject = `create video`

function createThink() {
    subject = `study`
    return subject
}


console.log(subject)
createThink()
console.log(subject)