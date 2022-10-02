// task is to create a function which returns the number of imaginary friends a person has if value = 25% of actual friends:

const numImaginaryFriends = (friends) => {
  return (Math.ceil(friends*.25))
}

// test below

console.log(numImaginaryFriends(20)) //prints 5

console.log(numImaginaryFriends(10)) //prints 3 (Math rounds up 2.5 to 3
