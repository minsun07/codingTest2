function solution(n, arr1, arr2) {
    let binarr1 = [], binarr2 = [], arrBin1 = [], arrBin2 = [], answer = [];
    for(let i=0; i<n; i++){ 
        binarr1.push(arr1[i].toString(2).padStart(n, "0")); //arr1 배열을 2진수 형태의 binarr1을 만듦.
        binarr2.push(arr2[i].toString(2).padStart(n, "0"));
        
        arrBin1.push(binarr1[i].split("")); // binarr1의 배열의 2진수를 각 자리대로 나눈 배열을 만듦.
        arrBin2.push(binarr2[i].split(""));
        
        answer[i] = "";
        
        for(let j=0; j<n; j++){
            
            if(arrBin1[i][j] === "1" || arrBin2[i][j] === "1") answer[i] += "#";  // 둘다 1이거나 하나라도 1이면 #이되게
            else answer[i] += " ";   // 아닐 경우는 벽
        }
    }
    
    return answer;
}