<script setup>
const emit = defineEmits(["search"])

const search = (e) => {
    emit("search", e.target.value)
}

</script>


<template>
    <form class="py-3 px-4 flex items-center">
        <div class="relative w-full">
            <input
                type="text"
                @input="search"
                placeholder="Search"
                class="bg-gray-50 border border-gray-80 p-1 rounded-sm  w-80 "
            >
        </div>
    </form>
</template>