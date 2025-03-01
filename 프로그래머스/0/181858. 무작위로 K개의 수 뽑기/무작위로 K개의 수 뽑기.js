function solution(arr, k) {
    const setArr = [...new Set(arr)]; // 중복 제거 후 배열로 변환
    var answer = setArr.slice(0, k);
    
    while(answer.length < k){
        answer.push(-1);
    }
    
    return answer;
}