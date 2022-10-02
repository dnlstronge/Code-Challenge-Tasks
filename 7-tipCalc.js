// tip calculator which determines tip amount based on parameters for quality of service and total cost
// If service quality specifies value other than - Excellent/Good/OK/Bad calc returns 18%

const tipCalculator = (quality, totalCost) => {
  
  switch (quality) {
  case 'bad':
    return totalCost * 0.05
    break;
  case 'ok':
    return totalCost * 0.15
    break;
  case 'good':
    return totalCost * 0.2
    break;
  case 'excellent':
    return totalCost * 0.3
  default: 
    return totalCost * 0.18
}
};

//Test

console.log(tipCalculator('good', 100)) // returns 20
console.log(tipCalculator('bad', 70))  // returns 3.5
console.log(tipCalculator('great', 130)) // returns 24.4
console.log(tipCalculator('excellent', 130)) // returns 39
console.log(tipCalculator('ok', 130)) // returns 19.5
console.log(tipCalculator('good', 130)) // returns 26

