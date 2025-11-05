// Variável para armazenar o ID do intervalo, permitindo que ele seja parado.
let idDoIntervalo = null;
let count = 0; // O contador deve ser global (ou fora do listener) para manter o estado.

// Seletores
const cronometroDisplay = document.querySelector(".span");
const iniciar = document.querySelector(".iniciar");
const parar = document.querySelector(".parar"); // Adicionamos o seletor para o botão Parar

// ------------------------------------------------------------------
// Função para INICIAR o Cronômetro
// ------------------------------------------------------------------
const startCronometro = () => {
    // Se o cronômetro já estiver rodando, não faça nada (evita múltiplos inícios)
    if (idDoIntervalo) {
        return;
    }
    
    // 1. Usa setInterval para AGENDAR a função de atualização a cada 1000ms (1 segundo)
    idDoIntervalo = setInterval(() => {
        count++; // Incrementa o contador
        cronometroDisplay.textContent = count; // Atualiza o display
    }, 1000);
    
    console.log("Cronômetro Iniciado!");
};

// ------------------------------------------------------------------
// Função para PARAR o Cronômetro
// ------------------------------------------------------------------
const stopCronometro = () => {
    // 2. Usa clearInterval com o ID armazenado para CANCELAR a repetição agendada
    clearInterval(idDoIntervalo);
    idDoIntervalo = null; // Limpa o ID para permitir que o cronômetro inicie novamente
    
    console.log("Cronômetro Parado!");
};

// ------------------------------------------------------------------
// Listeners
// ------------------------------------------------------------------
iniciar.addEventListener("click", startCronometro);
parar.addEventListener("click", stopCronometro);

// Opcional: Adicionar um botão para Zerar
// const zerarCronometro = () => {
//     stopCronometro(); // Para, caso esteja rodando
//     count = 0;
//     cronometroDisplay.textContent = 0;
// };