// Exercício 1  

const elementH1 = document.createElement('h1');
elementH1.innerHTML = 'TrybeTrip - Agência de Viagens';
document.body.appendChild(elementH1);

// Exercício 2

const elementMain = document.createElement('main');
elementMain.className = 'main-content';
document.body.appendChild(elementMain)

// Exercício 3

const elememtSectionCenter = document.createElement('section');
elememtSectionCenter.className = 'center-content';
elementMain.appendChild(elememtSectionCenter);

// Exercício 4

const paragraph = document.createElement('p');
paragraph.innerHTML = 'Olá! Estou aprendendo DOM';
elememtSectionCenter.appendChild(paragraph);

// Exercício 5

const elememtSectionLeft = document.createElement('section');
elememtSectionLeft.className = 'left-content';
elementMain.appendChild(elememtSectionLeft);

// Exercício 6

const elememtSectionRight = document.createElement('section');
elememtSectionRight.className = 'right-content';
elementMain.appendChild(elememtSectionRight);

// Exercício 7

const elementImg = document.createElement('img');
elementImg.src = 'https://picsum.photos/200';
elementImg.className = 'small-image';
elememtSectionLeft.appendChild(elementImg);

// Exercício 8

const elementList