let array = ['java', 'javascript', 'python', 'html', 'css'];

let higherWord = array[0];
let lowerWord = array[0];

for (let index = 1; index < array.length; index += 1) {
  if (array[index].length > higherWord.length) {
    higherWord = array[index];
  }
}

for (let index = 1; index < array.length; index += 1) {
  if (array[index].length < lowerWord.length) {
    lowerWord = array[index];
  }
}

console.log(higherWord);
console.log(lowerWord);