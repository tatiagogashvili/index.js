const numbers = [-2, 0, 6, 3, -11, 4, -5, 10, 11, -1, 7, 9];
const reducer = (previousValue, currentValue) => previousValue + currentValue;


console.log(numbers.filter(number=>number>0).reduce(reducer));
