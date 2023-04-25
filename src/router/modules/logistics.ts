const logistics: AuthRoute.Route = {
  name: 'logistics',
  path: '/logistics',
  component: 'basic',
  children: [
    {
      name: 'logistics_info',
      path: '/logistics/info',
      component: 'self',
      meta: {
        title: '物流信息',
        icon: 'mdi:airplane-marker',
        order: 1
      }
    },
    {
      name: 'logistics_shipping',
      path: '/logistics/shipping',
      component: 'self',
      meta: {
        title: '信件发货',
        icon: 'mdi:map-marker-radius-outline',
        order: 1
      }
    }
  ],
  meta: {
    title: '物流',
    icon: 'mdi:truck-delivery-outline',
    order: 1
  }
};

export default logistics;
