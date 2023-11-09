function getArrayAfterFirstNegative(arr) {
    const firstNegativeIndex = arr.findIndex(num => num < 0);
     
    if (firstNegativeIndex !== -1) {
       return arr.slice(firstNegativeIndex + 1);
    }
     
    return arr;
   }
   
   // Testing
   console.log(getArrayAfterFirstNegative([1, 2, -3, 4, 5])); // [4, 5]
   console.log(getArrayAfterFirstNegative([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
   console.log(getArrayAfterFirstNegative([-1, -2, -3, -4, -5])); // []s