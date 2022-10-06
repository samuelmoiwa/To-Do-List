import removeIcon from '../icons/remove.png';

const icon3 = new Image();
icon3.src = removeIcon;

// eslint-disable-next-line import/prefer-default-export
export default function show() {
  const todoList = document.getElementById('do-list');
  const toDos = JSON.parse(localStorage.getItem('toDos') || '[]');
  let inputCheck = '';
  todoList.innerHTML = '';
  toDos.forEach((task) => {
    if (task.completed === false) {
      inputCheck = '';
    } else {
      inputCheck = 'checked';
    }
    todoList.innerHTML += `

    <li>
      <div class="item-info">
        <input ${inputCheck} type="checkbox" class="check" id="input${task.index}">
        <input id="${task.index}" class="task-item" value="${task.description}">
      </div>
      <span id="item-icon">
        <img src="${icon3.src}" class="remove" id="${task.id}" alt="Remove Task" title="Remove Task">
      </span>
    </li>`;
  });
}
show();