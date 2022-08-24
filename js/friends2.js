/**
 * робота з колекцією (масивом обєктів)
 */

const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: false },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: false },
];

console.table(friends);

for (const friend of friends) {
    console.log(friend);
}