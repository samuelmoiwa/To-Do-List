/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import './style.css';
import titleIcon from './icons/refresh.png';
import addIcon from './icons/add.png';
import ClassToDo from './modules/manage.js';
import show from './modules/show';
import remove from './modules/remove';
import edit from './modules/edit';
import reset from './modules/resetList';
import clear from './modules/clearCheckItems';
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

ClassToDo.addItems();
show();
remove();
edit();
clear();
check();
reset();
