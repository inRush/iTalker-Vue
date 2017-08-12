import Lang from '../../lang/lang';
import Icon from '../js/icon';

export default {
  app: {
    tabs: {
      home: {
        target: '/home',
        icon: Icon.home,
        title: Lang.homePage.title,
      },
      group: {
        target: '/group',
        icon: Icon.group,
        title: Lang.groupPage.title,
      },
      contact: {
        target: '/contact',
        icon: Icon.idCard,
        title: Lang.contactPage.title,
      },
    },
  },
  loginPage: {
    inputs: [
      {
        key: 'phone',
        icon: Icon.phone,
        hint: Lang.attr.phone,
        type: 'phone',
      },
      {
        key: 'password',
        icon: Icon.key,
        hint: Lang.attr.password,
        type: 'password',
      },
    ],
  },
  registerPage: {
    inputs: [
      {
        key: 'phone',
        icon: Icon.phone,
        hint: Lang.attr.phone,
        type: 'phone',
      },
      {
        key: 'password',
        icon: Icon.key,
        hint: Lang.attr.password,
        type: 'password',
      },
      {
        key: 'name',
        icon: Icon.user,
        hint: Lang.attr.name,
        type: 'text',
      },
    ],
  },
};
