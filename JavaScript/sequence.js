function findMissingNumber(arr) {
  const n = arr.length; 

  for (let i = 0; i <= n; i++) {
    
    if (arr.indexOf(i) === -1) {
      return i;
    }
  }

  return null; 
}
