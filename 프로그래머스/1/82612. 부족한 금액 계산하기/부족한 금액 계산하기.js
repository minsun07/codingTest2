function solution(price, money, count) {
    var sum = 0;
    for(var i=1; i<=count; i++){
        sum += price*i;
    }
    
    if(money < sum) return sum - money;
    else return 0;
}