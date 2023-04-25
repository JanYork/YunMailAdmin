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
        icon: 'mdi:card-account-details-outline',
        order: 10
      }
    }
  ],
  meta: {
    title: '用户',
    icon: 'mdi:shield-account-outline',
    order: 8
  }
};

export default user;
