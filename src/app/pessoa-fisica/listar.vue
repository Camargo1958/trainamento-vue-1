<template lang="pug">
  v-layout.pf-listar(row wrap)
    v-flex(xs12)
      v-btn(
        type="button"
        color="primary"
        @click.stop="vaiParaCriacao()"
      ) Novo
    v-flex
      v-data-table(
        :headers="headers"
        :items="items"
        no-data-text="Não foi encontrado registros"
        no-results-text="Nenhum resultado encontrado"
        rows-per-page-text="Quantidade de registros"
        :rows-per-page-items="rowsPerPageItems"
      )
</template>

<script>
export default {
  name: 'PessoaFisicaListar',
  data() {
    return {
      headers: [],
      items: [],
      rowsPerPageItems: [
        25, 50, 100
      ],
    };
  },
  methods: {
    vaiParaCriacao() {
      this.$router.push({ name: 'PessoaFisicaCriar' });
    },
  },
};
</script>

