/**
 * Обчислюванні властивості
 */

const inputName = 'color';
const inputValue = 'tomato';

const colorPickerData = {
    [inputName]: inputValue,
}
// console.log(colorPickerData);

/**
 * Ссылочный тип
 */

const a = { x: 1, y: 2 }
const b = a;
console.log(b === a); //буде true тому що в b присвоюємо a, посилання в памяті де лижить цей обєкт
// вони рівні по посиланню

console.log({x:1}==={a:1});