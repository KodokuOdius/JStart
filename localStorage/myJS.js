
const addItemsForm = document.querySelector('.add-items');
const itemsList = document.querySelector('.list-items');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(event) {
    event.preventDefault();
    const text = event.target.item.value;
    const item = {
        text: text,
        checked: false
    }
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));

    displayItems(items, itemsList);
    this.reset();
}

function displayItems(items, list) {
    list.innerHTML = items.map((item, index) => {
        return `<li>
            <input type="checkbox" id="item${index}" data-index="${index}" ${item.checked ? 'checked' : ''}>
            <label for="item${index}">${item.text}</label>
        </li>`;
    }).join('');
}

function toggleClick(event) {
    if (!event.target.matches('input')) return;

    const el = event.target.dataset.index;
    items[el].checked = !items[el].checked;

    localStorage.setItem('items', JSON.stringify(items));

    displayItems(items, itemsList);
}


addItemsForm.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleClick);
displayItems(items, itemsList);






