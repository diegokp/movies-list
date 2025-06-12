<script setup>

import { RouterView, RouterLink } from "vue-router";


</script>


<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/favs">Favorites</RouterLink>

</nav>
  <RouterView />
</template>


