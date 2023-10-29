function solution(numbers) {
    const answer = numbers
    // map으로 numbers를 일관되게 string으로 변환한다.
        .map(numbers => String(numbers))
        .sort((a, b) => (b + a) - (a + b))
        .join("");
    
    // 0인 경우는 제외해야 하니 삼항연산자 사용
    return answer[0] === '0' ? '0' : answer;
}

// 문자로 변환된 숫자를 연결하여 비교정렬
// e.g) '3', '30' => ('303')-('330')
