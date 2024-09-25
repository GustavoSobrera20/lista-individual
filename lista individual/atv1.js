/* 1- Escreva um programa que peça ao usuário para digitar duas palavras e verifique se 
elas são anagramas.*/
function sãoAnagramas(palavra1, palavra2) {
    const normaliza = palavra => palavra.toLowerCase().split('').sort().join('');
    return normaliza(palavra1) === normaliza(palavra2);
}

const palavra1 = prompt("Digite a primeira palavra:");
const palavra2 = prompt("Digite a segunda palavra:");

alert(sãoAnagramas(palavra1, palavra2) ? 
      `${palavra1} e ${palavra2} são anagramas.` : 
      `${palavra1} e ${palavra2} não são anagramas.`);
//O código verifica se duas palavras fornecidas pelo usuário são anagramas, ignorando diferenças de maiúsculas e minúsculas, e exibe o resultado em um alerta. É um código simples, mas eficaz para entender a lógica dos anagramas! Se tiver mais dúvidas, fique à vontade para perguntar!