import { Duration, DateTime } from 'https://moment.github.io/luxon/es6/luxon.js';
import { printTime } from './printResult.js'

var sound = new Howl({ src: ['./sound/beep.mp3'] });
const timeField = document.getElementById('time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const result = document.getElementById('timer__result');

const second = Duration.fromISOTime('00:00:01');
const zeroDur = Duration.fromISOTime('00:00:00');

let timer;

const stopTimer = (timer) => {
    clearInterval(timer);
    timeField.readOnly = false;
    startButton.disabled = false;
}

startButton.onclick = (event) => {
    time.readOnly = true;
    startButton.disabled = true;
    let dur = Duration.fromISOTime(time.value)
    timer = setInterval(() => {
        dur = dur.minus(second).normalize();
        timeField.value = dur.toFormat('hh:mm:ss')
        printTime(result, dur);
        if (dur <= zeroDur) {
            stopTimer(timer);
            sound.play();
        }
    }, 1000);
}

stopButton.onclick = (event) => {
    stopTimer(timer);
}
