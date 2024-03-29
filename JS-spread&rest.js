// create an array with elements of 1, 2, 3, 4. Use the spread operator to create a new array with the same numbers & 5 and 6.


const numbers = [1, 2, 3, 4];
const newNum = [...numbers, 5, 6];

console.log(newNum)


//outputs: [1, 2, 3, 4, 5, 6]


//do the same for and object, give the object 3 properties and add another in the new object:


const person = {
  name: 'dave',
  Address: '45 The Road',
  id: 12345,
}

const clone = {
  ...person, 
  number: 77878
}

console.log(clone)

// outputs: { name: 'dave', Address: '45 The Road', id: 12345, number: 77878 }



// use rest to output all the '3's in a sequenece:

// e.g calling filter(1, 3, 4, 3, 5) should output and array consisting of two '3's

const filter = (...args) => {
  return args.filter(e => e === 3)
}

console.log(filter(1, 3, 4, 5, 3))

//output: [3, 3]


