const levels = [
  {
    question: 'Que tipo de memória guarda dados permanentemente, mesmo desligado?',
    answer: 'memoria não-volátil',
    hint: 'pense no tipo de memória que não perde informações quando a energia é cortada.',
    url: 'level1-storage'
  },
  {
    question: 'MS-DOS->Windows 95->Windows XP ->?',
    answer: 'Windows 7',
    hint: 'quem veio depois nessa sequencia?',
    url: 'level2-storage'
  },
  {
    imageUrl: 'code.png',
    imageCaption: 'procure com atenção o codigo na escuridão',
    answer: '1521946',
    hint: 'olhe com atenção o canto superior direito.',
    url: 'level3-escuro'
  },
  {
    question: 'Procure pelo funcionario temporal e pergunte-o:"Tenho chaves, mas não abro portas. Protejo segredos sem tocar neles. O que sou eu?"',
    answer: ['criptografia'],
    isPersonSearch: true,
    personImage: 'genio1.jpeg',
    url: 'level4-wifi'
  },
  {
    imageUrl: 'javascripit.png',
    imageCaption: 'Encontre o erro, se ele realmente existir.',
    answer: 'i',
    hint: 'Digite apenas o erro',
    url: 'level5-JS'
  },
  {
    question: 'a resposta está abaixo delas "qwertyuiop"',
    answer: 'asdfghjklç',
    hint: 'analise essas letras no seu teclado.',
    url: 'level6-teclado'
  },
    {
    imageUrl: 'banco.jpeg',
    imageCaption: 'O que você vê nesta imagem?',
    answer: 'banco de dados',
    hint: 'descreva literalmente o que você vê(é uma área da tecnologia.)',
    url: 'level7-enigma'
  },
  {
<<<<<<< HEAD
    question: 'Não procure no fim da estante, nem no livro mais importante. Cruze a porta com atenção,pois a dica está na entrada, então.',
    answer: ['email', 'e-mail'],
    url: 'level7-email'
=======
    question: 'Sou o cérebro do computador, resolvo contas em segundos, mas preciso esfriar para não enlouquecer. Quem sou eu?',
    answer: 'processador',
    hint: 'estou pronto para -processar- dados.',
    url: 'level8-cpu'
>>>>>>> 02af270fdb8f177c6f495d6d939ba438492b0d27
  },
  {
    question: 'oditrevni rotinom, ?uec od roc a lauq',
    answer: 'luza',
    hint: 'não é uma cifra é oditrevni',
    url: 'level9-oditrevni'
  },
  {
    question: 'um robô que diz a verdade em um certo padrão - às vezes mente, às vezes diz a verdade. Qual é o estado lógico deste robô?',
    answer: ['indeterminado','inconsistente','variavel','independente', 'indeterminável',
      'incerto', 'incerteza', 'superposição'],
    hint: 'É um estado da lógica quando não há resposta certa ou errada.',
    url: 'level10-robo'
  },
  {
<<<<<<< HEAD
    question: 'Não procure entre capa e letra, nem onde o silêncio penetra. Ao lado dos aromas da refeição, há um círculo feito para atenção. No centro ecoa a apresentação, e ali repousa a próxima direção.',
    answer: ['figma'],
    url: 'level11-editor'
=======
    question: 'Um computador está se comunicando com você. Escute o áudio com atenção para saber que tipo de lingua é essa.',
    audioUrl: 'codigo.wav',
    answer: ['codigo morse,codigo morsa'],
    hint: '"code walrus" in english.',
    url: 'level11-code'
  },
    {
    imageUrl: 'relogio.jpeg',
    imageCaption: 'O que você pensa ao ver esta imagem?',
    answer: ['hora do almoço,almoçar'],
    hint: 'que horas são, o que você costuma fazer nesse horário?',
    url: 'level12-enigma'
>>>>>>> 02af270fdb8f177c6f495d6d939ba438492b0d27
  },
  {
    question: 'Você encontrou um texto: "hzZzfzj-". Que linguagem é essa?',
    answer: 'base64',
    hint: 'parece um texto codificado em um tipo de codificação meia quatro.',
    url: 'level13-codificado'
  },
  { 
    imageUrl: 'escola _liminar_.png',
    answer: '1805',
    hint: 'analise a imagem com atenção, elas esta corrompida, mas talvez você consiga encontrar um padrão ou uma mensagem escondida nela.',
    url: 'level14-corrompido'
  },
  { question: 'Áudio bugado, tente decifrar o que ele diz.',
    audioUrl: 'audio.mp3',
    answer: 'xuxa',
    hint: 'Ouça com atenção, talvez você precise ol-retrevni',
    hint: 'ouça com atenção, talvez você precise ol-retrevni',
    url: 'level15-audio'
  },
  {
    imageUrl: 'redeComputadores.jpeg',
    imageCaption: 'esta imagem representa?',
    answer: 'rede de computadores',
    hint: 'é literalmente a imagem (é uma área da tecnologia)',
    url: 'level16-redeDeComputadores'
  },

  {
    question: '-3.735540 -38.457995',
    answer: 'data center v.tal',
    hint: 'isso parece ser alguma coodenada.',
    url: 'level17-enigma'
  },
  {
    question: 'escreva criar para passar',
    answer: 'criar',
    hint: '',
    url: 'level18-enigma'
  },
  {
    question: 'escreva criar para passar',
    answer: 'criar',
    hint: '',
    url: 'level19-enigma'
  },
  {
    question: 'escreva criar para passar',
    answer: 'criar',
    hint: '',
    url: 'level20-enigma'
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
const levelDisplay = document.getElementById('level-display');

const initialPassword = '230808';
const maxFailedBeforeReveal = 4;
let failedStartAttempts = 0;
let typingTimeout = null;

let currentLevel = 0;
let previousAnswers = [];

function showNotification(message, duration = 5000) {
  const container = document.getElementById('notification-container');
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  
  container.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('removing');
    setTimeout(() => {
      notification.remove();
    }, 400);
  }, duration);
}

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
  levelDisplay.textContent = `Level ${currentLevel + 1}`;

  const oldImage = document.getElementById('person-image-container');
  if (oldImage) oldImage.remove();

  const oldAudio = document.getElementById('audio-container');
  if (oldAudio) oldAudio.remove();

  updateUrl();

  if (level.imageUrl) {
    showPersonImage(level.imageUrl, level.imageCaption);
  }

  if (level.audioUrl) {
    showAudio(level.audioUrl);
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

function showPersonImage(imagePath, imageCaption) {
  let imageContainer = document.getElementById('person-image-container');
  if (!imageContainer) {
    imageContainer = document.createElement('div');
    imageContainer.id = 'person-image-container';
    puzzleText.parentElement.appendChild(imageContainer);
  }

  let html = `<img src="${imagePath}" alt="Pessoa">`;
  if (imageCaption) {
    html += `<p class="image-caption">${imageCaption}</p>`;
  }
  imageContainer.innerHTML = html;
}

function showAudio(audioUrl) {
  let audioContainer = document.getElementById('audio-container');
  if (!audioContainer) {
    audioContainer = document.createElement('div');
    audioContainer.id = 'audio-container';
    puzzleText.parentElement.appendChild(audioContainer);
  }

  audioContainer.innerHTML = `<audio controls><source src="${audioUrl}" type="audio/mpeg">Seu navegador não suporta áudio.</audio>`;
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

    showNotification(`💡 Dica: ${level.hint}`, 6000);
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
        startEnigma.textContent = 'C:\\Site> Dígitos 1 e 2: Somos um número primo. Se você somar nossos algarismos, o resultado é 5. Se você multiplicar nossos algarismos, o resultado é 6. O menor algarismo vem primeiro. Dígitos 3 e 4: Pegue o número de tentáculos de um polvo. Coloque um zero à esquerda para manter o padrão de dois dígitos. Dígitos 5 e 6: O valor exato da raiz cúbica de 512. Coloque um zero à esquerda para manter o padrão de dois dígitos.';
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
    startEnigma.textContent = 'C:\\Site> Enigma inicial bloqueado. Erre 4 vezes para liberar.';
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

  showStartLine(startCmdLine1, 'C:\\Site> Acesso ao Enigma Temporal', 1000);
  showStartLine(startCmdLine2, 'C:\\Site> Digite o código de entrada para desbloquear o jogo.', 2000);

  startPasswordInput.focus();
});
