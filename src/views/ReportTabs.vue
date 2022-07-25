<template>
  <ReportTab
    v-for="(section, index) in reportSections"
    :key="section.name"
    :tiles="section.tiles"
    v-show="currentTab === index"
  />
</template>

<script setup>
import { computed, markRaw, reactive, ref, watch } from 'vue';
import AboutEvent from '../components/report/tiles/AboutEvent.vue';
import AccessIcons from '../components/report/tiles/AccessIcons.vue';
import Contact from '../components/report/tiles/Contact.vue';
import Tile from '../components/report/Tile.vue';
import ReportTab from '../components/report/ReportTab.vue';

const props = defineProps({
  reportSections: {
    type: Array,
    required: true,
    default: []
  },
  currentTab: {
    type: Number,
    required: true,
    default: 0
  }
});

// TODO: move below two functions to composable for use in each tab view
// function checkForChildTiles(tile) {
//   if (!tile.hasOwnProperty('children')) {
//     return tile;
//   }

//   return tile.children.map((childTile) => {
//     return checkForChildTiles(childTile);
//   });
// }

// const avFlat = computed(() => {
//   return [{
//     vertical: true,
//     children: avTiles.value
//         .map((tile) => {
//           const toBeFlattened = checkForChildTiles(tile);
//           return toBeFlattened;
//         })
//         .flat(10)
//   }];
// });

// const reportTabTiles = ref([
//   overviewTiles.value,
//   avFlat.value
// ]);

</script>