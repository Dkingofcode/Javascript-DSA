const canSum = (target, values) => {
    if(target === 0) return true;
    if(target < 0) return false;

    for(let value of values){
    const remaining = target - value;
     if(canSum(remainder, values) === true){
        return true;
     }
   }
   return false;
}


// Memoization
const canSumMemo = (target, values, memo={}) => {      
   if(target in memo) return memo[target]; 
   if(target === 0) return true;
   if(target < 0) return false;

  for(let value of values){
    const remaining = target - value;
    if(canSum(remainder, values, memo) === true){
       memo[target] = true;
       return true;  
    }
  } 
    memo[target] = false; 
    return false;
}