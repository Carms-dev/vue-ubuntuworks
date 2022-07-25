<template>
  <div
    class="tile"
    :class="parentTileClass"
  >
    <!-- Child tile, i.e. one with content -->
    <template v-if="content || component || heading">
      <div class="tile card is-child p-0">
        <div class="card-header">
          <h2 class="card-header-title title is-3 has-text-grey mb-0">
            {{ heading }}
          </h2>
        </div>
        <div class="card-content">
          <template v-if="content">
            {{ content }}
          </template>
          <component
            v-else-if="component"
            :is="component.name"
            v-bind="component.props"
          ></component>
        </div>
      </div>
    </template>

    <!-- Parent tile, i.e. one with children -->
    <template v-else-if="children">
      <Tile
        v-for="(tile, index) of children"
        :parent-key="index"
        :key="parentKey + '-' + index"
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
import { computed } from 'vue';
import Tile from './Tile.vue';

const props = defineProps({
  parentKey: [String, Number],
  children: Array,
  heading: String,
  content: String,
  component: Object,
  size: Number,
  vertical: {
    type: Boolean,
    default: false
  }
});

const parentTileClass = computed(() => {
  const classObject = {};
  
  if (props.content || props.component || props.heading) {
    classObject['is-parent'] = true;
  }

  if (props.vertical) {
    classObject['is-vertical'] = true;
  }

  if (props.size) {
    const className = `is-${props.size}`;
    classObject[className] = props.size;
  }

  return classObject;
});

</script>