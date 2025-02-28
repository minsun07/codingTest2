function solution(phone_number) {
    let arrpn = phone_number.split("");
    
    for(let i=0; i<arrpn.length-4; i++){
        arrpn[i] = "*";
    }
    let answer = arrpn.reduce((a,b) => a+b);
    return answer;
}