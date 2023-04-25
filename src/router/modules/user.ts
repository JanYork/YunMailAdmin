const user: AuthRoute.Route = {
  name: 'user',
  path: '/user',
  component: 'basic',
  children: [
    {
      name: 'user_manage',
      path: '/user/manage',
      component: 'self',
      meta: {
        title: '用户管理',
        requiresAuth: true,
        keepAlive: true,
        singleLayout: 'basic',
        icon: 'mdi:account-edit',
        order: 10
      }
    },
    {
      name: 'user_auth',
      path: '/user/auth',
      component: 'self',
      meta: {
        title: '实名管理',
        requiresAuth: true,
        keepAlive: true,
        singleLayout: 'basic',
        icon: 'mdi:card-account-details-outline',
        order: 10
      }
    }
  ],
  meta: {
    title: '用户',
    icon: 'mdi:shield-account-outline',
    order: 1
  }
};

export default user;
