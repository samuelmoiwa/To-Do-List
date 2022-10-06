export default function clear() {
  const clearButton = document.getElementById('clear');
  clearButton.addEventListener('click', (e) => {
    e.preventDefault();
    let toDos = JSON.parse(localStorage.getItem('toDos') || '[]');
    toDos = toDos.filter((task) => task.completed === false);
    localStorage.setItem('toDos', JSON.stringify(toDos));
    window.location.reload();
  });
}