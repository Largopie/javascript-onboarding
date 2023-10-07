const withdraw = (money, changeMoney) => {
  const count = parseInt(money / changeMoney);
  const change = money % changeMoney;

  return [count, change]
}

function problem5(money) {
  const unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const answer = [];

  for(val of unit) {
    const [count, change] = withdraw(money, val);
    answer.push(count);
    money = change;
  }

  return answer;
}

module.exports = problem5;
