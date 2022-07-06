// function foo({ username } = {}) {
//     console.log(username);
// }

// foo();

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [...arr1];
// console.log(arr1 === arr2);

// const arr = [1, 2, 3]
// const arr2 = [...arr]
// const [first, ...other] = arr
// console.log(first);
// console.log('other', other);

/*
 *
 * метод створює і повертає обєкт транзакції
 * приймає суму і тип транзакції
 */

cteateTransaction(amount, type) {
    return {
        id: this.transactions.length + 1,
        amount,
        type
    }

},
deposite(amount){
    const transaction = this.cteateTransaction( 
        amount,
        Transaction.DEPOSIT
    )
    console.log(transaction);
    this.transactions.push(transaction)
},
