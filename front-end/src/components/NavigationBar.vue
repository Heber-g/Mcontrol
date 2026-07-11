<template>
    <div class="navigation-bar">
        <div class="SearchBar">
            <input type="text" placeholder="Pesquisar" class="text-field"/>
            <button class="btn">
                <Lupasvg class="iconLupa"/>
            </button>
        </div>
    </div>
</template>
<script setup>
import Lupasvg from './icons/LupaIcon.vue';

</script>


<style scoped>
.text-field {
    color: black;
    background-color: #6b91fc;
    padding: 0.5rem;
    /* width: 30%;
    height: 20%; */
    border: 1px solid #ccc;
    border-radius: 1rem;
    text-align: center;
    font-size: 0.8rem;
}

::placeholder {
    color: rgb(255, 255, 255);
    font-size: 0.8rem;
}

.SearchBar {
    display: flex;
    width: fit-content;
    /* justify-content: center; */ /* Centraliza horizontalmente, tirado para testes */
    align-items: center;
    gap: 0.1rem;
    margin-left: 4rem;
    box-sizing: border-box;
}

.iconLupa {
    width: 1rem;
    height: 1rem;
}

.btn {
    background-color: #6b91fc;
    margin-left: 0.1rem;
    padding: 0.4rem;
    border: 1px solid #ccc;
    border-radius: 2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>