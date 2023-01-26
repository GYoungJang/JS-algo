// ====================================
/* 정렬된 정수 배열을 취하는 sumZero라는 함수를 작성
함수는 합이 0이 되는 첫 번째 쌍을 배열로 반환해야 한다.
쌍이 없는 경우 undefined를 반환한다.
*/
// ====================================

// 간단한 해결책
// O(n^2), O(1)
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// 리팩토링
// 두 개의 포인터를 사용
// O(n), O(1)
function sumZero1(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
