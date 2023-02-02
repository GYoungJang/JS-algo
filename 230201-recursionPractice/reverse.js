// ==================================
/*
문자열을 받아들이고 거꾸로 새 문자열을 반환하는 
reverse라는 재귀 함수를 작성하십시오.

reverse('awesome') // 'emosewa'
reverse('rithmschool') // 'loohcsmhtir'
*/
// ==================================
function reverse(str) {
  if (str.length === 0) return '';

  return str[str.length - 1] + reverse(str.substring(0, str.length - 1)); // 끝 인덱스 포함 X
}

console.log(reverse('awesome'));
console.log(reverse('rithmschool'));
