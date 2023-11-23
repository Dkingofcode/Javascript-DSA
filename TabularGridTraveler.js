const TabularGridTraveler = (m, n) => {
const table = Array(n + 1).fill().map(() => 
   Array(n + 1).fill(0));
   table[1][1] = 1;
   for (let i = 0; i <= m; i++){
    for (let j = 0; j <= n; j++){
       const current = table[i][j];
       table[i][j + 1] += current;
       table[i + 1][j] += current; 
    }
   }
}