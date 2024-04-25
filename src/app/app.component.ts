import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { mobileNumberValidator, passwordValidator, whitespaceValidator } from 'sd-form-libs';
import { capitalsValidator, panCardValidator } from './custom-validation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  form: FormGroup = new FormGroup({
    userName: new FormControl<string>(''),
    password: new FormControl<string>(''),
    pancard: new FormControl<string>(''),
    email: new FormControl<string>(''),
    mobileNumber: new FormControl<any>(null),
    number: new FormControl<number | null>(null),
    dropdownOption: new FormControl<any>(null),
    radioOption: new FormControl<any>(null),
    checkboxOption: new FormControl<string[]>([]),
    workExperience: new FormControl<string>(''),
  })

  submitted: boolean = false
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  dropdownOptions = [
    {label:'2 Years+', value:'two'},
    {label:'5 Years+', value:'five'},
    {label:'10 Years+', value:'ten'},
    {label:'10 Years+', value:'ten'},
    {label:'10 Years+', value:'ten'},
    {label:'10 Years+', value:'ten'},

  ]

  radioOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ];

  checkBoxOptions = [
    {label:'Angular Js', value:'angular'},
    {label:'React Js', value:'react'},
    {label:'vue Js', value:'vue'}
  ]

  experience = `As a web developer,I have 2 years of experience crafting responsive and dynamic web applications. Proficient in HTML, CSS, JavaScript, and frameworks like React Angular and Rails`

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.form = this.fb.group({
      userName: [{value: 'defaultname', disabled: false }, [Validators.required, Validators.minLength(8), Validators.maxLength(15), whitespaceValidator(),capitalsValidator()]],
      password: [{value: 'Angular@123', disabled: false }, [Validators.required, passwordValidator()]],
      pancard: [{value: 'ABCDE1234F', disabled: false }, [Validators.required, panCardValidator]],
      email: [{value: 'default@gmail.com', disabled: true },[Validators.required, Validators.email]],
      mobileNumber: [{ countrycode: '+91', mobile: '9876543210' }, [Validators.required,mobileNumberValidator]],
      number: [{value: 5, disabled: false },[Validators.required, Validators.min(1)]],
      dropdownOption: [{value: "five", disabled: false }, [Validators.required]],
      radioOption: [{value: "male", disabled: false }, [Validators.required]],
      checkboxOption: [{value: ["angular"], disabled: false }, [Validators.required]],
      workExperience: [{value: this.experience.replace(/[\r\n]+/g, ' '), disabled: false }, [Validators.required, Validators.minLength(50), Validators.maxLength(200)]],
    })
  }

  onSubmit(formData: any) {
    console.log(formData);
    this.submitted = true;
    if(this.form.valid) {
      this.saveData(this.form.value).subscribe(res=>{
        console.log("Data saved successfully....");
        this.form.reset();
        this.createForm();
        this.submitted = false;
      });
    }
  }

  saveData(formData: any){
    return this.http.post('http://localhost:3000/user',formData);
  }
}


