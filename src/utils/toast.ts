import { toast } from 'react-toastify';

export const showErrorToast = (msg: string = 'City not found') => {
  toast.error(msg, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};

export const showSuccessToast = (msg: string = 'History entry was deleted') => {
  toast.success(msg, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};

export const loadingToast = () => toast.loading('Please wait...');

export const dismissToasts = () => toast.dismiss();
