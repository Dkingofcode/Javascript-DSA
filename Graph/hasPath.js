function hasPath(src, dest) {
    let path = [];

    for (let neighbor of src){
        if(neighbor === dest){
           path.push(dest); 
        }else{
            hasPath(neighbor, dest);
        }
    }
}
