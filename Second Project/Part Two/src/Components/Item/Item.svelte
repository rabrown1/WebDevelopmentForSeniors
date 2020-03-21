<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let item;
  let mode = "display";

  let { id, checked, text } = item;

  function edit() {
    mode = "edit";
  }

  function save() {
    dispatch("message", {
      text: "save",
      item: item
    });
    mode = "display";
  }

  function trash() {
    dispatch("message", {
      text: "trash",
      item: item
    });
    mode = "display";
  }
</script>

<style>
  div {
    margin: 0;
    padding: 0;
  }
  .container {
    display: flex;
    box-sizing: border-box;
  }
  .check {
    width: 16px;
  }

  .completed {
    text-decoration: line-through;
  }

  .displayItem {
    text-align: left;
    margin-left: 5px;
    width: 50%;
    flex-grow: 1;
  }

  .empty {
    color: red;
    text-transform: uppercase;
  }

  .edit {
    width: 16px;
    margin: 0 5px;
  }

  .editItem {
    width: 50%;
    text-align: left;
    height: 28px;
    flex-grow: 1;
  }

  .itemText {
    padding: 0;
    height: 28px;
    width: 100%;
    max-width: 450px;
  }

  .close {
    width: 55px;
    height: 28px;
    margin: 0 5px;
  }
</style>

<div class="container">
  {#if mode === 'display'}
    <div class="check">
      <input type="checkbox" bind:checked={item.checked} />
    </div>
    <div
      class="displayItem"
      class:completed={item.checked === true}
      class:empty={item.text.trim() === ''}>
      {item.text || 'empty'}
    </div>
    <div class="edit" on:click={edit}>
      <i class="material-icons">edit</i>
    </div>
  {:else}
    <div class="editItem">
      <input
        class="itemText"
        type="text"
        bind:value={item.text}
        placeholder="enter item" />
    </div>
    <div class="close">
      <i class="material-icons" on:click={save}>save</i>
      <i class="material-icons" on:click={trash}>delete</i>
    </div>
  {/if}
</div>
