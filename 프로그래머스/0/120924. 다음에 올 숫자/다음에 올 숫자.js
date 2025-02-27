function solution(common) {
    let result;
    for(let i=1; i<common.length-1; i++){
        if(common[i]-common[i-1] == common[i+1]-common[i])
            result = common[common.length-1] + (common[1]-common[0]);
        else
            result = common[common.length-1] * (common[1]/common[0]);
    }
    return result;
}