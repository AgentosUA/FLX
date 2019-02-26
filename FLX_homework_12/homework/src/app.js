let rootNode = document.getElementById('root'),
    localKeyDo = 'TodoList',
    localKeyDone = 'ReadyList',
    getDoKey = localStorage.getItem(localKeyDo),
    getDoneKey = localStorage.getItem(localKeyDone),
    noItem = -1,
    uncheckedItems = JSON.parse(getDoKey) || [],
    checkedItems = JSON.parse(getDoneKey) || [],
    mainHash = '',
    addHash = '#/add',
    modifyHash = '#/modify/';

let setItemToStorage = (array, localStorageKey) => {
    localStorage.setItem(localStorageKey, JSON.stringify(array));
}

window.addEventListener('load', checkPageHash);
window.addEventListener('hashchange', checkPageHash);

let showHomePage = () => {
    rootNode.innerHTML = '';
    let h1 = document.createElement('h1');
    rootNode.appendChild(h1);
    let h1Text = document.createTextNode('Simple TODO application');
    h1.appendChild(h1Text);
    let addButton = document.createElement('button');
    rootNode.appendChild(addButton);
    let addButtonText = document.createTextNode('Add new task');
    addButton.appendChild(addButtonText);
    addButton.setAttribute('class', 'btn');
    let arrayShow = uncheckedItems.concat(checkedItems);

    if (!arrayShow.length) {
        let paragraph = document.createElement('p');
        rootNode.appendChild(paragraph);

        let paragraphText = document.createTextNode('TODO is empty');
        paragraph.setAttribute('class', 'empty');
        paragraph.appendChild(paragraphText);
    } else {
        arrayShow.forEach((item) => {
            let listItem = document.createElement('div');
            listItem.setAttribute('class', 'list-item');
            rootNode.appendChild(listItem);
            listItem.setAttribute('id', item.id);
            let check = document.createElement('img');
            listItem.appendChild(check);
            check.setAttribute('class', 'check');
            let toDoAction = document.createElement('a');
            listItem.appendChild(toDoAction);
            let toDoActionDescription = document.createTextNode(item.description);
            toDoAction.appendChild(toDoActionDescription);
            toDoAction.setAttribute('class', 'description');
            toDoAction.setAttribute('href', `${modifyHash}${item.id}`);
            if (!item.isDone) {
                check.setAttribute('src', './assets/img/todo-s.png');
            } else {
                check.setAttribute('src', './assets/img/done-s.png');
                toDoAction.style.backgroundColor = 'grey';
            }

            check.addEventListener('click', markChecked);
            let remove = document.createElement('img');
            listItem.appendChild(remove);
            remove.setAttribute('src', './assets/img/remove-s.jpg');
            remove.addEventListener('click', deleteItem);
        });
    }
    addButton.addEventListener('click', setAddHash);
}

let markChecked = (event) => {
    let id = parseInt(event.target.parentNode.id);
    let idRemoveItem = uncheckedItems.findIndex(item => item.id === id);
    if (idRemoveItem === noItem) {
        return
    }
    let currentActionItemInTodoList = uncheckedItems[idRemoveItem];
    currentActionItemInTodoList.isDone = true;
    uncheckedItems.splice(idRemoveItem, 1);
    checkedItems.push(currentActionItemInTodoList);

    setItemToStorage(uncheckedItems, localKeyDo);
    setItemToStorage(checkedItems, localKeyDone);

    showHomePage();
}

let deleteItem = (event) => {
    let id = parseInt(event.target.parentNode.id);
    let removeUnchecked = uncheckedItems.findIndex(item => item.id === id);
    if (removeUnchecked !== noItem) {
        uncheckedItems.splice(removeUnchecked, 1);
    }
    let removeCheckedItems = checkedItems.findIndex(item => item.id === id);

    if (removeCheckedItems !== noItem) {
        checkedItems.splice(removeCheckedItems, 1);
    }

    setItemToStorage(uncheckedItems, localKeyDo);
    setItemToStorage(checkedItems, localKeyDone);

    showHomePage();
}

