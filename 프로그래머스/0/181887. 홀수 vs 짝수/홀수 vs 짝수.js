function solution(num_list) {
    var sumOdd = 0, sumEven=0;
    for(var i=0; i<num_list.length; i+=2)
        sumOdd += num_list[i];
    for(var j=1; j<num_list.length; j+=2)
        sumEven += num_list[j];
    
    if(sumOdd < sumEven) return sumEven;
    else return sumOdd;
}