function solution(arr) {
    let avg = arr.reduce((a,b) => a+b, 0) / arr.length;
    return avg;
}