import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextInputComponent } from 'sd-angular-forms';
import { DropdownComponent } from 'sd-angular-forms';
import { RadioGroupInputComponent } from 'sd-angular-forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxComponent } from 'sd-angular-forms';
import { HttpClientModule } from '@angular/common/http';
import { ValidationErrorsComponent } from 'sd-angular-forms';
import { TextAreaComponent } from 'sd-angular-forms';
import { MobileNumberComponent } from 'sd-angular-forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TextInputComponent,
    DropdownComponent,
    RadioGroupInputComponent,
    CheckboxComponent,
    TextAreaComponent,
    MobileNumberComponent,
    ValidationErrorsComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
