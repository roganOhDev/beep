document.addEventListener("DOMContentLoaded", function () {
    var count = 0;
    var setCount = 0;
    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    var isAudioStarted = false;

    function playBeep() {
        var oscillator = audioCtx.createOscillator();
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(1000, audioCtx.currentTime);
        oscillator.connect(audioCtx.destination);
        oscillator.start();
        setTimeout(function () {
            oscillator.stop();
        }, 100);
    }

    setInterval(function () {
        var output = document.getElementById("output");
        var setCountOutput = document.getElementById("setCount");
        output.textContent = count;
        setCountOutput.textContent = setCount;

        if (isAudioStarted) {
            // Beep 사운드 재생
            playBeep();

            count++;
            if (count > 4) {
                setCount++;
                count = 1;
            }
        }
    }, 1000);

    var playButton = document.getElementById("playButton");
    playButton.addEventListener("click", function () {
        isAudioStarted = true;

        // 오디오 재생 시작
        audioCtx.resume();
    });
});