const listCategories = document.querySelector('#categories');
const numberCategories = document.querySelectorAll('.item');
console.log('Number of categoies:', numberCategories.length);
const titleCategories = document.querySelectorAll('h2');
numberCategories.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const elem = category.querySelectorAll('li').length;
  console.log('Category:', title);
  console.log('elem:', elem);
});
