// ======================
// 2개의 배열을 받는 same이라는 함수를 작성
// 배열의 모든 값이 두 번째 배열에 해당하는 값의 제곱을 가지면 참을 반환.
// 값의 빈도는 동일해야 한다.
// same([1,2,3], [4,1,9]) => true
// same([1,2,3], [1,9]) => false
// same([1,2,1], [4,4,1]) => false (must be same frequency)

// O(n**2) 중첩루프..
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    console.log(arr2);
    // 2 번째 배열에서 해당 값 삭제..
    // 중복인 수가 있을 수 있으니까..
    // indexOf는 찾으려는 문자열이 가장 처음으로 나타나는 인덱스 반환
    arr2.splice(correctIndex, 1);
  }
  return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 2]));

// 빈도 카운터 패턴
// O(n)
function same1(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    return true;
  }
}

console.log(same1([1, 2, 3, 2], [9, 1, 4, 4]));

function aaa(a, b) {
  // a, b의 길이가 다르면 false 반환
  if (a.length !== b.length) {
    return false;
  }

  // 빈 객체
  let Obj1 = {};
  let Obj2 = {};

  // 배열을 돌면서 빈 객체에 동적으로 값 할당
  // 이미 존재하면 +1 없으면 1을 기본값으로..
  for (let value of a) {
    Obj1[value] ? (Obj1[value] += 1) : (Obj1[value] = 1);
  }
  for (let value of b) {
    Obj2[value] ? (Obj2[value] += 1) : (Obj2[value] = 1);
  }

  // Obj1 객체를 돌면서
  for (let key in Obj1) {
    // 1객체 키의 제곱을 한 키가 Obj2에 없을 경우 false
    if (!(key ** 2 in Obj2)) {
      return false;
    }
    // 두 객체의 키 밸류 값이 일치하지 않을 경우 false
    if (Obj1[key] !== Obj2[key ** 2]) {
      return false;
    }
  }
  return true;
}

console.log(aaa([1, 2, 2, 4], [1, 4, 9, 16]));
