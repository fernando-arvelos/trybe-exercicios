let num1 = 55;
let num2 = 55;
let num3 = 55;

if (num1 > num2 && num1 > num3) {
  console.log(`num1 (${num1}) é o maior número!`);
} else if (num2 > num1 && num2 > num3) {
  console.log(`num2 (${num2}) é o maior número!`);
} else if (num3 > num1 && num3 > num2) {
  console.log(`num3 (${num3}) é o maior número!`);
} else if (num1 === num2 && num1 > num3) {
  console.log(`num1 (${num1}) e o num2 (${num2}) são iguais e maiores que o num3 (${num3})!`);
} else if (num1 === num3 && num1 > num2) {
  console.log(`num1 (${num1}) e o num3 (${num3}) são iguais e maiores que o num2 (${num2})!`);
} else if (num2 === num3 && num2 > num1) {
  console.log(`num2 (${num2}) e o num3 (${num3}) são iguais e maiores que o num1 (${num1})!`);
} else {
  console.log(`Todos os números são iguais (${num1})!`);
}