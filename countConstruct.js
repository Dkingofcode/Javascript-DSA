const countConstruct = (target, wordBank) => {
  if(target === '') return 1;

  let totalCount = 0;

  for(let word of wordBank){
    if(target.indexOf(word) === 0){
       const numWaysForRest = countConstruct(target.slice(word.length), wordBank);
       totalCount += numWaysForRest; 
    }
  }
  return totalCount;
}