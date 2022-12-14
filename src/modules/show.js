import removeIcon from '../icons/remove.png';

const iconDelete = new Image();
iconDelete.src = removeIcon;

// eslint-disable-next-line import/prefer-default-export
export default function showListItems() {
  const todoList = document.getElementById('do-list');
  const toDosLocalStorage = JSON.parse(localStorage.getItem('toDos') || '[]');
  todoList.innerHTML = '';
  let inputCheckBox = '';
  toDosLocalStorage.forEach((task) => {
    if (task.completed === false) {
      inputCheckBox = '';
    } else {
      inputCheckBox = 'checked';
    }
    todoList.innerHTML += `
    <li>
      <div class="item-info">
        <input ${inputCheckBox} type="checkbox" class="check" id="input${task.index}">
        <input id="${task.index}" class="task-item" value="${task.description}">
      </div>
      <div class="item_icon">
        <img src="${iconDelete.src}" class="remove" id="${task.id}" alt="Remove Task" title="Remove Task">
      </div>
    </li>`;
  });
}
showListItems();