<template>
  <main class="member-page">
    <form class="registration-form" @submit.prevent="submitForm">

      <!-- CABEÇALHO -->
      <section class="form-header">
        <div class="logo-area">
          <img
            src="../assets/logoIgreja.jpg"
            alt="Logo"
          />
        </div>

        <div class="company-info">
          <strong>Dados dos membros</strong>
        </div>
      </section>

      <!-- TÍTULO -->
      <div class="form-title">
        Ficha de cadastro de Membros
      </div>

      <!-- DADOS PESSOAIS -->
      <section class="form-section">
        <h2>Dados pessoais</h2>

        <div class="form-grid">
          <div class="field full">
            <label>Nome</label>
            <input v-model="form.nome" type="text" />
          </div>

          <div class="field">
            <label>CPF</label>
            <input v-model="form.cpf" type="text" />
          </div>

          <div class="field">
            <label>Data de União</label>
            <input v-model="form.dataUnião" type="date" />
          </div>

          <div class="field">
            <label>Data de nascimento</label>
            <input v-model="form.dataNascimento" type="date" />
          </div>

          <!-- <div class="field">
            <label>Data de batismo</label>
            <input v-model="form.dataBatismo" type="date" />
          </div> -->

          <div class="field">
            <label>Idade</label>
            <input v-model="form.idade" type="text" />
          </div>

          <div class="field">
            <label>Tipo de membro</label>

            <select v-model="form.tipoMembro">
              <option value="">Selecione</option>
              <option>Efetivo(a)</option>
              <option>Agregado(a)</option>
            </select>
          </div>
          

          <div class="field full">
            <label>Pai</label>
            <input v-model="form.pai" type="text" />
          </div>

          <div class="field full">
            <label>Mãe</label>
            <input v-model="form.mae" type="text" />
          </div>
        </div>
      </section>

      <!-- ENDEREÇO -->
      <section class="form-section">
        <h2>Endereço e contato</h2>

        <div class="form-grid">
          <div class="field full">
            <label>Endereço</label>
            <input v-model="form.endereco" type="text" />
          </div>

          <div class="field">
            <label>Bairro</label>
            <input v-model="form.bairro" type="text" />
          </div>

          <div class="field">
            <label>CEP</label>
            <input v-model="form.cep" type="text" />
          </div>

          <div class="field">
            <label>Cidade</label>
            <input v-model="form.cidade" type="text" />
          </div>

          <div class="field">
            <label>Estado</label>
            <input v-model="form.estado" type="text" />
          </div>

          <div class="field">
            <label>Telefone</label>
            <input v-model="form.telefone" type="tel" />
          </div>

          <div class="field full">
            <label>E-mail</label>
            <input v-model="form.email" type="email" />
          </div>
        </div>
      </section>


      <!-- AÇÕES -->
      <div class="form-actions">
        <BaseButton
          variant="secondary"
          type="button"
          @click="$router.back()"
        >
          Cancelar
        </BaseButton>

        <BaseButton
          variant="success"
          type="submit"
        >
          Salvar cadastro
        </BaseButton>
      </div>

    </form>
  </main>
</template>

<script setup>
import { reactive } from 'vue'
import BaseButton from '../components/BaseButton.vue'

const form = reactive({
  nome: '',
  dataUnião: '',
  dataNascimento: '',
  idade: '',
  tipoMembro: '',
  pai: '',
  mae: '',

  endereco: '',
  bairro: '',
  cep: '',
  cidade: '',
  estado: '',
  telefone: '',
  email: '',

})

function submitForm() {
  console.log('Dados do formulário:', form)
}
</script>

<style scoped>
.member-page {
  min-height: 100vh;
  background: #f3f5f7;
  padding: 2rem 1rem;
}

.registration-form {
  width: min(100%, 900px);
  margin: 0 auto;
  background: #ffffff;
  border: 1px solid #d8dde3;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

/* Cabeçalho */

.form-header {
  display: grid;
  grid-template-columns: 160px 1fr;
  min-height: 100px;
  border-bottom: 1px solid #cfd4da;
}

.logo-area {
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #cfd4da;
  padding: 1rem;
}

.logo-area img {
  max-width: 100px;
  max-height: 70px;
  object-fit: contain;
}

.company-info {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  color: #333;
}

/* Título */

.form-title {
  padding: 0.55rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
  background: #f1f3f5;
  border-bottom: 1px solid #cfd4da;
}

/* Seções */

.form-section {
  padding: 1.25rem;
  border-bottom: 1px solid #d9dde2;
}

.form-section h2 {
  margin: 0 0 1rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: #555;
}

/* Grid */

.form-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.field.full {
  grid-column: 1 / -1;
}

.field.wide {
  grid-column: span 2;
}

.field label {
  font-size: 0.72rem;
  font-weight: 700;
  color: #333;
  text-transform: uppercase;
}

.field input,
.field select,
.field textarea {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #bfc5cc;
  border-radius: 4px;
  padding: 0.6rem 0.65rem;
  background: #fff;
  color: #222;
  font-size: 0.9rem;
  outline: none;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
}

.field input:focus,
.field select:focus,
.field textarea:focus {
  border-color: #0a66c2;
  box-shadow: 0 0 0 2px rgba(10, 102, 194, 0.12);
}

.field textarea {
  min-height: 120px;
  resize: vertical;
}

/* Dependentes */

.dependent-row {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
}

/* Botões */

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1.25rem;
  background: #fafbfc;
}

/* Responsivo */

@media (max-width: 700px) {
  .form-grid {
    grid-template-columns: 1fr;
  }

  .field.full,
  .field.wide {
    grid-column: auto;
  }

  .dependent-row {
    grid-template-columns: 1fr;
  }

  .form-header {
    grid-template-columns: 1fr;
  }

  .logo-area {
    border-right: none;
    border-bottom: 1px solid #cfd4da;
  }
}

@media (max-width: 450px) {
  .member-page {
    padding: 0;
  }

  .registration-form {
    border-radius: 0;
    border-left: none;
    border-right: none;
  }

  .form-section {
    padding: 1rem;
  }

  .form-actions {
    flex-direction: column-reverse;
  }

  .form-actions button {
    width: 100%;
  }
}
</style>