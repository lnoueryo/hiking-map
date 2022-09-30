<script lang="ts">
    import { onMount } from "svelte";
    import { MainMap } from '../../modules/mapService'

    let mapEl: HTMLDivElement;
    onMount(() => {
      const map = new MainMap(mapEl);
    });
</script>

<style>
    #map {
      height: 100vh;
    }
  </style>

<div id="map" bind:this={mapEl} />