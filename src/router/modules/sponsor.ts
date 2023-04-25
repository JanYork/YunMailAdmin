const sponsor: AuthRoute.Route = {
  name: 'sponsor',
  path: '/sponsor',
  component: 'basic',
  children: [
    {
      name: 'sponsor_info',
      path: '/sponsor/info',
      component: 'self',
      meta: {
        title: '赞助信息',
        icon: 'mdi:flash-outline',
        order: 1
      }
    },
    {
      name: 'sponsor_manage',
      path: '/sponsor/manage',
      component: 'self',
      meta: {
        title: '订单管理',
        icon: 'mdi:credit-card-edit-outline',
        order: 1
      }
    }
  ],
  meta: {
    title: '赞助',
    icon: 'mdi:currency-jpy',
    order: 6
  }
};

export default sponsor;
