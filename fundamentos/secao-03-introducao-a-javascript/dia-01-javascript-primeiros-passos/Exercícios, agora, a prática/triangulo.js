let angulo1 = 50;
let angulo2 = 55;
let angulo3 = 75;
let somaAngulos = (angulo1 + angulo2 + angulo3);

if (angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
  if (somaAngulos == 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Você digitou um ângulo inválido, por favor digitar um número positivo');
}