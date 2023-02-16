const pageOne = document.querySelector('.book-list');
const pageTwo = document.querySelector('.add-books');
const pageThree = document.querySelector('.contact');

const listLink = document.querySelector('.list-page');
const addLink = document.querySelector('.add-page');
const contactLink = document.querySelector('.contact-page');

listLink.addEventListener('click', () => {
  pageOne.style.display = 'flex';
  pageTwo.style.display = 'none';
  pageThree.style.display = 'none';
});

addLink.addEventListener('click', () => {
  pageOne.style.display = 'none';
  pageTwo.style.display = 'flex';
  pageThree.style.display = 'none';
});

contactLink.addEventListener('click', () => {
  pageOne.style.display = 'none';
  pageTwo.style.display = 'none';
  pageThree.style.display = 'flex';
});
