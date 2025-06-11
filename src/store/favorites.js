import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFavoriteStore = defineStore('favs', () => {
    const favs = ref([])

    const addFav = (currentMovie) => {
        favs.value.push(currentMovie)
        console.log(favs.value)
    };
    return {
        favs,
        addFav

    }

})