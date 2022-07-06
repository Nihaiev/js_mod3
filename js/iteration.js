/*
* Перебор через for...in і Object.keys|values|entris
*for...in краще не використовувати
*/

const feedback = {
    good: 5,
    neutral: 10,
    bad: 3,

};

const keys = Object.keys(feedback);
console.log(keys);
for (const key of keys) {
    console.log(key);
    
}

let totalFeedback = 0;

// ця штука дозволяє отримати ключі а уже потім ми перебераємо масив через for of

1