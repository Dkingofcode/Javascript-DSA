function TrappingRainWater(height) {
  let n = height.length();
  let result = 0;
  let maxLeft = height[0];
  let maxRight = height[n - 1];
  let left  = 1;
  let right = n - 2;

  while(left <= right){
    let waterTrapped;

    if(maxLeft <= maxRight){
        waterTrapped = maxLeft - height[left];
        maxLeft = max(maxLeft, height[left]);
        left++;
    }
    else{
       waterTrapped = maxRight - height[right];
       maxRight =  max(maxRight, height[right]);
       right--;
    }

    if(waterTrapped > 0){
       result += waterTrapped;  
    }    

  }

  return result;
}