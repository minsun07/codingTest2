function solution(s) {
    let arrS = [];
    if(s.length == 4 || s.length == 6){
        arrS = s.split("");
        return arrS.every(item => !isNaN(item)); // every()는 배열의 모든 요소가 숫자인자 확인해주는 함수이다. 있을 경우 false반환.
    } 
    return false;
}