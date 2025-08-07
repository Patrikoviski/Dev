// Efeito cortina para revelar a section #contact

window.addEventListener('scroll', function() {
    const contactSection = document.getElementById('contact');
    const curtain = contactSection ? contactSection.querySelector('.curtain') : null;
    if (!contactSection || !curtain) return;

    // Calcula o quanto do scroll está no final da página
    const docHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const scrollBottom = window.scrollY + windowHeight;

    // Progresso de revelação: 0 (cortina cobre tudo), 1 (cortina fora da tela)
    let progress = 0;
    if (scrollBottom > docHeight - windowHeight) {
        progress = Math.min((scrollBottom - (docHeight - windowHeight)) / windowHeight, 1);
    }
    // Move a cortina para cima conforme o scroll
    curtain.style.transform = `translateY(-${progress * 100}%)`;
});

// ...existing code...
document.querySelectorAll('.adopt-btn').forEach(function(btn) {
    btn.addEventListener('mouseenter', function() {
        const petItem = btn.closest('.pet-item');
        if (petItem) {
            petItem.style.animationPlayState = 'paused';
        }
    });
    btn.addEventListener('mouseleave', function() {
        const petItem = btn.closest('.pet-item');
        if (petItem) {
            petItem.style.animationPlayState = 'running';
        }
    });
});

