// ========================================
/*
양의 정수 배열과 양의 정수라는 두 개의 매개변수를 받는 minSubArrayLen이라는 함수를 작성하세요.
이 함수는 합계가 함수에 전달된 정수보다 크거나 같은 연속 하위 배열의 최소 길이를 반환해야 합니다. 
하나도 없으면 대신 0을 반환합니다.
Examples:
minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
Time Complexity - O(n)
Space Complexity - O(1)
*/
// ========================================

// 나 - 배열의 순서를 바꿔버렸다.. 그러면 안 되는데..ㅠ
function minSubArrayLen(arr, num) {
  let sumArr = arr.reduce((a, b) => {
    return a + b;
  }, 0);

  if (sumArr < num) return 0;

  let sortedArr = arr.sort((a, b) => a - b);

  let minLen = [];
  let sum = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    sum += sortedArr[i];
    if (sum >= num) {
      minLen.push(sortedArr[i]);
      break;
    } else {
      minLen.push(sortedArr[i]);
    }
  }
  console.log(sum);
  return minLen.length;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));

// 강의
function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  [2, 1, 6, 5, 4], 9;
  while (start < nums.length) {
    // 현재 창이 지정된 합계에 미치지 못하면 창을 오른쪽으로 이동합니다
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // 현재 창이 주어진 합계 이상이 되면 창을 축소할 수 있습니다
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // 현재 총계는 필요한 총계보다 적지만, 우리는 끝에 도달했다,
    // 이것이 필요하다, 그렇지 않으면 우리는 무한 루프에 있을 것이다
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
