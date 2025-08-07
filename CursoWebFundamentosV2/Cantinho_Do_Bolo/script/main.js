(function() {
    'use strict'
    const numeroWhatsApp = '5541995253662'
    const hamburgerBtn = document.querySelector('.hamburger')
    const navHeader = document.querySelector('.nav-header')
    const navMenu = document.querySelector('.nav-menu')
    const botoes = document.querySelectorAll('.btn-encomendar')
    const optionsTipos = document.querySelector('#bolo-tipos')
    const boloCards = document.querySelectorAll('.bolo-card')

    

    // Adiciona um "listener" de clique para o hamburger menu
    // e alterna as classes para mostrar/ocultar o menu
    
    hamburgerBtn.addEventListener('click', () => {
        navHeader.classList.toggle('active')
        hamburgerBtn.classList.toggle('active')
        navMenu.classList.toggle('active')
    })


    // Adiciona um "listener" de clique para cada botão

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {

            // Pega as informações do bolo do atributo data-

            const nomeBolo = botao.dataset.bolo
            const saborBolo = botao.dataset.sabor

            // Cria a mensagem personalizada

            const mensagem = `Olá, gostaria de fazer um pedido! Eu me interessei pelo ${nomeBolo}, sabor ${saborBolo}. Poderia me dar mais informações, por favor?`

            // Codifica a mensagem para a URL

            const mensagemCodificada = encodeURIComponent(mensagem)

            // Monta a URL completa

            const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`

            // Abre o WhatsApp em uma nova aba

            window.open(urlWhatsApp, '_blank')
        })
    })

    // Filtra os cards de bolos com base no tipo selecionado

    if(optionsTipos) {
        optionsTipos.addEventListener('change', () => {
            const tipoSelecionado = optionsTipos.value
            
            boloCards.forEach(card => {
                const tipoCard = card.dataset.tipo

                if(tipoSelecionado === '' || tipoSelecionado === tipoCard) {
                    card.style.display = 'flex'
                } else {
                    card.style.display = 'none'
                }
            })
        })
    }
})()