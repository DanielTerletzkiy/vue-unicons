<script setup lang="ts">
import Unicon from "./Unicon.vue";
</script>

<template>
  <Unicon name="airplay" color="gray" icon-style="monochrome" :size="200"/>
  <Unicon name="airplay" color="cyan" icon-style="solid"/>
  <Unicon name="airplay" color="cyan" icon-style="line"/>
  <Unicon name="airplay" color="cyan" icon-style="thinline"/>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
