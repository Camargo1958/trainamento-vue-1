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
        :items="payload"
        no-data-text="Não foi encontrado registros"
        no-results-text="Nenhum resultado encontrado"
        rows-per-page-text="Quantidade de registros"
        :rows-per-page-items="rowsPerPageItems"
      )
        template(slot="items" slot-scope="props")
          td {{ props.item.nome }}
          td {{ props.item.sobrenome }}
          td {{ props.item.dataNascimento }}
          td {{ props.item.cpf }}
          td {{ props.item.email }}
</template>

<script>
import FisicaService from '@/domains/pessoa/fisica/fisica-service';

export default {
  name: 'PessoaFisicaListar',
  data() {
    return {
      headers: [
        {
          text: 'Nome',
          value: 'nome',
        },
        {
          text: 'Sobrenome',
          value: 'sobrenome',
        },
        {
          text: 'Data de Nascimento',
          value: 'dataNascimento',
        },
        {
          text: 'C.P.F.',
          value: 'cpf',
        },
        {
          text: 'Email',
          value: 'email',
        },
      ],
      payload: [],
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
  created() {
    FisicaService.get()
      .then(({ data }) => {
        this.payload = data;
      });
  },
};
</script>

