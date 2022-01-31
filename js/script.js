document.getElementById('sound');
let playBtn = document.getElementsByClassName('zemmour'),
    resetBtn = document.getElementById('reset');
audios = document.querySelectorAll('audio');
console.log(audios);

for (let i = 0; i < playBtn.length; i++) {
    playBtn[i].addEventListener('mouseover', function () {
        [].forEach.call(audios, function (audio) {
            audio.play();
            playBtn[i].src = "resources/end.jpg";
        });
    }, false);

    playBtn[i].addEventListener('mouseleave', function () {
        sound.pause();
        sound.currentTime = 0;
        playBtn[i].src = "resources/start.jpg";
    }, false);
}

