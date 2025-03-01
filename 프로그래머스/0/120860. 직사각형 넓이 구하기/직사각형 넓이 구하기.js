function solution(dots) {
    var maxWidth = Math.max(dots[0][0], dots[1][0], dots[2][0], dots[3][0]);
    var minWidth = Math.min(dots[0][0], dots[1][0], dots[2][0], dots[3][0]);
    var maxLength = Math.max(dots[0][1], dots[1][1], dots[2][1], dots[3][1]);
    var minLength = Math.min(dots[0][1], dots[1][1], dots[2][1], dots[3][1]);
    
    return (maxWidth - minWidth) * (maxLength - minLength);
    
}