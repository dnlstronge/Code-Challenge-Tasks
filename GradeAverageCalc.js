const finalGrade = (mark1, mark2, mark3) => {
  if ((mark1 < 0 || mark1 > 100) || (mark2 < 0 || mark1 > 100) || (mark3 < 0 || mark1 > 100)) {return 'Error - invalid grade entered'}
let finalGradeAverage = (mark1 + mark2 + mark3) / 3
  if (finalGradeAverage < 60) {
    return 'F'
  } 
  else if (finalGradeAverage < 70) {
    return 'D'}
  else if (finalGradeAverage < 80) {
    return 'C'}
  else if (finalGradeAverage < 90) {
    return 'B'}
  else {
    return 'A'}
  }
