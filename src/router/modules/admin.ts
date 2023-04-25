const admin: AuthRoute.Route = {
  name: 'admin',
  path: '/admin',
  component: 'basic',
  meta: {
    title: '后台账户',
    icon: 'mdi:card-minus-outline',
    order: 1
  }
};

export default admin;
