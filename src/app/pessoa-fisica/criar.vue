<template lang="pug">
  v-container(grid-list-xl)
    v-form()
      v-layout.pf-criar(row wrap)
        v-flex(xs6)
          v-text-field(
            v-model="payload.nome"
            label="Nome"
            required
          )
        v-flex(xs6)
          v-text-field(
            v-model="payload.sobrenome"
            label="Sobrenome"
            required
          )
        v-flex(xs3)
          input-cpf(v-model="payload.cpf")
        v-flex(xs3)
          v-text-field(
            v-model="payload.dataNascimento"
            label="Data de nascimento"
            required
          )
        v-flex(xs6)
          v-text-field(
            v-model="payload.email"
            label="E-mail"
            required
          )
        v-flex(xs12)
          v-btn(
            color="success"
            type="button"
            @click.stop="salvar($event)"
          ) Salvar
</template>

<script>

import InputCpf from './components/input-cpf.vue';

export default {
  name: 'PessoaFisicaCriar',
  components: {
    InputCpf,
  },
  data() {
    return {
      isValid: false,
      payload: {
        nome: '',
        sobrenome: '',
        cpf: '11111111111',
        dataNascimento: '',
        email: '',
      },
    };
  },
  methods: {
    salvar() {
      console.log('payload', this.payload);
    },
  },
};
</script>
