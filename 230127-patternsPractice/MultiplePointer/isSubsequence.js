// ==========================================
/*두 개의 문자열을 받아서 첫 번째 문자열의 문자가 두 번째 문자열의 
문자의 하위 시퀀스를 형성하는지 확인하는 isSubsequence라는 함수를 작성하세요. 
즉, 함수는 첫 번째 문자열의 문자가 순서를 변경하지 않고 
두 번째 문자열의 어딘가에 나타나는지 여부를 확인해야 합니다.
Examples:
isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:
Time Complexity - O(N + M)
Space Complexity - O(1)
*/
// ==========================================

// 나
// function isSubsequence(str1, str2) {
//   if (str1.length > str2.length) return false;

//   // let start = 0;
//   // let last = str2.length - 1;
//   for (let i = 0; i < str1.length; i++) {
//     for (let j = 0; j < str2.length; j++) {}
//   }
// }

// 강의
// 반복
function isSubsequence1(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

console.log(isSubsequence1('ab', 'babc'));

// 재귀
// function isSubsequence2(str1, str2) {
//   if (str1.length === 0) return true;
//   if (str2.length === 0) return false;
//   if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
//   return isSubsequence(str1, str2.slice(1));
// }
