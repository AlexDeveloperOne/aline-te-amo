document.addEventListener("DOMContentLoaded", function() {
    var sound = new Howl({
        src: ['./assets/Novo Som - Acreditae em Mim.mp3'],
        autoplay: true,
        loop: false,
        volume: 0.3,
        onend: function() {
            console.log('Finished!');
        }
    });
});//desativei musica [com nome errado!]


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
    "Maravilhosa!",
    "Amor da minha vida!",
    "Educada!",
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