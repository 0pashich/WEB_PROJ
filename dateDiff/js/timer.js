import { timerForm } from './switch.js';
import { Duration, DateTime } from 'https://moment.github.io/luxon/es6/luxon.js';
import { printTime } from './printResult.js'


var sound = new Howl({ src: ['./sound/beep.mp3'] });


const time = document.getElementById('time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const result = document.getElementById('timer__result');


// const printTime = ({ hours, minutes, seconds }) => {
//     result.innerHTML = `Осталось Часов: ${hours} - минут: ${minutes} - секунд: ${seconds}`;
// }

const second = Duration.fromISOTime('00:00:01');
const zeroDur = Duration.fromISOTime('00:00:00');
// console.log(second);

console.log(startButton);



let timer;

const stopTimer = (timer) => {
    clearInterval(timer);
    time.readOnly = false;
    startButton.disabled = false;
}

startButton.onclick = (event) => {
    // console.log({ time });
    time.readOnly = true;
    console.log(startButton.disabled);
    startButton.disabled = true;
    // const timerValue = time.value;
    let dur = Duration.fromISOTime(time.value)
    // console.log('dur', dur);
    timer = setInterval(() => {
        dur = dur.minus(second).normalize();
        time.value = dur.toFormat('hh:mm:ss')
        // console.log(dur);
        printTime(result, dur);
        if (dur <= zeroDur) {
            stopTimer(timer);
            // clearInterval(timer);
            // time.readOnly = false;
            // startButton.disabled = false;
            sound.play();

        }
    }, 1000);
}

stopButton.onclick = (event) => {
    stopTimer(timer);
    // clearInterval(timer);
    // time.readOnly = false;
    // startButton.disabled = false;
    // clearInterval(timer);
}
