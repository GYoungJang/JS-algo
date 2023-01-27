// ==================================
/* averagePair라는 함수를 작성합니다. 
정렬된 정수 배열과 목표 평균이 주어진 경우, 
쌍의 평균이 목표 평균과 같은 값의 쌍이 배열에 있는지 확인합니다. 
평균 대상과 일치하는 쌍이 둘 이상 있을 수 있습니다.
Bonus Constraints:
Time: O(N)
Space: O(1)
Sample Input:
averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
*/
// ==================================

// 나
function averagePair(arr, target) {
  if (arr.length === 0 || target === undefined) {
    return false;
  }
  let first = 0;
  let last = arr.length - 1;

  while (first < last) {
    let avg = (arr[first] + arr[last]) / 2;
    if (avg === target) {
      return true;
    } else if (avg < target) {
      first++;
    } else {
      last--;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false

// 강의
function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
}
