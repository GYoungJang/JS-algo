// ==================================================
/*
숫자를 받아들이고 그 숫자의 계승을 반환하는 함수 factorial을 작성하십시오. 
계승은 정수와 그 아래의 모든 정수의 곱입니다. 
예를 들어 계승 4( 4! )는 4 * 3 * 2 * 1이 24이기 때문에 24와 같습니다. 
계승 영(0!)은 항상 1입니다.
factorial(1) // 1
factorial(2) // 2
factorial(4) // 24
factorial(7) // 5040
*/
// ==================================================
function factorial(num) {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(4));
console.log(factorial(7));

// 강의
function factorial(x) {
  if (x < 0) return 0;
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}
