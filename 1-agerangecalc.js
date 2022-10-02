//Create a function which determines age range based on input;


//Life age range calculator

const lifePhase = age => {

if (age < 0 || age > 140) {
  return 'This is not a valid age'
  } else if (age < 4) {
  return 'baby'
  } else if (age < 13) {
  return 'child'
  } else if (age < 20) {
  return 'teen'
  } else if (age < 65) {
  return 'adult'
  } else {
  return 'senior citizen'}

};

// Enter age below:

console.log(lifePhase()) //should print 'child'
