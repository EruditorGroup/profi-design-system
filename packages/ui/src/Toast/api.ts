import type {ToastOptions} from './types';

type ToastApi = {
  showToast: (child: React.ReactNode, props?: ToastOptions) => void;
  hideToast: VoidFunction;
  destroyToast: VoidFunction;
};

const noop = () => undefined;

let showToast: ToastApi['showToast'] = noop;
let hideToast: ToastApi['hideToast'] = noop;
let destroyToast: ToastApi['hideToast'] = noop;

export const setApi = (api: ToastApi) => {
  showToast = api.showToast;
  hideToast = api.hideToast;
  destroyToast = api.destroyToast;
};

export {showToast, hideToast, destroyToast};
