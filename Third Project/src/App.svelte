<script>
  import ItemList from "./Components/Item/Items.svelte";

</script>

<style>
  .app-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 45px;
    text-align: center;
    background-color: white;
    border-bottom: 1px solid black;
    z-index: 10;
    font-size: 22px;
    font-weight: bold;
    padding-top: 8px;
  }

  main {
    padding: 1em;
    padding-top: 50px;
    width: 100%;
    min-width: 300px;
    margin: 0 auto;
  }


  @media (min-width: 610px) {
    main {
      max-width: 600px;
    }
  }
</style>

<main>
  <div class="app-header">
    <div>Shopping List</div>
</div>
  <ItemList />
</main>
