<template lang="pug">
  v-container(grid-list-xl)
    v-form(v-model="isValid")
      v-layout.pf-criar(row wrap)
        v-flex(xs6)
          input-nome(
            v-model="payload.nome"
            required
            label="Nome")
        v-flex(xs6)
          input-nome(
            v-model="payload.sobrenome"
            required
            label="Sobrenome")
        v-flex(xs3)
          input-cpf(v-model="payload.cpf")
        v-flex(xs3)
          input-date(
            v-model="payload.dataNascimento"
            required
            label="Data de nascimento")
        v-flex(xs6)
          input-email(v-model="payload.email" required)
        v-flex(xs12)
          btn-save(@save="salvar($event)")
</template>

<script>
import InputDate from '@/support/inputs/input-date/input-date.vue';
import FisicaModel from '@/domains/pessoa/fisica/fisica-model';
import BtnSave from '@/support/buttons/save/btn-save.vue';
import InputEmail from '@/support/inputs/input-email/input-email.vue';
import FisicaService from '@/domains/pessoa/fisica/fisica-service';
import InputCpf from './components/input-cpf.vue';
import InputNome from './components/input-nome.vue';

export default {
  name: 'PessoaFisicaCriar',
  components: {
    InputCpf,
    InputNome,
    InputDate,
    InputEmail,
    BtnSave,
  },
  data() {
    return {
      isValid: false,
      payload: new FisicaModel(),
    };
  },
  methods: {
    salvar() {
      if (!this.isValid) {
        alert('Ou ta errado mano');
        return;
      }
      FisicaService.save(this.payload)
        .then(() => {
          this.$router.push({ name: 'PessoaFisicaListar' });
        });
    },
  },
};
</script>
