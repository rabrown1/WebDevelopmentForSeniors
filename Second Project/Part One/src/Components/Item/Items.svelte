<script>
  import Item from "./Item.svelte";

  const items = [
    {
      id: "gRdCckSAn",
      checked: false,
      text: "bread"
    },
    {
      id: "XhomHhF7K",
      checked: false,
      text: "milk"
    },
    {
      id: "f4iCMQNG-",
      checked: false,
      text: "eggs"
    },
    {
      id: "TRMTbf09s",
      checked: false,
      text: "cheese"
    },
    {
      id: "B-QjMQOTS",
      checked: false,
      text: "beans"
    },
    {
      id: "gMASkpZwZ",
      checked: false,
      text: "candy"
    }
  ];
</script>

<style>
</style>

{#each items as item}
  <Item {item} />
{/each}


