function solution(my_string) {
    // my_string = my_string.replace(/a/g, "")
    //                      .replace(/e/g, "")
    //                      .replace(/i/g, "")
    //                      .replace(/o/g, "")
    //                      .replace(/u/g, "");
    // return my_string;
    
    // 간단한 코드
    return my_string.replace(/[aeiou]/g, "");
}