function solution(relation) {
    let answer = 0;
    // relation[0]의 길이만큼 인덱스번호를 원소로 가지는 초기배열을 만든다.
    let idxArr = Array.from(Array(relation[0].length), (v, i) => i);
    
  	let combinations=[]; //가능한 후보키들의 모든 조합을 우선 넣기
  
    for(let i=0;i<idxArr.length;i++){
        combinations.push(...getCombination(idxArr,i+1))
    }
    
    combinations = checkUniqueness(relation, combinations);  //유일성 체크해서 갱신
    combinations = checkMinimality(combinations); // 최소성 체크해서 갱신
  
    return combinations.length

}

// 유일성 체크
function checkUniqueness(relation,combinations){
    let results = []; // 유일성을 만족하는 조합들로만 이루어진 results 배열
  
    combinations.forEach((combination) => { 
        let set = new Set(); 
        relation.forEach((rel) => {  
            set.add(combination.map(combi => rel[combi]).join(','));
            // ex) 현재 조회중인 combination을 [1,3]이라고 하면, combi는 1,3 각각 그 원소를 뜻함
            // 중첩반복문이 많아서 O(N^3)인데, 입력범위가 매~우 적어서 이정도면 효율성 매우 충분함
        });
        // 이때 만들어지는 Set은 relation 배열을 순회해나가면서 인덱스 1번째와 3번째를 합친
        // { 'ryan,2', 'apeach,2', 'tube,3', 'con,4', 'muzi,3' }의 형태임 
        // 해당 set은 relation의 길이인 6보다 작기때문에 중복이 존재했던것임. 유일성 만족 x
        if(set.size == relation.length){
            results.push(combination); 
        }
    }); 
    return results;
}

// 최소성 체크
function checkMinimality(combinations){
    let results=[]; // 최소성을 만족하는 조합들로만 이루어진 results 배열
  
    while(combinations.length){
        results.push(combinations[0]);
      	// 유일성을 만족하는 조합중 첫번째 원소를 최소성을 만족하는 원소로 넣는다. 
        combinations=combinations.reduce((acc,cur)=>{
            let notMinimal=combinations[0].every(combination=>cur.includes(combination));
            // 현재 조회중인 cur배열 안에 combinations[0]의 모든 원소가 포함된다면 최소성을 만족하지 않는것임
            if(!notMinimal) acc.push(cur); 
            // 최소성을 만족하는 cur 조합을 acc에 추가해줌
            return acc;
        },[])
        // combinations들은 combinations[0]과 비교해서 최소성을 만족하는애들로 갱신됨
    }
  
    return results;
    
}

function getCombination(arr,selectNum){
    let result=[];
    if(selectNum===1){
        return arr.map(a=>[a])
    }
    arr.forEach((fix,i,origin)=>{
        const rest=origin.slice(i+1);
        const combi=getCombination(rest,selectNum-1);
        const attach=combi.map((c)=>[fix,...c]);
        result.push(...attach)
    })
    return result;
}

// 순열 조합