// ==============================================
/*
밑과 지수를 받는 power라는 함수를 작성하십시오. 
함수는 밑의 거듭제곱을 지수로 반환해야 합니다. 
이 함수는 Math.pow()의 기능을 모방해야 합니다. 
음의 밑수와 지수에 대해 걱정하지 마십시오.
power(2,0) // 1
power(2,2) // 4
power(2,4) // 16
*/
// ==============================================
// 나
function power(a, b) {
  if (b === 0) return 1;
  return a * power(a, b - 1);
}

console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(2, 4));

// 강의
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}
