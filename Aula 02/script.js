var numeroSecreto = parseInt(Math.random() * (1001 - 1) + 1);
var tentativa = 0;

while(chute != numeroSecreto){
    var tentativa = 1+tentativa;
    var chute = prompt('Tentativa numero: '+ tentativa +' Digite um numero entre 0 e 1000')

    if (chute == numeroSecreto){
        alert('Acertou!')
    }else if (chute > numeroSecreto){
        alert('Quase, Digite umm numero menor!')
    } else if (chute < numeroSecreto){
        alert('Quase, digite um numero maior!')
    }

}

