function countDown(num) {
  if (num <= 0) {
    console.log('All done!');
    // 무조건 return 문이 있어야함.
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

// 반복문으로도 가능
function countDown1(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
  console.log('All done!');
}

// ================================

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
sumRange(3);

/*
sumRange(3) 이 함수는 대기 중 sumRange(2) 값을 아직 몰라서
return 3 + sumRange(2)
           return 2 + sumRange(1)
                      return 1 
                      
*/

// ========================================

// factorial
function factorial(num) {
  if (num === 1) return 1;
  return n * factorial(num - 1);
}

// 반복문
function factorial1(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

// ================================
// 헬퍼 메소드 재귀
function CollectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

CollectOddValues([1, 2, 3, 4, 5, 6, 6, 7, 8]);

// 순수 재귀

function CollectOddValues1(arr) {
  // 호출 될 때마다 리셋
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  // 모든 배열을 하나의 배열로 합침
  newArr = concat(CollectOddValues1(arr.slice(1)));
  return newArr;
}

CollectOddValues1([1, 2, 3, 4, 5]);
/* [1].concat(CollectOddValues1([2,3,4,5]))
                   [].concat(CollectOddValues1([3,4,5]))
                                 [3].concat(CollectOddValues1([4,5]))
                                                    [].concat(CollectOddValues1([5]))
                                                                   [5].concat(CollectOddValues1([])) 
                                                                                    return []    
*/
