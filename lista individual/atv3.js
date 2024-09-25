/*Faça um programa que peça ao usuário para digitar uma lista de números e exiba 
apenas os números que são múltiplos de 3. (#48)8*/

let num = prompt("Digite números separados por vírgula:");

let numeros = num.split(",");

let multiplos = "";

for (let i = 0; i < numeros.length; i++) {
    let num = parseInt(numeros[i]); 

   
    if (num % 3 === 0) {
        multiplos += num + " ";
    }
}
if (multiplos) {
    alert("Múltiplos de 3: " + multiplos);
} else {
    alert("Nenhum múltiplo de 3 encontrado.");
}
