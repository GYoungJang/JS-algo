// 강의
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }
  return arr;
}
console.log(selectionSort([2, 5, 4, 1, 9, 8, 7, 1, 1, 1]));
// function selectionSort(arr) {
//   const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };

//   for (let i = 0; i < arr.length - 1; i++) {
//     let min = arr[i];
//     let minIdx = 0;
//     for (j = i + 1; j < arr.length; j++) {
//       if (min > arr[j]) {
//         min = arr[j];
//         minIdx = j;
//       }
//       if (j === arr.length - 1) {
//         console.log(i);
//         swap(arr, i, minIdx);
//       }
//     }
//     console.log(arr);
//   }
//   return arr;
// }

// console.log(selectionSort([2, 5, 4, 1, 9, 8, 7]));
