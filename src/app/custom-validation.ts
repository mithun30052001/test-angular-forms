import { FormControl, Validators } from "@angular/forms";

export function capitalsValidator(): Validators {
    return (control: FormControl) => {
      const value: string = control.value;
      const hasCapital = /[A-Z]/.test(value);
      return hasCapital ? null : { capitalError: [true, {errorMessage: "Please enter atleast one capital letter"}]};
    };
}