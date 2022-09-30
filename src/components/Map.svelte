<script>
import Index from './../routes/blog/index.svelte';
import { onMount } from "svelte";
import { Map } from '../modules/mapService'

let mapEl = null;
onMount(() => {
  const map = new Map(mapEl);
});
</script>

<style>
  #map {
    height: 100vh;
  }
</style>

<div id="map" bind:this={mapEl} />