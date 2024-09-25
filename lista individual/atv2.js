/*Crie uma função que receba um array de números e retorne o segundo maior 
número do array. (#47) 

var a = 0, b = 1;

alert = prompt ('digite seu array')
 
if(a >= 0){
console.log(a);
[a, b] = [b, a]
if(a => (b)){
alert("o maior é" + b )
}
}*/


function segundoMaiorNumero(arr) {
    let maior = -Infinity;
    let segundoMaior = -Infinity;

    for (let num of arr) {
        if (num > maior) {
            segundoMaior = maior; 
            maior = num;         
        } else if (num > segundoMaior && num < maior) {
            segundoMaior = num;  
        }
    }

  
    if (segundoMaior === -Infinity) {
        alert("Não há um segundo maior número.");
    } else {
        alert("O segundo maior número é: " + segundoMaior);
    }
}


const numeros = [5, 3, 9, 1, 5, 7];
segundoMaiorNumero(numeros); // Isso mostrará um alert com o resultado
