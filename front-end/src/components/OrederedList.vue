<template>
  <article class="member-card">

    <div class="avatar">
      {{ initials }}
    </div>

    <div class="member-content">

      <h2>{{ member.nome }}</h2>

      <p class="cpf">
        CPF: {{ member.cpf }}
      </p>

      <div class="member-details">

        <div>
          <span>Nascimento</span>
          <strong>{{ member.nascimento }}</strong>
        </div>

        <div>
          <span>Telefone</span>
          <strong>{{ member.telefone }}</strong>
        </div>

      </div>

    </div>

    <div class="actions">

      <BaseButton variant="secondary">
        Visualizar
      </BaseButton>

      <BaseButton variant="primary">
        Editar
      </BaseButton>

    </div>

  </article>
</template>

<script setup>
import { computed } from 'vue'
import BaseButton from './BaseButton.vue'

const props = defineProps({
  member: {
    type: Object,
    required: true
  }
})

const initials = computed(() => {
  return props.member.nome
    .split(' ')
    .slice(0, 2)
    .map(name => name[0])
    .join('')
    .toUpperCase()
})
</script>

<style scoped>
.member-card {
  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 1.25rem;

  background: white;
  border: 1px solid #dfe3e8;
  border-radius: 8px;
}

.avatar {
  width: 52px;
  height: 52px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: #dce6f1;
  color: #0a66c2;

  font-weight: 700;
}

.member-content {
  flex: 1;
}

.member-content h2 {
  margin: 0;
  font-size: 1rem;
  color: #222;
}

.cpf {
  margin: 0.25rem 0 1rem;
  font-size: 0.8rem;
  color: #666;
}

.member-details {
  display: flex;
  gap: 2rem;
}

.member-details div {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.member-details span {
  font-size: 0.7rem;
  color: #777;
}

.member-details strong {
  font-size: 0.8rem;
  color: #333;
}

.actions {
  display: flex;
  gap: 0.5rem;
}

@media (max-width: 700px) {
  .member-card {
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .actions {
    width: 100%;
  }

  .actions button {
    flex: 1;
  }
}
</style>