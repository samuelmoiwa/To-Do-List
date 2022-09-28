import tasks from './toDos.js';
import dotsIcon from '../icons/dots.png';

const icon3 = new Image();
icon3.src = dotsIcon;

export default function showList() {
  const todoList = document.getElementById('do-list');
  const tasksList = tasks.sort((a, b) => a.index - b.index);

  tasksList.forEach((task, index) => {
    todoList.innerHTML += `
    <li>
      <div class="item-info">
        <input type="checkbox" id="${tasksList[index].index}">
        <label for="${tasksList[index].index}">${tasksList[index].description}</label>
      </div>
      <span id="item-icon"><img src="${icon3.src}"></span>
    </li>
    `;
  });
}