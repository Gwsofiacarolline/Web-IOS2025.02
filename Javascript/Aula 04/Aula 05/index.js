let idade = 24
let temDinheiro = false
let temCadUnico = false
// > maior que 
// >= maior ou igial a
// < menor que 
// <= menor ou igial a 

if (idade => 18) {
    if (temDinheiro == true) {
        console.log("Pagar o quebra!");  
    }
    else{
        if (temCadUnico == true) {
            console.log("CNH de graça");
        }
        else{
            console.log("Pobrinho e sem cadastro");
        }
    }
}
else{
    console.log("muito novo para pilotar");
}