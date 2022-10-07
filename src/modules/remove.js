export default function remove() {
  const removeIcon = document.querySelectorAll('.remove');
  removeIcon.forEach((icon) => {
    icon.addEventListener('click', (e) => {
      let toDoItems = JSON.parse(localStorage.getItem('toDos') || '[]');
      toDoItems = toDoItems.filter((task) => task.id !== e.target.id);
      toDoItems.forEach((task, i) => {
        task.index = i + 1;
      });
      localStorage.setItem('toDos', JSON.stringify(toDoItems));
      window.location.reload();
    });
  });
}