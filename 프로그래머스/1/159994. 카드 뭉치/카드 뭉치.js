function solution(cards1, cards2, goal) {
    
    for(var goalarr of goal){ // goal배열 순회
        if(cards1[0] === goalarr){ //[0]이 가능항 이유: shift를 하면 첫번째 요소가 제거되면서 남은 요소들이 앞으로 이동하기 때문이다.
            cards1.shift();   
        }else if(cards2[0] === goalarr){
            cards2.shift()
        }else{
            return "No";
        }
    }
    return "Yes";
}