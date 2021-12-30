const timerButton = document.getElementById('timerButton');
const calcButton = document.getElementById('calcButton');

export const timerForm = document.getElementById('timer');
export const datecalcFotm = document.getElementById('datecalc');

timerButton.onclick = (event) => {
    timerForm.hidden = false;
    datecalcFotm.hidden = true
}
calcButton.onclick = (event) => {
    datecalcFotm.hidden = false;
    timerForm.hidden = true;
}
