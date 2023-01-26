// =================================
/* 정렬된 정수 배열이 주어지는 search 함수를 작성합니다. 
이 함수는 값을 받고, 전달된 값이 위치한 인덱스를 반환합니다. 
값을 찾을 수 없으면 -1을 반환합니다 */
// =================================

// 간단한 해결책
// O(n)
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

// 이진 탐색
// log(n)

function search1(arr, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
