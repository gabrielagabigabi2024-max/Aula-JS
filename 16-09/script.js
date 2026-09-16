//operadores aritimeticos
//+ soma
// - subtração
// * multiplicação
// / divisão 
// % sobra da divisão

//let n1 = "3";
//let n2 = 9;

//console.log(n1 + n2);
//console.log(n2 - n1);
//console.log(n1 * n2);
//console.log(n2 / n1);
//console.log(n2 % n1);
//console.log((n2 - n1) * 2);
//console.log(" palvra " + n1)

//Crie 3 variaveis, cada uma contendo um numero,
//some as 3 e tire a media,exiba o rsultado no console

let N1 = 5
let N2 = 7
let N3 = 9

//Agora exiba no console a formula do calculo
// com os valores e seu resultado

console.log(N1 + N2 + N3 / 3 )
console.log(" A media de " + N1 + " , " + N2 + " e " + N3 + " é " + (N1 + N2 + N3 / 3 ))

// > maior que
// < menor que
// == igul
// >= maior ou igula 
// <= menor ou igual
// != é diferente 

//let idade = 18;

//console.log(idade > 18);
//console.log(idade < 18);
//console.log(idade == 18);
//console.log(idade >= 18);
//console.log(idade <= 18);
//console.log(idade != 18);
//console.log(idade === "18");//comparação de tipo de variavel

//let idade = 18;
//let habilitado = true;
//console.log(idade <= 18 && habilitado == true);

//V && V = V
//V && F = F
//F && V = F
//F && F = F

//console.log(idade <= 18 || habilitado == true)
// V || V = V
// V || F = V
// F || V = V
// F || F = F

// ! operador NOT "inverte"
//console.log(!habilitado);

//let habilitado = true;
//se idade for igual a 18
   //faça isso

//se não
  //faça isso   
  //let habilitado = false;

//if (habilitado == true) {// se sim
    //console.log("Pode dirigir");
    
//} else {//se não
  //  console.log("NÃO pode dirigir");
//}

let idade = 16

//if (idade >= 18)
if (idade >= 18) {
    console.log("Maior de idade!");

} else {
    console.log("Menor de idade");
}

//Crie um sistema que compara o valor de uma variavel
//senha SE for igual a 1234 escreva no console
//"acesso liberado"SE NÃO escreva "acesso bloqueado"


//let senha = 1234 
//se senha for igual a 1234
  // faça isso 

  //se não
   //faça isso
  //let senha = acesso negado

let senha = 1234;

if (senha == 1234) {// se sim
    console.log("Acesso liberado")
    
} else {
    console.log("Acesso negado");
}

//Crie um sistema que avalie uma variavel nota
//SE a nota for maior que 6 escreva aprovado, SE NÃO
//escreva reprovado

let nota = 8

//if(nota >= 6)
if (idade>= 6) {
    console.log("Aprovado")

} else {
    console.log("Reprovado")
}

//Crie um sistema que compara um valor total de uma
//compra,SE o valor for maior que 500 calcule um
//desconto de 20 e mostre o valor total da compra
//com desconto SE NÃO mostre a mensagem
//COMPRA SEM DESCONTO

let compra = 600

//if(nota >500)
if ( compra >500 ) {
    console.log(compra - 20 )
    console.log("COMPRA COM DESCONTO")
} else {
    console.log("COMPRA SEM DESCONTO")
}