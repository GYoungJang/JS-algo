function countDown(num) {
  if (num <= 0) {
    console.log('All done!');
    // 무조건 return 문이 있어야함.
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

// 반복문으로도 가능
function countDown1(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
  console.log('All done!');
}

// ================================

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
sumRange(3);

/*
sumRange(3) 이 함수는 대기 중 sumRange(2) 값을 아직 몰라서
return 3 + sumRange(2)
           return 2 + sumRange(1)
                      return 1 
                      
*/

// ========================================

// factorial
function factorial(num) {
  if (num === 1) return 1;
  return n * factorial(num - 1);
}

// 반복문
function factorial1(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}
