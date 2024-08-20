// const box = document.getElementById('box');
//
// const myInterval = setInterval(myFunction, 1000);
//
// function myFunction() {
//     box.style.background = box.style.background === 'red' ? 'black' : 'red';
// }
//
// box.addEventListener('mouseenter', () => {
//     clearInterval(2);
// });
//
// setTimeout(() => {
//     // box.style.background = 'red';
//     console.log(myInterval);
// }, 5000);

// const haftaKunlari = ["Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba", "Yakshanba"];
// const sana = new Date();
// console.log(haftaKunlari[sana.getDay() - 1]);

// Soat kodlari
const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minute");
const secondElement = document.getElementById("second");

function myTime() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    hourElement.textContent = hour < 10 ? `0${hour}` : hour;
    minuteElement.textContent = minute < 10 ? `0${minute}` : minute;
    secondElement.textContent = second < 10 ? `0${second}` : second;
}

setInterval(myTime, 1000);