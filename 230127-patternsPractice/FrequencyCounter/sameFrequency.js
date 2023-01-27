// ===============================
/* sameFrequency라는 함수를 작성하고 두 개의 양의 정수가 주어졌을 때 
두 숫자의 자릿수 빈도가 같은지 알아보십시오.
솔루션에는 다음과 같은 복잡성이 있어야 합니다.
Time: O(N)
Sample Input:
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/
// ===============================

// 나
function sameFrequency(num1, num2) {
  if (num1 <= 0 || num2 <= 0) return false;

  let strNum1 = num1.toString();
  let strNum2 = num2.toString();

  let obj1 = {};
  let obj2 = {};

  for (let val of strNum1) {
    obj1[val] ? (obj1[val] += 1) : (obj1[val] = 1);
  }
  for (let val of strNum2) {
    obj2[val] ? (obj2[val] += 1) : (obj2[val] = 1);
  }

  for (let key in obj1) {
    if (!obj2[key]) {
      return false;
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));

// 강의

function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}
