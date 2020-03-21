<script>
  import ItemList from "./Components/Item/Items.svelte";
</script>

<style>
  main {
    position: fixed;
    top: 0;
    text-align: center;
    padding: 1em;
    min-width: 400px; 
    margin: 0 auto;
    border: 1px solid black;
  }

  @media (min-width: 610px) {
    main {
      max-width: 600px;
    }
  }
</style>

<main>
	<ItemList />
</main>
