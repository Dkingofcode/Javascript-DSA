function MedianOfTwoSortedArrays(num1, num2) {
  let n1 = num1.length();
  let n2 = num2.length();

  if(n1 > n2){
    return MedianOfTwoSortedArrays(num2, num1);
  }

  let start = 0;
  let end = n1;

  while(start <= end){
    let mid = (start + end) / 2;
    let cut1 = mid;
    let cut2 = (n1 + n2 + 1) / 2 - cut1;

    let l1 = (cut1 > 0) ? num1[cut1 - 1] : INT_MIN;
    let l2 = (cut2 > 0) ? num2[cut2 - 1] : INT_MIN;
    let r1 = (cut1 < n1) ? num1[cut1] : INT_MAX;
    let r2 = (cut2 < n2) ? num1[cut2] : INT_MAX;
 
    if(l1 <= r2 && l2 <= r1){
        return ((n1 + n2) % 2) ? max(l1, l2) : (max(l1, l2) + min(r1, r2)) / 2.0;
    }

    if(l1 > r2){
        end = mid - 1;
    }    
    else{
        start = mid + 1;
    }

    return -1;
   }
};