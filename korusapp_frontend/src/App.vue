<script setup>
import { RouterView } from 'vue-router'
import NavBar from "@/components/layouts/NavBar.vue";
</script>

<template>
  <div class="style">
    <nav-bar />
    <router-view />
  </div>
</template>

<style >
.style{
  background-color: aquamarine;
}
</style>
