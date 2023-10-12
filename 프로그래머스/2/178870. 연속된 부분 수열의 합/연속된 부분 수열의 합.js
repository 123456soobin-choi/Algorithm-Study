function solution(sequence, k) {
  //정답이 될 수 있는 값을 담을 배열
    var answer = [];
    var sum = 0;
    var head = 0;
    for(var i = 0; i<sequence.length;i++){
        sum+=sequence[i];
        if(sum>k){
          // 작아질때까지 앞에 값을 빼줌.
            while(sum>k){
                sum -= sequence[head++];
            }
        }
        //같다면 리턴
        if(sum===k){
            answer.push([head,i]);
        }
    }
    var min = sequence.length;
    var result = [];
    answer.forEach((element)=>{
        if(min>(element[1]-element[0])){
            min = (element[1]-element[0]);
            result = [element[0],element[1]];
        }
    }) 
    return result;
}