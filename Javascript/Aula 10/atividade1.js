let peso = prompt("Informe o seu peso em kg:");
let altura = parseFloat(prompt("Informe a sua altura em metros:"));


let imc;
let classificacao = "";


if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    console.log("Por favor, insira valores numéricos e positivos.");
} else {
    imc = peso / (altura * altura);

   
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        classificacao = "Obesidade grau I";
    } else if (imc >= 35 && imc < 40) {
        classificacao = "Obesidade grau II";
    } else {
        classificacao = "Obesidade grau III";
    }

    
    console.log("--- Resultado do IMC ---");
    console.log("Peso informado: " + peso + " kg");
    console.log("Altura informada: " + altura + " m");
    console.log("Seu IMC é: " + imc.toFixed(2));
    console.log("Classificação: " + classificacao);
    console.log("-----------------------");
}
