
 //--------ARRY (LISTA)----------
//  let nome1 = "Levi";
//  let nome2 = "Duda";
//  let nome3 = "Gustavo";
//  let nome4 = "Bernardo";

// //              0        1        2           3
// let nomes = ["levi", "Duda", "Gustavo", "Bernardo"];

//  console.log(nomes);//Mostra todos os nomes na mesma lista 

//  console.log(nomes[1]);//Mostra o item da posição mencionada entre colchetes
 
//  nome4 = "Ana";
//  nomes[3] = "Ana"; 

//  //Altere o valor na posição específica

//  console.log(nomes.length);//Mostra o tamanho do Arry

 // Exercicio 7 - lista de frutas
 // Crie um array chamndo frutas contendo 5 frutas
 //Depois
 //1.  Exiba o array completo
 //2.  Exiba a primeira fruta
 //3.  Exiba a terceira fruta 
 //4.  Exiba a quantidade de frutas
 //5.

 //07


  //              0          1          2           3        4
//   let fruta =["Morango" , "Manga" , "Melancia" , "Maça" ,"Goiaba" ];

//   console.log(fruta);//Mostra todas as frutas na mesma lista

//   console.log(fruta[0]);//Mostra o item da posição mecionada entre colchestes 
//   console.log(fruta[2]);//Mostra o item da posição mecionada entre colchestes 

//   console.log(fruta.length);//Mostra o tamanho do Arry


  //Exercicio 08 - lista de cidades
  //Crie um arry contendo 5 cidades brasileiras
  //Depois:
  // 1.  Exiba o array completo
  // 2.  Altere a segunda cidade
  // 3.  Exiba a segunda cidade 
  // 4.  Exiba a quantidae de cidades

 //- 08
 //                  0          1         2           3            4  
//   let cidades =["São Caetano","Mauá","São Paulo","Anhanguera","Santo André" ];

//   console.log(cidades);//Mostra todas as cidades na mesma lista

//   cidades[1] = "São Paulo";//Altere o valor da posição especifica
//   console.log(cidades[1]);//Mostra o item da posição mencionada entre colchetes

//   console.log(cidades.length);//Mostra o tamanho do Arry

//EXEMPLO DO PROFESSOR

//    let cidades =["São Caetano","Mauá","São Paulo","Anhanguera","Santo André" ];

//    console.log(cidades[0]);
//    console.log(cidades[1]);
//    console.log(cidades[2]);
//    console.log(cidades[3]);
//    console.log(cidades[4]);

//   for (let index = 0; index < cidades.length; index++) {
//     console.log(cidades[index]);
    
//   }

//   for (let index = 0; index < cidades.length; index++) {
//        console.log(cidades[index]);
    
//   }


//Exercicio 09 - Nomes 
//Crie um arry com 6 nomes
//Utilize um FOR para exibir todos os nomes no console. 
 
// let nomes = ["laura", "Aghata", "Duda", "Bernardo","Maria","Silvia","Odirlei"];

// for (let index = 0; index < nomes.length; index++) {
//         console.log(nomes[index]);
    
//    }

// Exercicio 10
// Crie um ARRY contendo 5 preços de produtos.
//Utilize um FOR para exibir todos os preços.

 //let Preços = [20,30,50,40,70,60];
  //for (let index = 0; index < Preços.length; index++) {
    //console.log(Preços[index]);
    
  //}


// Exercicio 11 - Preços e Produtos
//Crie um arry contendo 5 preços de produtos.
// outro contendo 5 preços de produtos
//Utilize um FOR para exibir todos os nomes e preços.

// 10
 
// let valores  = [10,80,50,70,90];

  
// let produtos=  ["Sapato","Bolsa","Camiseta","Calça","Batom"]

// for (let index = 0; index < produtos.length; index++) {
//     console.log("Produtos:" + produtos [index] + "valor: R$"+ valores [index]+ ",00");
    
// }

//----------------ESTRURA DE REPETIÇÃO + ESTRUTRA DE DECISÃO--------------

// for (let index = 0;index <= 10; index ++ ){//contando de de 0 10

//     if(index >= 5 ) {// verificando se é maior ou igual a 5
//   console.log(index);//mostra o numeuro
//     }
// }

// let numeros = [5,9,10,2,20,32,7,17,9,12];
// for (let index = 0; index < numeros.length; index++) {//lendo o array

//     if (numeros [index] >= 10) { //verificando se é maior ou igual a 10 
//         console.log(numeros [index]);//mostra o numero do array
        
//     }
// }


// let numeros = [5,9,10,2,20,32,7,17,9,12];
// for (let index = 0; index < numeros.length; index++) {//lendo o array
//     let sobra = numeros [index] % 2

//     if (sobra == 0) {
//         console.log("O numero " + numeros[index] + " É par ");

//     } else {
//         console.log("O numero " + numeros[index] + " É ímpar ");

//     }
// }

//Exercicio 01 - Analisando notas
//Crie um array com 8 notas
// utilize FOR para percorrer as notas e IF/ELSE para informar:
// 🙌 Nota maior ou igual a 7 + "Aprovado"
// 🙌 Nota menor que 7 + "Reprovado"

//01
// let Notas = [6, 9, 7, 3, 4, 10, 2, 5]

// for (let index = 0; index < Notas.length; index++) {
    
//     if (Notas[index]>= 7) {
//         console.log(Notas [index] + " APROVADA " );
//     } else {
//         console.log(Notas [index] + " REPROVADA ");
//     }
// }


//Exercicio 02 - Temperatura
//Crie um array contendo 7 temperaturas.
//Percorra o array e classifique cada temperatura
// 🙌 Maior que 30 + "Quente"
// 🙌 Entre 20 e 30 + Agradavel
// 🙌 Menor que 20 + "Frio"


//02

let temperatura = [35, 25, 22, 14, 17 , 33 ,12]

for (let index = 0; index < temperatura.length; index++) {
    
    if (temperatura[index]>30) {
        console.log(temperatura[index] + " Quente ");

    } else  (temperatura[index] >= 20 && temperatura[index] <= 30){ 
        console.log(temperatura[index])+ " Agradavel "
    }else{
        console.log
    }
    
    } 
        
     
    
