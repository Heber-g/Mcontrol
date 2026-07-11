<template>
    <div class="header">
        <img src="../assets/logoIgreja.jpg" alt="Logo" class="logo"/> <!-- Mudar para logo da igreja -->
       <NavigationBar class="navigation-bar"/> 
       <BaseButton variant="primary" class="btnCadastrar">Cadastrar membro</BaseButton>
    </div>
</template>
<script setup>

import NavigationBar from './NavigationBar.vue'
import BaseButton from '../components/BaseButton.vue'

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
    flex: 1;
    box-sizing: border-box;
}

.btnCadastrar{
    box-sizing: border-box;
    align-self:auto;
    
}

.logo {
    width: 60px;
    height: auto;
    max-height: 100%;
    margin-left: 0.2rem;
}

/* .btn2{
    background-color: #33b327 !important;
} */

@media (max-width: 350px) {
    .header {
        flex-direction: column; /* Empilha a logo em cima e o menu embaixo */
        gap: 10px; /* Dá um espaço entre eles */
        text-align: center;
    }
    
    .navigation-bar {
        width: 100%;
    }
}
</style>