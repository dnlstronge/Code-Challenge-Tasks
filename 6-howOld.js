// Create a function which determines how old someone will be/or was when values for current age and chosen year
// If a year before their birth year is entered should return how many years before etc


const howOld = (age, year) => {
  
  if (year > 2022)
    return 'You will be ' + (year - (2022 - age)) + ' in the year ' + year
  else if (year < (2022 - age))
    return 'The year ' + year + ' was ' + ((2022 - age) - year) + ' years before you were born'
  else
    return 'You were ' + (year - (2022 - age)) + ' in the year ' + year
};


// Test future
console.log(howOld(36, 1950)); // returns: You will be 64 in the year 2050
// Test past
console.log(howOld(36, 1963)); // returns: You were 27 in the year 2013
// Test before
console.log(howOld(36, 1963)); // returns: The year 1963 was 23 years before you were born

