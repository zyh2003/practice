export const validatePassword = (rule, value, callback) => {
  if (value.length < 6 && value.length >= 1) {
    callback(new Error('密码不能少于6位'))
  } else if (value.length === 0) {
    callback(new Error('密码不能为空'))
  } else {
    callback()
  }
}
