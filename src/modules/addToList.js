const toDoItems = [];

export default class ClassToDo {
  constructor(todo) {
    this.description = todo;
    this.index = toDoItems.length + 1;
    this.id = Date.now().toString();
    this.completed = false;
  }

  static addItems() {
    const alert = document.querySelector('.alertText');
    const addIcon = document.getElementById('add-icon');
    const inputToList = document.getElementById('do-input');

    addIcon.addEventListener('click', () => {
      let toDoItems = [];
      toDoItems = JSON.parse(localStorage.getItem('toDos') || '[]');
      if (inputToList.value !== '') {
        const newTask = new ClassToDo(inputToList.value);
        toDoItems.push(newTask);
        toDoItems.forEach((task, i) => {
          task.index = i + 1;
        });
        localStorage.setItem('toDos', JSON.stringify(toDoItems));
        inputToList.value = '';
        window.location.reload();
      }
      alert.innerText = 'input in empty, add text!';
      alert.style.display = 'flex';
    });
  }
}
