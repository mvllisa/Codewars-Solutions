function well(x){
  // x is an array of "good" or "bad" ideas.
  //If there are one or two good ideas, return 'Publish!'
  //If there are more than 2 return 'I smell a series!'.
  //If there are no good ideas, as is often the case, return 'Fail!'.
  
  const count = x.filter(word => word === 'good').length;

  if (count === 0) return 'Fail!';
  else if (count <= 2) return 'Publish!';
  else return 'I smell a series!';
}