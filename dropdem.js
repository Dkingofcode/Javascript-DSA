function dropElements(arr, func) {
    const index = arr.findIndex(func);
  
    if (index === -1) {
      // If no element matches the condition, return an empty array
      return [];
    }
  
    return arr.slice(index);
  }
  
  
  dropElements([1, 2, 3], function(n) {return n < 3; });