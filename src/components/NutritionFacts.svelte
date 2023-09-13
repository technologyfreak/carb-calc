<script lang="ts">
  let fiber = 0;
  let dietaryFiber = 0;
  let solubleFiber = 0;
  let insolubleFiber = 0;
  let sugarAlcohol = 0;
  let carbs = 0;
  let sugars = 0;
  let netCarbs = 0;

  function calculate() {
    let deductibleFiber = dietaryFiber + insolubleFiber;

    if (fiber - deductibleFiber > 5) {
      deductibleFiber += solubleFiber !== 0 ? solubleFiber / 2 : 0;
    }

    const deductibleCarbs = sugarAlcohol !== 0 ? sugarAlcohol / 2 + deductibleFiber : deductibleFiber;

    netCarbs = carbs - deductibleCarbs;
  }

  function clear() {
    fiber = 0;
    dietaryFiber = 0;
    solubleFiber = 0;
    insolubleFiber = 0;
    sugarAlcohol = 0;
    carbs = 0;
    sugars = 0;
    netCarbs = 0;
  }
</script>

<div class="text-center m-auto p-1 max-w-sm w-full bg-white font-bold">
  <dl class="child:columns-2 child:text-right">
    <dt class="grams">
      <span class="font-extrabold">Net Carbs</span>
      <input
        type="number"
        name="netCarbs"
        id="netCarbs"
        bind:value={netCarbs}
        min="0"
        disabled />
    </dt>
    <dd class="grams">
      <label for="carbs">Carbs</label>
      <input type="number" name="carbs" id="carbs" bind:value={carbs} min="0" />
    </dd>
    <dd class="grams">
      <label for="fiber">Fiber</label>
      <input type="number" name="fiber" id="fiber" bind:value={fiber} min="0" />
    </dd>
    <dd class="grams">
      <label for="dietaryFiber">Dietary Fiber</label>
      <input
        type="number"
        name="dietaryFiber"
        id="dietaryFiber"
        bind:value={dietaryFiber}
        min="0" />
    </dd>
    <dd class="grams">
      <label for="insolubleFiber">Insoluble Fiber</label>
      <input
        type="number"
        name="insolubleFiber"
        id="insolubleFiber"
        bind:value={insolubleFiber}
        min="0" />
    </dd>
    <dd class="grams">
      <label for="solubleFiber">Soluble Fiber</label>
      <input
        type="number"
        name="solubleFiber"
        id="solubleFiber"
        bind:value={solubleFiber}
        min="0" />
    </dd>
    <dd class="grams">
      <label for="sugars">Sugars</label>
      <input
        type="number"
        name="sugars"
        id="sugars"
        bind:value={sugars}
        min="0" />
    </dd>
    <dd class="grams">
      <label for="sugarAlcohol">Sugar Alcohol</label>
      <input
        type="number"
        name="sugarAlcohol"
        id="sugarAlcohol"
        bind:value={sugarAlcohol}
        min="0" />
    </dd>
  </dl>
</div>
<ul class="text-center m-auto mt-1 p-1 max-w-sm w-full bg-white font-bold">
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

<style>
  label {
    max-width: 13ch;
    width: max-content;
  }

  input[type="number"] {
    text-align: right;
    margin: 1px;
    padding: 0;
    border: none;
    width: 3ch;
    display: inline-block;
    font-weight: normal;
  }

  input[type="number"] {
    appearance: textfield;
  }

  .grams:after {
    font-weight: normal;
    content: "g";
  }
</style>
