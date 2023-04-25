const letter: AuthRoute.Route = {
  name: 'letter',
  path: '/letter',
  component: 'basic',
  children: [
    {
      name: 'letter_manage',
      path: '/letter/manage',
      component: 'self',
      meta: {
        title: '信件管理',
        requiresAuth: true,
        keepAlive: true,
        singleLayout: 'basic',
        // permissions: ['super', 'admin', 'user'],
        icon: 'mdi:email-outline',
        order: 10
      }
    }
  ],
  meta: {
    title: '信件',
    icon: 'mdi:mailbox-up-outline',
    order: 1
  }
};

export default letter;