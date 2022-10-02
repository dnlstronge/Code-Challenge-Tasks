
// Create a grade average calculator which determines grade band based on average of 3 user input scores:

const finalGrade = (mark1, mark2, mark3) => {
  
if ((mark1 < 0 || mark1 > 100) || (mark2 < 0 || mark2 > 100) || (mark3 < 0 || mark3 > 100)) {return 'You have entered an invalid grade.'}

let finalGradeAverage = (mark1 + mark2 + mark3) / 3
  if (finalGradeAverage < 60) {
    return 'F'} 
  else if (finalGradeAverage < 70) {
    return 'D'}
  else if (finalGradeAverage < 80) {
    return 'C'}
  else if (finalGradeAverage < 90) {
    return 'B'}
  else {
    return 'A'}
  };

//test each band
// F
  console.log(finalGrade(0, 89, 88)); //outputs F
// D  
  console.log(finalGrade(22, 85, 76)); //outputs D
// C  
  console.log(finalGrade(89, 67, 72)); //outputs C
// B
  console.log(finalGrade(85, 86, 72)); //outputs B
// A
  console.log(finalGrade(99, 90, 93)); //outputs A

// test erroneous input

  console.log(finalGrade(-34, 67, 72)); //outputs error message
  console.log(finalGrade(166, 67, 72)); //outputs error message

