<template lang="pug">
  v-layout.pf-listar(row wrap)
    v-flex(xs12)
      v-btn(
        type="button"
        color="primary"
        @click.stop="create()"
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
          td {{ props.item.dataNascimento | dateFilter }}
          td {{ props.item.cpf | cpfFilter }}
          td {{ props.item.email }}
          td.text-xs-center
            v-btn(
              fab
              small
              dark
              color="blue"
              @click.stop="edit(props.item.id)"
            )
              v-icon edit
</template>

<script>
import FisicaService from '@/domains/pessoa/fisica/fisica-service';
import cpfFilter from '@/support/filters/cpf';
import dateFilter from '@/support/filters/date';

export default {
  name: 'PessoaFisicaListar',
  filters: {
    dateFilter,
    cpfFilter,
  },
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
          text: 'CPF',
          value: 'cpf',
        },
        {
          text: 'Email',
          value: 'email',
        },
        {
          text: 'Ações',
          align: 'center',
        },
      ],
      payload: [],
      rowsPerPageItems: [
        25, 50, 100,
      ],
    };
  },
  methods: {
    create() {
      this.$router.push({ name: 'PessoaFisicaCriar' });
    },
    edit(id) {
      this.$router.push({ name: 'PessoaFisicaEditar', params: { id } });
    },
  },
  created() {
    FisicaService.list()
      .then(({ data }) => {
        this.payload = data;
      });
  },
};
</script>
