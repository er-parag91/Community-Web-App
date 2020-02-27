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

export const dismissErrorMessage = () => ({
  type: actionTypes.DISMISS_USER_MESSAGE,
});
