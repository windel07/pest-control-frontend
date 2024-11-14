import Swal, { SweetAlertResult } from 'sweetalert2';

import { BootstrapVariant } from '@types';

const BASE_CUSTOM_CLASSES = {
  htmlContainer:
    'bg-opacity-10 m-0 mb-4 p-0 fs-6 d-flex align-items-center justify-content-start',
  cancelButton: 'btn btn-outline-primary btn-sm m-0 fs-6',
  confirmButton: 'btn btn-primary btn-sm m-0 order-1 fs-6',
  popup: `py-4 px-6 shadow`,
  title: 'pt-2 text-dark fs-5 m-0 mb-4',
};

export const useToast = () => {
  const toaster = Swal.mixin({
    customClass: BASE_CUSTOM_CLASSES,
    position: 'top',
    showCancelButton: false,
    showConfirmButton: false,
    timer: 3000,
    toast: true,
    width: 380,
  });

  const showToast = (
    text: string,
    variant: BootstrapVariant = 'light',
  ): void => {
    toaster.fire({
      text,
      customClass: {
        ...BASE_CUSTOM_CLASSES,
        htmlContainer: `text-${variant} bg-${variant} ${BASE_CUSTOM_CLASSES.htmlContainer}`,
      },
    });
  };

  const showConfirmToast = async (
    title: string,
    text: string,
    variant: BootstrapVariant = 'light',
  ): Promise<SweetAlertResult> =>
    await toaster.fire({
      title,
      text,
      buttonsStyling: false,
      showCancelButton: true,
      showConfirmButton: true,
      timer: undefined,
      customClass: {
        ...BASE_CUSTOM_CLASSES,
        htmlContainer: `bg-${variant} ${BASE_CUSTOM_CLASSES.htmlContainer}`,
        actions:
          'p-0 m-0 d-flex align-items-center justify-content-end column-gap-2',
      },
    });

  return {
    showToast,
    showConfirmToast,
  };
};
