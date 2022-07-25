<template>
  <div class="tile is-ancestor">
    <template v-for="(tile, index) in tiles" :key="index">
      <Tile
        :vertical="tile.vertical"
        :children="tile.children"
        :content="tile.content"
        :component="tile.component"
        :heading="tile.heading"
        :size="tile.size"
      ></Tile>
    </template>
  </div>
</template>

<script setup>
import Tile from './Tile.vue';

const props = defineProps({
  tiles: {
    type: Array,
    required: true,
    default: []
  }
})
</script>