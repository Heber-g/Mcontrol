<template>
  <header class="header">

    <router-link to="/home" class="brand">
      <img
        src="../assets/logoIgreja.jpg"
        alt="Logo"
        class="logo"
      />
    </router-link>

    <NavigationBar />

    <BaseButton
      variant="primary"
      @click="$router.push('/register')"
    >
       Cadastrar membro
    </BaseButton>

  </header>
</template>

<script setup>
import NavigationBar from './NavigationBar.vue'
import BaseButton from './BaseButton.vue'
</script>

<style scoped>
.header {
  min-height: 64px;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  gap: 2rem;

  background: #ffffff;
  border-bottom: 1px solid #e1e5e9;

  box-sizing: border-box;
}

.brand {
  display: flex;
  align-items: center;
}

.logo {
  width: 42px;
  height: 42px;
  object-fit: contain;
}

@media (max-width: 700px) {
  .header {
    padding: 0 1rem;
    gap: 1rem;
  }
}

@media (max-width: 500px) {
  .header {
    flex-wrap: wrap;
    padding: 0.75rem 1rem;
  }
}
</style>