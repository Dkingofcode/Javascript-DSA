const TabularcanConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill(0);
    table[0] = 1;
    let count = 0;

    for(let i = 0; i <= target.length; i++){
        if(table[i] === 1){
            for(let word of wordBank){
              // if the word matches the characters starting at position i
              if(target.slice(i, i + word.length) === word){
                table[i + word.length] = 1;
                count += table[word];
              }  
            }
        }
    }

    return table[target.length];
};