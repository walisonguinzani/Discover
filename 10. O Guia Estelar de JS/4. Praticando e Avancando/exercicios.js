/*

Exercícios sobre o conteúdo trabalhado até agora.
*/

// 1. Declare uma variavel de nome wieght
{
    let weight


    // 2. Qual tipo de dado e a variavel acima?
    console.log("E do tipo: " + typeof weight)

}
/*
    3. Declare uma variavel e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean
*/
{
    let name, age, stars, isSubscribed

    name = "Walison"
    age = 26
    stars = 1.5
    isSubscribed = true
}

/*
    4. A variavel student abaixo e de que tipo de dados?

    4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3

    4.2 Mostre no console a seguinte mensagem:

        <name> de idade <age> pesa <weight> kg.

        Atencao, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
*/
{
    let student = {}
    console.log("E do tipo: " + typeof student)
}
{
    let student1 = {
        name: "Walison",
        age: 26,
        weight: 80.5,
        stars: 1.5,
        isSubscribed: true
    }
    console.log(`${student1.name} de idade ${student1.age} pesa ${student1.weight} kg`)


    /*
        5. Declare uma variavel do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
    */

    let student = []

    /*
        6. Reatribua valor para a variavel acima, colocando dentro dela o objeto student da questao 4. (Nao copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
    */
    students = [
        student1
    ]

    console.log(students)

    /*
        7. Coloque no console o valor da posicao zero do Array acima.
    */

    console.log(students[0])

    /*
        8. Crie um novo student e coloque na posicao 1 do Array students
    */

    let student2 = {
        name: "Kelly",
        age: 23,
        weight: 67.5,
        stars: 10,
        isSubscribed: true
    }

    students[1] = student2

    console.log(students)

}

/*
    9. Sem rodar o codigo responda qual e a resposta do codigo abaixo e porque? Apos sua resposta, rode o codigo e veja se voce acertou

    console.log(a)
    var a = 1
*/

{
    console.log(a)
    var a = 1
}