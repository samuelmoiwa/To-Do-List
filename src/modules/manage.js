const toDos = [];

export default class ClassToDo {
  constructor(todo) {
    this.description = todo;
    this.index = toDos.length + 1;
    this.id = Date.now().toString();
    this.completed = false;
  }

  static addItems() {
    const alert = document.querySelector('.alert');
    const addIcon = document.getElementById('add-icon');
    const doInput = document.getElementById('do-input');
    alert.style.display = 'none';
    addIcon.addEventListener('click', () => {
      let toDos = [];
      toDos = JSON.parse(localStorage.getItem('toDos') || '[]');
      if (doInput.value !== '') {
        const newTask = new ClassToDo(doInput.value);
        toDos.push(newTask);
        toDos.forEach((task, i) => {
          task.index = i + 1;
        });
        localStorage.setItem('toDos', JSON.stringify(toDos));
        doInput.value = '';
        window.location.reload();
      } else {
        alert.innerText = 'input in empty, add text!';
        alert.style.display = 'flex';
      }
    });
  }
}
