import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  @ViewChild('myInput') myInput: HTMLMyInputElement | undefined;
  @ViewChild('myDialog') myDialog: HTMLMyDialogElement | undefined;

  title = 'angular-app';
  varTest: string = '';

  onClick() {
    this.myInput?.setFocus();
  }

  handleClickValue(value: string) {
    console.log(value);
  }

  onSecretEvent(event: any) {
    console.log(event.detail);
  }

  onClickOpenDialog() {
    this.myDialog?.open(
      () => {
        // ok button callback function
        console.log('ok clicked');
      },
      () => {
        // cancel button callback function
        console.log('cancel clicked');
      },
    );
  }

  contactForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: [''],
      email: [''],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted', this.contactForm.value);
      // Form işleme kodları burada yer alabilir
    }
  }
}
