import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, Validators, ValidatorFn, AbstractControl, ValidationErrors} from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { FormType } from '../services/form-type';

@Component({
  selector: 'app-contact-us',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css'
})
export class ContactUs implements OnInit, OnDestroy {
  formHelper: FormType = inject(FormType);
  
  phoneNumber: string = '(239) 471-9829';
  emailAddress: string = 'Captwhitdawgmso@gmail.com';
  submitSuccess: boolean = false;

  options = [
    {
      value: 'Tarpon Fishing', 
    },
    {
      value: 'Sunset Cruise', 
    },
    {
      value: 'Ecotour', 
    },
    {
      value: 'Family Charter', 
    },
    {
      value: 'Inshore Fishing', 
    },
  ]

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    phone: new FormControl('', [Validators.required, this.validatePhoneNumber()]),
    email: new FormControl('', [Validators.email, Validators.required]),
    type: new FormControl('', [Validators.maxLength(15)]),
    time: new FormControl(''),
  });

  ngOnInit(): void {
    emailjs.init({
      publicKey: 'x_uF9lKt8FM3eHNKL',
    });

    if(this.formHelper.getFormRoute() !== 0) {
      this.contactForm.patchValue({
        type: this.options[this.formHelper.getFormRoute() - 1].value
      })
    }
  }

  async sendContactForm() {
    this.submitSuccess = false;

    if(this.contactForm.valid) {
      try {
      const result = await emailjs.send(
        'service_g7og0cp',
        'template_bfhge9c',
        this.contactForm.value as Record<string, unknown>
      );
      console.log('Email sent successfully:', result.text);
      this.contactForm.reset();
      this.submitSuccess = true;
      }
      catch (error) {
        console.error('Error sending email:', error)
      }
    }
  }

  ngOnDestroy(): void {
    this.submitSuccess = false;
    this.contactForm.reset();
    this.formHelper.clearFormRoute();
  }

  strippedPhoneNumber = signal('');

  validatePhoneNumber(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const phoneNumber = control.value;

      if (!phoneNumber) {
        return { lengthError: true};
      }

      const strippedNumber = phoneNumber
        .replace(/\D/g, '') //Strip all non-digits
        .replace(/^1/, ''); //Strip Leading 1, if Present
      
      this.strippedPhoneNumber.set(strippedNumber);

      if(this.strippedPhoneNumber().length !== 10) {
        return {lengthError: true}
      } else {
        return null;
      }
    };
  }

}
