import Vue from 'vue';
import Router from 'vue-router';
import Contact from '@/components/contact/contact';
import Home from '@/components/home/home';
import Group from '@/components/group/group';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/group',
      name: 'Group',
      component: Group,
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact,
    },
  ],
});
