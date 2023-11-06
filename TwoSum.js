function TwoSum(nums) {
    let target;
    
    
    for(i = 0; i < nums.length; i++){
      for(j = 1; j < nums.length; j++){
          let num1 = nums[i];
          let num2 = nums[j];
          if(num1 + num2 == target){
            return [num1, num2];
          }
      }
       
    }
}