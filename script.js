const levels = [
  {
    question: 'Qual é o coração de um computador responsável por processar informações?',
    answer: 'processador',
    hint: 'Pense em algo que "processa"... comece pelo início.',
    url: 'level1-cpu'
  },
  {
    question: 'Que tipo de memória guarda dados permanentemente, mesmo desligado?',
    answer: 'Rom',
    hint: 'O que você faz com coisas que quer guardar?',
    url: 'level2-storage'
  },
  {
    question: 'Qual é o nome da memória rápida e temporária que desaparece quando desliga?',
    answer: 'ram',
    hint: 'Procure pela sigla de memória de acesso aleatório em inglês.',
    url: 'level3-memory'
  },
  {
    question: 'Procure pela pessoa que você conhece e pergunte: "Quem foi o julião" (Foto será exibida)',
    answer: ['Foi um heroi'],
    isPersonSearch: true,
    personImage: 'person1.png',
    url: 'level4-wifi'
  },
  {
    question: 'Como chamamos a sequência de instruções que o computador executa?',
    answer: 'programa',
    hint: 'É o que você instala no seu PC para fazer algo.',
    url: 'level5-program'
  },
  {
    question: 'Que peça física conecta o computador à internet?',
    answer: 'modem',
    hint: 'Procure o dispositivo que recebe sinal do seu provedor de internet.',
    url: 'level6-modem'
  },
  {
    question: 'Procure pela pessoa que você conhece e pergunte: "O que você mais usa para se comunicar profissionalmente?" (Foto será exibida)',
    answer: ['email', 'e-mail'],
    isPersonSearch: true,
    personImage: 'person2.jpg',
    hint: 'Descubra qual é o método preferido dessa pessoa para trocar informações digitalmente.',
    url: 'level7-email'
  },
  {
    question: 'Qual é a parte do computador responsável por exibir a informação?',
    answer: 'monitor',
    hint: 'Olhe para o que você está vendo agora enquanto lê isso.',
    url: 'level8-monitor'
  },
  {
    question: 'Na codificação digital, qual é a unidade mínima de informação?',
    answer: 'bit',
    hint: 'Procure o menor componente de dados na computação, antes até dos bytes.',
    url: 'level9-bit'
  },
  {
    question: 'Qual linguagem permite a comunicação entre humanos e máquinas?',
    answer: 'binario',
    hint: 'Pesquise sobre o idioma que contém apenas dois dígitos.',
    url: 'level10-binary'
  },
  {
    question: 'Procure pela pessoa que você conhece e pergunte: "Qual é o melhor editor de UX?" (Foto será exibida)',
    answer: ['figma'],
    isPersonSearch: true,
    personImage: 'person3.jpg',
    hint: 'Descubra qual ferramenta essa pessoa usa para criar documentos.',
    url: 'level11-editor'
  },
  {
    question: 'Como chamamos a interface visual que permite interação com o computador?',
    answer: 'sistema operacional',
    hint: 'Procure o software principal que gerencia o computador.',
    url: 'level12-os'
  },
  {
    question: 'Qual é o protocolo padrão para transferência de informações na web?',
    answer: 'http',
    hint: 'Pesquise o protocolo que você vê no início de todo endereço web.',
    url: 'level13-http'
  },
  {
    question: 'Na sombra do transistor, código flui em sussurros silenciosos, conversando em um idioma que apenas zeros e uns compreendem. Qual seria o resultado desta dança binária?',
    answer: 'computacao',
    hint: 'O que é o resultado quando máquinas pensam e processam?',
    url: 'level14-enigma'
  },
  {
    question: 'Qual é o dispositivo responsável por fornecer energia ao computador?',
    answer: 'fonte',
    hint: 'Procure a origem da energia do seu computador.',
    url: 'level15-power'
  },
  {
    question: 'Como chamamos a ação de se conectar a um servidor remoto de forma segura?',
    answer: 'login',
    hint: 'Como chamamos o ato de "entrar" em um sistema?',
    url: 'level16-login'
  },
  {
    question: 'Pegue as INICIAIS das respostas anteriores. A primeira letra é "P", a segunda é "A", terceira é "R"... Pesquise qual é a palavra completa formada por essas 16 iniciais.',
    answer: ['palavra-chave', 'palavrachave', 'palavra chave'],
    isAcrostic: true,
    hint: 'Tente listar todas as primeiras letras em ordem. Veja se consegue descobrir qual palavra se encaixa com essas iniciais.',
    url: 'level17-acrostic'
  },
  {
    question: 'Qual é o programa malicioso que se propaga alterando outros programas?',
    answer: 'virus',
    hint: 'Procure o nome do intruso digital que infecta sistemas.',
    url: 'level18-virus'
  },
  {
    question: 'Qual é a tecnologia que permite armazenar dados em servidores remotos?',
    answer: 'nuvem',
    hint: 'Pesquise onde os dados são guardados "lá em cima", longe do seu computador.',
    url: 'level19-cloud'
  },
  {
    question: 'Que tipo de memória é considerada o "disco rígido moderno"?',
    answer: 'ssd',
    hint: 'Procure a sigla da memória de estado sólido em inglês.',
    url: 'level20-ssd'
  },
];

