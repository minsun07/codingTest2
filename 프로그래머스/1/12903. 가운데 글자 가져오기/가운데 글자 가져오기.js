function solution(s) {
    var slen =  s.length;
    var index = Math.floor(slen / 2); // 실수일 경우 정수로 변환
    var answer = "";
    
    if(slen % 2 == 0){ //짝수인 경우        
        answer += s[index-1];
        answer += s[index];
    }
    else{  // 홀수인 경우
        answer = s[index];
    }
    
    return answer;
    
}