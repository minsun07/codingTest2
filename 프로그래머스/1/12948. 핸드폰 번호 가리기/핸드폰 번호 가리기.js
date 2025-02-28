function solution(phone_number) {
    let arrpn = phone_number.split(""); // 각 자리를 배열에 넣기
    
    for(let i=0; i<arrpn.length-4; i++){ // 뒤 4자리 뺀 배열 반복
        arrpn[i] = "*"; // *로 치환
    }
    let answer = arrpn.reduce((a,b) => a+b); // 배열 합치기 
    return answer;
}