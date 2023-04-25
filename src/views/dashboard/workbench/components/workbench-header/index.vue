<template>
  <n-card :bordered="false" class="rounded-16px shadow-sm">
    <div class="flex-y-center justify-between">
      <div class="flex-y-center">
        <n-avatar round :size="60" src="https://a.ideaopen.cn/JanYork/7rNOpLXi.png" />
        <div class="pl-12px">
          <h3 class="text-18px font-semibold">{{ greeting }}，{{ auth.userInfo.name }}, 今天又是充满活力的一天！</h3>
          <p class="leading-30px text-#999">今日多云转晴，20℃ - 25℃！</p>
        </div>
      </div>
      <n-space :size="24" :wrap="false">
        <n-statistic v-for="item in statisticData" :key="item.id" class="whitespace-nowrap" v-bind="item"></n-statistic>
      </n-space>
    </div>
  </n-card>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/store';

defineOptions({ name: 'DashboardWorkbenchHeader' });

const auth = useAuthStore();

/**
 * 获取问候语时间
 */
const getGreeting = () => {
  const now = new Date();
  const hour = now.getHours();
  if (hour < 6) {
    return '凌晨好';
  } else if (hour < 9) {
    return '早上好';
  } else if (hour < 12) {
    return '上午好';
  } else if (hour < 14) {
    return '中午好';
  } else if (hour < 17) {
    return '下午好';
  } else if (hour < 19) {
    return '傍晚好';
  } else if (hour < 22) {
    return '晚上好';
  }
  return '夜里好';
};

const greeting = getGreeting();

interface StatisticData {
  id: number;
  label: string;
  value: string;
}

const statisticData: StatisticData[] = [
  {
    id: 0,
    label: '项目数',
    value: '25'
  },
  {
    id: 1,
    label: '待办',
    value: '4/16'
  },
  {
    id: 2,
    label: '消息',
    value: '12'
  }
];
</script>

<style scoped></style>
