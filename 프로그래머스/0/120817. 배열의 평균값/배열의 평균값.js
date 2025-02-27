function solution(numbers) {    
    return numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length;
    
    //reduce란 각 요소의 합산한 결과를 하나의 값으로 리턴할 때 많이 사용된다.
    // acc는 누적값, cur은 현재 처리중인 값
    // 0은 초기값을 말한다. 만약 3으로 한다면 acc의 초기값이 3이 되는것이다.
}