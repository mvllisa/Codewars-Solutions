function solve(s){
  // a) each character MUST be changed either to the one before or the one after in alphabet. 
  // b) "a" can only be changed to "b" and "z" to "y". 
  // The function returns True if at least one of the outcomes is a palindrome or False otherwise.
  
  let results = [''];
  for(let i=0; i<s.length; i++){
    let temp =[];
    let oneBefore = String.fromCharCode(s.charCodeAt(i) - 1);
    let oneAfter = String.fromCharCode(s.charCodeAt(i) + 1);
    if(s[i]==='a') oneBefore = 'b';
    if(s[i]==='z') oneAfter = 'y';
    for(let result of results){
      temp.push(result + oneBefore);
      temp.push(result + oneAfter);
    }
    results = temp;
  }
  for(let result of results){
    let palindrome = true;
    for(let j=0; j<result.length/2; j++){
      if(result[j]!==result[result.length-j-1]){
        palindrome = false; break;
      }
    }
    if (palindrome===true) return true;
  }
  return false;
}