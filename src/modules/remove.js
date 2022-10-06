export default function remove() {
  const removeIcon = document.querySelectorAll('.remove');
  removeIcon.forEach((icon) => {
    icon.addEventListener('click', (e) => {
      let toDos = JSON.parse(localStorage.getItem('toDos') || '[]');
      toDos = toDos.filter((task) => task.id !== e.target.id);
      toDos.forEach((task, i) => {
        task.index = i + 1;
      });
      localStorage.setItem('toDos', JSON.stringify(toDos));
      window.location.reload();
    });
  });
}