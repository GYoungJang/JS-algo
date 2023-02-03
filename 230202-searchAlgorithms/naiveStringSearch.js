function naiveStringSearch(str1, str2) {
  let str1Length = str1.length;
  let str2Length = str2.length;
  let str1Index = 0;
  let count = 0;

  while (str1Index <= str1Length - str2Length) {
    let str2Index = 0;
    while (str2Index < str2Length) {
      if (str1[str1Index] === str2[str2Index]) {
        str1Index++;
        str2Index++;
      } else {
        str1Index++;
        break;
      }
    }
    count++;
  }
  return count;
}

console.log(naiveStringSearch('lorie loled', 'lol'));
