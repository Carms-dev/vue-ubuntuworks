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
import Contact from '../components/Contact.vue';
import Tile from '../components/Tile.vue';

const tileList = ref([
  {
    heading: "hello",
    content: "boop",
    size: 2
  },
  {
    heading: "hello",
    content: "whaa"
  },
  {
    vertical: true,
    children: [
      {
        heading: "hello",
        content: "weeoo"
      },
      {
    heading: "hello",
    // content: "pew"
    component: markRaw({
      name: Contact,
      props: {
        name: "Jane Doe",
        email: "janedoe@idontexist.info",
        phone: "+1 (234) 567-8909",
        other: "Instagram: @iamthecoolest"
      }
    })
  },
    ]
  }
])

</script>