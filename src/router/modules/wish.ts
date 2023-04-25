const wish: AuthRoute.Route = {
  name: 'wish',
  path: '/wish',
  component: 'basic',
  children: [
    {
      name: 'wish_manage',
      path: '/wish/manage',
      component: 'self',
      meta: {
        title: '许愿管理',
        icon: 'mdi:calendar-heart-outline',
        order: 10
      }
    },
    {
      name: 'wish_blessing',
      path: '/wish/blessing',
      component: 'self',
      meta: {
        title: '祝福语录',
        icon: 'mdi:card-bulleted-settings-outline',
        order: 10
      }
    },
    {
      name: 'wish_info',
      path: '/wish/info',
      component: 'self',
      meta: {
        title: '祝福信息',
        icon: 'mdi:card-bulleted-settings-outline',
        order: 10
      }
    }
  ],
  meta: {
    title: '许愿',
    icon: 'mdi:cake-variant-outline',
    order: 4
  }
};

export default wish;
