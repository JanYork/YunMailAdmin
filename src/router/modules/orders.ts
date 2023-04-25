const orders: AuthRoute.Route = {
  name: 'orders',
  path: '/orders',
  component: 'basic',
  children: [
    {
      name: 'orders_info',
      path: '/orders/info',
      component: 'self',
      meta: {
        title: '订单信息',
        icon: 'mdi:subtitles-outline',
        order: 1
      }
    },
    {
      name: 'orders_manage',
      path: '/orders/manage',
      component: 'self',
      meta: {
        title: '订单管理',
        icon: 'mdi:format-letter-ends-with',
        order: 1
      }
    }
  ],
  meta: {
    title: '订单',
    icon: 'mdi:clipboard-text-multiple-outline',
    order: 5
  }
};

export default orders;
