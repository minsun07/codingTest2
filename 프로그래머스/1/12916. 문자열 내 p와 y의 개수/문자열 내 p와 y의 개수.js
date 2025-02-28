function solution(s){
    const smallS = s.toLowerCase();
    let countY = 0;
    let countP = 0;
    
    for(var a of smallS){
        if(a == 'y')
            countY++;
        if(a == 'p')
            countP++;
    }
    
    if(countY === countP || (countY==0 && countP==0)) 
        return true;
    else 
        return false;

}