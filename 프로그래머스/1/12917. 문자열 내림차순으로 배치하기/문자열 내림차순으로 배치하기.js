function solution(s) {
    var arrS = s.split("");
    arrS.sort().reverse();
    return arrS.reduce((a, b) => a + b)

    
}