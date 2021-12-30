const result = document.getElementById('datecalc__result');

export const printError = (errorText) => {
  result.innerText = errorText;
}

export const printResult = ({years, months, days}) => {
  result.innerHTML = `Год: ${years} - Месяц: ${months} - День: ${days}`;
}

export const printTime = (element, { hours, minutes, seconds }) => {
  element.innerHTML = `Осталось Часов: ${hours} - минут: ${minutes} - секунд: ${seconds}`;
}