const puzzleText = document.getElementById('puzzle-text');
const answerInput = document.getElementById('answer-input');
const checkButton = document.getElementById('check-button');
const nextButton = document.getElementById('next-button');
const restartButton = document.getElementById('restart-button');
const feedback = document.getElementById('feedback');
const finalMessage = document.getElementById('final-message');
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const startPasswordInput = document.getElementById('start-password');
const startCmdLine1 = document.getElementById('start-cmd-line-1');
const startCmdLine2 = document.getElementById('start-cmd-line-2');
const startEnigma = document.getElementById('start-enigma');
const startButton = document.getElementById('start-button');
const startFeedback = document.getElementById('start-feedback');
const overlay = document.getElementById('overlay');

const initialPassword = '230808';
const maxFailedBeforeReveal = 4;
let failedStartAttempts = 0;
let typingTimeout = null;

let currentLevel = 0;
let previousAnswers = [];

function normalize(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/ã|â|á|à/g, 'a')
    .replace(/é|ê|è/g, 'e')
    .replace(/í|î|ì/g, 'i')
    .replace(/ó|ô|õ|ò/g, 'o')
    .replace(/ú|û|ù/g, 'u')
    .replace(/ç/g, 'c')
    .replace(/\s+/g, '')
    .replace(/[^a-z0-9]/g, '');
}

function calculateSimilarity(str1, str2) {
  const longer = str1.length > str2.length ? str1 : str2;
  const shorter = str1.length > str2.length ? str2 : str1;

  if (longer.length === 0) return 1.0;

  const editDistance = getEditDistance(longer, shorter);
  return (longer.length - editDistance) / longer.length;
}

function getEditDistance(str1, str2) {
  const distances = [];
  for (let i = 0; i <= str1.length; i++) {
    distances[i] = [i];
  }
  for (let j = 0; j <= str2.length; j++) {
    distances[0][j] = j;
  }

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        distances[i][j] = distances[i - 1][j - 1];
      } else {
        distances[i][j] = Math.min(
          distances[i - 1][j - 1] + 1,
          distances[i][j - 1] + 1,
          distances[i - 1][j] + 1
        );
      }
    }
  }

  return distances[str1.length][str2.length];
}

function updateUrl() {
  const level = levels[currentLevel];
  window.history.replaceState({}, '', `?${level.url}`);
}

function loadLevel() {
  const level = levels[currentLevel];
  puzzleText.textContent = level.question;
  answerInput.value = '';
  feedback.textContent = '';
  feedback.className = 'feedback';
  nextButton.disabled = true;
  answerInput.focus();
  finalMessage.classList.add('hidden');

  const oldImage = document.getElementById('person-image-container');
  if (oldImage) oldImage.remove();

  updateUrl();

  const imageName = level.personImage || level.image;
  if (imageName) {
    showPersonImage(imageName);
  }
}

function clearTyping() {
  if (typingTimeout) {
    clearTimeout(typingTimeout);
    typingTimeout = null;
  }
}

function typeText(element, text, interval = 25, callback) {
  if (!element) return;
  clearTyping();
  element.textContent = '';
  element.classList.add('visible-line');
  element.classList.remove('hidden-line');

  let index = 0;
  function nextChar() {
    if (index <= text.length) {
      element.textContent = text.slice(0, index);
      index += 1;
      typingTimeout = setTimeout(nextChar, interval);
    } else {
      typingTimeout = null;
      if (callback) callback();
    }
  }

  nextChar();
}

function showPersonImage(imageName) {
  let imageContainer = document.getElementById('person-image-container');
  if (!imageContainer) {
    imageContainer = document.createElement('div');
    imageContainer.id = 'person-image-container';
    imageContainer.style.marginTop = '20px';
    imageContainer.style.textAlign = 'center';
    puzzleText.parentElement.appendChild(imageContainer);
  }

  imageContainer.innerHTML = `<img src="images/${imageName}" alt="Pessoa" style="max-width: 200px; border-radius: 10px;">`;
}

