const usuario = { nome: 'Julius', idade: 39 };

console.log(usuario.nome); // Julius
console.log(usuario.idade); // 39
console.log(usuario.profissao); // undefined

// :: Observe que ao pedirmos a impressão da profissão do usuário temos "undefined". 

const usuario = { nome: 'Julius', idade: 39 };

console.log(usuario.profissao || 'Profissão não informada');
console.log(usuario.profissao ?? 'Profissão não informada');
