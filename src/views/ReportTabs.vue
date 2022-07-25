<template>
  <!-- Overview -->
  <div 
    class="tile is-ancestor"
    v-show="currentTab === 0"
  >
    <template v-for="(tile, index) in overviewTiles" :key="index">
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
  <!-- Audio/Visual -->
  <div 
    class="tile is-ancestor"
    v-show="currentTab === 1"
  >
    <template v-for="(tile, index) in avTiles" :key="index">
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
import { markRaw, reactive, ref, watch } from 'vue';
import AboutEvent from '../components/AboutEvent.vue';
import AccessIcons from '../components/AccessIcons.vue';
import Contact from '../components/Contact.vue';
import Tile from '../components/Tile.vue';

const props = defineProps({
  currentTab: {
    type: Number,
    required: true,
    default: 0
  }
});

// TODO: move this to JSON import
const overviewTiles = ref([
  {
    heading: "About this event",
    component: markRaw({
      name: AboutEvent,
      props: {
        aboutText: "This is an event where this that and the other thing happen. We will do this thing, then that thing. All the things!",
        eventType: 2
      }
    })
  },
  {
    vertical: true,
    children: [
      {
        heading: "Accessibility features",
        component: markRaw({
          name: AccessIcons,
          props: {
            icons: ["whee"] 
          }
        })
      },
      {
        heading: "Accessibility contact",
        // content: "pew"
        component: markRaw({
          name: Contact,
          props: {
            name: "Jane Doe",
            email: "janedoe@idontexist.info",
            phone: "+1 (234) 567-8909"
          }
        })
      }
    ]
  }
]);

const avTiles = ref([
  {
    vertical: true,
    children: [
      {
        children: [
          {
            heading: "Languages",
            content: "The event will be hosted in the following languages: [add translation info below]"
          },
          {
            heading: "Other audio & visual accommodations",
            content: "etc."
          },
        ]
      },
      {
        heading: "Further information",
        content: "bloop"
      }
    ]
  }
])

</script>