<script>
  export let id = "";
  export let name = "";
  export let label = "";
  export let value = "";
</script>

<div class="flex justify-center items-center gap-1">
  <label for={id}>{label}</label>
  <input type="color" {name} {id} bind:value />
</div>

<style>
  label {
    color: white;
    width: 16ch;
  }
</style>
