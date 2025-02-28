function solution(n) {
    var sqrtNum = Math.sqrt(n); // 제곱근 구하기
    if(sqrtNum % 1 == 0){       // 정수, 실수 구분
        return (sqrtNum+1)**2;  // 제곱 구하기
    }
    else{
        return -1;
    }
}