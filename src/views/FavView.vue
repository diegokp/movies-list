<script setup>
import { ref, computed} from "vue";
import MovieItem from "@/MovieItem.vue"
import MovieModal from "@/MovieModal.vue";
import { StarIcon } from "@heroicons/vue/24/solid";
import { useFavoriteStore } from "@/store/favorites"
import { storeToRefs } from "pinia";

const useFavoritos = useFavoriteStore()

const {favs} = storeToRefs(useFavoritos)

const {remove} = useFavoritos

const currentMovie = ref()
const showMovieModal= ref(false)
const urlImage = "https://image.tmdb.org/t/p/w600_and_h900_bestv2"

const countMovies = computed(() => {
  return favs.value.length
})
function showModal (id) {
  currentMovie.value = favs.value.find((movie) => movie.id === id)
  showMovieModal.value = true
}


function closeModal (){
  showMovieModal.value = false
}

</script>

<template>
    <div class="app">
      <div v-if="showMovieModal" class="modal-wrapper" @click="closeModal()">
        <MovieModal
          :currentMovie="currentMovie"
          @closeModal="closeModal"
        />
      </div>
      <div class=" h-56 w-auto p-6 flex justify-center items-center flex-col gap-6">
        <h1 class="text-indigo-500 text-6xl font-semibold">My favourite list ({{ countMovies }})</h1>
      </div>
      <div class="movie-list">
        <MovieItem
          v-for="(movie) in favs"
          :key="movie.id"
          :movie="movie"
          :urlImage="urlImage"
          :showDelete="true"
          @showModal="showModal(movie.id)"
          @fav="remove(movie.id)"
        >
        <div class="movie-item-star-icon-container-button">
          <button v-for="star in 5"
            :key="star"
            class="movie-item-star-icon-button"
            :class="[
              star <= (Math.trunc(movie.vote_average/2)) ? 'text-yellow-500': 'text-gray-500'
            ]"
            >
            <StarIcon id="rating" class="movie-item-star-icon flex-1" />
          </button>
        </div>
      </MovieItem>
    </div>
  </div>
</template>