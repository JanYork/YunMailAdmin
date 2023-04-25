const mail: AuthRoute.Route = {
  name: 'mail',
  path: '/mail',
  component: 'basic',
  children: [
    {
      name: 'mail_manage',
      path: '/mail/manage',
      component: 'self',
      meta: {
        title: '邮件管理',
        icon: 'mdi:music-accidental-sharp',
        order: 10
      }
    }
  ],
  meta: {
    title: '邮件',
    icon: 'mdi:mail-ru',
    order: 1
  }
};

export default mail;
