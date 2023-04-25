const admin: AuthRoute.Route = {
  name: 'admin',
  path: '/admin',
  component: 'self',
  meta: {
    title: '后台账户',
    requiresAuth: true,
    keepAlive: true,
    singleLayout: 'basic',
    icon: 'mdi:card-minus-outline',
    order: 10
  }
};

export default admin;
