// 시간 복잡도
// O(n)
// function addUpTo(n) {
//
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

// console.log(addUpTo(6));

// O(1)
// function addUpTo1(n) {
//   return (n * (n + 1)) / 2; // 연산은 *, +, / 총 3번
// }

// console.log(addUpTo1(6));

// 브라우저 window가 열린 이후부터 문서가 만들어진 시간을 알려줌.
// let t1 = performance.now();
// addUpTo1(1000000000);
// let t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);

// O(n)
// function countUpAndDown(n) {
//   console.log('Going Up');
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//   }
//   console.log('At the Top!\nGoing down...');
//   for (let j = n - 1; j >= 0; j--) {
//     console.log(j);
//   }
//   console.log('Back down. Bye!');
// }

// countUpAndDown(10);

// O(n**2)
// function printAllPairs(n) {
//   for (var i = 0; i < n; i++) {
//     for (var j = 0; j < n; j++) {
//       console.log(i, j);
//     }
//   }
// }

// printAllPairs(5);

// O(n)
// function logAtLeast5(n) {
//   for (var i = 1; i <= Math.max(5, n); i++) {
//     console.log(i);
//   }
// }

// logAtLeast5(10);

// O(1)
// function logAtMost5(n) {
//   for (var i = 1; i <= Math.min(5, n); i++) {
//     console.log(i);
//   }
// }

// logAtMost5(3);

// O(n)
// function onlyElementsAtEvenIndex(array) {
//   var newArray = Array(Math.ceil(array.length / 2));
//   for (var i = 0; i < array.length; i++) {
//     if (i % 2 === 0) {
//       newArray[i / 2] = array[i];
//     }
//   }
//   return newArray;
// }

// console.log(onlyElementsAtEvenIndex([1, 2]));

// O(n**2)
// function subtotals(array) {
//   var subtotalArray = Array(array.length);
//   for (var i = 0; i < array.length; i++) {
//     var subtotal = 0;
//     for (var j = 0; j <= i; j++) {
//       subtotal += array[j];
//     }
//     subtotalArray[i] = subtotal;
//   }
//   return subtotalArray;
// }

// 공간복잡도

// toatal 변수 하나, i 변수 하나
// O(1) space
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// 어떤 상황에도 새로운 배열 newArr을 만듦
// 그 배열이 차지하는 공간은 입력된 배열의 크기와 비례해서 커짐
// O(n) space
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.legnth; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
