<script setup>
import { HeartIcon} from "@heroicons/vue/24/solid";

const props = defineProps({
    movie: { type: Object, default: null },
    urlImage: String
})

const emit = defineEmits(["showModal", "fav"])

function showModal() {
    emit("showModal", props.movie.id)
}

function fav(){
   emit("fav", props.movie.id)
}

</script>


<template>
        <div class="movie-item">
          <div class="movie-item-image-wrapper">
            <HeartIcon
              @click="fav()"
              class="absolute top-2 right-2 h-8 w-8 text-gray-400  hover:text-rose-500 hover:cursor-pointer"
            />
            <div class="movie-item-image">
              <img :src="`${urlImage}${movie.poster_path}`" alt="">
            </div>
            <div class="movie-item-content-wrapper">
              <h3>{{ movie.title }}</h3>
              <div class="movie-item-genre-list">
                <div class="movie-item-genre-wrapper"
                  v-for="genre in movie.genres"
                  :key="genre"
                >
                  <p class="movie-item-genre-tag">{{ genre }}</p>
                </div>
              </div>
              <div class="movie-item-star-icon-wrapper">
                <span class="mr-2">Rating ({{ Math.trunc(movie.vote_average/2) }}/5)</span>
                <slot />
                <button
                  @click="showModal()"
                  class="movie-item-star-icon-info"
                  >+info
                </button>
              </div>
            </div>
          </div>
        </div>
</template>