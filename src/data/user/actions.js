export const login = (userLoginInfo) => ({
  type: AT.LOG_IN,
  userLoginInfo,
});

export const loginLoading = () => ({
  type: AT.LOG_IN_LOADING,
});

export const loginFailure = (error) => ({
  type: AT.LOG_IN_FAILURE,
  error,
});

export const loginSuccess = (data) => ({
  type: AT.LOG_IN_SUCCESS,
  data,
});

export const setUserSession = (userSession) => ({
  type: AT.SET_USER_SESSION,
  userSession,
});

export const resetAuth = () => ({
  type: AT.RESET_AUTH,
});

export const register = (userRegisterInfo) => ({
  type: AT.REGISTER,
  userRegisterInfo,
});

export const registerLoading = () => ({
  type: AT.REGISTER_LOADING,
});

export const registerFailure = (error) => ({
  type: AT.REGISTER_FAILURE,
  error,
});

export const registerSuccess = (data) => ({
  type: AT.REGISTER_SUCCESS,
  data,
});
