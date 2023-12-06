function solution(skill, skill_trees) {
    let cnt = 0;
    
    // skill에 포함된 스킬만 뽑기
    for (let list of skill_trees) {
        // 항상 첫 번째 스킬부터 배운 후 두 번째 스킬을 배워야 하므로
        // 필터링된 스킬 트리(s)는 skill의 맨 앞 부분부터 일치해야 한다.
        let s = list.split("").filter((v) => skill.indexOf(v) > -1).join("");

        if (skill.indexOf(s) === 0) cnt++;
    }
    return cnt;
}

// indexOf() 메서드는 배열에서 주어진 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고, 찾을 수 없는 경우 -1을 반환
