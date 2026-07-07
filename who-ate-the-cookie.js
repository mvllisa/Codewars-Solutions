function cookie(x){
  // This function tells who ate the cookie.
  // If the input is a string then "Zach" ate the cookie.
  // If the input is a Number then "Monica" ate the cookie.
  // If the input is anything else "the dog" ate the cookie.
  let sentence = 'Who ate the last cookie? It was ';
  if (typeof x === 'string') sentence += 'Zach!';
  else if(typeof x === 'number') sentence += 'Monica!'; 
  else sentence += 'the dog!';
  
  return sentence;
}