function checkAnswer() {
  const answer = normalize(answerInput.value);
  const level = levels[currentLevel];
  const correctAnswers = Array.isArray(level.answer)
    ? level.answer.map(a => normalize(a))
    : [normalize(level.answer)];

  const isCorrect = correctAnswers.some((correct) => correct === answer);

  if (!answer) {
    feedback.textContent = 'Digite uma entrada antes de confirmar.';
    feedback.className = 'feedback error';
    return;
  }

  if (isCorrect) {
    feedback.textContent = '✓ Entrada aceita. Clique em Continuar para prosseguir.';
    feedback.className = 'feedback success';
    nextButton.disabled = false;

    previousAnswers.push(answerInput.value.toLowerCase());
  } else {
    const similarities = correctAnswers.map(correct => ({
      similarity: calculateSimilarity(answer, correct),
      correct
    }));

    const bestMatch = similarities.reduce((prev, current) => 
      current.similarity > prev.similarity ? current : prev
    );

    if (bestMatch.similarity > 0.6) {
      feedback.textContent = `✗ Não está exatamente. ${level.hint}`;
      feedback.className = 'feedback hint';
    } else {
      feedback.textContent = '✗ Resposta incorreta. Tente novamente.';
      feedback.className = 'feedback error';
    }
  }
}

function nextLevel() {
  if (currentLevel < levels.length - 1) {
    currentLevel += 1;
    loadLevel();
  } else {
    completeGame();
  }
}

function completeGame() {
  finalMessage.classList.remove('hidden');
  feedback.textContent = '';
  answerInput.value = '';
  answerInput.disabled = true;
  checkButton.disabled = true;
  nextButton.disabled = true;
}

function startGame() {
  const answer = normalize(startPasswordInput.value);
  if (!answer) {
    startFeedback.textContent = 'Digite o código antes de prosseguir.';
    startFeedback.className = 'feedback error';
    return;
  }

  if (answer === initialPassword) {
    startScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    void gameScreen.offsetWidth;
    gameScreen.classList.add('visible');
    startFeedback.textContent = '';
    currentLevel = 0;
    previousAnswers = [];
    failedStartAttempts = 0;
    loadLevel();
  } else {
    failedStartAttempts += 1;
    const remaining = Math.max(maxFailedBeforeReveal - failedStartAttempts, 0);

    if (failedStartAttempts >= maxFailedBeforeReveal) {
      if (startEnigma && levels.length > 0) {
        startEnigma.textContent = 'C:\\Notebook> Dígitos 1 e 2: Somos um número primo. Se você somar nossos algarismos, o resultado é 5. Se você multiplicar nossos algarismos, o resultado é 6. O menor algarismo vem primeiro. Dígitos 3 e 4: Pegue o número de tentáculos de um polvo. Coloque um zero à esquerda para manter o padrão de dois dígitos. Dígitos 5 e 6: O valor exato da raiz cúbica de 512. Coloque um zero à esquerda para manter o padrão de dois dígitos.';
        startEnigma.classList.add('visible-line');
        startEnigma.classList.remove('hidden-line');
      }
      startFeedback.textContent = 'Código incorreto. Enigma inicial liberado.';
      startFeedback.className = 'feedback hint';
    } else {
      startFeedback.textContent = `Código incorreto. Você tem ${remaining} tentativas`;
      startFeedback.className = 'feedback error';
    }
  }
}

function restartGame() {
  currentLevel = 0;
  previousAnswers = [];
  failedStartAttempts = 0;
  answerInput.disabled = false;
  checkButton.disabled = false;
  gameScreen.classList.remove('visible');
  gameScreen.classList.add('hidden');
  startScreen.classList.remove('hidden');
  startFeedback.textContent = '';
  feedback.textContent = '';
  answerInput.value = '';
  nextButton.disabled = true;
  startPasswordInput.value = '';

  if (startEnigma) {
    startEnigma.textContent = 'C:\\Notebook> Enigma inicial bloqueado. Erre 4 vezes para liberar.';
    startEnigma.classList.add('hidden-line');
    startEnigma.classList.remove('visible-line');
  }

  startPasswordInput.focus();
}

checkButton.addEventListener('click', checkAnswer);
nextButton.addEventListener('click', nextLevel);
restartButton.addEventListener('click', restartGame);
startButton.addEventListener('click', startGame);
answerInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    if (!nextButton.disabled) {
      nextLevel();
    } else {
      checkAnswer();
    }
  }
});

startPasswordInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    startGame();
  }
});

function showStartLine(element, text, delay) {
  if (!element) return;
  setTimeout(() => {
    typeText(element, text, 18);
  }, delay);
}

window.addEventListener('load', () => {
  if (overlay) {
    overlay.addEventListener('animationend', () => overlay.remove());
  }

  showStartLine(startCmdLine1, 'C:\\Notebook> Acesso ao Enigma Temporal', 1000);
  showStartLine(startCmdLine2, 'C:\\Notebook> Digite o código de entrada para desbloquear o jogo.', 2000);

  startPasswordInput.focus();
});
