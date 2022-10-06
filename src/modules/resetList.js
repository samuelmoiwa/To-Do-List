export default function reset() {
  const resetButton = document.querySelector('.reset');
  const alert = document.querySelector('.alert');
  let toDos = JSON.parse(localStorage.getItem('toDos') || '[]');
  resetButton.addEventListener('click', () => {
    if (toDos === '') {
      alert.innerText = 'List is empty.';
      alert.style.display = 'flex';
    } else {
      // eslint-disable-next-line no-lonely-if, no-restricted-globals, no-alert
      if (confirm('All items will be remove perminately. Are you sure?')) {
        toDos = [];
        localStorage.setItem('toDos', JSON.stringify(toDos));
        window.location.reload();
      }
    }
  });
}