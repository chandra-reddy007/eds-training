export default function decorate(block) {
  const divParent = document.createElement('div');
  const divLeft = divParent.createElement('div');
  [...block.children].forEach((row) => {
    const divsub = divLeft.createElement('div');
    divsub.append('<p> ' + row  + '</p>');

  });
  const divRight = divParent.createElement('div');
  divRight.append('<p> is clicked </p>');
  block.append(divParent);
}
