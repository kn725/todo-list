'use strict';

const list = document.getElementById('js-list');
const input = document.getElementById('js-input');
const form = document.getElementById('js-form');

const createNewItem = () => {
  const fragment = new DocumentFragment();
  const newItem = document.createElement('li');
  const itemText = document.createElement('span');
  const deleteButton = document.createElement('input');
  const doneButton = document.createElement('input');

  itemText.innerText = input.value;
  deleteButton.value = '削除';
  deleteButton.type = 'button';
  doneButton.value = '完了';
  doneButton.type = 'button';

  newItem.append(itemText);
  newItem.append(doneButton);
  newItem.append(deleteButton);
  newItem.classList.add('list-item');
  fragment.append(newItem);
  list.append(fragment);

  deleteButton.addEventListener('click', () => {
    newItem.remove();
  });

  doneButton.addEventListener('click', () => {
    newItem.classList.add('-done');
    doneButton.remove();
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (input.value) {
    createNewItem();
    input.value = '';
    input.focus();
  } else {
    alert('タスクが入力されていません');
  }
});