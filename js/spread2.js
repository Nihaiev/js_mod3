/**
 * Операція spread (розпилення)
 * Array.prototype.concat() і аналог через spread
 */

// const numbers = [...[1, 2, 3], 4, 5];
// console.log(numbers);

/**
 * Зшиваємо декілька масивів в один через concat() і spread
 * 
 */
// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps]
// console.log(allTemps);


/**
 * Розпилюємо обєкти 
 * тут дуже схоже на масиви тільки треба врахувати що в масиві може бути 
 * стільки хавгодно однакових елементів
 * а от властивостей в обєкті 2 однакових не може бути  
 *  - Object.prototype.assign() and spread
 */

const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };
