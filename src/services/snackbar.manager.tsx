import { VariantType, enqueueSnackbar, closeSnackbar } from 'notistack';

export const sendSnackbar = {
  toast(msg: string, variant: VariantType = 'default') {
    enqueueSnackbar(msg, {
      variant: variant,
    });
  },
  success(msg: string) {
    this.toast(msg, 'success');
  },
  error(msg: string) {
    this.toast(msg, 'error');
  },
  info(msg: string) {
    this.toast(msg, 'info');
  },
  warning(msg: string) {
    this.toast(msg, 'warning');
  },
};
