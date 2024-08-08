// Javascript Data Types - 8
// Primitive - string ... null
// Reference - object, array, function

// let x = 5;
// let y = x;
// x = 10;
// console.log(y);

// let obj1 = { qiymat: 5 };
// let obj2 = obj1;
// obj1.qiymat = 10;
// console.log(obj2);

// let objStr = new String("Misol uchun");
// let objNum = new Number(45);
// console.log(objNum);

// let x = "Hello world";
// x.toUpperCase();

// function Alcatraz() {
//     console.log("Dangerous prison");
// }

// alert("Salom ber");
// window.alert("Salom ber");

// console.log(window.Alcatraz());

// Factory function
// function mashinaYarat(nomi, rangi, narxi) {
//     return {
//         nomi,
//         rangi,
//         narxi,
//         yur() {
//             console.log(this.nomi + " " + "yurmoqda...");
//         }
//     }
// }

// let mashina1 = mashinaYarat("Lacetti", "Oq", 7000);
// let mashina2 = mashinaYarat("Cobalt", "Oq", 6500);

// mashina1.yur();
// console.log(mashina1);
// console.log(mashina2);

// function yur() {
//     console.log(this.nomi + " " + "yurmoqda...")
// }

// // Constructor function
// function Mashina(nomi, rangi, narxi) {
//     this.nomi = nomi;
//     this.rangi = rangi;
//     this.narxi = narxi;
//     this.yur = yur;
// }

// let newObj = new Mashina("Damas", "Qora", 5000);

// newObj.yur();
// console.log(newObj);