function solution(x) {
    let y =0;
  x = x.toString().split("");

  x.forEach(element => {
    y += Number(element);
  });

  return (Number(x.join("")) % y) === 0 ? true : false;

}