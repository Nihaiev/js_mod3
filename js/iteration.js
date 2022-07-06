/*
* Перебор через for...in і Object.keys|values|entris
*for...in краще не використовувати
*/

const feedback = {
    good: 5,
    neutral: 10,
    bad: 3,

};

let totalFeedback = 0;

// const keys = Object.keys(feedback);
// console.log(keys);
// // ця штука дозволяє отримати ключі а уже потім ми перебераємо масив через for of
// for (const key of keys) {
//     console.log(key);
//     console.log(feedback[key]); // коли ми перебираэмо обэкт ми робимо так, ось такйи use case
//     totalFeedback += feedback[key];
// }

// // let totalFeedback = 0;

// console.log('totalFeedback: ', totalFeedback)

/**
 * в нашому випадку нам ключ взагалі не потрібен, все що нам потрбіно з обєкта це значення тому, замість Object.keys ми будемо використовувати Object.values
 */

const values = Object.values(feedback); // якщо Object.keys повертає масив ключів то Object.values повертає масив значень 

console.log(values);

for (const value of values) {
    console.log(value);
    totalFeedback += value;
}

console.log('totalFeedback: ', totalFeedback); 