// 1. 책을 임의로 펼친다.
// 2. 왼쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구한다.
// 3. 오른쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구한다.
// 4. 2~3 과정에서 가장 큰 수를 본인의 점수로 한다.
// 5. 점수를 비교해 가장 높은 사람이 게임의 승자가 된다.
// 6. 시작 면이나 마지막 면이 나오도록 책을 펼치지 않는다.

// ### 제한사항

// - pobi와 crong의 길이는 2이다.
// - pobi와 crong에는 [왼쪽 페이지 번호, 오른쪽 페이지 번호]가 순서대로 들어있다.

// // ## 예시
// | pobi       | crong      | result |
// | ---------- | ---------- | ------ |
// | [97, 98]   | [197, 198] | 0      |
// | [131, 132] | [211, 212] | 1      |
// | [99, 102]  | [211, 212] | -1     |

const returnMax = (num) => {
  const num_arr = String(num).split('').map((item) => Number(item));
  const num_sum = num_arr.reduce((sum, item) => sum + item);
  const num_mul = num_arr.reduce((sum, item) => sum * item);

  return Math.max(num_sum, num_mul);
}

const checkExceptions = (left, right) => {
  // left + 1이 right가 아니면 false
  if(left + 1 !== right) return false;
  // left가 홀수가 아니거나 right가 짝수가 아니면 false
  if(left % 2 !== 1 || right % 2 !== 0) return false;
  // left가 시작면이거나 right가 마지막면이면 false
  if(left === 1 || right === 400) return false;
  return true;
}

function problem1(pobi, crong) {
  const [pobiLeft, pobiRight] = pobi;
  const [crongLeft, crongRight] = crong;

  if(!checkExceptions(pobiLeft, pobiRight)) return -1;
  if(!checkExceptions(crongLeft, crongRight)) return -1;

  const pobiMax = Math.max(returnMax(pobiLeft), returnMax(pobiRight));
  const crongMax = Math.max(returnMax(crongLeft), returnMax(crongRight));

  if(pobiMax > crongMax) return 1;
  else if(pobiMax < crongMax) return 2;
  else if(pobiMax === crongMax) return 0;
}

module.exports = problem1;
