let numero = parseFloat(prompt("Insira o seu numero a ser transformado em binario: "))
let binario = 0 
let listaBinario = []

if (numero == 0) {
    listaBinario.push(numero)
}
else {

    while (numero > 0){

    binario = numero % 2 //Pega o resto de numero 
    listaBinario.push(binario) //Append pra lista de binarios
    numero = Math.floor(numero / 2) //Arrendonda pra baixo    
     
    }
}


listaBinario.reverse()
binarioFinal = listaBinario.join('')


alert(`Seu numero convertido é ${binarioFinal}`)