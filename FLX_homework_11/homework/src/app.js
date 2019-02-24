const input = document.getElementById('list-input');
const addButton = document.getElementById('addButton');
const element = document.getElementById('list');
addButton.setAttribute('disabled', 'disabled');

let start = 0;
let end = -7;

let allItemsCount = document.getElementById('list').childElementCount;

let addNew = () => {
    let list = document.getElementById('list');
    let listItem = document.createElement('div');
    let checkBoxDiv = document.createElement('div');
    let deleteBoxDiv = document.createElement('div');
    let iBox = document.createElement('i');
    let iDel = document.createElement('i');
    let paragraph = document.createElement('p');
    allItemsCount++;

    iBox.className = 'material-icons';
    iBox.id = allItemsCount;
    iBox.innerHTML = 'check_box_outline_blank';

    paragraph.textContent = input.value;

    iDel.className = 'material-icons add-btn';
    iDel.id = allItemsCount + '_delete';
    iDel.innerHTML = 'delete';

    deleteBoxDiv.className = 'delete-block';
    checkBoxDiv.className = 'checkbox';
    listItem.className = 'list-item ';

    listItem.appendChild(checkBoxDiv);
    checkBoxDiv.appendChild(iBox);
    checkBoxDiv.appendChild(paragraph);

    listItem.appendChild(deleteBoxDiv);
    deleteBoxDiv.appendChild(iDel);

    list.appendChild(listItem);

    input.value = '';
    addButton.setAttribute('disabled', 'disabled');
    document.addEventListener('click', clickItem, false);
}

let checkPossibility = () => {
    let limit = 10;
    if (Number(allItemsCount) === limit) {
        document.getElementById('notification').style.display = 'block';
    } else if (input.value.trim()) {
        addButton.removeAttribute('disabled');
        addButton.addEventListener('click', addNew, false);
    } else {
        addButton.setAttribute('disabled', 'disabled');
    }
}

let clickItem = (event) => {
    let id = event.target.id;
    switch (id) {
        case '1':
            event.target.textContent = 'check_box';
            event.target.setAttribute('id', 'checked-square');
            event.target.style.cursor = 'defaulf';
            break;
        case '2':
            event.target.textContent = 'check_box';
            event.target.setAttribute('id', 'checked-square');
            event.target.style.cursor = 'defaulf';
            break;
        case '3':
            event.target.textContent = 'check_box';
            event.target.setAttribute('id', 'checked-square');
            event.target.style.cursor = 'defaulf';
            break;
        case '4':
            event.target.textContent = 'check_box';
            event.target.setAttribute('id', 'checked-square');
            event.target.style.cursor = 'defaulf';
            break;
        case '5':
            event.target.textContent = 'check_box';
            event.target.setAttribute('id', 'checked-square');
            event.target.style.cursor = 'defaulf';
            break;
        case '6':
            event.target.textContent = 'check_box';
            event.target.setAttribute('id', 'checked-square');
            event.target.style.cursor = 'defaulf';
            break;
        case '7':
            event.target.textContent = 'check_box';
            event.target.setAttribute('id', 'checked-square');
            event.target.style.cursor = 'defaulf';
            break;
        case '8':
            event.target.textContent = 'check_box';
            event.target.setAttribute('id', 'checked-square');
            event.target.style.cursor = 'defaulf';
            break;
        case '9':
            event.target.textContent = 'check_box';
            event.target.setAttribute('id', 'checked-square');
            event.target.style.cursor = 'defaulf';
            break;
        case '10':
            event.target.textContent = 'check_box';
            event.target.setAttribute('id', 'checked-square');
            event.target.style.cursor = 'defaulf';
            break;
        case '1_delete':
            id = id.slice(start, end);
            element.removeChild(element.childNodes[id - 1]);
            break;
        case '2_delete':
            id = id.slice(start, end);
            element.removeChild(element.childNodes[id - 1]);
            break;
            break;
        case '3_delete':
            id = id.slice(start, end);
            element.removeChild(element.childNodes[id - 1]);
            break;
        case '4_delete':
            id = id.slice(start, end);
            element.removeChild(element.childNodes[id - 1]);
            break;
        case '5_delete':
            id = id.slice(start, end);
            element.removeChild(element.childNodes[id - 1]);
            break;
        case '6_delete':
            id = id.slice(start, end);
            element.removeChild(element.childNodes[id - 1]);
            break;
        case '7_delete':
            id = id.slice(start, end);
            element.removeChild(element.childNodes[id - 1]);
            break;
        case '8_delete':
            id = id.slice(start, end);
            element.removeChild(element.childNodes[id - 1]);
            break;
        case '9_delete':
            id = id.slice(start, end);
            element.removeChild(element.childNodes[id - 1]);
            break;
        case '10_delete':
            id = id.slice(start, end);
            element.removeChild(element.childNodes[id - 1]);
            break;
        default:
            break;
    }
}

input.addEventListener('keyup', checkPossibility, false);