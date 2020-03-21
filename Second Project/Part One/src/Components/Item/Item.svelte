<script>
  export let item;
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

  .displayItem {
    text-align: left;
    margin-left: 5px;
    width: 50%;
    flex-grow: 1;
  }

  .edit {
    width: 16px;
    margin: 0 5px;
  }

</style>

<div class="container">
  <div class="check">
    <input type="checkbox" />
  </div>
  <div class="displayItem">
    {item.text || 'empty'}
  </div>
  <div class="edit">
    <i class="material-icons">edit</i>
  </div>
</div>
