//let idade = 18

//if (idade = 18) {
//   console.log("maior de idade");

//} else {
//    console.log("menor de idade");

//}

//let media = 7;

//if (media >= 7) {
//   console.log("aprovado")
    
//} else (media == 5 || media == 6){
//    console.log("recuperção");

//} else {
   // console.log ("reprovado")

//}

//                                        ESTRUTURAS DE REPETIÇÃO

// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");
// console.log("6");
// console.log("7");
// console.log("8");
// console.log("9");
// console.log("10");

//FOR
//for  (variavel; condição; incremento) {
    
// }

//INCREMENTO
//for (let index = 0; index < 10; index++) {
//    console.log(index);
    
// }

//DECREMENTO
//for (let index = 10; index > 0; index--) {
//    console.log(index);
    
// }

//INCREMENTO PERSOLAZADO
// for (let index = 10; index > 0; index-=2) {
//     console.log(index);
    
// }

//INCREMENTO PERSOLAZADO 2 
//for (let index = 10; index > 0; index-=5) {
//    console.log(index);
    
// }

//EXERCICIOS 
//exercicio 01 - Contador
//Crie um programa que utilize FOR para exibir no console os numeros de 1 a 20.

//Exercicio 02 - Multiplos
//Utileze um FOR para exibir no console os multiplos de 5 entre 5 e 50

//Exercicio 03 - Decremento
//Utilize um FOR para exibir no console uma contagem regressiva de 10 até 0
// e depois uma mensagem "Contagem finalizada".

//01

//for (let index = 1; index < 20; index++) {
//    console.log(index);
    
// }

//02

// for (let index = 5; index <= 50 ; index+=5) {
//     console.log(index)
    
// }

// //03
// for (let index = 0; index <=10; index++) {
//     console.log(index);
// }
// console.log("Contagem finalizada")


// //-----WHILE
// let contador = 0;
// while (contador <= 10) {

//     console.log(contador);

//     contador++;

// }

//Exercício 01 - CONTAGEM
//Utilize WHILE par exibir no CONSOLE os numeros de 10 até 20

//Exercicio 02 - Numeros pares
//Utilize WHILE para exibir os números pares de 2 até 20


// 01

// let numero = 10;
// while(numero <= 20) {

//     console.log(numero);

//     numero++;

// }

//02

//let NumerosPares = 2
//while(NumerosPares <= 20){

//console.log(NumerosPares);

//NumerosPares +=2;

// }


//-----DO....WHILE
// let n = 10;

// while (n < 5){
//     console.log("WHILE");

// }

// do{
//     console.log("DO....WHILE");

// }while (n < 5);

// let contador = 0;
// do {
// console.log(contador);

// contador ++;

// }while (contador<+ 10);

//Exercicios

//Exercicio 01 - Contagem
//Utilize do...while pra exibir os numeros de 10 até 100.

// let numeros = 10;
// do{
//     console.log (numeros);

//     numeros ++;
// }while (numeros <=100)

//Exercicio 02 - Contagem
//Utilize do...while para exibir uma contagem regressiva de 10 até 1.

 let Contagem = 10;
 do{
console.log(Contagem);

Contagem --;

 }while(Contagem>=1);   



 //--------ARRY (LISTA)----------
 let nome1 = "Levi";
 let nome2 = "Duda";
 let nome3 = "Gustavo";
 let nome4 = "Bernardo";

//              0        1        2           3
 let nomes = ["levi", "Duda", "Gustavo", "Bernardo"];

 console.log(nomes);//Mostra todos os nomes na mesma lista 

 console.log(nomes[1]);//Mostra o item da posição mencionada entre colchetes
 
 nome4 = "Ana";
 nomes[3] = "Ana"; ,
 63//Altere o valor na posição específica

 console.log(nomes.length);//Mostra o tamanho do Arry

