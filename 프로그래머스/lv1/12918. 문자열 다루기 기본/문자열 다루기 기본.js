function solution(s){
    if(s.length === 4 || s.length === 6){
        return s.split("").every(i => !isNaN(i));
    }else{
        return false;
    }
}