console.log('Você quer comprar um sorvete?');
console.log('Nós temos apenas 2 sabores');
console.log('==');

let dinheiro = 5
let temDinheiro = true
let escolha = 'morango'

if (dinheiro >= 5 && temDinheiro == true) {
    console.log('Você quer escolher um sabor?');

    if (escolha == 'morango' || 'chocolate') {
        console.log('você escolheu o sorvete de sabor ' + escolha);
    
    }else{
        console.log('Sabor Indisponível');
    }  

}else{
    console.log('Você não tem dinheiro suficiente');
}