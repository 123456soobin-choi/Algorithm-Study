function solution(my_string) {
    let answer = '';
    for (let x of my_string) {
       if (x === x.toUpperCase()){
           x = x.toLowerCase();
       } else {
           x = x.toUpperCase()
       }
        answer += x;

    }
    return answer;
}