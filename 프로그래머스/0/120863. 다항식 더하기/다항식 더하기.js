function solution(polynomial) {
    var answer = '';
    let numX = [];
    let numO = [];
    let numx;
    let numo;
    let numXremove = [];
    let  splitPol = polynomial.split(" + ");
    
    // 동류항끼리 분류하기
    for(var i=0; i<splitPol.length; i++){
        if(splitPol[i].indexOf("x") == -1){
            numO.push(Number(splitPol[i]));  // 상수항만
        }
        else{
            numX.push(splitPol[i]); // x항만
        }
    }
    
    // 차수의 x 제거 
    for(var i=0; i<numX.length; i++){
        numXremove.push(Number(numX[i].slice(0, -1))); //x제거
        if(numXremove[i] == "")//""일 경우 1 넣기
            numXremove[i] = 1; 
        
    }
    const numxSum = numXremove.reduce((acc, num) => acc + num, 0); // x차수항 합
    let numXSum = String(numxSum) + "x";  // 다시 x붙이기
    if(numXSum == "1x") numXSum = "x";
    
    const numoSum = numO.reduce((acc, num) => acc + num, 0); //상수항 합
    
    if(numoSum == 0)
       answer = numXSum;
    else if(numXSum == "0x")
        answer = String(numoSum);
    else
         answer = numXSum + " + " +  numoSum;
        
    return answer;
    
}