<script>
  import Item from "./Item.svelte";
  import shortid from "shortid";

  import {
    updateItem,
    addItem,
    removeItem,
    clearItems,
    getAllItems
  } from "./storage.js";

  let items;
  let newItem;
  let inputItem;

  let addingItem = false;

  function addItemClick() {
    addingItem = true;
    inputItem.focus();
  }

  function handleMessage(event) {
    const action = event.detail.text;
    const item = event.detail.item;

    switch (action) {
      case "save":
        items = updateItem(item, items);
        break;
      case "trash":
        items = removeItem(item, items);
        break;
    }
  }

  function addNewItem() {
    if (newItem) {
      const item = {
        id: shortid.generate(),
        clicked: false,
        text: newItem
      };
      items = addItem(item, items);
      newItem = null;
      addingItem = false;
    }
  }

  function clearItemsClick() {
    items = clearItems(items);
  }

  function close() {
    newItem = null;
    addingItem = false;
  }

  items = getAllItems();
</script>

<style>
  .container {
    display: flex;
    flex-flow: column;
  }

  .add {
    text-align: left;
  }

  .addContainer {
    display: flex;
    flex-flow: row;
  }

  .commandButtons {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
  }

  .add-container {
    height: 0;
    overflow-y: hidden;
  }

  .addingNewItem {
    height: 100%;
    overflow-y: auto;
  }

  .command {
    margin-left: 5px;
  }

  label {
    margin-right: 5px;
  }

  input {
    width: 200px;
  }

  @media (min-width: 610px) {
    input {
      width: 350px;
    }
  }
</style>

<div class="container">
  <div class="commandButtons">
    <div class="add">
      <button on:click={addItemClick}>Add Item</button>
    </div>
    <div class="clear">
      <button on:click={clearItemsClick}>Clear Item List</button>
    </div>
  </div>
  <div class="add-container" class:addingNewItem={addingItem === true}>
    <div class="addContainer">
      <div class="label">
        <label for="newItem">Name</label>
      </div>
      <div class="input">
        <input
          id="inputItem"
          bind:this={inputItem}
          bind:value={newItem}
          type="text" />
      </div>
      <div class="command">
        <i class="material-icons" on:click={addNewItem}>save</i>
        <i class="material-icons" on:click={close}>cancel</i>
      </div>
    </div>
  </div>
  <div>
    {#each items as item}
      <div>
        <Item {item} on:message={handleMessage} />
      </div>
    {/each}
  </div>
</div>
