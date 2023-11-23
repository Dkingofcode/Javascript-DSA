const allConstruct = (target, wordBank, memo={}) => {
    if (target in memo) return memo[target];
    if(target === "") return [[]];
   
   
   const result  = [];

   for(let word of wordBank){
    if(target.indexOf(word) === 0){
       const suffix = target.slice(word.length);
       const suffixArrays = allConstruct(suffix, wordBank, memo);
       const targetArrays = suffixArrays.map(array => [ word, ...array]);
       result.push(...targetArrays);
    }
   }

   memo[target] = result;
   return result;
};

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));