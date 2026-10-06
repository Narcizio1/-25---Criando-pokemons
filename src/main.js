// Escreva seu código aqui

/* Descomentar a linha abaixo antes de submeter e exportar a função que deve
ser chamada:

Ex: 
  function x() {
    console.log()
  }

  module.exports = x
*/
//module.exports = sua funcao aqui;
function criarPokemon(nome, tipo, nivel, hp){
    let pokemon = {
        nome: nome,
        tipo: tipo,
        nivel: nivel,
        hp: hp,
    };

    return pokemon;
}

const meuPokemon = criarPokemon("Charmander", "Fogo", 15, 100);
console.log(meuPokemon);
