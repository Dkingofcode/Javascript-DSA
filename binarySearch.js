const BinarySearch = () => {
   let low = 0;
   let high = 0; 

   
   do{
     mid = (low + high) / 2

     if (array[mid] == value){
       return mid;
     } else if(array[mid] < value){
        low = mid + 1;
     } else if(array[mid] > value){
       high = mid - 1;
     }
   }while (low <= high)
   return -1;

}