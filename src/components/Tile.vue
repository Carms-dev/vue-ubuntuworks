<template>
  <!-- Child tile -->
  <template
    v-if="content || component"
  >
    <div
      class="tile is-parent"
      :class="sizeClass"
    >
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
    </div>   
  </template>

  <!-- Layout/container tile -->
  <template
    v-else-if="children"
  >
    <div
      class="tile"
      :class="{ 'is-vertical': vertical }"
    >
      <template v-for="(tile, index) of children">
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
</template>

<script setup>
import { computed } from 'vue';
import Tile from './Tile.vue';

const props = defineProps({
  verticalParent: {
    type: Boolean,
    default: false
  },
  children: {
    type: Array
  },
  vertical: {
    type: Boolean,
    default: false
  },
  heading: {
    type: String,
  },
  content: {
    type: String,
  },
  component: {
    type: Object,
  },
  size: {
    type: Number
  }
});

const hasContent = computed(() => {
  console.log(props.component)
  return props.content || props.component;
})

const isParent = computed(() => {
  if (props.children) {
    return props.children.some(child => child.content); 
  } else {
    return false;
  }
});

const sizeClass = computed(() => {
  if (props.size) {
    const classObject = {};
    const className = `is-${props.size}`;
    classObject[className] = props.size;
    return classObject;
  }
})

console.log("quack?", props.vertical);

// function isParent() {
//   return Boolean(props.children);
// }

</script>