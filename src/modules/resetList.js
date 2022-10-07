export default function reset() {
  const resetButton = document.querySelector('.reset');
  const alert = document.querySelector('.alertText');
  let toDoItems = JSON.parse(localStorage.getItem('toDos') || '[]');
  resetButton.addEventListener('click', () => {
    // eslint-disable-next-line eqeqeq
    if (toDoItems == '') {
      alert.innerText = 'List is empty.';
      alert.style.display = 'flex';
    } else {
      // eslint-disable-next-line no-restricted-globals, no-alert
      confirm('All items will be remove perminately. Are you sure?');
      toDoItems = [];
      localStorage.setItem('toDos', JSON.stringify(toDoItems));
      window.location.reload();
    }
  });
}