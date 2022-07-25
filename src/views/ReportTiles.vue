<template>
  <div class="tile is-ancestor">
    <template v-for="(tile, index) in tileList" :key="index">
      <Tile
        :vertical="tile.vertical"
        :children="tile.children"
        :content="tile.content"
        :component="tile.component"
        :heading="tile.heading"
      ></Tile>
    </template>
  </div>
</template>

<script setup>
import { markRaw, reactive, ref } from 'vue';
import Contact from '../components/Contact.vue';
import Tile from '../components/Tile.vue';

const tileList = ref([
  {
    heading: "hello",
    // content: "pew"
    component: markRaw({
      name: Contact,
      props: {
        friendo: "HELLOOOOOOOWHEEEEEE"
      }
    })
  },
  {
    heading: "hello",
    content: "boop"
  },
  {
    vertical: true,
    children: [
      {
        heading: "hello",
        content: "whaa"
      },
      {
        heading: "hello",
        content: "weeoo"
      }
    ]
  }
])

</script>