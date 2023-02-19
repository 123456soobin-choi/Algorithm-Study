function solution(new_id) {
  const id = new_id
    .toLowerCase()
    .replace(/[^\w\d-_.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "")
    .padEnd(1, "a")
    .slice(0, 15)
    .replace(/^\.|\.$/g, "");
  return id.padEnd(3, id[id.length - 1]);
}

// padEnd(길이, 채울 문자열) 현재 문자열에 다른 문자열을 채워 주워진 길이의 새로운 문자열 반환