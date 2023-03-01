let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddAmount = 0;


for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    oddAmount += 1
  }
}

if (oddAmount === 0) {
  console.log('Nenhum valor ímpar encontrado');
} else {
  console.log(`O array possui ${oddAmount} números ímpares`);
}