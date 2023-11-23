const canConstruct = (target, wordBank) => {
    if(target === ''){
        return true;
    }

    for(let word of wordBank) {
        if(target.indexOf(word) === 0){
          const suffix = target.slice(word.length);
          if(canConstruct(suffix, wordBank) === true) {
            return true;
          } 
        }
    }

    return false;
}



const canConstructMemo = (target, wordBank, memo={}) => {
   if(target in memo) return memo[target];
   if(target === ''){
    return true;
  }

  for(let word of wordBank) {
    if(target.indexOf(word) === 0){
      const suffix = target.slice(word.length);
      if(canConstruct(suffix, wordBank, memo) === true){
        memo[target] = true;
        return true;
      } 
    }
}

  memo[target] = false;
  return false;
};




// console.log(canConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); 
// console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
// console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
// console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(canConstructMemo('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e','ee','eee','eeee','eeeee','eeeeee']));







