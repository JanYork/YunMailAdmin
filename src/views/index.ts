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
  about: () => import('./about/index.vue'),
  'auth-demo_permission': () => import('./auth-demo/permission/index.vue'),
  'auth-demo_super': () => import('./auth-demo/super/index.vue'),
  dashboard_analysis: () => import('./dashboard/analysis/index.vue'),
  dashboard_workbench: () => import('./dashboard/workbench/index.vue'),
  exception_403: () => import('./exception/403/index.vue'),
  exception_404: () => import('./exception/404/index.vue'),
  exception_500: () => import('./exception/500/index.vue'),
  'function_tab-detail': () => import('./function/tab-detail/index.vue'),
  'function_tab-multi-detail': () => import('./function/tab-multi-detail/index.vue'),
  function_tab: () => import('./function/tab/index.vue'),
  letter: () => import('./letter/index.vue'),
  mail: () => import('./mail/index.vue'),
  'multi-menu_first_second-new_third': () => import('./multi-menu/first/second-new/third/index.vue'),
  'multi-menu_first_second': () => import('./multi-menu/first/second/index.vue'),
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
  user: () => import('./user/index.vue')
};
