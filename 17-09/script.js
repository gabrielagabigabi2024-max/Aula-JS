let nota = 6;

if (nota < 5) {
    console.log("Henrique reprovado");

    //}else if nota(nota < 7){
    //} else if (nota < 7 || nota == 6){
} else if (nota >= 5 && nota < 7) {
    console.log("Henrique de recuperação");

} else {
    console.log("Henrique aprovado");

}

//01 

let Temperatura = 25

if (Temperatura < 30) {
    console.log("Temperatura quente");
}

else if (Temperatura >= 20 && Temperatura <= 30) {
    console.log("Temperatura agradável ");

} else {
    console.log("Está frio");

}
//02

let Velocidade = 65

if (Velocidade <= 60) {
    console.log("Velocidade permitida")
} else if (Velocidade <= 80) {
    console.log("Velocidade acima do permitido")
} else {
    console.log("Velocidade muito alta")
}

//03

let QuantidaeEstoque = 8
if (QuantidaeEstoque == 0) {
    console.log("Produto esgotado")
} else if (QuantidaeEstoque <= 1 && QuantidaeEstoque <= 10) {
    console.log("Estoque baixo")
} else {
    console.log("Estoque disponivel")
}

//04

let Usuario = "Admin"
let senha = 1234

if (Usuario == "Admin" && senha == "1234") {
    console.log("Login realizado com sucesso")
} else {
    console.log("Usuario ou senha incorretos")

}

//05

let Hora = 14;

if (Hora <= 0 && Hora <= 11) {
    console.log("Bom dia");

} else if (Hora >= 12 && Hora <= 17) {
    console.log("Boa tarde");

} else if (Hora >= 18 && Hora <= 23) {
    console.log("Boa noite")

}

//06

let Nota = 5;

if (Nota == 5) {
    console.log("Execelente")

} else if (Nota == 4) {
    console.log("Muito bom")

} else if (Nota == 3) {
    console.log("Bom")

} else if (Nota == 2) {
    console.log("Regular")

} else if (Nota == 1) {
    console.log("Ruim")

} else {
    console.log("Nota invalida")
}

//07

let Tipoingresso = "INTEIRA";

if (Tipoingresso == "INTEIRA") {
    console.log("R$ 40");

} else if (Tipoingresso == "MEIA") {
    console.log("R$ 20");

} else if ( Tipoingresso == VIP) {
    console.log("R$ 80");

} else {
    console.log("Tipo de ingresso invalido");

}