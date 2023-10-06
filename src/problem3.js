const findNumber = (num) => {
  const checkNum = ['3', '6', '9'];
  let count = 0;
  const strNum = String(num);
  for(char of strNum) {
    if(checkNum.includes(char)){
      count++;
    }
  }
  return count;
}

function problem3(number) {
  let answer = 0;

  for(let i =1; i <= number; i++) {
    answer+=findNumber(i)
  }
  return answer;
}

module.exports = problem3;
