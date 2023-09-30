const solution = (msg) => {
  const arr = [];

  //A부터 Z까지 미리 사전에 등록해 놓는다.
  for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
    arr.push(String.fromCharCode(i));
  }

  const answer = [];
  let i = 0;
  //문자열을 순회하며 사전에 있으면 다음 문자열로 확장하며 사전에 등록하는 방식을 이용한다.
  while (i < msg.length) {
    let j = 1;
    //문자열이 없을때까지 찾는다.
    while (arr.indexOf(msg.substring(i, i + j)) !== -1 && i + j <= msg.length) {
      j++;
    }
    //없는 문자열을 사전에 등록
    arr.push(msg.substring(i, i + j));
    //현재 입력을 사전의 색인번호로 답에 추가한다.
    answer.push(arr.indexOf(msg.substring(i, i + j - 1)) + 1);
    i += j - 1;
  }
  return answer;
};