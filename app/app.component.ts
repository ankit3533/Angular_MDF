import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: `app/app.component.html`
})
export class AppComponent implements OnInit {
  //this below commented code is used to initiate template using form control. The reasn we didnot used it becasue if form has multiple elements then this coe is going to be messy
  // userForm = new FormGroup({
  //   name: new FormControl("Ankit",[Validators.required, Validators.minLength(4),Validators.maxLength(10)]),
  //   email: new FormControl(),
  //   address: new FormGroup({
  //     street: new FormControl(),
  //     city: new FormControl(),
  //     zip: new FormControl()
  //   })
  // });

  //the below code used a FormBuilder object and initializes all the form properties.
  //it uses a life cycle hook nginit which initialises the form onjects
  //the form builder is initialized using a constructor which is ES15 syntax to initialize
  userForm : FormGroup;
  constructor(private _formBuilder:FormBuilder){}

  ngOnInit(){
    this.userForm = this._formBuilder.group({
      name:['Ankit',[Validators.required, Validators.minLength(4),Validators.maxLength(10)]],
      email:[],
      address:this._formBuilder.group({
        street:[],
        city:[],
        zip:[]
      })
    })
  }

  onSubmit(){
    console.log(this.userForm.value);
  }
}
