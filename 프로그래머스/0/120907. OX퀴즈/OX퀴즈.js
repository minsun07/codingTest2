function solution(quiz) {
    var answer = [];
    
    let arrQuiz = quiz.map(str => str.split(" = ")); //결과 : [["3 - 4","-3"],["5 + 6","11"]]
    //str의 역할은 arrQuiz의 각 요소를 순서대로 받아오는 변수(ex)str="3 -4 = -3" 이런 느낌)
    
   let numberQuiz = arrQuiz.map(subnum => {
       let [a, operator, b] = subnum[0].split(" "); // "3 - 4"를 공백으로 나누기
       numA = Number(a);
       numB = Number(b);
       
       let calResult;
       if(operator === "+") calResult = numA + numB;
       if(operator === "-") calResult = numA - numB;
       
       subnum[0] = calResult;
       
       if(subnum[0] == subnum[1])
           answer.push("O");
       else
           answer.push("X");
   });
    
    return answer;
    

    
}