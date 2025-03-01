function solution(id_pw, db) {
    const trueArr = db.filter(([id, pw]) => id === id_pw[0]); // id가 같은은 것만 남겨두기
    return trueArr.length == 0 ? "fail" : trueArr[0][1] == id_pw[1] ? "login" : "wrong pw";
}