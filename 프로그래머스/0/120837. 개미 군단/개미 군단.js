function solution(hp) {
  const first = parseInt(hp / 5);
  const second = parseInt((hp - first * 5) / 3);
  const third = hp - first * 5 - second * 3;
    
  return first + second + third;
}