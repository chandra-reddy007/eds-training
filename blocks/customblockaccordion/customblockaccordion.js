export default function decorate(block) {
  const divParent = document.createElement('div');
  const divLeft = divParent.createElement('div');
  //const divParent = document.createElement('div');
  //const divRight = document.createElement('div');
  //const divLeft = divParent.createElement('div');
  [...block.children].forEach((row) => {
    const divsub = divLeft.createElement('div');
    divsub.append('<p> ' + row  + '</p>');
    //divRight.append(divsub);
  });
  const divRight = divParent.createElement('div');
  divRight.append('<p> is clicked </p>');
  // divParent.append(divLeft);
  // divParent.append(divRight);
  block.append(divParent);
}
