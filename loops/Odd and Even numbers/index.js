console.log('Odd and even numbers');

console.log('All odd numbers looped from 1 to 100 through a for loop');
for (var i = 1; i <= 100; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }
}

console.log('All odd numbers looped from 1 to 100 through a while loop');
var number = 1;
while (number !== 101) {
    if (number % 2 === 1) {
        console.log(number);
    }
    number++;
}