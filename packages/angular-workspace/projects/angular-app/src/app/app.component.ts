import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChild('myInput') myInput: HTMLMyInputElement | undefined;
  @ViewChild('myDialog') myDialog: HTMLMyDialogElement | undefined;

  title = 'angular-app';
  varTest: string = '';

  onClick() {
    this.myInput?.ExampleMethod('angular üzerinden çağrıldı');
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
      }
    );
  }
}
