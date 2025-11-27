



//-----------------------------------------
//-----------------------------------------
//------Status ABERTO ou FECHADO-----------
// --- CONFIGURAÇÃO ---
// Defina os horários de fechamento e reabertura.
// Use o formato de 24 horas (Ex: 14:30 para 2 e meia da tarde)

// 💡 EXEMPLO 1: FECHADO DURANTE A NOITE/MADRUGADA (Passa pela meia-noite)
// const HORA_FECHAMENTO = '23:00'; // Fecha às 11 da noite
// const HORA_REABERTURA = '08:00'; // Reabre às 8 da manhã

// 💡 EXEMPLO 2: FECHADO AO MEIO-DIA (No mesmo dia)
// const HORA_FECHAMENTO = '12:00'; // Fecha ao meio-dia
// const HORA_REABERTURA = '14:00'; // Reabre às 2 da tarde

// Usando suas constantes originais para demonstração
const HORA_FECHAMENTO = '23:59'; 
const HORA_REABERTURA = '18:00'; 
// --------------------

function verificarStatus() {
    const agora = new Date();
    const horaAtual = agora.getHours();
    const minutoAtual = agora.getMinutes();

    // 1. Converte a hora atual para um número (Ex: 15h30m vira 1530)
    const horaMinutoAtual = horaAtual * 100 + minutoAtual;

    // 2. Converte os horários de configuração
    const [fechamentoHora, fechamentoMinuto] = HORA_FECHAMENTO.split(':').map(Number);
    const horaMinutoFechamento = fechamentoHora * 100 + fechamentoMinuto;

    const [reaberturaHora, reaberturaMinuto] = HORA_REABERTURA.split(':').map(Number);
    const horaMinutoReabertura = reaberturaHora * 100 + reaberturaMinuto;

    const container = document.getElementById('status-container');
    const texto = document.getElementById('status-text');

    let isFechado = false;

    // --- LÓGICA CORRIGIDA ---

    if (horaMinutoFechamento > horaMinutoReabertura) {
        // Cenário 1: Fechamento no dia anterior e Reabertura no dia ATUAL (Ex: 23:00 -> 08:00)
        // O período de fechamento atravessa a meia-noite.
        // Está FECHADO se a hora atual for APÓS o fechamento OU ANTES da reabertura.
        if (horaMinutoAtual >= horaMinutoFechamento || horaMinutoAtual < horaMinutoReabertura) {
            isFechado = true;
        }

    } else {
        // Cenário 2: Fechamento e Reabertura no MESMO dia (Ex: 12:00 -> 14:00)
        // O período de fechamento está contido no dia.
        // Está FECHADO se a hora atual for MAIOR OU IGUAL ao fechamento E MENOR que a reabertura.
        if (horaMinutoAtual >= horaMinutoFechamento && horaMinutoAtual < horaMinutoReabertura) {
            isFechado = true;
        }
    }

    // --- APLICAÇÃO DO ESTADO ---

    if (isFechado) {
        container.classList.remove('aberto');
        container.classList.add('fechado');
        texto.textContent = 'FECHADO';
        // O texto extra foi removido, mas você pode adicioná-lo de volta se quiser!
    } else {
        container.classList.remove('fechado');
        container.classList.add('aberto');
        texto.textContent = 'ABERTO';
    }
    
    // Opcional: Mostra a hora atual no console para debug
    console.log(`Hora atual: ${horaMinutoAtual}. Status: ${isFechado ? 'FECHADO' : 'ABERTO'}`);
}

// Executa a função imediatamente ao carregar
verificarStatus();

// Configura para verificar o status a cada minuto (60000 milissegundos)
setInterval(verificarStatus, 60000);




//-----------------------------------------
//-----------------------------------------
//-----script do 5 estrela/comentaro-------

function scrollCarousel(direction) {
        const track = document.getElementById('carouselTrack');
        // Define o quanto rolar (a largura de um card + o gap de 20px)
        const scrollAmount = 270; 

        // Rola o carrossel na direção especificada
        track.scrollLeft += direction * scrollAmount;
    }
//-----------------------------------------
//-----------------------------------------
//-----------------------------------------
//-----------------------------------------
//-----------------------------------------
//-----------------------------------------
//-----------------------------------------
//-----------------------------------------
//-----------------------------------------
//--___java do html-pacotes___-------------

//--___Função: Abrir a imagem no buttons___----

// 1. Pega os elementos pelo ID
const botao = document.getElementById('button-imgs');
const imagem = document.getElementById('img-button01');

// 2. Adiciona um "ouvinte de eventos" (event listener) ao botão
botao.addEventListener('click', function() {
  
  // 3. Verifica se a imagem está oculta
  if (imagem.classList.contains('imgbutton001')) {
    
    // Se estiver oculta, remove a classe 'escondida'
    imagem.classList.remove('imgbutton001');
    // E adiciona a classe 'visivel'
    imagem.classList.add('imagem-visivel');
    
    // Opcional: Altera o texto do botão
    botao.textContent = 'Imagem Exibida';
    
  } else {
    // Se você quiser que o botão esconda a imagem novamente
    imagem.classList.remove('imagem-visivel');
    imagem.classList.add('imagem-escondida');
    botao.textContent = 'Clique para Ver a Imagem';
  }
});


