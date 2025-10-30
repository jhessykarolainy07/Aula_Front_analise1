// dados simples: numericos, strings, boolean...
// array: [1,2,3, 'ana']
// objetos: {nome: 'Luana', idade: 21}
// funcões

// Objetos literais 
{
    //propriedade: valor
// key : value
}

const perfil = {
    nome: 'Jhessy Monteiro',
    idade: 27,
    profissao: "Assistente financeiro",
    solteira: true,
    roupas: ['camiseta', 'shorts', 'jeans']
}

console.log(Object.entries(perfil)) // Traz chave e valor
console.log(Object.keys(perfil)) // Traz só chave
console.log(Object.values(perfil)) // Traz só valor

// let dadisPerfil=[]

// for(let dados in perfil){
//     dadosPerfil.push(perfil[dado])
// }
// alert(dadosPerfil)

//atribuiçao dinâmica
//perfil.roupas = ['camiseta', 'shorts', 'jeans']
// console.log(perfil.nome)
// console.log(perfil.idade)
// console.log(perfil.profissao)
// console.log(perfil.solteira)
// console.log(perfil.roupa)
