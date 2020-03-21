<script>
  import Item from "./Item.svelte";
  import { updateItem, addItem, removeItem, getAllItems } from "./storage.js";
  import shortid from "shortid";

  let items;
  let addingItem = false;
  let newItem;

  function handleMessage(event) {
    const action = event.detail.text;
    const item = event.detail.item;

    if (action === "save") {
      items = updateItem(item, items);
    } else {
      items = removeItem(item, items);
    }
  }

  function addItemClick() {
    addingItem = true;
  }

  function close() {
    addingItem = false;
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
  <div class="add">
    <button on:click={addItemClick}>Add Item</button>
  </div>
  {#if addingItem === true}
    <div class="addContainer">
      <div>
        <label for="newItem">Name</label>
      </div>
      <div>
        <input id="newItem" bind:value={newItem} type="text" />
      </div>
      <div class="command">
        <i class="material-icons" on:click={addNewItem}>save</i>
        <i class="material-icons" on:click={close}>cancel</i>
      </div>
    </div>
  {/if}
  <div>
    {#each items as item}
      <Item {item} on:message={handleMessage} />
    {/each}
  </div>
</div>
