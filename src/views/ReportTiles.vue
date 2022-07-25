<template>
  <div class="tile is-ancestor">
    <template v-for="(tile, index) in tileList" :key="index">
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
import { markRaw, reactive, ref } from 'vue';
import AboutEvent from '../components/AboutEvent.vue';
import AccessIcons from '../components/AccessIcons.vue';
import Contact from '../components/Contact.vue';
import Tile from '../components/Tile.vue';

// TODO: move this to JSON import
const tileList = ref([
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
])

</script>