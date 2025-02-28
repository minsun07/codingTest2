function solution(arr1, arr2) {
    var sum1 = 0, sum2 = 0;
    var len1 = arr1.length;
    var len2 = arr2.length;
    
    if(len1 < len2) 
        return -1;
    else if(len1 == len2){
        for(var i=0; i<len1; i++){
            sum1 += arr1[i];
            sum2 += arr2[i];
        }
        return sum1<sum2 ? -1 : (sum1==sum2) ? 0 : 1;
        
    }
    else if(len1 > len2)
        return 1;
}