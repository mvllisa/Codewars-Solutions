function  calculateAge(birthYear, currentYear) {
  let answer = '';
  let difference = currentYear - birthYear;
  if (birthYear === currentYear){
    answer = 'You were born this very year!';
  }
  else if (birthYear < currentYear){
    if(difference === 1) answer = 'You are 1 year old.';
    else answer = `You are ${difference} years old.`;
  }
  else {
    difference = - difference;
    if(difference === 1) answer = 'You will be born in 1 year.';
    else answer = `You will be born in ${difference} years.`;
  } 
  return answer;
}