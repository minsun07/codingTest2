function solution(numer1, denom1, numer2, denom2) {
    
    // 최소공배수로 분모 통일하기
    let lcm = 1;  // 최소공배수
    while(true){
        if((lcm % denom1 == 0) && (lcm % denom2 == 0)) 
            break;
        lcm++; 
    };
    
    // 분모 통일 후 분자
    let firstNumer = numer1 * (lcm / denom1); // 처음 분자
    let SecondNumer = numer2 * (lcm / denom2); // 두번째 분자
    let numerHap = firstNumer + SecondNumer; // 분자의 합
   
    // 최대공약수 구하기
    const getGCD = (a, b)  => a % b === 0 ? b : getGCD(b, a%b);
    const gcd = getGCD(numerHap, lcm);
    
    // 기약분수 구하기
    return [numerHap / gcd, lcm / gcd];
    
}