// HM1

//***1***
// let UserName = 'Ivan';
// let city = UserName;
// console.log(city);

//***2***
//Який буде результат виконання скрипта?
// let name = "Olga";
// console.log(`привіт ${1}`);  // тут ми просто в шлаблонних літералах вказуємо число і воно його показує, оскільки не має доступу до змінної чи ключа.
// console.log(`привіт ${"name"}`); // тут просто ми вказали всередині лапок рядок, який і по суті консоль нам показує.
// console.log(`привіт ${name}`); // тут напряму ми вказали змінну і правильно це написали.

// ***3***
// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";
// console.log(Number(a), parseInt(b), parseFloat(c));
// console.log(typeof(Number(a)), typeof(parseInt(b)), typeof(parseFloat(c)));
// console.log(typeof(a), typeof(b), typeof(c));

//***4***
// console.log(((0.1 * 10) + (0.2 * 10)) / 10);

//***5**
// const numArr = [20, 10, 50, 40];
// const max = Math.max(...numArr)
// console.log(max);

//***6***
// let min = 2;
// let max = 4;
// let random = Math.floor(Math.random() * (max- min + 1))+min;
// console.log(random);

//***7***
// const message = "Welcome to Bahamas!";
// console.log(message.length);

//***8***
// const message = "Welcome to Bahamas!";
// console.log(message.toUpperCase());

// ***9***
// let  player = {
// };
// player.name = 'Artem';
// player.age = 25;
// player.city = 'Lviv';
// console.log(player);

// delete player.city;
// player ["like flowers"] = false;
// console.log(player);

// for (let key in player) {
//     console.log(player [key]);
// }

//HM2

// let num = +prompt("Введіть число");
// num > 0 ? console.log(true) : console.log(false);

// let str = "test";
// "test" === "test" ? console.log(true): console.log(false);

// let num = +prompt("Введіть число");
// num > 10 ? console.log( num - 5) : console.log( num + 5);

// let numOfMonth = +prompt("Введіть число місяця");
// switch (numOfMonth) {
//     case 1: console.log("Січень");
//     break
//     case 2: console.log("Лютий");
//     break
//     case 3: console.log("Березень");
//     break
//     case 4: console.log("Квітень");
//     break
//     case 5: console.log("Травень");
//     break
//     case 6: console.log("Червень");
//     break
//     case 7: console.log("Липень");
//     break
//     case 8: console.log("Серпень");
//     break
//     case 9: console.log("Вересень");
//     break
//     case 10: console.log("Жовтень");
//     break
//     case 11: console.log("Листопад");
//     break
//     case 12: console.log("Грудень");
//     break
//     default: console.log("Ви ввели невірний формат або число");
// }

// let num = prompt("Введіть трьохзначне число");
// let sum = +num[0] + +num[1] + +num[2];
// console.log(sum);

//HM3

//***1***
// const fruits = [
// { id: 0, name: "Apple" },
// { id: 1, name: "Tomat" },
// { id: 2, name: "Cherry" },
// { id: 3, name: "Orange" },
// ];
// let names = fruits.map(fruit => {
//    return fruit.name
// })
// console.log(names);

//***2***
// for( let num =1; num<=10; num++){
//     if (num % 2 !== 0) {
//         continue
//     } console.log( num);
// }

// ***3***
// let i = 0;
// while (i < 5) {
//   console.log(`цифра ${i}!`);
//   i++;
// // }

// ***4***
// let hundredDigits;
// while ((true)) {
//     hundredDigits = prompt("Введіть число більше за 100")
//   if(hundredDigits === null || +hundredDigits >100){
//     break
//   } alert("Це число не більше 100! Спробуйте ще раз.")
// }
// console.log(hundredDigits);

// ***5***
// const girls = [
// { age: 23, name: "Оля" },
// { age: 29, name: "Аня" },
// { age: 10, name: "Юля" },
// { age: 20, name: "Катя" },
// ];

// let age = girls.map(age => age.age);
// averAge = age.reduce((acc, current) => (acc+=current) / age.length)
// console.log(age);
// console.log(averAge);


