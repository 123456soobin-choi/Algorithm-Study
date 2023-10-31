function solution(record) {
    let answer = [];
    const map = new Map();
    
    for (let i = 0; i < record.length; ++i) {
        const [state, uid, name] = record[i].split(' ');
        
        if (state == 'Leave') {
            answer.push([uid, '님이 나갔습니다.']);
            
            continue;
        }
        
        if (state == 'Enter') {
            answer.push([uid, '님이 들어왔습니다.']);
        }

        map.set(uid, name);
    }

    return answer.map(ele => map.get(ele[0]) + ele[1]);
}

/* Map 맵은 키가 있는 값이 저장된 컬렉션입니다.
new Map([iterable]) – 맵을 만듭니다. [key,value]쌍이 있는 iterable(예: 배열)을 선택적으로 넘길 수 있는데, 이때 넘긴 이터러블 객체는 맵 초기화에 사용됩니다.
map.set(key, value) – 키를 이용해 값을 저장합니다.
map.get(key) – 키에 해당하는 값을 반환합니다. key가 존재하지 않으면 undefined를 반환합니다.
*/