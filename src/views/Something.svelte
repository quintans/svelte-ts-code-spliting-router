<script lang="ts">
  import { writable, Writable } from 'svelte/store'
  import Counter from '../components/Counter.svelte'

  const count: Writable<number> = writable(100)
</script>

<style>
  h1 {
    color: red;
  }
</style>

<h1>This is... something.</h1>

<p>
  <Counter />
  <Counter value={1}>Counter 1</Counter>
  <Counter value={$count} step={3}>Counter 2</Counter>
</p>
