let usuario = "Vinícius"
let senha = 'vini'
let nomeCompleto = 'Vinícius Mendes Ferreira'
let idade = 18

// Criação de objeto cujo valor das propriedades vêm de 
// variáveis previamente existentes
let infoUsuario = {
    usuario: usuario,
    nome: nomeCompleto,
    senha: senha,
    idade: idade
}

console.log(infoUsuario)


// Criação de objeto cujo valor das propriedades vêm de 
// variáveis previamente existentes
let infoUsuario = {
    usuario,    // Propriedade abreviada (usuario: usuario)
    nome: nomeCompleto,
    senha,  // Propriedade abreviada (senha: senha)
    idade   // Propriedade abreviada (idade: idade)
}

console.log(infoUsuario)