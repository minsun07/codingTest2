function solution(left, right) {
   let answer = 0;

//     for(let i=left; i<=right; i++){  // left와 right사이의 숫자
//         let count = 0;
//         for(let j=1; j<=i; j++){
//             if(i % j == 0) count++;       // 약수일 경우
//         }
        
//         if(count % 2 == 0) answer += i; // 약수의 갯수가 짝수일 경우
//         else answer -= i;               // 홀수일 경우
//     }
//         return answer;
    
    //다른 풀이 : 제곱근이 정수이면 홀수이다.
    for(let i=left; i<=right; i++){
        if(Number.isInteger(Math.sqrt(i))){
            answer -= i;
        }else{
            answer += i;
        }
    }
    return answer;
    
}