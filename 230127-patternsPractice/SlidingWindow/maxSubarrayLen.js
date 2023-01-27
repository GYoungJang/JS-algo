// ======================================
/* 정수 배열과 숫자가 주어지는 maxSubarraySum이라는 함수를 작성하십시오. 
이 함수는 함수에 전달된 숫자의 길이와 하위 배열의 최대 합을 찾습니다.
하위 배열은 원래 배열의 연속 요소로 구성되어야 합니다. 
아래 첫 번째 예에서 [100, 200, 300]은 원래 배열의 하위 배열이지만 [100, 300]은 그렇지 않습니다.
maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null
Constraints:
Time Complexity - O(N)
Space Complexity - O(1)
*/
// ======================================

// 나
function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let temp = 0;
  let max = 0;

  for (let i = 0; i < num; i++) {
    temp += arr[i];
  }

  max = temp;

  for (let i = 0; i <= arr.length - num; i++) {
    temp = temp - arr[i] + arr[i + num];
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
