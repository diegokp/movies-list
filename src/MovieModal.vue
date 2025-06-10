<script setup>
import {XMarkIcon } from "@heroicons/vue/24/solid"


defineProps({
    currentMovie: { type: Object, default: null }
})

const emit = defineEmits(['closeModal'])

</script>


<template>
    <div class="modal-wrapper-inner">
        <XMarkIcon @click="emit('closeModal')" class="absolute right-4 top-4 h-8 w-8 hover:text-indigo-500 hover:cursor-pointer"></XMarkIcon>
        <span class="text-2xl  font-semibold">{{ currentMovie.title }}</span>
        <p>{{ currentMovie.overview }}</p>
        <p>Fecha: {{ currentMovie.release_date}}</p>
        <div class="flex gap-2">
            <span>Dirección:</span>
            <div
                v-for="(director, index) in currentMovie.directors"
                :key="index"
            >
            <p v-if="index > 0"> / {{ director.name }}</p>
            <p v-else>{{ director.name }}</p>
            </div>
        </div>
        <div class="flex gap-2">
            <span>Reparto:</span>
            <div
                v-for="(actor, index) in currentMovie.cast"
                :key="index"
                >
                <p v-if="index > 0"> / {{ actor.name }}</p>
                <p v-else>{{ actor.name }}</p>
            </div>
        </div>
        <div class="flex gap-2">
            <span>Certificación:</span>
            {{ currentMovie.certification }}
        </div>
    </div>
</template>