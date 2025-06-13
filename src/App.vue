<script setup>

import { RouterView, RouterLink } from "vue-router";


</script>


<template>
  <nav class="w-full py-6 px-10 text-white flex justify-end gap-4 static bg-slate-800/30 ">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/favs">Favorites</RouterLink>
  </nav>
  <RouterView />
</template>


