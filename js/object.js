/*
*  Обєкт всьому голова, самий важливий  тип даниї в JS
*
* Основи Обєктів
*/

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

// const a = { x: 1, y: 2 };
// const b = a;

// console.log({ a: 1 } === { a: 1 }); // тут ми порівнюєм один літерал a: 1 з іншим a: 1 і вони не рівно false тому що складний тип, обєкти були створені у разних ячейках памяті
// console.log(b === a);

// a.c = 100; //у змінну а добав властивість С і присовй значення 100

// console.log(a);
// console.log(b);

/*
* чисто для співбесіди
*
*/

// const a = [1, 2, 3];
// a.hello = ':)';

// console.log(a);

// те ж саме з функцією

// const fn = function () {
//     console.log('hello');
// };

// fn.hello = ';)';

// console.dir(fn.hello);


/*
* А тепер поговоримо про методи 
* Метод - це сама звичайна функція, но працює із властивостями якогось обєкту 
*/

// const playlist = {
//     name: 'my playlist',
//     rating: 5,
//     tracks: ['track1', 'track2', 'track3'],
//     trackCount: 3,
//     // getName: function () { // це олдскульне обявлення метода
//     //     console.log('Ага, це ж getName :)');
//     // }
//     getName: () { // це сучасний виклик методів (метод обєктів) ми будемо використовувати тільки його 
//      console.log('Ага, це ж getName :)' a);
//     }
// };

// // console.log(playlist);

// playlist.getName(5); // викликаємо функцію


const playlist = {
    name: 'my playlist',
    rating: 5,
    tracks: ['track1', 'track2', 'track3'],
    trackCount: 3,
    changeName(newName) {
        //  в середині методів обєкту ніколи не використовувати імя самого обєкта, використовуємо this
        console.log('this в середині changeName:', this);
        this.name = newName;
    },

    //  новий метод, добавляэмо трек 
    // якщо в середині обєкту потрбіно отримати доступ до властивості цього ж обєкту, обєкт який викликав цю функцію ми використовуємо this. і просто імя властивості
    addTrack(track) {
        this.tracks.push(track); //  ми спочатку запушили 
        // this.trackCount = this.tracks.length; //.. потім візьми цю властивість trackCount і кинь туди значення довжини цього масиву но це дуже погане рішення, краще створити функцію яка повертає довжину масиву
    },
// ще один метод updateRating(){}
    updateRating(newRating) {
        this.rating = newRating; // отримуємо доступ до rating
    },
// робимо фукцція яка повертає довжину масиву
    getTrackCount() {
        return this.tracks.length;
    },
    
};
console.log(playlist.getTrackCount());
playlist.changeName('new name')


playlist.addTrack('new track'); // тут ми добавляємо новий трек 
console.log(playlist.getTrackCount()); 

playlist.updateRating(4);
console.log(playlist);