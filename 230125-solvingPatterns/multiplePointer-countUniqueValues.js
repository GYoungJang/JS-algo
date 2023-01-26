// ==============================================
/*정렬된 배열을 받아들이고 배열의 고유 값의 개수를 반환하는 
countUniqueValues라는 함수를 구현합니다. 
배열에 음수가 있을 수 있지만 항상 정렬됩니다.
*/
// ===============================================

// 나
function countUniqueValues(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      if (arr[i] !== arr[j]) {
        count++;
        break;
      } else {
        break;
      }
    }
  }
  return count;
}

console.log(countUniqueValues([-2, -1, -1, 0, 1, 1, 2, 2, 3, 4, 6]));

// 강의
// O(n)
function countUniqueValues1(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues1([1, 1, 1, 2, 2, 2, 3, 4, 5, 6, 8]));
