import removeIcon from '../icons/remove.png';

const icon3 = new Image();
icon3.src = removeIcon;
const toDos = [];

export default class ToDo {
  constructor(todo) {
    this.description = todo;
    this.index = toDos.length + 1;
    this.id = Date.now().toString();
    this.completed = false;
  }

  static add() {
    const alert = document.querySelector('.alert');
    const addIcon = document.getElementById('add-icon');
    const doInput = document.getElementById('do-input');
    alert.style.display = 'none';
    addIcon.addEventListener('click', () => {
      let toDos = [];
      toDos = JSON.parse(localStorage.getItem('toDos') || '[]');
      if (doInput.value !== '') {
        const newTask = new ToDo(doInput.value);
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

  static remove() {
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

  static edit() {
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

  static clear() {
    const clearButton = document.getElementById('clear');
    clearButton.addEventListener('click', (e) => {
      e.preventDefault();
      let toDos = JSON.parse(localStorage.getItem('toDos') || '[]');
      toDos = toDos.filter((task) => task.completed === false);
      localStorage.setItem('toDos', JSON.stringify(toDos));
      window.location.reload();
    });
  }

  static reset() {
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
}
