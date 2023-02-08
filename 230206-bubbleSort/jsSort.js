// num1 - num2가 음수 반환이면 num1이 num2 앞
// num1 - num2가 양수 반환이면 num2가 num1 앞
function numberCompare(num1, num2) {
  console.log(num1, num2);
  return num2 - num1;
}
const arr = [6, 4, 15, 10];
console.log(arr.sort(numberCompare));
