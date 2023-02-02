// ============================================
/* 전달된 문자열이 팰린드롬이면 true를 반환하는 
isPalindrome이라는 재귀 함수를 작성하십시오(앞으로와 뒤로 동일하게 읽음). 
그렇지 않으면 false를 반환합니다.
isPalindrome('awesome') // false
isPalindrome('foobar') // false
isPalindrome('tacocat') // true
isPalindrome('amanaplanacanalpanama') // true
isPalindrome('amanaplanacanalpandemonium') // false
*/
// ============================================

function isPalindrome(str) {
  if (str.length === 0 || str.length === 1) return true;
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.substring(1, str.length - 1));
  } else {
    return false;
  }
}

console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false
