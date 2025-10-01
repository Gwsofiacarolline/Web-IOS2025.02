let temDinheiro = true;      // Cliente tem dinheiro? true ou false
let compra = true; // Tem dinheiro suficiente para pagar? true ou false
let saborDisponivel = true; // O sabor que ele pediu existe? true ou false
let querQualSabor = true
let morango = true

if (temDinheiro == true) {
    console.log("Você tem dinheiro para comprar um sorvete?");

    if (compra == true) {
        console.log("O valor é R$ 5. Compra realizada!");

        if (saborDisponivel == false) {
            console.log("Qual sabor você quer?");

            if (querQualSabor == false) {
                console.log("Quero o sabor morango ");
            }
        } else {
            console.log("Esse sabor não tem, pode levar o de morango 🍓");
        }

    } else {
        console.log("Dinheiro insuficiente para pagar 😢");
    }

} else {
    console.log("Sem dinheiro, sem sorvete 😢");
}