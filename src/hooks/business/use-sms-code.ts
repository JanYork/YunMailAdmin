// import { computed } from 'vue';
// import { REGEXP_PHONE } from '@/config';
// import { useLoading } from '../common';
// import useCountDown from './use-count-down';

// export default function useSmsCode() {
//   const { loading, startLoading, endLoading } = useLoading();
//   const { counts, start, isCounting } = useCountDown(60);

//   const initLabel = '获取验证码';
//   const countingLabel = (second: number) => `${second}秒后重新获取`;
//   const label = computed(() => {
//     let text = initLabel;
//     if (loading.value) {
//       text = '';
//     }
//     if (isCounting.value) {
//       text = countingLabel(counts.value);
//     }
//     return text;
//   });

//   /** 判断手机号码格式是否正确 */
//   function isPhoneValid(phone: string) {
//     let valid = true;
//     if (phone.trim() === '') {
//       window.$message?.error('手机号码不能为空！');
//       valid = false;
//     } else if (!REGEXP_PHONE.test(phone)) {
//       window.$message?.error('手机号码格式错误！');
//       valid = false;
//     }
//     return valid;
//   }

//   return {
//     label,
//     start,
//     isCounting,
//     loading
//   };
// }
