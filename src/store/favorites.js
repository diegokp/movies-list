import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFavoriteStore = defineStore('favs', () => {
    const favs = ref([])

    const add = (currentMovie) => {
        favs.value.push(currentMovie)
    };

    const remove = (id) => {
        favs.value = favs.value.filter(movie => movie.id !== id)
        console.log(favs.value)
    };

    const findFavs = (id) =>
        favs.value.find((movie) => movie.id === id)
        console.log(find.value)
    return {
        favs,
        add,
        remove,
        findFavs
    }

})