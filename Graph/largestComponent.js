const largestComponent = (graph) => {
   let count = 0;
   visited = new Set();

   for(let node in graph){
    if(explore(node, graph, visited) === true){
        count += 1;
    }


    return count;
   }

  const explore = (node, graph, visited) => {
    if(visited.has(node)) return false;
    
    visited.add(node);
    
    for(let neighbor of graph[node]){
        if(neighbor){
          largestComponent(node, neighbor, visited);  
        }
     }

     return true;
  } 

};