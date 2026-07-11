<template>
    <div class="header">
        <img src="../assets/hero.png" alt="Logo" class="logo"/> <!-- Mudar para logo da igreja -->
       <NavigationBar class="navigation-bar"/> 
    </div>
</template>
<script setup>

import NavigationBar from './NavigationBar.vue'

</script>

<style scoped>
.header {
    padding: 10px 10px;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: space-between; /*Poderia usar um 'center'?? */
    min-height: 60px; /* Definindo uma altura mínima  */
    box-sizing: border-box;
}

.navigation-bar {
    width: 100%;
    height: 100%;
}

.logo {
    width: 40px;
    height: auto;
    max-height: 100%;
    margin-left: 0.2rem;
}
</style>