function solution(s) {
    let arrS = [];
    if(s.length == 4 || s.length == 6){
        arrS = s.split("");
        return arrS.every(item => !isNaN(item));
    } 
    return false;
}