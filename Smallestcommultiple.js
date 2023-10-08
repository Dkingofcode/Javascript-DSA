function smallestCommons(arr){
    let product = 1;
   for(let i = 0; i < arr.length; i++){
      if(arr[i] == arr[i+1]){
         product =  arr[i] * product;
        i = i + 2;
      }
      product = arr[i] * product;
   } 

   return product;
}




// Function to find the greatest common divisor (GCD) using Euclidean algorithm
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

// Function to find the least common multiple (LCM) using GCD
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}


function smallestCommons(arr){

   // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Initialize the result with the smallest number in the range
  let result = arr[0];

  // Calculate the LCM for the numbers in the range iteratively
  for (let i = arr[0] + 1; i <= arr[1]; i++) {
    result = lcm(result, i);
  }

  return result;
}

console.log(smallestCommons([1, 5])); // Output: 60 (LCM of 1, 2, 3, 4, and 5)
