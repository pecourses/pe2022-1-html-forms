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
    const todoListItem = createTodoItem(todoItem.value);
    todoList.append(todoListItem);
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
  delBtn.onclick = e => {
    e.target.parentElement.remove();
  };

  const todoValue = document.createElement('span');
  todoValue.textContent = value;

  todoListItem.append(delBtn, todoValue);

  return todoListItem;
}
