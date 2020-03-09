import * as actionTypes from './actionTypes';

export const startLoading = () => ({
  type: actionTypes.START_LOADING,
});

export const stopLoading = () => ({
  type: actionTypes.STOP_LOADING,
});

export const userMessage = (message, severity) => ({
  type: actionTypes.USER_MESSAGE,
  message,
  severity,
});

export const dismissUserMessage = () => ({
  type: actionTypes.DISMISS_USER_MESSAGE,
});

export const get404Page = (toPath, history, message) => {
  history.push(`${toPath}/404`);
  return {
    type: actionTypes.USER_MESSAGE,
    message,
    severity: 'error',
  };
};
