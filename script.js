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
  
  // Remove imagem anterior
  const oldImage = document.getElementById('person-image-container');
  if (oldImage) oldImage.remove();
  
  // Atualiza a URL
  updateUrl();
  
  // Mostra imagem se houver (busca de pessoa OU imagem regular)
  const imageName = level.personImage || level.image;
  if (imageName) {
    showPersonImage(imageName);
  }
}

function showPersonImage(imageName) {
  // Cria um elemento de imagem se não existir
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
    feedback.textContent = 'Digite uma resposta antes de verificar.';
    feedback.className = 'feedback error';
    return;
  }

  if (isCorrect) {
    feedback.textContent = '✓ Resposta correta! Clique em Próximo para continuar.';
    feedback.className = 'feedback success';
    nextButton.disabled = false;
    
    // Armazena a resposta para a questão de iniciais
    previousAnswers.push(answerInput.value.toLowerCase());
  } else {
    // Verifica se está próximo da resposta correta
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

function restartGame() {
  currentLevel = 0;
  previousAnswers = [];
  answerInput.disabled = false;
  checkButton.disabled = false;
  loadLevel();
}

checkButton.addEventListener('click', checkAnswer);
nextButton.addEventListener('click', nextLevel);
restartButton.addEventListener('click', restartGame);
answerInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    if (!nextButton.disabled) {
      nextLevel();
    } else {
      checkAnswer();
    }
  }
});

loadLevel();
