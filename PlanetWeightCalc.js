// Calculates weight of user input on specified planet, returns error message if no /incorrect planet entered

const calculateWeight = (earthWeight, planet) => {
switch (planet) {
      case 'Mercury':
          return earthWeight * .378;
      case 'Venus':
          return earthWeight * .907;
      case 'Mars':
          return earthWeight * .377;
      case 'Jupiter':
          return earthWeight * 2.36;
      case 'Saturn':
          return earthWeight * .916;
      default: 
          return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter or Saturn.'
          
}
};

// test

// if valid parameters entered returns correct earth weight eq.

console.log(calculateWeight(100, 'pluto')) // returns 'Invalid Planet....

