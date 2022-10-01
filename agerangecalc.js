//Create a function which determines age range based on input;


const lifePhase = () => {
if (lifePhase < 0) {return 'This is not a valid age'}
else if (lifePhase <= 3) {return 'baby'};
else if (lifePhase <= 12) {return 'child'}
else if (lifePhase <= 19) {return 'teen'}
else if (lifePhase <= 64) {return 'adult'}
else if (lifePhase <= 140) {return 'senior citizen'}

else {return 'This is not a valid age'}

  
}
