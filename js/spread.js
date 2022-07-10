/**
 * Операція spread (розпилення)
 * Array.prototype.concut() і аналог через spread
 */
// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9])

const numbers = [...[1, 2, 3], ...[4, 5, 6], ...[7, 8, 9]];
// console.log(numbers); //розпилення бере колекцію і розпаковує його в іншу колекцію  

/**
 * Пошук самої маленької або великої температури 
 */
const temp = [18, 14, 12, 21, 17, 29, 24];
// console.log(Math.max(...temp));
// console.log(Math.min(...temp));

const lastWeekTemp = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemp, ...currentTemps, ...nextWeekTemps]
// console.log(allTemps);


/**
 * розпилення обєктів
 * -Object.prototype.assign() і spread
 *
 */

const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };

// const c = Object.assign({ x: 5 }, a, b);

const c = {
    ...a,
    ...b,
}
// console.log(c);

// приклад переоприділиння настройок

const defaultSettings = {
    theme: 'light',
    showNitifications: true,
    hideSidebar: false,
};
const userSettings = {
    showNitifications: false,
    hideSidebar: true,
};

const finalSettings = {
    ...defaultSettings,
    ...userSettings,
}

console.log(finalSettings);