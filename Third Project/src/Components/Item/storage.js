function updateItem(item, items) {
  const newItems = items.map(i => {
    if (i.id === item.id) {
      i.checked = item.checked;
      i.text = item.text;
    }
    return i;
  });
  window.localStorage.setItem('items', JSON.stringify(newItems));
  return getAllItems();
}

function addItem(item, items) {
  const newItems = [item].concat(items);
  window.localStorage.setItem('items', JSON.stringify(newItems));
  return getAllItems();
}

function removeItem(item, items) {
  const newItems = items.filter(i => {
    return i.id !== item.id;
  });
  window.localStorage.setItem('items', JSON.stringify(newItems));
  return getAllItems();
}

function clearItems(items) {
  window.localStorage.setItem('items', '');
  return [];
}

function getAllItems() {
  const items = window.localStorage.getItem('items');
  if (items) {
    return JSON.parse(window.localStorage.getItem('items'));
  }
  return [];
}

export { updateItem, addItem, removeItem, clearItems, getAllItems };
