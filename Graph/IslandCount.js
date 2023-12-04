const islandCount = (grid) => {
   let count  = 0;
   let row = 0;
   let col = 0;
   let visited = new Set();
   let island = [];
   let islandcount = 0;
   
   for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[0].length; j++){
        
       if(grid[i][j] === 'L'){
        if(visited.has(grid[i][j])) return;
        visited.add(grid[i][j])
        island.push(grid[i][j]);
       } else if(grid === 'L'){
        if(visited.has(grid[i][j])) return;
        visited.add(grid[i][j])
        island.push(grid[i - 1][j]);
       } else if(grid[i + 1][j] === 'L'){
        if(visited.has(grid[i][j])) return;
        visited.add(grid[i][j])
        island.push(grid[i + 1][j])
       } else if(grid[i][j - 1] === 'L'){
        if(visited.has(grid[i][j])) return;
        visited.add(grid[i][j])
        island.push(grid[i][j - 1]);
       } else if(grid[i][j + 1] === 'L'){
        if(visited.has(grid[i][j])) return;
        visited.add(grid[i][j])       
        island.push(grid[i][j + 1]);
       }else{
        continue;
       }
       islandcount += 1;
    }  
}

return islandcount;
}


const recursiveIslandCount = (grid) => {
    const visited = new Set();
    let count = 0;
    for(let r = 0; r < grid.length; r += 1){
      for(let c = 0; c < grid[0].length; c += 1){    
      if(explore(grid, r, c, visited) === true){
        count += 1;
       };
      }  
    }
    return count;
};



const explore = (grid, r, c, visited) => {
    const rowInbounds = 0 <= r && r < grid.length;
    const colInbounds = 0 <= c && c < grid[0].length;
    if(!rowInbounds || !colInbounds) return false;

    if(grid[r][c] === 'W') return false;

   const pos = r + ',' + c;
   if(visited.has(pos)) return false;
   visited.add(pos);
   
   
    explore(grid, r - 1, c, visited);
    explore(grid, r + 1, c, visited);
    explore(grid, r, c - 1, visited);
    explore(grid, r, c + 1, visited);

   return true;
}