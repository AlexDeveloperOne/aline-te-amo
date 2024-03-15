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