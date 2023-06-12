function solution(nums) {
    let answer = 0;
    let count = nums.length / 2;
    
    // 중복 제거
    let arr = nums.filter((element, index) => {
        return nums.indexOf(element) === index;
    });
    
    if(arr.length >= count){
        answer = count;
    }else{
        answer = arr.length;
    }
    
    return answer;
}