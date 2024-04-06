document.addEventListener("DOMContentLoaded", function() {
  // Array de caminhos das músicas de fundo
  var musicasDeFundo = [
    './assets/songs/fundo/It Must Have Been Love (acoustic cover) - Amber Leigh Irish (Official audio art).mp3',
    './assets/songs/fundo/All My Life - Brian Nhira (K-Ci & JOJO)   The Sessions EP Pt. II.mp3'
  ];

  // Variável para controlar o índice da música atual
  var musicaAtual = 0;

  // Variável para armazenar o objeto Howl da música de fundo atual
  var sound = null;

  // Função para criar um novo objeto Howl com a música atual
  function playNextSong() {
    // Se houver uma instância anterior, pare-a
    if (sound) {
      sound.stop();
    }

    sound = new Howl({
      src: [musicasDeFundo[musicaAtual]],
      autoplay: true,
      loop: true,
      volume: 0.5,
      onend: function() {
        console.log('Finished!');
      }
    });

    // Atualiza a variável musicaAtual para a próxima música no array
    musicaAtual = (musicaAtual + 1) % musicasDeFundo.length;

    // Retorna o objeto Howl criado
    return sound;
  }

  // Função para pausar ou retomar o som
  function toggleSound() {
    if (sound && sound.playing()) {
      sound.pause();
    } else {
      playNextSong();
    }
    updateButton(); // Atualiza o botão
  }

  // Função para atualizar o botão de acordo com o estado do som
  function updateButton() {
    var button = document.getElementById('toggleSoundButton');
    button.classList.toggle('clicked', sound && sound.playing()); // Adiciona ou remove a classe 'clicked' com base no estado do som
  }

  // Adiciona um evento de clique ao botão flutuante
  document.getElementById('toggleSoundButton').addEventListener('click', toggleSound);

  // Pausa o som quando outra mídia for acionada
  var otherMediaElements = document.querySelectorAll('video, audio');
  otherMediaElements.forEach(function(mediaElement) {
    mediaElement.addEventListener('play', function() {
      if (sound && sound.playing()) {
        sound.pause();
        updateButton(); // Atualiza o botão
      }
    });
  });

  // Inicializa o botão
  updateButton();
});




// section lembra-você
    function videoslider(videoId) {
      document.getElementById("video-player").innerHTML =
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/' +
        videoId +
        '?showinfo=0" controls: "0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    }

    window.onload = function () {
      videoslider("_-iYjarPmF0");
    };

    
  const array = [
    "Minha linda!",
    "Minha Querida!",
    "Meu Dilúvio de Amor!",
    "Maravilhosa minha!",
    "Amor da minha vida!",
    "Tempesdade do bem!",
    "Pessoa Educada!",
    "Respeitosa!",
    "Cheia de Luz!",
    "Abençoada!",
    "Digna!",
    "Doçe!",
    "Amável!",
  ];
  let currentIndex = 0;
  let dynamicText = document.getElementById("dynamicText");

  function fadeInOut() {
    dynamicText.style.opacity = 0;
    setTimeout(function() {
      // Executar o fade-out da palavra atual
      dynamicText.style.opacity = 1;
      setTimeout(function() {
        // Executar a troca de texto
        dynamicText.textContent = array[currentIndex];
        // Executar o fade-in da nova palavra
        dynamicText.style.opacity = 0;
        setTimeout(function() {
          dynamicText.style.opacity = 1;
        }, 200); // Tempo de espera antes do fade-in (0.1 segundos)
        // Atualizar o índice para a próxima palavra
        currentIndex = (currentIndex + 1) % array.length;
      }, 2000); // Tempo de espera entre o fade-out e a troca de texto (1 segundo)
    }, 6000); // Tempo de espera entre o fade-in e o fade-out (6 segundos)
  }

  fadeInOut(); // Chama fadeInOut pela primeira vez

  // Exibir palavras sequencialmente a cada 8 segundos
  setInterval(fadeInOut, 8000); // 8 segundos = 4 segundos de exibição + 4 segundos de espera