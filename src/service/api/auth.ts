import { request } from '../request';

/**
 * 登录
 * @param userName - 用户名
 * @param password - 密码
 */
export function fetchLogin(username: string, password: string) {
  return request.post<string>('/admin/login', { username, password });
}

/** 获取用户信息 */
export function fetchUserInfo() {
  return request.get<ApiAuth.UserInfo>('/admin/getInfo');
}
