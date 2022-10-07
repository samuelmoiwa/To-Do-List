export default function editListItems() {
  const listItems = document.querySelectorAll('.task-item');
  listItems.forEach((item) => {
    item.addEventListener('click', () => {
      item.style.background = '#4b69c2';
      item.setAttribute('editContent', 'true');
    });

    item.addEventListener('focusout', () => {
      const toDoItems = JSON.parse(localStorage.getItem('toDos') || '[]');
      item.style.background = 'none';
      toDoItems.forEach((task) => {
        if (task.index.toString() === item.id) {
          task.description = item.value;
          localStorage.setItem('toDos', JSON.stringify(toDoItems));
        }
      });
    });
  });
}