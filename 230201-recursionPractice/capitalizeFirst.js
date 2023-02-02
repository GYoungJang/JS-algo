// ================================================
/*
capitalizeFirst라는 재귀 함수를 작성하십시오. 
문자열 배열이 주어지면 배열에 있는 각 문자열의 첫 글자를 대문자로 표시합니다.

capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
*/
// ================================================

function capitalizeFirst(strArr) {
  let arr = [];

  function helper(input) {
    if (input.length === 0) return;
    let capital = input[0];
    capital = capital.replace(capital[0], capital[0].toUpperCase());
    arr.push(capital);
    helper(input.slice(1));
  }

  helper(strArr);

  return arr;
}

console.log(capitalizeFirst(['car', 'taco', 'banana']));
