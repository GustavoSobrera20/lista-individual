/*Crie uma função que receba um array de strings e retorne um novo array 
contendo apenas as strings que começam com uma vogal. (#50)*/ 

function filtrar(array) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    return array.filter(str => vogais.includes(str[0].toLowerCase()));
}
const input = prompt("Insira strings separadas por vírgula:");
const strings = input.split(',').map(str => str.trim());
const resultado = filtrar(strings);
console.log(resultado);
