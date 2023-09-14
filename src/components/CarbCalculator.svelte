<script lang="ts">
  let carbs = 0;
  let dietaryFiber = 0;
  let fiber = 0;
  let insolubleFiber = 0;
  let netCarbs = 0;
  let solubleFiber = 0;
  let sugarAlcohol = 0;
  let sugars = 0;

  function calculate() {
    let deductibleFiber = dietaryFiber + insolubleFiber;

    if (fiber - deductibleFiber > 5) {
      deductibleFiber += solubleFiber !== 0 ? solubleFiber / 2 : 0;
    }

    const deductibleCarbs =
      sugarAlcohol !== 0 ? sugarAlcohol / 2 + deductibleFiber : deductibleFiber;

    netCarbs = carbs - deductibleCarbs;
  }

  function clear() {
    carbs = 0;
    dietaryFiber = 0;
    fiber = 0;
    insolubleFiber = 0;
    netCarbs = 0;
    solubleFiber = 0;
    sugarAlcohol = 0;
    sugars = 0;
  }
</script>

<div
  class="flex flex-col justify-center items-center gap-1 bg-white rounded-md">
  <div>
    <fieldset>
      <legend class="text-2xl font-extrabold">Carbohydrates</legend>
      <div class="flex flex-row">
        <label for="carbs">Total Carbs</label>
        <input
          type="number"
          name="carbs"
          id="carbs"
          bind:value={carbs}
          min="0" />g
      </div>
      <fieldset>
        <legend class="text-xl font-bold">Fiber</legend>
        <div class="flex flex-row">
          <label for="fiber">Total Fiber</label>
          <input
            type="number"
            name="fiber"
            id="fiber"
            bind:value={fiber}
            min="0" />g
        </div>
        <div class="flex flex-row">
          <label for="dietaryFiber">Dietary Fiber</label>
          <input
            type="number"
            name="dietaryFiber"
            id="dietaryFiber"
            bind:value={dietaryFiber}
            min="0" />g
        </div>
        <div class="flex flex-row">
          <label for="insolubleFiber">Insoluble Fiber</label>
          <input
            type="number"
            name="insolubleFiber"
            id="insolubleFiber"
            bind:value={insolubleFiber}
            min="0" />g
        </div>
        <div class="flex flex-row">
          <label for="solubleFiber">Soluble Fiber</label>
          <input
            type="number"
            name="solubleFiber"
            id="solubleFiber"
            bind:value={solubleFiber}
            min="0" />g
        </div>
      </fieldset>
      <fieldset>
        <legend class="text-xl font-bold">Sugar</legend>
        <div class="flex flex-row">
          <label for="sugars">Total Sugars</label>
          <input
            type="number"
            name="sugars"
            id="sugars"
            bind:value={sugars}
            min="0" />g
        </div>
        <div class="flex flex-row">
          <label for="sugarAlcohol">Sugar Alcohol</label>
          <input
            type="number"
            name="sugarAlcohol"
            id="sugarAlcohol"
            bind:value={sugarAlcohol}
            min="0" />g
        </div>
      </fieldset>
      <hr class="border-2 border-black" />
      <div class="flex flex-row">
        <label for="netCarbs">Net Carbs</label>
        <input
          type="number"
          name="netCarbs"
          id="netCarbs"
          bind:value={netCarbs}
          min="0"
          disabled />g
      </div>
    </fieldset>
    <ul class="text-center font-bold">
      <li>
        <button
          class="text-gradient-to-b from-emerald-500 to-emerald-900 hover:from-emerald-100 hover:to-emerald-500 underline text-emerald-900 hover:text-emerald-100"
          type="button"
          on:click={calculate}>Calculate</button>
      </li>
      <li>
        <button
          class="text-gradient-to-b from-red-500 to-red-900 hover:from-red-100 hover:to-red-500 underline text-red-900 hover:text-red-100"
          type="button"
          on:click={clear}>Clear</button>
      </li>
    </ul>
  </div>
</div>

<style>
  label {
    width: 15ch;
  }

  input[type="number"] {
    appearance: textfield;
    text-align: right;
    text-decoration: underline;
    width: 5ch;
  }
</style>
