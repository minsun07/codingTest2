function solution(x) {
    var a = String(x); // 문자형으로 바꾸기
    let arrA = a.split(""); // 각 자리로 나누어 배열로 만들기
    let strA = arrA.map(Number); // 문자열 배열을 숫자로 바꾸기
    let sum = strA.reduce((a,b) => a+b); // 각 배열의 합 구하기
    
    // 하샤드 수 구하기
    if(x % sum == 0) return true; 
    else return false;
}