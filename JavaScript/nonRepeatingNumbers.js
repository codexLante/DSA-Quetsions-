// Find the First Non-Repeating Character in a String

function firstUniqueChar(str) {
    
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
  return null;
}
