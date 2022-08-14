<script setup>
import { ref } from 'vue'
import Header from './LHeader.vue';

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
    <Header />
</template>

<style scoped>
    .read-the-docs {
      color: #888;
    }
</style>
