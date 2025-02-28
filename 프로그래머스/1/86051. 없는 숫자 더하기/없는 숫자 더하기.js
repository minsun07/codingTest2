function solution(numbers) {
    let result = numbers.reduce((a, b) => a + b, 0);
    return 45 - result;
}