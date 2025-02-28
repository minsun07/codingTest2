function solution(n) {
    let strN = String(n);
    let arrStrN = strN.split("");
    let sortStrN = arrStrN.sort().reverse(); // 오름차순 정렬 후, 뒤집기
    let strSum = sortStrN.reduce((a, b) => a+b);
    
    return Number(strSum);
}