// ======================================
/*
숫자를 받아들이고 피보나치 수열의 n번째 숫자를 반환하는 fib라는 재귀 함수를 작성하세요. 
피보나치 수열은 1과 1로 시작하는 정수 1, 1, 2, 3, 5, 8, ...의 수열이며 
이후의 모든 수는 이전 두 수의 합과 같습니다.
fib(4) // 3
fib(10) // 55
fib(28) // 317811
fib(35) // 9227465
*/
// ======================================
function fib(num) {
  if (num <= 2) return 1;
  return fib(num - 2) + fib(num - 1);
}

console.log(fib(4));
console.log(fib(10));
console.log(fib(28));
console.log(fib(35));

// 강의
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
