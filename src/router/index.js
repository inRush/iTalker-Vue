import Vue from 'vue';
import Router from 'vue-router';

const Contact = resolve => require(['page/contact'], resolve);
const Home = resolve => require(['page/home'], resolve);
const Group = resolve => require(['page/group'], resolve);
const Login = resolve => require(['page/login'], resolve);
const Register = resolve => require(['page/register'], resolve);
const Main = resolve => require(['page/main'], resolve);
const Clip = resolve => require(['page/clip'], resolve);

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
    },
    {
      path: '/main',
      component: Main,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home,
        },
        {
          path: 'group',
          name: 'Group',
          component: Group,
        },
        {
          path: 'contact',
          name: 'Contact',
          component: Contact,
        },
        {
          path: 'clip',
          name: 'CLip',
          component: Clip,
        },
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
  ],
});
