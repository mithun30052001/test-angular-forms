import { FormControl, Validators } from "@angular/forms";

export function capitalsValidator(): Validators {
    return (control: FormControl) => {
      const value: string = control.value;
      const hasCapital = /[A-Z]/.test(value);
      return hasCapital ? null : { capitalError: [true, {errorMessage: "Please enter atleast one capital letter"}]};
    };
}

export function panCardValidator(): Validators {
  return (control: FormControl) => {
    const value: string = control.value;
    const hasValidpanCard = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value);
    return hasValidpanCard ? null : { panCardError: [true, {errorMessage: "Please enter Valid Pan Card"}]};
    }
}