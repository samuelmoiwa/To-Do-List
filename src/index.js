/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import './style.css';
import titleIcon from './icons/refresh.png';
import addIcon from './icons/add.png';
import ToDo from './modules/manage.js';
import show from './modules/show';
import check from './modules/check.js';

const titleSpan = document.getElementById('title-icon');
const addSpan = document.getElementById('add-icon');
const icon1 = new Image();
icon1.src = titleIcon;
icon1.classList.add('reset');
const icon2 = new Image();
icon2.src = addIcon;
titleSpan.appendChild(icon1);
addSpan.appendChild(icon2);

ToDo.add();
show();
ToDo.remove();
ToDo.edit();
ToDo.clear();
check();
ToDo.reset();
