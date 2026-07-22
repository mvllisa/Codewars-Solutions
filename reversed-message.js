function reverseMessage(str) {
  // Reverse a message so that the words and letters passed into it are made
  // lower case and reversed. In addition, capitalise the first letter of
  // the newly reversed words. If a number or symbol is now in the first
  // position of the word, no capitalisation needs to occur.
  
  // Given: "Reverse this message!"
  // Returns: "!egassem Siht Esrever"
  
  let loweredReverse = str.toLowerCase().split('').reverse().join('');

  let reversedMessage = loweredReverse.split(' ').map(word => {
    if (!word) return '';
    return word.charAt(0).toUpperCase().concat(word.slice(1));
  });

  return reversedMessage.join(' ');
  
}