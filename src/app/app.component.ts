import { Component } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Lalit patil';
  logOut="LogOut";
  isLogged:boolean=true;

  // 
//   title = 'Angular Form Validation Tutorial';
//   angForm: FormGroup;
//   constructor(private fb: FormBuilder) {
//    this.createForm();
//  }
//   createForm() {
//    this.angForm = this.fb.group({
//       name: ['', Validators.required ]
//    });
//  }
// fnFormSubmit(){
//   this.isLogged=false;
// }
}
