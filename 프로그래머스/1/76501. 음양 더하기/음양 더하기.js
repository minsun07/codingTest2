function solution(absolutes, signs) {
    // let sum = 0;
    // for(let i=0; i<signs.length; i++){
    //     if(signs[i] == true) sum += absolutes[i];   
    //     else sum -= absolutes[i]; 
    // }
    // return sum;
    
    // 다른 간결한 방법
    return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0)
}