function solution(a, b) {
    // let sum = 0;
    // for(let i=0; i<a.length; i++){
    //     sum += a[i]*b[i];
    // }
    // return sum;
    
    // 더 간결한 풀이
    return a.reduce((acc, _, i) => acc += a[i] * b[i],0);
    // acc : 누적된 합
    // _ : (acc, currentValue, index, array)여기에서 currentValue(현재 순회 중인 배열의 요소)는 사용하지 않으므로 
}