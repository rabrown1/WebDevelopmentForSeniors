<script>
  import ItemList from "./Components/Item/Items.svelte";
</script>

<style>
  main {
    text-align: center;
    padding: 16px;
    min-width: 200px; 
    margin: 0 auto;
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
