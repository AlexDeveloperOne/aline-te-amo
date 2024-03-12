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
});
