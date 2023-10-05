function problem1(pobi, crong) {
  const [pobiLeft, pobiRight] = pobi;
  const [crongLeft, crongRight] = crong;

  if(pobiLeft === 1 || pobiRight === 400) return -1;
  if(crongLeft === 1 || crongRight === 400) return -1;

  if(pobiLeft + 1 !== pobiRight || crongLeft + 1 !== crongRight) return -1;

  const returnMax = (num) => {
    const num_arr = String(num).split('').map((item) => Number(item));
    
    const num_sum = num_arr.reduce((sum, item) => sum + item);
    const num_mul = num_arr.reduce((sum, item) => sum * item);

    console.log(num_sum, num_mul);

    return Math.max(num_sum, num_mul);
  }

  const pobiMax = Math.max(returnMax(pobiLeft), returnMax(pobiRight));
  const crongMax = Math.max(returnMax(crongLeft), returnMax(crongRight));

  if(pobiMax > crongMax) return 1;
  else if(pobiMax < crongMax) return 2;
  else if(pobiMax === crongMax) return 0;
}

problem1([97,98], [197,198])

module.exports = problem1;
