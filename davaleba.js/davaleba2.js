const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
numbers.filter(value=>value%2==1).map(number=>number**2).forEach(n=>console.log(n))
