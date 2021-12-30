import { printError, printResult } from './printResult.js'
import getDateDiff from './getDateDiff.js'
import { datecalcFotm } from './switch.js'
// const form = document.getElementById('datecalc');

datecalcFotm.onsubmit = (event) => {
  event.preventDefault();

  const dataForm = new FormData(event.target);

  const firstDate = dataForm.get('firstDate');
  const secondDate = dataForm.get('secondDate');

  if (!firstDate || !secondDate) {
    printError('Oooopps! Введите дату')
  } else {
    const dateREsult = getDateDiff(firstDate, secondDate);
    printResult(dateREsult);
  }
}