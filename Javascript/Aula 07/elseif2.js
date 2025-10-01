let Credencial = "pj"

if (Credencial == "visitante") {
    console.log("Você só pode ir onde o anfitrião for.");    
}
else if (Credencial == "estagiario") {
    console.log("Você pode acessar as áreas baias de trabalho e refeitório");
}
else if (Credencial == "jovem aprendiz") {
    console.log("Você pode acessar as áreas de lazer, baias e refeitório");
}
else if (Credencial == "CLT") {
    console.log("Você pode acessar tudo, exceto a diretoria");
}
else if (Credencial == "CEO") {
    console.log("o céu é o limite");
}

else{
    console.log("Credencial Inválida, acesso negado.");
}

