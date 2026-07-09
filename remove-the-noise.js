function removeNoise(str){
	// The mission is to remove the noise from the message.
  // Noise can only be %$&/#·@|º\ª characters, other characters are not considered to be noise.
  let noise = '%$&/#·@|º\ª';
  let result = ''; let add;
  for(let i=0; i<str.length; i++){
    add=true;
    for(let j=0; j<noise.length; j++){
      if(str[i] === noise[j]){
        add = false; break;
      }
    }
    if (add === true) result += str[i];
  }
  return result;
}