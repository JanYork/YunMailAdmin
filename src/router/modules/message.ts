const message: AuthRoute.Route = {
  name: 'message',
  path: '/message',
  component: 'self',
  meta: {
    title: '短信管理',
    requiresAuth: true,
    keepAlive: true,
    singleLayout: 'basic',
    icon: 'mdi:message-processing-outline',
    order: 10
  }
};

export default message;
