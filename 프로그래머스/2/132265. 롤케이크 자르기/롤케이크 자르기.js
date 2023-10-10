function solution(topping) {
  let answer = 0;

  const allToppings = new Map();
  const brother = new Map();

  topping.forEach((item) => {
    allToppings.set(item, (allToppings.get(item) || 0) + 1);
  });

  for (const i of topping) {
    allToppings.set(i, allToppings.get(i) - 1);

    brother.set(i, true);

    if (!allToppings.get(i)) {
      allToppings.delete(i);
    }

    if (allToppings.size === brother.size) {
      answer += 1;
    }

    if (allToppings.size < brother.size) {
      break;
    }
  }

  return answer;
}