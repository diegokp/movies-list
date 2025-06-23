

<script setup>
import { ref, computed } from "vue";
// import { items } from "@/movies.json";
import MovieItem from "@/MovieItem.vue"
import MovieModal from "@/MovieModal.vue";
import LoadSpiner from "@/LoadSpiner.vue";
import { StarIcon } from "@heroicons/vue/24/solid";
import SearchForm from "@/SearchForm.vue";
import { useFavoriteStore } from "@/store/favorites"


const movies= ref([])

const useFavoritos = useFavoriteStore()

const {add} = useFavoritos

const urlImage = "https://image.tmdb.org/t/p/w600_and_h900_bestv2"

const currentMovie = ref()
const showMovieModal= ref(false)
const loading = ref(true)
const searchFilter = ref([])


const fetchData = async () => {
  try {
    const res = await fetch('http://localhost:5173/api/movies.json')
    movies.value = await res.json()
  } catch (error) {
    console.log(error)
  }
  finally{
    loading.value = false
  }
}
fetchData();


function updateRating(movieIndex, rating) {
  movies.value[movieIndex].vote_average = rating*2;
}

function showModal (id) {
  currentMovie.value = movies.value.find((movie) => movie.id === id)
  showMovieModal.value = true
}

// function fav(movie) {
//  alert('Add fav id: '+movie)
// }

function closeModal (){
  showMovieModal.value = false
}

  // return movies.value.filter(movies => movies.title ==="Godzilla vs. Kong")

const filteredItems = computed( () => {
  if (searchFilter.value != " ") {
    return movies.value.filter(movies =>
    movies.title.toLowerCase().includes(searchFilter.value) ||
    movies.title.includes(searchFilter.value)
    );
  }
  return movies.value
});

const handleSearch = (search) => {
  searchFilter.value = search
}
</script>

<template>
    <LoadSpiner  v-if="loading"/>
    <div class="app" v-else>
      <div v-if="showMovieModal" class="modal-wrapper" @click="closeModal()">
        <MovieModal
          :currentMovie="currentMovie"
          @closeModal="closeModal"
        />
      </div>
      <div class=" h-56 w-auto p-6 flex justify-center items-center flex-col gap-6">
        <h1 class="text-indigo-500 text-6xl font-semibold">Movies</h1>
        <SearchForm
          @search="handleSearch"
        />
      </div>
      <div class="movie-list">
        <MovieItem
          v-for="(movie, index) in filteredItems"
          :key="movie.id"
          :movie="movie"
          :urlImage="urlImage"
          :showDelete="false"
          @showModal="showModal(movie.id)"
          @fav="add(movie)"
        >
        <div class="movie-item-star-icon-container-button">
          <button v-for="star in 5"
            :key="star"
            class="movie-item-star-icon-button"
            :class="[
              star <= (Math.trunc(movie.vote_average/2)) ? 'text-yellow-500': 'text-gray-500'
            ]"
            @click="updateRating(index, star)"
            @disable="star === (Math.trunc(movie.vote_average/2))"
            >
            <StarIcon id="rating" class="movie-item-star-icon flex-1" />
          </button>
        </div>
      </MovieItem>
    </div>
  </div>
</template>