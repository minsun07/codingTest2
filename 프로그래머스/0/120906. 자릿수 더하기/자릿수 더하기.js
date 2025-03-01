function solution(n) {
    var strN = String(n);
    var arrStrN = strN.split("");
    var arrN = arrStrN.map(Number);
    var answer = arrN.reduce((a,b) => a+b, 0);
    
    return answer;
}