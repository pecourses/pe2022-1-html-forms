'use strict';

const todoForm = document.querySelector('.todoContainer>form');
const todoInput = document.querySelector('.todoContainer input');
const todoList = document.querySelector('.todoList');

const TODO_REX_EXP = /^\s*$/;

todoInput.oninput = ({ target }) => {
  if (!TODO_REX_EXP.test(target.value)) {
    target.classList.add('valid');
    target.classList.remove('invalid');
  } else {
    target.classList.remove('valid');
    target.classList.add('invalid');
  }
};

todoForm.onsubmit = e => {
  e.preventDefault();
  const todoItem = e.target.elements['todo-item'];
  if (!TODO_REX_EXP.test(todoItem.value)) {
    todoList.append(createTodoItem(todoItem.value));
    todoItem.value = '';
    todoItem.classList.remove('valid');
  } else {
    todoItem.classList.add('invalid');
  }
};

function createTodoItem(value) {
  const todoListItem = document.createElement('li');

  const delBtn = document.createElement('button');
  delBtn.textContent = 'X';
  delBtn.onclick = ({ target }) => {
    target.parentElement.remove();
  };

  const isDoneEl = document.createElement('input');
  isDoneEl.type = 'checkbox';
  isDoneEl.onchange = ({ target }) => {
    target.parentElement.classList.toggle('doneTask');
  };

  const todoValue = document.createElement('span');
  todoValue.textContent = value;

  todoListItem.append(isDoneEl, delBtn, todoValue);

  return todoListItem;
}
