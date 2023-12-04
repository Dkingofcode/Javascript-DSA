const minimumIsland = (grid) => {
   const visited = new Set();
   
   let minSize = Infinity;
   for(let r = 0; r < grid.length; r += 1){
    for(let c = 0; c < grid[0].length; c += 1){
      const size = exploreSize(grid, r, c, visited);
      if(size > 0 && size < minSize){
        minSize = size;
      }  
    }
   }
   return minSize;
};


const exploreSize = (grid, r, c, visited) => {
   const rowInbounds = 0 <= r && r < grid.length;
   const colInbounds = 0 <= c && c 
}