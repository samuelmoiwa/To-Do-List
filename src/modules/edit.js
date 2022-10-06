export default function edit() {
  const taskItems = document.querySelectorAll('.task-item');
  taskItems.forEach((item) => {
    item.addEventListener('click', () => {
      item.style.background = '#ddd';
      item.setAttribute('contenteditable', 'true');
    });
    item.addEventListener('focusout', () => {
      const toDos = JSON.parse(localStorage.getItem('toDos') || '[]');
      item.style.background = 'none';
      toDos.forEach((task) => {
        if (task.index.toString() === item.id) {
          task.description = item.value;
          localStorage.setItem('toDos', JSON.stringify(toDos));
        }
      });
    });
  });
}