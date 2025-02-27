function solution(polynomial) {
    var answer = '';
    let numX = []; // x항만 있는 배열
    let numO = []; // 상수항만 있는 배열
    let numXremove = []; // x항의 x제거
    // let numx;
    // let numo;
    let  splitPol = polynomial.split(" + ");
    
    // 동류항끼리 분류하기
    for(var i=0; i<splitPol.length; i++){
        if(splitPol[i].indexOf("x") == -1) numO.push(Number(splitPol[i]));  // 상수항만
        else numX.push(splitPol[i]);  // x항만
    }
    
    // 차수의 x 제거 
    for(var i=0; i<numX.length; i++){
        numXremove.push(Number(numX[i].slice(0, -1))); //x제거
        if(numXremove[i] == "") numXremove[i] = 1;     //""일 경우 1 넣기
        
    }
    const numxSum = numXremove.reduce((acc, num) => acc + num, 0); // x항 합
    let numXSum = String(numxSum) + "x";  // 다시 x 붙이기
    if(numXSum == "1x") numXSum = "x";    // 조건에 따르면 1x는 x로 한다.
    
    const numoSum = numO.reduce((acc, num) => acc + num, 0); //상수항 합
    
    if(numoSum == 0)              // 상수항이 없을 경우
       answer = numXSum;
    else if(numXSum == "0x")      // x항이 없을 경우
        answer = String(numoSum);
    else                          // x항과 상수항 모두 있을 경우
         answer = numXSum + " + " +  numoSum;
        
    return answer;
    
}