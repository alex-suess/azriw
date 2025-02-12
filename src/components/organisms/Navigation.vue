<script>
  import { ref } from 'vue'
  import MenuIcon from './../icons/IconMenu.vue'
  import IconClose from '../icons/IconClose.vue'
  export default {
    setup() {
      const menuActive = ref(false)

      function toggle() {
        menuActive.value = !menuActive.value
        console.log(menuActive.value)
      }

      return {
        menuActive,
        toggle
      }
    }
  }
</script>
<template>
  <div>
    <button  @click="toggle()" id="menu-toggle-button" class="md:hidden cursor-pointer absolute z-100 top-0 right-0 h-16 flex justify-center items-center px-8 text-gray-700 font-semibold">
      <span v-if="!menuActive">
        <MenuIcon></MenuIcon>
      </span>
      <span v-if="menuActive">
        <IconClose></IconClose>
      </span>
    </button>
    <nav anchor="menu-toggle-button" v-if="menuActive" class="pt-24 flex md:hidden w-full h-screen absolute top-0 flex-col px-4 z-10 bg-white">
      <div class="flex flex-col items-end gap-4 [&>*:hover]:text-amber-500 [&>*:hover]:pl-4 [&>*]:font-bold [&>*]:text-gray-700 [&>*]:transition-all [&>*]:py-2">
        <RouterLink @click="toggle()" class="" to="/">Startseite</RouterLink>
        <RouterLink @click="toggle()" class="" to="/about">Unsere Praxis</RouterLink>
        <RouterLink @click="toggle()" class="" to="/hours">Unsere Sprechzeiten</RouterLink>
        <RouterLink @click="toggle()" class="" to="/services">Leistungsspektrum</RouterLink>
        <RouterLink @click="toggle()" class="" to="/info">Patienteninfo</RouterLink>
        <RouterLink @click="toggle()" class="" to="/contact">Kontakt</RouterLink>
        <RouterLink @click="toggle()" class="" to="/imprint">Impressum</RouterLink>
      </div>
    </nav>
    <nav class="hidden md:flex max-w-1/4 fixed top-0 flex-col h-screen pt-120 gap-4 px-8 [&>*:hover]:text-amber-500 [&>*:hover]:pl-4 [&>*]:font-bold [&>*]:text-gray-700 [&>*]:transition-all">
        <RouterLink class="" to="/">Startseite</RouterLink>
        <RouterLink class="" to="/about">Unsere Praxis</RouterLink>
        <RouterLink class="" to="/hours">Unsere Sprechzeiten</RouterLink>
        <RouterLink class="" to="/services">Leistungsspektrum</RouterLink>
        <RouterLink class="" to="/info">Patienteninfo</RouterLink>
        <RouterLink class="" to="/contact">Kontakt</RouterLink>
        <RouterLink class="" to="/imprint">Impressum</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
  .router-link-active {
    text-decoration: underline;
    color: var(--color-amber-500);
  }
  #menu-toggle-button {
    anchor-name: --menuToggleButton;
    width: fit-content;
  }
</style>
