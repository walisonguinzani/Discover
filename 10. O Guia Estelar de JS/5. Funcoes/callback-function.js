/*

Uma callback function é uma função que está sendo passada para outra função como parâmetro.

*/

function sayMyName(name) {
    name()
}

// console.log({ name: `walishow` })

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)