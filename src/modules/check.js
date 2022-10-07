export default function checkBox() {
  const inputChecks = document.querySelectorAll('.check');
  inputChecks.forEach((check) => {
    check.addEventListener('change', (e) => {
      let toDoItems = [];
      toDoItems = JSON.parse(localStorage.getItem('toDos') || '[]');

      toDoItems.forEach((task) => {
        if ((e.target.id === `input${task.index}`) && (task.completed === false)) {
          task.completed = true;
          e.target.checked = true;
          localStorage.setItem('toDos', JSON.stringify(toDoItems));
        } else if ((e.target.id === `input${task.index}`) && (task.completed === true)) {
          task.completed = false;
          e.target.checked = false;
          localStorage.setItem('toDos', JSON.stringify(toDoItems));
        }
      });
    });
  });
}
