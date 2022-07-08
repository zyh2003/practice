import request from '../utils/request'
/**
 *
 * @param {*} 获取登录接口
 * @returns
 */
const getLogin = (data) => {
  return request({ url: '/users/login', method: 'POST', data })
}
/**
 *
 * @returns 获取用户权限列表
 */
const getPermissionList = () => {
  return request({ url: '/users/getPermissionList', method: 'GET' })
}

export default {
  getLogin,
  getPermissionList
}
