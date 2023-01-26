// =======================================================
// 두 개의 문자열을 취하며 두 문자열이 서로의 아나그램이면 참을 반환
// =======================================================

// 내가 한 것
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let strObj1 = {};
  let strObj2 = {};

  for (let char of str1) {
    strObj1[char] = (strObj1[char] || 0) + 1;
  }
  for (let char of str2) {
    strObj2[char] = (strObj2[char] || 0) + 1;
  }

  // console.log(strObj1);
  // console.log(strObj2);
  for (let key in strObj1) {
    if (strObj1[key] !== strObj2[key]) {
      return false;
    }
  }
  return true;
}

// console.log(validAnagram('', ''));

// 강의
function validAnagram1(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookUp = {};

  for (let char of first) {
    lookUp[char] ? (lookUp[char] += 1) : (lookUp[char] = 1);
  }

  // for (let i = 0; i < first.length; i++) {
  //   let letter = first[i];
  //   // letter가 존재하면 증가시키고 아니면 1로 설정
  //   lookUp[letter] ? (lookUp[letter] += 1) : (lookUp[letter] = 1);
  // }

  for (let char of second) {
    if (!lookUp[char]) {
      return false;
    } else {
      lookUp[char] -= 1;
    }
  }
  // for (let i = 0; i < second.length; i++) {
  //   let letter = second[i];
  //   if (!lookUp[letter]) {
  //     return false;
  //   } else {
  //     lookUp[letter] -= 1;
  //   }
  // }
  return true;
}
console.log(validAnagram1('anagdram', 'nagarams'));
