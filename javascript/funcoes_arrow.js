/*
* Funções Arrou são funções anônimas, ou seja, sem NOME
* Podem ser passadas como parâmetros para outras funções
* ou podem ser atribuidas à variáveis.
* Em Javascript, funções são conhecidas como
* "Cidadão de Primeira Classe"
*/
// let numero = 0
// setInterval(function(){
//     numero = numero + 10
//     console.log(numero)
// }, 1000)

// Refatorar

// let numero = 25
// setInterval(()=>{
//     numero = numero + 5
//     console.log(numero)
// }, 1000)

// Refatorar

let numero = 0
const intervalo1 = setInterval(function(){
     numero = numero + 10
    //  numero += 10
     console.log(numero)
 }, 1000)

 setTimeout(() => {
    clearInterval(intervalo1)
 }, 5000)