import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextInputComponent } from 'sd-form-libs';
import { DropdownComponent } from 'sd-form-libs';
import { RadioGroupInputComponent } from 'sd-form-libs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxComponent } from 'sd-form-libs';
import { HttpClientModule } from '@angular/common/http';
import { ValidationErrorsComponent } from 'sd-form-libs';
import { TextAreaComponent } from 'sd-form-libs';
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
