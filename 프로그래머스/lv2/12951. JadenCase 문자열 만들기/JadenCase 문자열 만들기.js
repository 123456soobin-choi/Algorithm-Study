// function solution(s) {
//     let answer = '';
//     s = s.trim().split(" ");
    
//     for(let e of s){
//         e = e.toLowerCase();
//         let first = e.charAt(0);
//         first = first.toUpperCase()
//         answer += first + e.slice(1) + " ";
//     }
       
//     return answer.trim();
// }

function solution(s) {
    let answer = '';
    let isFirstLetter = true;

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        if (ch === ch.toUpperCase()) {
            ch = ch.toLowerCase();
        }

        if (isFirstLetter) {
            ch = ch.toUpperCase();
        }

        answer += ch;

        if (ch === ' ') {
            isFirstLetter = true;
        } else {
            isFirstLetter = false;
        }
    }

    return answer;
}