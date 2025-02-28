function solution(x, n) {
    let result = [];
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum += x;
        result.push(sum);
    }
    return result;
}