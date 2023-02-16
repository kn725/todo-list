'use strict';

const list = document.getElementById('js-list');
const input = document.getElementById('js-input');
const form = document.getElementById('js-form');

const createNewItem = () => {
  const fragment = new DocumentFragment();
  const newItem = document.createElement('li');
  const itemText = document.createElement('span');
  const deleteButton = document.createElement('input');

  itemText.innerText = input.value;
  deleteButton.value = '削除';
  deleteButton.type = 'button';

  newItem.append(itemText);
  newItem.append(deleteButton);
  fragment.append(newItem);
  list.append(fragment);

  deleteButton.addEventListener('click', () => {
    newItem.remove();
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