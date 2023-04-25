const admin: AuthRoute.Route = {
  name: 'admin',
  path: '/admin',
  component: 'basic',
  meta: {
    title: '后台',
    icon: 'mdi:card-minus-outline',
    order: 9
  }
};

export default admin;
