<template>
  <div class="search-bar">
    <input
      v-model="search"
      type="search"
      placeholder="Pesquisar membros..."
    />

    <button
      type="button"
      aria-label="Pesquisar"
    >
      <Lupasvg class="icon" />
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Lupasvg from './icons/LupaIcon.vue'

const search = ref('')
</script>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;

  width: min(100%, 450px);

  background: #eef3f8;
  border-radius: 999px;

  padding: 0.25rem 0.35rem 0.25rem 1rem;
}

.search-bar input {
  flex: 1;

  border: none;
  outline: none;

  background: transparent;

  font-size: 0.9rem;
  color: #222;
}

.search-bar button {
  width: 34px;
  height: 34px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 50%;

  background: #0a66c2;
  cursor: pointer;
}

.icon {
  width: 16px;
  height: 16px;
}

@media (max-width: 500px) {
  .search-bar {
    order: 3;
    width: 100%;
  }
}
</style>