const howSum = (target, values, memo={}) => {
    if(target in memo) return memo[target];
    if(target === 0) return [];
    if(target < 0) return null;

    for(let value of values){
       const remaining = target - value;
       const newValue = howSum(remaining, values, memo);
       if( newValue !== null){
         memo[target] = [ ...newValue, value ];
         return memo[target];
       }
    }
    memo[target] = null;
    return null;
}