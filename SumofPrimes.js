// Find the sum of all prime numbers less than or equal to num.

function isPrime(n){
    if(n <= 1){
        return false;
    }
    if(n <= 3){
        return true;
    }

    if(n % 2 == 0 || n % 3 == 0){
        return false;
    }

    for(let i = 5; i * i <= n; i += 6){
       if(n % i == 0 || n % (i + 2) == 0){
        return false;
       } 
     return true;

    }
}



function sumPrimes(num){
   let sum = 0;
   
   for(let i = 2; i <= num; i++){
      if(isPrime(i)){
        sum += i;
      }
   }

   return sum;
}

