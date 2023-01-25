// ======================
// 2개의 배열을 받는 same이라는 함수를 작성
// 배열의 모든 값이 두 번째 배열에 해당하는 값의 제곱을 가지면 참을 반환.
// 값의 빈도는 동일해야 한다.
// same([1,2,3], [4,1,9]) => true
// same([1,2,3], [1,9]) => false
// same([1,2,1], [4,4,1]) => false (must be same frequency)

// O(n**2) 중첩루프..
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    console.log(arr2);
    // 2 번째 배열에서 해당 값 삭제..
    arr2.splice(correctIndex, 1);
  }
  return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));

// 빈도 카운터 패턴
// O(n)
function same1(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    return true;
  }
}

console.log(same1([1, 2, 3, 2, 25], [9, 1, 4, 4]));
