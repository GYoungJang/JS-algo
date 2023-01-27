// =======================================
/* 가변 개수의 인수를 받아들이고 전달된 인수 사이에 중복이 있는지 확인하는 
areThereDuplicates라는 함수를 구현합니다. 
빈도 카운터 패턴 또는 다중 포인터 패턴을 사용하여 이를 해결할 수 있습니다.
Examples:
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
Restrictions:
Time - O(n)
Space - O(n)
Bonus:
Time - O(n log n)
Space - O(1)
*/
// =======================================

// 나
function areThereDuplicates(...arg) {
  if (arg.length <= 1) return false;
  let sortedArg = arg.sort();
  for (let i = 0; i < sortedArg.length - 1; i++) {
    if (sortedArg[i] === sortedArg[i + 1]) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));

// 강의
// 빈도수 세기
function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

// 다중 포인터
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

// 한 줄 풀이
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
