import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyInput } from '../../../../dist/wc-angular-lib/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';
  varTest: string = '';

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Submitted!', form.value);
    }
  }

  test(event:any){
    this.varTest = event.detail;
    console.log(event.detail)
  }
}
