export default function decorate(block) {
  const divParent = document.createElement('div');
  const divLeft = document.createElement('div');

  let i = 0;
  [...block.children].forEach((row) => {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.id = i ;
    button.append(row);
    divLeft.append(button);
    i++;
  });
  divLeft.id = 'leftblock';

  const divRight = document.createElement('div');
  divRight.id = 'rightblock';

  divParent.append(divLeft);
  divParent.append(divRight);

  block.append(divParent);

  document.getElementById('0').addEventListener('click', (event) => {
    divRight.innerHTML = '';
    const h1 = document.createElement('h1');
    h1.innerText = document.getElementById(0).getElementsByTagName('p')[0].innerText + ' is clicked' ;
    divRight.append(h1);
  });

  document.getElementById('1').addEventListener('click', (event) => {
    divRight.innerHTML = '';
    const h1 = document.createElement('h1');
    h1.innerText = document.getElementById(1).getElementsByTagName('p')[0].innerText + ' is clicked' ;
    divRight.append(h1);
  });

  document.getElementById('2').addEventListener('click', (event) => {
    divRight.innerHTML = '';
    const h1 = document.createElement('h1');
    h1.innerText = document.getElementById(2).getElementsByTagName('p')[0].innerText + ' is clicked' ;
    divRight.append(h1);
  });

  document.getElementById('3').addEventListener('click', (event) => {
    divRight.innerHTML = '';
    const h1 = document.createElement('h1');
    h1.innerText = document.getElementById(3).getElementsByTagName('p')[0].innerText + ' is clicked' ;
    divRight.append(h1);
  });

  document.getElementById('4').addEventListener('click', (event) => {
    divRight.innerHTML = '';
    const h1 = document.createElement('h1');
    h1.innerText = document.getElementById(4).getElementsByTagName('p')[0].innerText + ' is clicked' ;
    divRight.append(h1);
  });

  document.getElementById('5').addEventListener('click', (event) => {
    divRight.innerHTML = '';
    const h1 = document.createElement('h1');
    h1.innerText = document.getElementById(5).getElementsByTagName('p')[0].innerText + ' is clicked';
    divRight.append(h1);
  });
}
