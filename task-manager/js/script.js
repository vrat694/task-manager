// script.js
const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  const actions = document.createElement('div');
  actions.className = 'actions';

  const doneBtn = document.createElement('button');
  doneBtn.textContent = '✓';
  doneBtn.onclick = () => li.classList.toggle('done');

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑';
  deleteBtn.onclick = () => li.remove();

  actions.appendChild(doneBtn);
  actions.appendChild(deleteBtn);
  li.appendChild(actions);
  list.appendChild(li);
  input.value = '';
});
