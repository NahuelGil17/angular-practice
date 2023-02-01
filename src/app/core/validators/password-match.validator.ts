import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(): ValidatorFn {
  return (controls: AbstractControl): ValidationErrors | null => {
    const password = controls.get('password');
    const confirm = controls.get('confirm');

    if (password!.value && confirm!.value) {
      if (password!.value !== confirm!.value) {
        confirm?.setErrors({ match: true });
      } else {
        confirm?.setErrors(null);
      }
    } else {
      return null;
    }
    return null;
  };
}
