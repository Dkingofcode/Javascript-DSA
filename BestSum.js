const BestSum = (target, values) => {
   if(target === 0) return [];
   if(target < 0)  return null;  

   let shortestCombination = null;

   for(let value of values){
    const remaining = target - value;
    const remainingValues = BestSum(remaining, values);
    if( remainingValues !== null){
    const newValues =   [ ...remainingValues, value]; 
     if (shortestCombination === null || newValues.length < shortestCombination.length){
        shortestCombination = newValues;
     }
    }
   }
  return shortestCombination;
};

// memoization
const BestSumMemo = (target, values) => {
    if(target in memo) return memo[target];
    if(target === 0) return [];
    if(target < 0)  return null;  
 
    let shortestCombination = null;
 
    for(let value of values){
     const remaining = target - value;
     const remainingValues = BestSum(remaining, values, memo);
     if( remainingValues !== null){
     const newValues =   [ ...remainingValues, value]; 
      if (shortestCombination === null || newValues.length < shortestCombination.length){
         shortestCombination = newValues;
      }
     }
    }
    memo[target] = shortestCombination;
   return shortestCombination;
}