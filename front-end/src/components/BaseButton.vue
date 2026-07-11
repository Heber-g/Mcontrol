<template>
  <button :class="['btn', `btn-${variant}`]" :type="type">
    <slot></slot> </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary', // Estilo padrão se você não passar nada
    validator: (value) => ['primary', 'secondary', 'danger', 'success'].includes(value)
  },
  type: {
    type: String,
    default: 'button'
  }
})
</script>

<style scoped>
/* Estilos base do botão */
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.2s;
}

/* Variações de estilos */
.btn-primary {
  background-color: #3498db;
  color: white;
}
.btn-secondary {
  background-color: #95a5a6;
  color: white;
}
.btn-danger {
  background-color: #e74c3c;
  color: white;
}
.btn-success {
  background-color: #2ecc71;
  color: white;
}
</style>