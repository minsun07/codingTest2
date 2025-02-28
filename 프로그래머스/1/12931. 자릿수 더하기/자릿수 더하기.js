function solution(n)
{
    let strN = String(n); // 숫자를 문자열로 변환
    
    let arrN = strN.split(""); // 자릿수 대로 나눠 배열에 넣기
    
    let numArrN = arrN.map(Number); // 문자열 배열을 숫자형으로 변환
    
    let sum = numArrN.reduce((a,b) => a+b, 0); // 합 구하기
    
    return sum;
}