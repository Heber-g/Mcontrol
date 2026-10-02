<template>
  <div class="home">

    <Header />

    <main class="content">

      <section class="page-header">
        <div>
          <h1>Membros</h1>
          <p>
            Gerencie os membros cadastrados.
          </p>
        </div>

      </section>

      <section class="members-list">

        <MemberCard
          v-for="member in members"
          :key="member.id"
          :member="member"
        />

      </section>

    </main>

  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import BaseButton from '../components/BaseButton.vue'
import MemberCard from '../components/OrederedList.vue'

const members = [
  {
    id: 1,
    nome: 'Arthur Jorge Cabral da Silva',
    cpf: '123.123.123-12',
    nascimento: '01/01/1990',
    telefone: '(67) 99999-9999'
  },
  {
    id: 2,
    nome: 'João da Silva',
    cpf: '987.987.987-98',
    nascimento: '10/05/1985',
    telefone: '(67) 98888-8888'
  }
]
</script>

<style scoped>
.home {
  min-height: 100vh;
  background: #f3f5f7;
}

.content {
  width: min(100% - 2rem, 1100px);
  margin: 0 auto;
  padding: 2rem 0;
}

.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1.5rem;
}

.page-header h1 {
  margin: 0;
  font-size: 1.8rem;
  color: #222;
}

.page-header p {
  margin: 0.35rem 0 0;
  color: #666;
}

.members-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (max-width: 600px) {
  .page-header {
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>