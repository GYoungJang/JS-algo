// ===============================================
/*
capitalizeWords라는 재귀 함수를 작성합니다. 
단어 배열이 주어지면 대문자로 된 각 단어를 포함하는 새 배열을 반환합니다.
*/
// ===============================================

function capitalizeWords(strArr) {
  let arr = [];

  function helper(input) {
    if (input.length === 0) return true;
    let word = input[0].toUpperCase();
    arr.push(word);

    helper(input.slice(1));
  }

  helper(strArr);

  return arr;
}

console.log(capitalizeWords(['abc', 'def', 'ghi']));
