import type { RouteComponent } from 'vue-router';

export const views: Record<
  PageRoute.LastDegreeRouteKey,
  RouteComponent | (() => Promise<{ default: RouteComponent }>)
> = {
  403: () => import('./_builtin/403/index.vue'),
  404: () => import('./_builtin/404/index.vue'),
  500: () => import('./_builtin/500/index.vue'),
  'constant-page': () => import('./_builtin/constant-page/index.vue'),
  login: () => import('./_builtin/login/index.vue'),
  'not-found': () => import('./_builtin/not-found/index.vue'),
  admin: () => import('./admin/index.vue'),
  'auth-demo_permission': () => import('./auth-demo/permission/index.vue'),
  'auth-demo_super': () => import('./auth-demo/super/index.vue'),
  comment: () => import('./comment/index.vue'),
  dashboard_analysis: () => import('./dashboard/analysis/index.vue'),
  dashboard_workbench: () => import('./dashboard/workbench/index.vue'),
  'function_tab-detail': () => import('./function/tab-detail/index.vue'),
  'function_tab-multi-detail': () => import('./function/tab-multi-detail/index.vue'),
  function_tab: () => import('./function/tab/index.vue'),
  letter_manage: () => import('./letter/manage/index.vue'),
  logistics_info: () => import('./logistics/info/index.vue'),
  logistics_shipping: () => import('./logistics/shipping/index.vue'),
  mail_manage: () => import('./mail/manage/index.vue'),
  message: () => import('./message/index.vue'),
  'multi-menu_first_second-new_third': () => import('./multi-menu/first/second-new/third/index.vue'),
  'multi-menu_first_second': () => import('./multi-menu/first/second/index.vue'),
  orders_info: () => import('./orders/info/index.vue'),
  orders_manage: () => import('./orders/manage/index.vue'),
  plugin_charts_antv: () => import('./plugin/charts/antv/index.vue'),
  plugin_charts_echarts: () => import('./plugin/charts/echarts/index.vue'),
  plugin_copy: () => import('./plugin/copy/index.vue'),
  plugin_editor_markdown: () => import('./plugin/editor/markdown/index.vue'),
  plugin_editor_quill: () => import('./plugin/editor/quill/index.vue'),
  plugin_icon: () => import('./plugin/icon/index.vue'),
  plugin_map: () => import('./plugin/map/index.vue'),
  plugin_print: () => import('./plugin/print/index.vue'),
  plugin_swiper: () => import('./plugin/swiper/index.vue'),
  plugin_video: () => import('./plugin/video/index.vue'),
  sponsor_info: () => import('./sponsor/info/index.vue'),
  sponsor_manage: () => import('./sponsor/manage/index.vue'),
  user_auth: () => import('./user/auth/index.vue'),
  user_manage: () => import('./user/manage/index.vue'),
  wish_blessing: () => import('./wish/blessing/index.vue'),
  wish_info: () => import('./wish/info/index.vue'),
  wish_manage: () => import('./wish/manage/index.vue')
};
