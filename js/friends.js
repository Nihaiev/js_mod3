/**
 * робота з колекцією (масивом обєктів)
 */

const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: false },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: false },
];

// console.table(friends);

// for (const friend of friends) {
//     console.log(friend.name);
//     friend.newprop = 555;
// }
/**
 * якби в цьому масиві були числа або строки то у змінну friend записалось би копія
 * но коли ми перебираємо масив складних типів, тобто обєктів то тоді в цю хмінну friend записується посилання не копія а посилання на цей оригінальний обєкт на цей елемент
 * і коли ми робимо "friend.newprop = 555;" на першій ітерації в цей обєкт добавляється значення newprop = 555; і так далі по ітерації 
 * а після перебору масиву в кожному із обєктів є ця властивість 
 */
console.table(friends);

/**
 * ми зараз будемо шукати друга по імені
 * тобто у нас є фукція findFriendByName і ми передаємо туди імя яке хочемо знайти 
 */
console.log(findFriendByName(friends, 'Poly'));
console.log(findFriendByName(friends, 'Chelsy'));