let setAddHash = (event) => {
    window.location.hash = addHash;
    event.preventDefault();
}

let showAddPage = () => {
    rootNode.innerHTML = '';
    let h1 = document.createElement('h1');
    rootNode.appendChild(h1);
    let h1Text = document.createTextNode('Add task');
    h1.appendChild(h1Text);
    let inputNew = document.createElement('input');
    inputNew.setAttribute('id', 'input');
    rootNode.appendChild(inputNew);
    let div = document.createElement('div');
    div.setAttribute('class', 'buttons');
    rootNode.appendChild(div);
    let cancelButton = document.createElement('button');
    div.appendChild(cancelButton);
    cancelButton.setAttribute('class', 'btn');
    let cancelButtonText = document.createTextNode('Cancel');
    cancelButton.appendChild(cancelButtonText);
    let saveBtn = document.createElement('button');
    div.appendChild(saveBtn);
    saveBtn.setAttribute('class', 'btn');
    let saveBtnText = document.createTextNode('Add new');
    saveBtn.appendChild(saveBtnText);
    cancelButton.addEventListener('click', setmainHash);
    saveBtn.addEventListener('click', saveAfterAdd);
}

let setmainHash = (event) => {
    window.location.hash = mainHash;
    event.preventDefault();
}

let newId = () => {
    let ids = uncheckedItems.concat(checkedItems).map((item) => item.id);
    return ids.length ? 1 + Math.max(...ids) : 1;
}

let saveAfterAdd = (event) => {
    let newAction = document.getElementById('input').value;
    if (!newAction) {
        return;
    }
    uncheckedItems.push({ isDone: false, id: newId(), description: newAction });
    setItemToStorage(uncheckedItems, localKeyDo);
    setmainHash(event);
}

let showModifyPage = () => {
    let id = parseInt(location.hash.split('/').pop());
    let itemToModify = uncheckedItems.find(item => item.id === id);
    if (!itemToModify) {
        window.location.hash = mainHash;
        return;
    }
    rootNode.innerHTML = '';
    let h1 = document.createElement('h1');
    rootNode.appendChild(h1);
    let h1Text = document.createTextNode('Modify item');
    h1.appendChild(h1Text);
    let inputWithActionItem = document.createElement('input');
    inputWithActionItem.setAttribute('id', 'input');
    rootNode.appendChild(inputWithActionItem);
    inputWithActionItem.defaultValue = itemToModify.description;
    let div = document.createElement('div');
    div.setAttribute('class', 'buttons');
    rootNode.appendChild(div);
    let cancelButton = document.createElement('button');
    div.appendChild(cancelButton);
    cancelButton.setAttribute('class', 'btn');
    let cancelButtonText = document.createTextNode('Cancel');
    cancelButton.appendChild(cancelButtonText);
    let saveBtn = document.createElement('button');
    div.appendChild(saveBtn);
    saveBtn.setAttribute('class', 'btn');
    let saveBtnText = document.createTextNode('Save changes');
    saveBtn.appendChild(saveBtnText);
    cancelButton.addEventListener('click', setmainHash);
    saveBtn.addEventListener('click', saveModifed);
}

let saveModifed = (event) => {
    let modAction = document.getElementById('input').value;
    if (!modAction) {
        return;
    }
    let id = parseInt(location.hash.split('/').pop());
    uncheckedItems.find(item => item.id === id).description = modAction;
    setItemToStorage(uncheckedItems, localKeyDo);
    setmainHash(event);
}

function checkPageHash() {
    if (location.hash === mainHash) {
        showHomePage();
    }
    if (location.hash === addHash) {
        showAddPage();
    }
    if (location.hash.includes(modifyHash)) {
        showModifyPage();
    }
}