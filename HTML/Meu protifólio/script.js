//  botão e a informação de contato 
const contactButton = document.getElementById('contact-button');
const contactInfo = document.getElementById('contact-info');

// Adiciona um "ouvinte de evento" (event listener) ao botão
contactButton.addEventListener('click', function() {
    
    // Verifica se a classe 'hidden' se está escondido
    if (contactInfo.classList.contains('hidden')) {
        
        // Se estiver escondido, remove 'hidden' e adiciona 'O invisivel' para mostrar
        contactInfo.classList.remove('hidden');
        contactInfo.classList.add('visible'); 
        
        // Altera o texto do botão
        contactButton.textContent = "Contato Revelado!";
        
    } else {
        
        // Se estiver visível, reverte para esconder
        contactInfo.classList.remove('visible');
        contactInfo.classList.add('hidden');
        
        // Altera o texto do botão de volta
        contactButton.textContent = "Mostrar Contato";
    }
});