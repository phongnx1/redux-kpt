function addItem(item) {
  return {type: 'ADD_ITEM', item};
}

function deleteItem(index) {
  return {type: 'DELETE_ITEM', index};
}

function toggle() {
  return {type: 'TOGGLE_IS_ADDING'};
}

module.exports = {addItem, deleteItem, toggle};
