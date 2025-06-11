<script setup>
import { LoopingRhombusesSpinner } from 'epic-spinners'


</script>


<template>
    <div class="flex justify-center items-center h-full gap-6 flex-col text-indigo-400 ">
        <looping-rhombuses-spinner
            :animation-duration="2500"
            :rhombus-size="15"
            color="#ff1d5e"
        />
        <span>Loading...</span>
    </div>
</template>