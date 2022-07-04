// const user = { name: 'Mango', age: 20, hoby: 'html', premium: true, };

// // user['mood'] = 'happy'
// // user['2asdsap'] = 's';
// user.mod = 'happy';
// // const key = 'mood';
// // user[key] = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// const keys = Object.keys(user)
// console.log(keys);
// for (let key of keys) {
//     // console.log('key', key);
//     console.log(`${key}:${key}`);
// }
// console.log(user);

// examples 2

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Petes: 130
// };

// const values = Object.values(salaries)
// let sum = 0

// for (let val of values) {
//     console.log('val', val);
//     sum+=val
    
// }

// console.log(sum);

// example 3

// const stones = [
//     { name: 'Изумруд', price: 1300, quantity: 4 },
//     { name: 'Брилиант', price: 2700, quantity: 3 },
//     { name: 'Сапфир', price: 400, quantity: 7 },
//     { name: 'Щебень', price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//     let sum = 0
//     for (let stone of stones) {
        
//         if (stone.name === stones);
//         // console.log('stone', stone);
//         sum = stone.price * stone.quantity
//         break
//     }
//     return sum;
// }
// // calcTotalPrice(stones, 'Щебень');
// console.log(calcTotalPrice(stones, 'Брилиант'));


// Example 4

function compare(firstNumber, secondNumber, operation, result) { 
    const num1 = Number(firstNumber)
    const num2 = Number(secondNumber)
    const res = Number(result)

    if (isNaN(num1) || isNaN(num2) || isNaN(res)) return false // можна не писати фігурні дужки якщо у нас одна операція
    // console.log('operation', operation);
    // словник
    const operationsDic = {
        '+': function sum(a,b) {return a+b },
        '-': function minus(a,b) { return a-b},
        '*': function multi(a,b) { return a*b},
        '/': function divide(a,b){return a/b},
    }
    // console.log('operation', operation);
    // console.log('operationsDic[operation]', operationsDic[operation]);
    // console.log(operationsDic[operation](num1, num2));
    if (!operationsDic[operation]) {
        return 'Invalid operation'
    }

    const operationResult = operationsDic[operation](num1, num2)
    return operationResult == res

    // switch (operation) {
    //     case '+':
    //         return num1 + num2 === res
    //      case '-':
    //         return num1 - num2 === res
    //     case '*':
    //         return num1 * num2 === res
    //     case '/':
    //         return num1 / num2 === res
    //     default:
    //         return false;
    // }


}
console.log(compare("1", "2", "-", "-1"));
// compare("1", "2", "+", "3"); // true

