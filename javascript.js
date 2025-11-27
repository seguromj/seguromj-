



//-----------------------------------------
//-----------------------------------------
//------Status ABERTO ou FECHADO-----------

// --- CONFIGURAÇÃO ---
// Defina os horários de fechamento e reabertura.
// Use o formato de 24 horas (Ex: 14:30 para 2 e meia da tarde)

const HORA_FECHAMENTO = '18:00'; // Exemplo: Fecha às 18:00 (6 da tarde)
const HORA_REABERTURA = '23:59'; // Exemplo: Reabre às 08:00 (8 da manhã)
// --------------------

function verificarStatus() {
    const agora = new Date();
    const horaAtual = agora.getHours();
    const minutoAtual = agora.getMinutes();

    // Converte a hora atual para um número (Ex: 15h30m vira 1530)
    const horaMinutoAtual = horaAtual * 100 + minutoAtual;

    // Pega a hora e minuto dos horários de configuração
    const [fechamentoHora, fechamentoMinuto] = HORA_FECHAMENTO.split(':').map(Number);
    const horaMinutoFechamento = fechamentoHora * 100 + fechamentoMinuto;

    const [reaberturaHora, reaberturaMinuto] = HORA_REABERTURA.split(':').map(Number);
    const horaMinutoReabertura = reaberturaHora * 100 + reaberturaMinuto;

    const container = document.getElementById('status-container');
    const texto = document.getElementById('status-text');

    let isFechado = false;

    if (horaMinutoFechamento > horaMinutoReabertura) {
        // Cenário 1: Fecha e reabre no MESMO dia (Ex: 18:00 -> 22:00)
        // Está FECHADO se a hora atual for APÓS o fechamento E ANTES da reabertura.
        if (horaMinutoAtual >= horaMinutoFechamento || horaMinutoAtual < horaMinutoReabertura) {
            isFechado = true;
        }
    } else {
        // Cenário 2: Fecha em um dia e reabre no dia SEGUINTE (Ex: 18:00 -> 08:00)
        // Está FECHADO se a hora atual for APÓS o fechamento OU ANTES da reabertura.
        if (horaMinutoAtual >= horaMinutoFechamento && horaMinutoAtual < horaMinutoReabertura) {
            isFechado = true;
        }
    }

    if (isFechado) {
        // Mudar para FECHADO
        container.classList.remove('aberto');
        container.classList.add('fechado');
        texto.textContent = 'FECHADO';
    } else {
        // Mudar para ABERTO
        container.classList.remove('fechado');
        container.classList.add('aberto');
        texto.textContent = 'ABERTO';
    }
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


