function solution(arr) {
    const minValue = Math.min(...arr); // 배열에서 사용할 때는 operater사용(...)
    
    let filtered = arr.filter((element) => element !== minValue); // 특정값 삭제
    
    if(arr.length == 1){ // 최소값이 없을 경우
        filtered.push(-1);
    }
    return filtered;
}