<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/organisms/Header.vue'
import Navigation from './components/organisms/Navigation.vue'
</script>

<template>
  <header>
    <Header></Header>
    <Navigation></Navigation> 
  </header>

  <div class="md:w-1/2 w-3/4 py-12 mx-auto">
    <RouterView />
  </div>
</template>

<style>
  
</style>