// ==================================
/*
정수 배열과 n이라는 숫자를 받아들이는 maxSubarraySum이라는 함수를 작성하십시오.
이 함수는 배열에서 n개의 연속된 요소의 최대 합을 계산해야 합니다.
*/
// ==================================

// 간단한 해결책
//  O(n^2)
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  // 음수끼리 더할 수도 있으니까..
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// 강의
// O(n)
function maxSubarraySum1(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (num > arr.length) {
    return null;
  }
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
console.log(maxSubarraySum1([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
