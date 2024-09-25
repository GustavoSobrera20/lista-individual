const num = parseInt(prompt("digite o seu numero"));

    if(!isNaN(numero) && numero >= 0){
        let soma = 0 

        for (let i = 1; i <= numero; i += 2 ){
            soma += i;
        }
   
        alert('A soma dos nmeros ímpares ate ${numero} é: ${soma}');
    }else{
        alert("por favor digite um numero valido");
    }


