function solution(n) {
    let strN = String(n); // 문자열로 변환
    let arrStrN = strN.split(""); // 각 자리로 나눠서 배열에 넣기
    let arrStrN2 = arrStrN.reverse(); // 배열 뒤집기
    
    let result = arrStrN2.map(Number); // 숫자형으로 변환
    return result;
}