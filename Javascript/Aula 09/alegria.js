
let login = prompt("Insira seu Email")
let loginCerto = "Sofia@hotmail.com"
let senha
let senhaCerta = "Sofia123456"

//Enquanto a senha do usuário for diferente da certa, continuaremos pedidndo para que ele insira a senha novamente
//DO = faça enquanto 
//while = O que dá nome a estrutura 
do {
    login = prompt('Digite o seu Email')
    senha = prompt('Insira a sua senha de acesso')
} while (login != loginCerto && senha != senhaCerta);

do {
    login = prompt('Digite o seu Email')
} while (login != loginCerto);
