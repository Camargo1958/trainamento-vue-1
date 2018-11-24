import Vue from 'vue';
import Router from 'vue-router';
import PessoaFisicaListar from '@/app/pessoa-fisica/listar.vue';
import PessoaFisicaCriar from '@/app/pessoa-fisica/criar.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      component: PessoaFisicaListar,
      name: 'PessoaFisicaListar',
      meta: {
        title: 'Listagem de pessoa física',
      },
    },
    {
      path: '/criar',
      component: PessoaFisicaCriar,
      name: 'PessoaFisicaCriar',
      meta: {
        title: 'Criar pessoa física',
      },
    },
  ],
});
