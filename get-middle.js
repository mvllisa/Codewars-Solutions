function getMiddle(s) {
  // If the string's length is odd, return the middle character.
  // If the string's length is even, return the middle 2 characters.
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}