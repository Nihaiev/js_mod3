// const playlist = {
//     name: 'мій плейлист',
//     rating: 5,
//     tracks: ['track1', 'track2', 'track3'],
//     trackCount: 3,
// }; //літерал обєкта, може існувати тільки справа від =
    
// // console.log(playlist);


// /*
// *Літерал обєкта
// *const x={};
// *console.log({}); також літерал обєкту
// *
// */
// // 3 use case:
// // 1.const x = {}; літерал завжди справа від =

// const fn = function (myObject) {
//     // console.log(myObject);
// }
// // 2.fn({ a: 1, b:2}) - оли ми передаэмо аргумент у фукцыю це літерал

// const rtfm = function () {
//     return x; // 3.повернення це те ж саме присвоєння, ми коли повертаємо з функції то те що повертаємо кудась там присвоюється
// }
// // console.log(rtfm());

// const playlist = {
//     name: 'my playlist',
//     rating: 5,
//     tracks: ['track1', 'track2', 'track3'],
//     trackCount: 3,
// };

// // в об'єкти після їх створення можна додавати елементи
// playlist.qwe = 5; // так додаються властивості, якщо такої властивості qwe ще нема то воно буде створено і йому буде присвоєно значення 5
// playlist.rating = 10; // якщо така властивіть уже є то значеня буде просто перезаписано
// console.log(playlist);


// console.log(playlist);
// console.log(playlist.tracks); // звернення до властивості, після імені ставимо"."і пишемо назву властивості "rating"
// console.log(playlist.name);
// console.log(playlist.trackCount);

// // бувають такі випадки коли імя властивості зберігєаться у змінній
// const propertyName = 'tracks';
// записи нижче абсолютно ідентичні
// console.log(playlist.rating);
// console.log(playlist['rating']);
// console.log(playlist.propertyName); //90% use case ось цей запис
// console.log(playlist[propertyName]);

// я кщо ми звертаємось до властивості якого не існує в обєкті, помилки не буде, буде undefined

/*
* Бувають випадки коли нам треба створити обєкт в якому ключ динамічний 
* Короткий запис властивостей 
*/

// const username = 'Mango';
// const email = 'mango@mail.com';

// const signupData = {

//     username: username,
//     email: email,
// };
// console.log(signupData);


/*
* Вираховувані властивості, доволі рідкісний use case  
* ми це будемо юзати у формах 
*
*/
// <input name='color' value="tomato">

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//     [inputName]: inputValue, // піди знайти змінну inputName і використай його значення як ключ для цієї властивості
// };
// console.log(colorPickerData);

/*
* Складін типи 
* Ссылосный тип {} === {}
*
*/

// console.log([] === []); //чому тут false, силочний тип, два місця в памяті різних, порівнюється по посилання - не рівні адреса і до побачення
// те саме з обєктами, 2 обєкти можуть бути рівні тільки тоді один одному коли це посилання на один і тот же обєкт

const a = { x: 1, y: 2 };
const b = a;

console.log({ a: 1 } === { a: 1 }); // тут ми порівнюєм один літерал a: 1 з іншим a: 1 і вони не рівно false тому що складний тип, обєкти були створені у разних ячейках памяті 
console.log(b === a);

a.c = 100; 

console.log(a);
console.log(b);