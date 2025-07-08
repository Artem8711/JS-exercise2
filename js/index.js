//1
/* 
const isDay = true;

let color = null;
let backgroundColor = null;

if (isDay) {
   color = `black`;
   backgroundColor = `white`;
} else {
   color = `white`;
   backgroundColor = `black`;
}
console.log(color);
if (isDay) {
   document.write(`<p style="color:${color}">Світла тема</p>`);
} else {
   document.write(`<p style="color:${color}">Темна тема</p>`);
} */

//2

/* const isOnline = false;

if (!isOnline) {
   alert("Ваше повідомлення буде відправлено при під'єднанні до мережі Інтернет");
}
 */
//3
/* 
const amount = parseFloat(prompt('Введіть суму покупки:'));
let discount = 0;

if (amount > 800) {
   discount = 0.05;
} else if (amount > 500) {
   discount = 0.03;
}

const finalPrice = amount * (1 - discount);
console.log(`До оплати: ${finalPrice.toFixed(2)} грн`);
 */

/////////////////////////

//1
const dayNumber = parseInt(prompt('Введіть номер дня тижня (1-7):'));
let dayName;

switch (dayNumber) {
   case 1:
      dayName = 'понеділок';
      break;
   case 2:
      dayName = 'вівторок';
      break;
   case 3:
      dayName = 'середа';
      break;
   case 4:
      dayName = 'четвер';
      break;
   case 5:
      dayName = 'п’ятниця';
      break;
   case 6:
      dayName = 'субота';
      break;
   case 7:
      dayName = 'неділя';
      break;
   default:
      dayName = 'дня з таким номером не існує';
}

alert(dayName);
