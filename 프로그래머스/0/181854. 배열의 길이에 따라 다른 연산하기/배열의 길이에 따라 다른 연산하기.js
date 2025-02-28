function solution(arr, n) {
    if(arr.length % 2 == 0){ // 짝수일 경우
        for(var i=1; i<arr.length; i+=2){
            arr[i] += n;
        }
    }
    else{ // 홀수일 경우
        for(var j=0; j<arr.length; j+=2){
            arr[j] += n;
        }
    }
    return arr;
}