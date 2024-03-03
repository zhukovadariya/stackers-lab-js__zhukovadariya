// Sum of two lowest positive integers

// Создайте функцию, которая возвращает сумму двух наименьших положительных чисел для заданного массива, состоящего минимум из 4 положительных целых чисел. 
// В массив не будут переданы числа с плавающей запятой или отрицательные целые числа.

// Например, когда массив передается как [19, 5, 42, 2, 77] вывод должен быть 7.

function sumTwoSmallestNumbers(numbers) {
    // Фильтруем массив, чтобы оставить только положительные числа
    const positiveNumbers = numbers.filter(num => num > 0);
    
    // Сортируем массив по возрастанию
    const sortedNumbers = positiveNumbers.sort((a, b) => a - b);
    
    // Суммируем два наименьших числа
    const sum = sortedNumbers[0] + sortedNumbers[1];
    
    return sum;
}

// Пример 
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77])); // 7
