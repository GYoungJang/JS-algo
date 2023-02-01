// =====================================
/*
숫자 배열을 받아 모두의 곱을 반환하는 
productOfArray라는 함수를 작성하세요.

productOfArray([1,2,3]) // 6
productOfArray([1,2,3,10]) // 60
*/
// =====================================

// 뭔가 map 함수가 생각이 나서...
function productOfArray(arr) {
  let total = 1;
  arr.map((a) => {
    total *= a;
  });
  return total;
}

console.log(productOfArray([1, 2, 3]));
console.log(productOfArray([1, 2, 3, 10]));

// 재귀로
function productOfArray1(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray1(arr.slice(1));
}

console.log(productOfArray1([1, 2, 3]));
console.log(productOfArray1([1, 2, 3, 10]));

// 강의
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}
