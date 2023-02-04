function naiveStringSearch(str1, str2) {
  let str1Index = 0;
  let count = 0;

  while (str1Index <= str1.length - str2.length) {
    let str2Index = 0;
    while (str2Index < str2.length) {
      if (str1[str1Index] === str2[str2Index]) {
        str1Index++;
        str2Index++;
      } else {
        str1Index++;
        break;
      }
      if (str2Index === str2.length) count++;
    }
  }
  return count;
}

console.log(naiveStringSearch('lorie loled', 'e'));

// 강의
function naiveSearch(long, short) {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}
