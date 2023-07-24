function solution(s, skip, index) {
    let answer = '';
    let alp = new Array(26).fill().map((_, i) => String.fromCharCode(i + 97)).join("");
    
    for(let i=0; i<skip.split("").length; i++){
        const regex = new RegExp(skip[i], 'g');
        alp = alp.replace(regex, '');
    }
        
    for(let j=0; j<s.split("").length; j++){
        let newIndex = (alp.indexOf(s[j]) + index) % alp.length;
        if (newIndex < 0) {
          newIndex = alp.length + newIndex;
        }
        answer += alp[newIndex];
    }
    
    return answer;
}