// Exercício 1  

const elementH1 = document.createElement('h1');
elementH1.className = 'title';
elementH1.innerHTML = 'TrybeTrip - Agência de Viagens';
document.body.appendChild(elementH1);

// Exercício 2

const elementMain = document.createElement('main');
elementMain.className = 'main-content';
document.body.appendChild(elementMain)

// Exercício 3

const elementSectionCenter = document.createElement('section');
elementSectionCenter.className = 'center-content';
elementMain.style.backgroundColor = 'green';
elementMain.appendChild(elementSectionCenter);

// Exercício 4

const paragraph = document.createElement('p');
paragraph.innerHTML = 'Olá! Estou aprendendo DOM';
elementSectionCenter.appendChild(paragraph);

// Exercício 5

const elementSectionLeft = document.createElement('section');
elementSectionLeft.className = 'left-content';
elementMain.appendChild(elementSectionLeft);

// Exercício 6

const elementSectionRight = document.createElement('section');
elementSectionRight.className = 'right-content';
elementSectionRight.style.marginRight = 'auto';
elementMain.appendChild(elementSectionRight);

// Exercício 7

const elementImg = document.createElement('img');
elementImg.src = 'https://picsum.photos/200';
elementImg.className = 'small-image';
elementSectionLeft.appendChild(elementImg);

// Exercício 8

const elementUl = document.createElement('ul');
elementSectionRight.appendChild(elementUl);
const arrayNumbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis',
  'Sete', 'Oito', 'Nove', 'Dez']
for (let num in arrayNumbers) {
  const elementLi = document.createElement('li');
  elementLi.innerHTML = arrayNumbers[num];
  elementUl.appendChild(elementLi);
}

// Exercício 9

for (let index = 1; index <= 3; index += 1) {
  const elementH3 = document.createElement('h3');
  elementH3.className = 'description';
  elementH3.innerHTML = `H3 ${index}`;
  elementMain.appendChild(elementH3);
}

// Remover section left

const sectionLeftContent = document.getElementsByClassName('left-content')[0];
      elementMain.removeChild(sectionLeftContent);

// Remover os últimos elementos da lista

const ul = document.getElementsByTagName('ul')[0];
      ul.lastChild.remove();
      ul.lastChild.remove();