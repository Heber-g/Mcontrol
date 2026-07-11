<template>
    <div class="navigation-bar">
        <div class="SearchBar">
            <input type="text" placeholder="Pesquisar " class="text-field"/>
            <button class="btn">
                <Lupasvg />
            </button>
        </div>
    </div>
</template>
<script setup>
import Lupasvg from './icons/LupaIcon.vue';

</script>


<style scoped>
.text-field {
    padding: 0.5rem;
    /* width: 30%;
    height: 20%; */
    border: 1px solid #ccc;
    border-radius: 1rem;
    text-align: center;
    font-size: 0.8rem;
}

.SearchBar {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.1rem;
    margin: 0.5rem;
}

.btn {
    margin-left: 0.1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>