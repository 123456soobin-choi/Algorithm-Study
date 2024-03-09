function solution(num_list) {
    let answer = [];
    let cnt1 = 0;
    let cnt2 = 0;
    for (i=0; i<num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            console.log(num_list[i])
            cnt1++;
        } else {
            cnt2++;
        }
    }
    answer.push(cnt1, cnt2);
    return answer;
}