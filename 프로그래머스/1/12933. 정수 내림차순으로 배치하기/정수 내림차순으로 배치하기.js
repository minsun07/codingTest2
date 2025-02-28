function solution(n) {
    let strN = String(n);
    let arrStrN = strN.split("");
    let sortStrN = arrStrN.sort().reverse();
    let strSum = sortStrN.reduce((a, b) => a+b);
    
    return Number(strSum);
}