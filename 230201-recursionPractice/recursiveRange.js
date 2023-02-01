// ========================================
/*
숫자를 받아들이고 0부터 함수에 전달된 숫자까지 모든 숫자를 더하는 
recursiveRange라는 함수를 작성하세요.

recursiveRange(6) // 21
recursiveRange(10) // 55 
*/
// ========================================

// 가우스 덧셈
function recursiveRange(num) {
  return (num * (num + 1)) / 2;
}

console.log(recursiveRange(6));
console.log(recursiveRange(10));

// 재귀
function recursiveRange1(num) {
  if (num === 0) return 0;
  return num + recursiveRange1(num - 1);
}

console.log(recursiveRange1(6));
console.log(recursiveRange1(10));

// 강의
function recursiveRange(x) {
  if (x === 0) return 0;
  return x + recursiveRange(x - 1);
}
