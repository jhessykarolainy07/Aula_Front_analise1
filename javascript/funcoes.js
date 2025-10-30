// Funções são blocos de código que podem ser
// representados ao longo da execução do programa
// caracteristicas:
// > podem ser nomeados ou não
// > poder receber parâmetros ou não
// > podem retornar valores ou não

// Declaração de função
function dizOla(){
    alert("Diz olá!")
}
function dizOlaPessoa(nome){
    alert(`Não seja timido(a) ${nome}. Fala oi!`)
}
const jogadores = ['Neymar', 'Ronaldinho', 'Messi']
const frutas = ['banana', 'morango', 'uva']

function formataTexto(lista){
    for(let texto of lista){
        console.log(texto.toUpperCase())
    //texto.toLowerCase() > tudo para minuscula
    //texto.trim() > elimina espaços em branco
    //texto.join(' outra coisa ') > junta com outro
    }
}
// formataTexto(jogadores)
// formataTexto(frutas)
function adicao(n1, n2){
    return n1 + n2
}
//faça uma versão para subtracao, multiplicacao, divisao

const resultadoAdicao = adicao(5, 25) + 30
console.log(`Adição: ${resultadoAdicao}`) // valor 30

// Invocar ou chamar a função
// dizOla()
// dizOlaPessoa("Cleitinho")
// dizOlaPessoa("Ana")
// dizOlaPessoa("Julius")
