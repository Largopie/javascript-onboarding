const countClap = (num) => {
  const checkNum = ['3', '6', '9'];
  let count = 0;

  for(char of String(num)) {
    if(checkNum.includes(char)) count++;
  }

  return count;
}

function problem3(number) {
  let answer = 0;

  for(let i =1; i <= number; i++) {
    answer+=countClap(i)
  }

  return answer;
}

module.exports = problem3;
