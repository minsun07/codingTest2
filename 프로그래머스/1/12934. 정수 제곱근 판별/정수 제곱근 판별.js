function solution(n) {
    var sqrtNum = Math.sqrt(n);
    if(sqrtNum % 1 == 0){
        return (sqrtNum+1)**2;
    }
    else{
        return -1;
    }
    // return 11 % 2;
}