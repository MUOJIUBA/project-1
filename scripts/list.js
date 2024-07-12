
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    const input = document.querySelector('#input');
    const list = document.querySelector('#list');
    const item = document.createElement('li');
    item.textContent = input.value;

    input.value = "";

    list.appendChild(item);
});