function nthPrime(n){
    if(n === 1) return 2;

   let candidate = 3;
   let count = 1;

    while (count !== n){
      if(isPrime(candidate)){
        count++;
      }  

      if(count < n){
        candidate += 2;
      }

      
    }

    function isPrime(num){
      for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
      }  
      return true;
    }


    return candidate;
}

console.log(nthPrime(12));
console.log(nthPrime(6));