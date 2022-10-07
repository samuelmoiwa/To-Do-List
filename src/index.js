/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import './style.css';
import titleIcon from './icons/refresh.png';
import addIcon from './icons/add.png';
import ClassToDo from './modules/addToList.js';
import showListItems from './modules/show.js';
import remove from './modules/remove.js';
import editListItems from './modules/edit.js';
import reset from './modules/resetList.js';
import clear from './modules/clearCheckItems.js';
import checkBox from './modules/check.js';

const addSpan = document.getElementById('add-icon');
const titleSpan = document.getElementById('title-icon');

const iconTitle = new Image();
iconTitle.src = titleIcon;
titleSpan.appendChild(iconTitle);

const iconAdd = new Image();
iconAdd.src = addIcon;
addSpan.appendChild(iconAdd);

iconTitle.classList.add('reset');

checkBox();
showListItems();
ClassToDo.addItems();
reset();
remove();
editListItems();
clear();
