const returnMax = (num) => {
  const num_arr = String(num).split('').map((item) => Number(item));
  const num_sum = num_arr.reduce((sum, item) => sum + item);
  const num_mul = num_arr.reduce((sum, item) => sum * item);

  return Math.max(num_sum, num_mul);
}

const checkExceptions = ([left, right]) => {
  if(left + 1 !== right) return false;
  if(left % 2 !== 1 || right % 2 !== 0) return false;
  if(left === 1 || right === 400) return false;
  return true;
}

function problem1(pobi, crong) {
  const [pobiLeft, pobiRight] = pobi;
  const [crongLeft, crongRight] = crong;

  if(!checkExceptions(pobi)) return -1;
  if(!checkExceptions(crong)) return -1;

  const pobiMax = Math.max(returnMax(pobiLeft), returnMax(pobiRight));
  const crongMax = Math.max(returnMax(crongLeft), returnMax(crongRight));

  if(pobiMax > crongMax) return 1;
  else if(pobiMax < crongMax) return 2;
  else if(pobiMax === crongMax) return 0;
}

module.exports = problem1;
