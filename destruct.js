// create an array and destructure the first two elements, use numbers for elements and call them num1, num2 respectively:

const numbers = [1, 2, 3, 4, 5];

[num1, num2] = numbers;

console.log(num1, num2);

//output '1 2'



// now grab the first and 4th number:

[num1, , , num4] = numbers;

console.log(num1, num4);

//output: '1 4' (be mindful of the semi-colon!)
