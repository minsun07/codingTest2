function solution(numbers) {
    let hap = [];
    for(let i=0; i<numbers.length; i++){
        for(let j = i+1; j<numbers.length; j++)
            hap.push(numbers[i] + numbers[j]);
    }
    
    const setResult = new Set(hap); // Set객체로 중복 제거
    const result = [...setResult];  // 다시 배열로 변환
    result.sort((a,b) => a - b);  // 오름차순 정렬
    // result.sort(); 만 하면 오류가 발생함. 이유 : 기본적으로 문자열을 정렬을 수행하기 때문이다.
   
    return result;
}