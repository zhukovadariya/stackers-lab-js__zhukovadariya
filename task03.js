// Basic Mathematical Operations

// Ваша задача - создать функцию, которая выполняет четыре основные математические операции.
// Функция должна принимать три аргумента - операция(строка/знак), значение1(число), значение2(число).
// Функция должна возвращать результат в виде числа после применения выбранной операции.

// Пример:
//  ('+', 4, 7) --> 11
//  ('-', 15, 18) --> -3
//  ('*', 5, 5) --> 25
//  ('/', 49, 7) --> 7

function basicMathOp(operation, value1, value2) {
    
    switch(operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return "Invalid operation";
    }
}

// Пример 
console.log(basicMathOp('+', 4, 7)); // 11
console.log(basicMathOp('-', 15, 18)); // -3
console.log(basicMathOp('*', 5, 5)); // 25
console.log(basicMathOp('/', 49, 7)); // 7
