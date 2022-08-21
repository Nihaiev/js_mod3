/**
 * Перебор через for...in
 * та Object.keys| value | entries
 */

const feedback = {
    good: 5,
    neutral: 10,
    bad: 3,
};
// const keys = Object.keys(feedback); // Object.keys повертає масив ключів
// console.log(keys);

// for (const key of keys) {
//     console.log(key);
// }

let totalFeedback = 0;

const values = Object.values(feedback) // Object.values повертає масив значень 
console.log(values);