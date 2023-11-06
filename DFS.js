// Global or class scope variable
// n = number of nodes in the graph
// g = adjacency list representing graph
// visited = [false, ..., false]


function dfs(){
   if(visited[at]){
    return
   } 
   visited[at] = true
    
   neighbours = graph[at]
   for next in neighbours{
      dfs(next) 
   }
}

start_node = 0
dfs(start_node);




//   Global or class scope variables
//   n = number of nodes in the graph
//   g = adjacency list representing graph
let count  = 0;
let components = [];  // empty integer array
visited = [false, false, false];


function findComponents(){
    for(i = 0; i < n; i++){
       if(!visited[i]){
        count++
        dfs(i)
        return (count, components)

 function dfs(at){
     visited[at] = true;
     components[at] = count;
     for(next in g[at]){
        if(!(visited[next])){
            dfs(next)
        }
     }    
 }       
       } 
    }
}

