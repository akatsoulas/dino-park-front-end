import Vue from 'vue';
import Router from 'vue-router';
import PageHome from './views/PageHome.vue';
import PageProfile from './views/PageProfile.vue';
import PageOrgchart from './views/PageOrgchart.vue';
import PageSearchResult from './views/PageSearchResult.vue';

Vue.use(Router);

const router = new Router({
  base: process.env.BASE_URL,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: PageHome,
    },
    {
      path: '/p/:username',
      name: 'Profile',
      component: PageProfile,
      props: true,
    },
    {
      path: '/o/highlight/:username/',
      name: 'OrgchartHighlight',
      component: PageOrgchart,
      props: true,
    },
    {
      path: '/o/:username?',
      name: 'Orgchart',
      component: PageOrgchart,
      props: true,
    },
    {
      path: '/s',
      query: {
        query: ':query',
        who: ':who',
      },
      name: 'Search',
      component: PageSearchResult,
      props: true,
    },
  ],
});

router.beforeEach((to, from, next) => {
  switch (to.name) {
    case 'OrgchartHighlight':
      document.title = `${to.params.username} - Org chart - Mozillians`;
      break;
    case 'Orgchart':
      document.title = 'Org chart - Mozillians';
      break;
    case 'Profile':
      document.title = `${to.params.username} - Profile - Mozillians`;
      break;
    default:
      document.title = `${to.name} - Mozillians`;
  }
  next();
});

export default router;
