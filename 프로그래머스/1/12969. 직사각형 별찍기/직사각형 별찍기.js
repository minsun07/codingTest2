process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {  //입력받은 숫자를 'data에 받는다' 
    const n = data.split(" ");      // data(입력받은 숫자)를 배열로 변경
    const a = Number(n[0]), b = Number(n[1]); //a는 한줄에대한 별의 갯수, b는 몇줄 출력
    for(let i=0; i<b; i++){ // 줄
        let str = ""; // 변수 선언
        for(let j=0; j<a; j++){ // 별 갯수
            str = str + "*";
        }
        console.log(str);
    }
});