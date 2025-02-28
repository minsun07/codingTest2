function solution(a, b) {
    let sum = 0;
    
    if(a<b){
        for(let i=a; i<=b; i++) sum += i;
    }
    else if(a>b){
        for(let j=a; j>=b; j--) sum += j;
    }
    else{
        return a;
    }
    
    return sum;
}